import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/mainConfig";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const previewUrl = appwriteService.getFileView(post?.featuredImage);

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex flex-col gap-6 mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          {previewUrl ? (
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={previewUrl}
                alt={post.title}
                className="w-full h-[360px] object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-[360px] rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
              No image preview available
            </div>
          )}

          {isAuthor && (
            <div className="flex flex-wrap justify-end gap-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        <div className="w-full mb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css prose max-w-none">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
