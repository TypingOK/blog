import { ReactNode } from "react";

const PostLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-full mt-3">{children}</div>;
};

export default PostLayout;
