"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useState, useRef } from "react";
import { useSWRConfig } from "swr";

const SubCategoryAdd = () => {
  const [addActiveState, setAddActiveState] = useState(false);
  const { mutate } = useSWRConfig();
  const categoryName = useRef<HTMLInputElement>(null);
  const { data: userData } = useSession();
  const addActiveHandler = () => {
    setAddActiveState((prev) => {
      return !prev;
    });
  };

  const subCategoryAddHandler = async () => {
    console.log(categoryName?.current?.value);
    if (
      categoryName &&
      categoryName.current &&
      categoryName.current.value &&
      categoryName.current.value.trim().length >= 0
    ) {
      const body = {
        name: categoryName.current.value,
      };
      const response = await fetch("/api/subCategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //   return response;
      if (response.status === 200) {
        mutate("/api/subCategory");
        setAddActiveState(false);
      }
    }
  };

  if (userData && userData.user && userData.user.email) {
    if (!addActiveState) {
      return <button onClick={addActiveHandler}>카테고리 추가</button>;
    } else {
      return (
        <div className="md:w-44 md:block hidden">
          <input ref={categoryName} className="w-full" />
          <button
            onClick={subCategoryAddHandler}
            className="w-full rounded-2xl bg-etc-blue text-primary-100 mt-2"
          >
            추가
          </button>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default SubCategoryAdd;
