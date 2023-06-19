"use client";
import { listFetcher } from "@/src/common/postListFetcher";
import useIntersectionObserver from "@/src/hooks/useIntersectionObserver";
import { PostsType } from "@/src/types/types";
import Link from "next/link";
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
      const newPosts = response;
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
      {posts &&
        posts.map((e: { id: number; title: string; createdAt: Date }) => (
          <Link
            href={`/develop/${e.id}`}
            key={e.id}
            className="border-2 rounded-xl mb-5 flex-1 m-2 shadow-xl h-64 flex justify-center"
          >
            <div className="mt-auto text-xl font-bold">
              <div>{e.title}</div>
            </div>
          </Link>
        ))}
      <div ref={targetRef}>
        {isIntersecting && !isNextPage ? <p> 불러오는 중.... </p> : null}
      </div>
    </div>
  );
};

export default PostList;
