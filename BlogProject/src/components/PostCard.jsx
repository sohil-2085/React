import React from "react";
import appwriteService from "../appwrite/mainConfig";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200">
        <div className="w-full overflow-hidden rounded-xl mb-4 bg-white">
          {appwriteService.getFileView(featuredImage) ? (
            <img
              src={appwriteService.getFileView(featuredImage)}
              alt={title}
              className="w-full h-48 object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-xl" />
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
