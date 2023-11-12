"use client";
import { fetcher } from "@/src/common/postListFetcher";
import useIntersectionObserver from "@/src/hooks/useIntersectionObserver";
import { useEffect } from "react";
import Headline from "./Headlines/Headline";
import useSWRInfinite from "swr/infinite";
import { useSearchParams } from "next/navigation";

const PostList = () => {
  const searchParams = useSearchParams();
  const subCategory = searchParams.get("subCategory");
  // console.log(subCategory);
  const { data, isLoading, size, setSize } = useSWRInfinite((index) => {
    const page = index + 1; // 페이지 인덱스는 0부터 시작하므로 1을 더해줍니다.
    const perPage = 10; // 페이지당 항목 수를 설정합니다. 원하는 값으로 변경하세요.
    return { page, perPage, subCategory };
  }, fetcher);

  const [targetRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });

  const hasMoreData: boolean = !!data && data[data.length - 1].length === 10;
  useEffect(() => {
    if (isIntersecting && !isLoading && hasMoreData) {
      setSize(size + 1);
    }
  }, [isIntersecting, isLoading]);
  console.log(data);
  return (
    <div className="w-full h-full">
      {data &&
        data.map((element, index) => (
          <div key={index} className=" flex flex-wrap justify-center">
            {element.map(
              (e: {
                id: number;
                title: string;
                createdAt: Date;
                thumbnail: string;
              }) => (
                <Headline post={e} key={e.id} />
              )
            )}
          </div>
        ))}
      <div ref={targetRef}>{isLoading ? <p> 불러오는 중.... </p> : null}</div>
    </div>
  );
};

export default PostList;
