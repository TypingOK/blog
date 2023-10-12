import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypingOK의 정보",
  description: "TypingOK의 개발 블로그를 만든 TypingOK의 정보에 대해 알아볼 수 있는 페이지입니다."
}

const InfoLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-full mb-24">{children}</div>;
};

export default InfoLayout;
