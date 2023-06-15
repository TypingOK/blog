import Image from "next/image";
import Link from "next/link";

const InfoBanner = () => {
  return (
    <div className="w-full h-[300px] mt-5">
      <Link href={"/info"}>
        <div className="flex w-full h-full">
          <div className="w-full h-full">
            <h1 className="text-3xl">이 블로그를 만든 사람에 대해 알아보기</h1>
            <div>( 클릭시 내 정보 페이지로 이동합니다. )</div>
          </div>
          <div className="relative w-2/6 h-full ml-auto">
            <Image
              src={"/사진.jpg"}
              alt="내 사진"
              width={400}
              height={400}
              className="bg-cover min-w-fit w-auto h-full ml-auto"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InfoBanner;
