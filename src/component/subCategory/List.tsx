"use client";
import useSWR from "swr";
import SubCategoryAdd from "./Add";
import { useSession } from "next-auth/react";
import SubCategoryDeleteButton from "./Delete";

const fetcher = async () => {
  const subCategory = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subCategory`
  ).then((res) => res.json());
  return subCategory;
};

const SubCategoryList = () => {
  const { data } = useSWR("/api/subCategory", fetcher);
  const { data: userData } = useSession();
  console.log(data);
  return (
    <div className="w-full">
      <div className="w-full">
        {data &&
          data.map((e: { name: string; id: number }) => (
            <div key={e.id} className="w-full flex">
              <button>{e.name}</button>
              {userData && userData.user && userData.user.email && (
                <SubCategoryDeleteButton id={e.id} />
              )}
            </div>
          ))}
      </div>
      <div className="w-full">
        <SubCategoryAdd />
      </div>
    </div>
  );
};

export default SubCategoryList;
