import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchInd } from "../API/api";

function FetchInd() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchInd(id),
    enabled: Boolean(id),
  });

  if (isPending) return <h1>Loading....</h1>;
  if (isError) return <h1>{error?.message || "Something went wrong"}</h1>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <Link to="/rq" style={{ display: "inline-block", marginBottom: "1rem" }}>
        ← Back to posts
      </Link>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: "1.25rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ color: "#666", marginBottom: "0.5rem" }}>
          Post #{data?.id}
        </p>
        <h1 style={{ marginTop: 0 }}>{data?.title}</h1>
        <p style={{ lineHeight: 1.6 }}>{data?.body}</p>
      </div>
    </div>
  );
}

export default FetchInd;
