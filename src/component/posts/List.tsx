"use client";
import { listFetcher } from "@/src/common/postListFetcher";
import useIntersectionObserver from "@/src/hooks/useIntersectionObserver";
import { PostsType } from "@/src/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PostList = () => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const router = useRouter();
  const [posts, setPosts] = useState<PostsType>([]);
  const [targetRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    if (isIntersecting && !isNextPage) {
      loadMorePosts();
    }
  }, [isIntersecting, isNextPage]);

  const loadMorePosts = async () => {
    try {
      const response = await listFetcher({ page, perPage });
      console.log(response);
      const newPosts = response.data;
      setPosts((prev) => [...prev, ...newPosts]);
      setPage((prev) => {
        return prev + 1;
      });
      if (newPosts.length < 10) {
        setIsNextPage(true);
      }
    } catch (error) {
      console.error("Failed to load more post", error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <button
              onClick={() => {
                router.push(`/develop/${post.id}`);
              }}
            >
              {post.title}
            </button>
          </h2>
        </div>
      ))}
      <div ref={targetRef}>
        {isIntersecting && !isNextPage ? <p> 불러오는 중.... </p> : null}
      </div>
    </div>
  );
};

export default PostList;
