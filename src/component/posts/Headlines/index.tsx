"use client";
import { fetcher } from "@/src/common/postListFetcher";
import Headline from "./Headline";
import useSWR from "swr";

const PostHeadlines = () => {
  const { data } = useSWR(() => {
    const page = 1;
    const perPage = 5;
    return { page, perPage };
  }, fetcher);

  return (
    <div className="w-full h-full flex flex-wrap justify-center">
      {data ? (
        data.map(
          (e: {
            id: number;
            title: string;
            createdAt: Date;
            thumbnail: string;
          }) => <Headline post={e} key={e.id} />
        )
      ) : (
        <div>불러오는 중...</div>
      )}
    </div>
  );
};

export default PostHeadlines;