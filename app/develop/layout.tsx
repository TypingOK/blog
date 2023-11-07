import SubCategoryList from "@/src/component/subCategory/List";
import { ReactNode } from "react";

const PostListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full mt-3 mb-5 flex">
      <div className="md:w-52 hidden md:block">
        <SubCategoryList />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default PostListLayout;
