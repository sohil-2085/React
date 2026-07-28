import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/mainConfig";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((result) => {
      if (result?.documents) {
        setPosts(result.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading posts...</p>
        ) : posts.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            No posts available right now.
          </div>
        ) : (
          <div className="flex flex-wrap -m-2">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
