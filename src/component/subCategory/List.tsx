"use client";
import useSWR from "swr";
import SubCategoryAdd from "./Add";
import { useSession } from "next-auth/react";
import SubCategoryDeleteButton from "./Delete";
import { useState } from "react";
import SubCategoryModify from "./Modify";
import Link from "next/link";

const fetcher = async () => {
  const subCategory = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subCategory`
  ).then((res) => res.json());
  return subCategory;
};

const postAllCountFetcher = async () => {
  const postAll = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/postAllCount`
  ).then((res) => res.json());

  return postAll;
};

const SubCategoryList = () => {
  const { data } = useSWR("/api/subCategory", fetcher);
  const { data: postAllCount } = useSWR(
    "/api/postAllCount",
    postAllCountFetcher
  );

  console.log(postAllCount);

  const { data: userData } = useSession();
  const [modifyModeState, setModifyModeState] = useState(false);
  console.log(data);

  return (
    <div className="w-full mt-3">
      <div className="w-full">
        {data && !modifyModeState && (
          <Link href={{ pathname: "/develop" }}>
            전체보기 ({postAllCount._count.published})
          </Link>
        )}
        {data &&
          !modifyModeState &&
          data.map((e: { name: string; id: number; postCount: number }) => (
            <div key={e.id} className="w-full flex">
              <Link
                href={{ pathname: "/develop", query: { subCategory: e.name } }}
              >
                {e.name} ({e.postCount})
              </Link>
              {userData && userData.user && userData.user.email && (
                <SubCategoryDeleteButton id={e.id} />
              )}
            </div>
          ))}
        {data && modifyModeState && (
          <SubCategoryModify
            subCategoryLists={data}
            setModifyModeState={setModifyModeState}
          />
        )}
      </div>
      <div className="w-full flex flex-col">
        <SubCategoryAdd />
        {!modifyModeState &&
          userData &&
          userData.user &&
          userData.user.email && (
            <button
              className="mt-3 w-full rounded-2xl bg-primary-400 text-primary-100"
              onClick={() => {
                setModifyModeState((prev) => !prev);
              }}
            >
              수정
            </button>
          )}
      </div>
    </div>
  );
};

export default SubCategoryList;
