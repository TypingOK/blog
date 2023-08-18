import { ReactNode } from "react";

const PostLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full mt-3 mb-5 p-3 bg-secondary-100 rounded-xl">
      {children}
    </div>
  );
};

export default PostLayout;
