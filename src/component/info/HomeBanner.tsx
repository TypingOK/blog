import Image from "next/image";
import MyInfoTop from "./MyInfoTop";

const HomeBanner = ({
  coordX = "-20%",
  coordY = 0,
}: {
  coordX?: string | number;
  coordY?: string | number;
}) => {
  return (
    <section className="w-full relative flex justify-center flex-col items-center mt-5 z-10">
      <MyInfoTop
        className="flex justify-between w-full h-72"
        coordX={coordX}
        coordY={coordY}
      >
        <div className="w-full h-full flex flex-col text-primary-100 justify-center">
          <div className="md:h-11 h-24 md:text-4xl font-extrabold md:ml-7 ml-2 text-xl">
            개발자
          </div>
          <div className="md:h-11 h-48 md:text-4xl font-extrabold md:ml-24 ml-3 text-xl">
            TypingOK의
          </div>
          <div className="md:h-11 md:text-3xl font-extrabold md:ml-48 ml-4 mt-auto text-xl">
            개발 블로그입니다.
          </div>
        </div>
      </MyInfoTop>
    </section>
  );
};

export default HomeBanner;
