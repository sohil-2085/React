import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";
import { useEffect } from "react";

function InfiniteScroll() {
  const {
    data,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 120;

    if (bottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error")
    return <div>Error: {error?.message || "Unable to load users"}</div>;

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
      <h1>Infinite Scroll with React Query v5</h1>

      {data?.pages?.map((page, pageIndex) => (
        <ul key={pageIndex} style={{ listStyle: "none", padding: 0 }}>
          {page.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: 8,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
              <p style={{ margin: 0, fontWeight: 600 }}>{user.login}</p>
            </li>
          ))}
        </ul>
      ))}

      <div style={{ padding: "20px", textAlign: "center", color: "#555" }}>
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Scroll down to load more"
            : "No more users"}
      </div>
    </div>
  );
}

export default InfiniteScroll;
