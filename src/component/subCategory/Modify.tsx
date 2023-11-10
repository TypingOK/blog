"use client";
import { Dispatch, SetStateAction, useState } from "react";
import SubCategoryDeleteButton from "./Delete";
import { useSWRConfig } from "swr";

const SubCategoryModify = ({
  subCategoryLists,
  setModifyModeState,
}: {
  subCategoryLists: { id: number; name: string; order: number }[];
  setModifyModeState: Dispatch<SetStateAction<boolean>>;
}) => {
  const [subCategory, setSubCategory] =
    useState<{ id: number; name: string; order: number }[]>(subCategoryLists);
  const { mutate } = useSWRConfig();
  const plusHandler = (id: number) => {
    const copySubCategory = [...subCategory];
    let index = 0;
    for (let i = 0; i < copySubCategory.length; i++) {
      if (id == copySubCategory[i].id) {
        index = i;
        break;
      }
    }
    if (index === copySubCategory.length) {
      return;
    } else {
      let temp = copySubCategory[index].order;
      copySubCategory[index].order = copySubCategory[index + 1].order;
      copySubCategory[index + 1].order = temp;
      [copySubCategory[index], copySubCategory[index + 1]] = [
        copySubCategory[index + 1],
        copySubCategory[index],
      ];
      setSubCategory(copySubCategory);
    }
  };

  const minusHandler = (id: number) => {
    const copySubCategory = [...subCategory];
    let index = 0;
    for (let i = 0; i < copySubCategory.length; i++) {
      if (id == copySubCategory[i].id) {
        index = i;
        break;
      }
    }
    if (index === 0) {
      return;
    } else {
      let temp = copySubCategory[index].order;
      copySubCategory[index].order = copySubCategory[index - 1].order;
      copySubCategory[index - 1].order = temp;
      [copySubCategory[index - 1], copySubCategory[index]] = [
        copySubCategory[index],
        copySubCategory[index - 1],
      ];

      setSubCategory(copySubCategory);
    }
  };

  return (
    <div>
      <div>
        {subCategory &&
          subCategory.map((e) => (
            <div className="w-full flex" key={e.id}>
              <button
                onClick={() => {
                  minusHandler(e.id);
                }}
              >
                ↑
              </button>
              <button
                onClick={() => {
                  plusHandler(e.id);
                }}
              >
                ↓
              </button>
              <div>{e.name}</div>
              <SubCategoryDeleteButton id={e.id} />
            </div>
          ))}
      </div>
      <button
        className="mt-3 w-full mb-3 rounded-2xl bg-secondary-400 text-primary-100"
        onClick={async () => {
          const body = {
            subCategory: [...subCategory],
          };
          const result = await fetch(`/api/subCategory`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          mutate("/api/subCategory");
          setModifyModeState((prev) => !prev);
        }}
      >
        완료
      </button>
    </div>
  );
};

export default SubCategoryModify;
