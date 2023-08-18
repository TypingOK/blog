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
    <section className="w-full flex justify-center flex-col items-center mt-5">
      <MyInfoTop
        className="flex justify-between w-full h-72"
        coordX={coordX}
        coordY={coordY}
      >
        <div className="w-full h-full flex flex-col justify-center">
          <div className="h-11 text-3xl font-extrabold mb-auto">저는</div>
          <div className="h-11 text-4xl font-extrabold ml-7">
            함께 성장하는 것을 좋아하는
          </div>
          <div className="h-11 text-4xl font-extrabold ml-24">
            새로운 것을 배우기 힘쓰는
          </div>
          <div className="h-11 text-3xl font-extrabold ml-48 mt-auto">
            프론트엔드 개발자입니다.
          </div>
        </div>
        <div className="w-56 h-64 relative">
          <Image src="/사진.jpg" alt="profile image" fill></Image>
        </div>
      </MyInfoTop>
    </section>
  );
};

export default HomeBanner;
