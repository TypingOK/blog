"use client";
import useSWR from "swr";

const fetcher = async () => {
  const subCategory = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subCategory`
  ).then((res) => res.json());
  return subCategory;
};

const SubCategoryList = () => {
  const { data } = useSWR("/api/subCategory", fetcher);

  console.log(data);
  return (
    <div>
      {data &&
        data.map((e: { name: string }, i: number) => (
          <div key={i}>{e.name}</div>
        ))}
    </div>
  );
};

export default SubCategoryList;
