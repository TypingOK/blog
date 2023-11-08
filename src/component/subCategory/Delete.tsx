"use client";

import { useSWRConfig } from "swr";

const SubCategoryDeleteButton = ({ id }: { id: number }) => {
  const { mutate } = useSWRConfig();
  const subCategoryDeleteHandler = async () => {
    const result = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        "/api/subCategory?" +
        new URLSearchParams({
          id: id.toString(),
        }),
      {
        method: "DELETE",
      }
    ).then((response) => {
      mutate("/api/subCategory");
    });

    console.log(result);
  };
  return (
    <button onClick={subCategoryDeleteHandler} className="ml-auto mr-2">
      {" "}
      -{" "}
    </button>
  );
};

export default SubCategoryDeleteButton;
