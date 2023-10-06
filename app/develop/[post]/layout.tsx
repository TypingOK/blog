import Utterances from "@/src/component/comment/Utterances";
import { ReactNode } from "react";

const PostLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full mt-3 mb-5 p-3 bg-secondary-100 rounded-xl">
      {children}
      <Utterances />
    </div>
  );
};

export default PostLayout;
