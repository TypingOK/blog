import { ReactNode } from "react";

const PostLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full mt-3 bg-secondary-100 border-2 border-secondary-100 p-2 shadow-xl mb-5">
      {children}
    </div>
  );
};

export default PostLayout;
