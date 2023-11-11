"use client";
import { useEffect, useRef } from "react";

const SubCategoryModifyName = ({
  id,
  name,
  subCategoryNameModifyHandler,
}: {
  id: number;
  name: string;
  subCategoryNameModifyHandler: () => void;
}) => {
  const subCategoryName = useRef<HTMLInputElement>(null);
  const subCategoryNameHandler = async () => {
    if (
      subCategoryName &&
      subCategoryName.current &&
      subCategoryName.current.value &&
      subCategoryName.current.value.trim().length >= 0
    ) {
      const body = {
        id: id,
        name: subCategoryName.current.value,
      };
      const result = await fetch(`/api/subCategory`, {
        method: "PATCH",
        headers: { "Conetnt-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(result);
      subCategoryNameModifyHandler();
    } else {
      return;
    }
  };
  useEffect(() => {
    if (subCategoryName && subCategoryName.current) {
      subCategoryName.current.value = name;
    }
  }, [name]);
  return (
    <div className="w-full flex">
      <input className="w-full" ref={subCategoryName} />
      <button className="w-5" onClick={subCategoryNameHandler}>
        완료
      </button>
    </div>
  );
};

export default SubCategoryModifyName;
