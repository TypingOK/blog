import HomeBanner from "@/src/component/info/HomeBanner";
import PostHeadlines from "@/src/component/posts/Headlines";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-full">
      {/* <InfoBanner /> */}
      <Link href="info" about="info" className="w-full">
        <div className="bg-secondary-100 relative h-[330px] p-3 mt-5 mb-5 border-primary-200 rounded-2xl shadow-lg overflow-hidden">
          <HomeBanner coordX={0} coordY={"10%"} />
          <div className="filter brightness-50 absolute left-0 top-0 w-[1200px] h-full flex justify-center">
            <Image
              src="/jejuCopy.jpg"
              alt="제주도 한라산 정상 사진"
              fill
              className=""
            />
          </div>
        </div>
      </Link>
      <h1 className="font-bold text-3xl mt-10">최신 글</h1>
      <PostHeadlines />
    </div>
  );
};

export default Home;
