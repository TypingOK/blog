import Header from "@/src/component/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TypingOK's Blog",
  description:
    "This is TypingOK's Blog! 이곳은 TypingOK의 블로그입니다! Next.js, React.js, TypeScript, 알고리즘 문제 등 여러가지 기술 혹은 잡담들을 나누기 위한 공간입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>
          <div className="w-full h-16 flex justify-center sticky bg-primary-100  top-0 z-[999999]">
            <Header />
          </div>
          <section
            className={`w-full min-h-screen h-full flex justify-center bg-primary-100`}
          >
            <div className={`w-full h-full max-w-5xl`}>
              {/* <div className={"border-b-4 border-b-custom-400"}>
              </div> */}
              <div className="w-full h-full">{children}</div>
            </div>
          </section>
        </Provider>
      </body>
    </html>
  );
}
