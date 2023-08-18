import { ReactNode } from "react";


const PostListLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-full mt-3 mb-5">{children}</div>;
};

export default PostListLayout;
