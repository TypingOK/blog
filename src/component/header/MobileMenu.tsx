"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import SubCategoryList from "../subCategory/List";

const MobileHeaderMenu = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const menuOpenHandler = () => {
    setMenuOpenState((prev) => !prev);
  };
  const params = usePathname();
  console.log(params);

  return (
    <div className="w-full h-full">
      <div className="w-6 h-6">
        <button onClick={menuOpenHandler}>
          <Image src="/Hamburger.svg" alt="메뉴" width={24} height={24} />
        </button>
      </div>
      {menuOpenState && (
        <div className="absolute left-0 top-0">
          <div className="absolute left-auto right-0 w-2/3 h-full  bg-primary-100">
            <div className="flex flex-col w-full mt-12 ">
              <Link
                href={"/info"}
                onClick={menuOpenHandler}
                className="ml-4 text-2xl font-bold"
              >
                Info
              </Link>
              <Link
                className="ml-4 font-bold text-2xl"
                onClick={menuOpenHandler}
                href={"/develop"}
              >
                Posts
              </Link>
            </div>
            <div className="border-secondary-400 mt-4 w-full border-t"></div>
            {params === "/develop" && (
              <div
                className="w-full flex flex-col ml-4 mt-4"
                onClick={menuOpenHandler}
              >
                <div className="text-2xl font-bold">Category</div>
                <SubCategoryList></SubCategoryList>
              </div>
            )}
          </div>
          <div
            onClick={menuOpenHandler}
            className="left-0 top-0 w-screen min-h-screen bg-secondary-400 bg-opacity-75"
          ></div>
        </div>
      )}
    </div>
  );
};

export default MobileHeaderMenu;
