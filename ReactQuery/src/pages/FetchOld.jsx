import { useEffect, useState } from "react";
import { fetchpost } from "../API/api";

function FetchOld() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getPostData = async () => {
      try {
        const result = await fetchpost();
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    getPostData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default FetchOld;
