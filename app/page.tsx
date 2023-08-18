import HomeBanner from "@/src/component/info/HomeBanner";
import PostHeadlines from "@/src/component/posts/Headlines";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-full">
      {/* <InfoBanner /> */}
      <Link href="info" about="info" className="w-full">
        <div className="bg-secondary-100 h-[330px] p-3 mt-5 mb-5 border-2 border-primary-200 rounded-2xl shadow-lg overflow-hidden">
          <HomeBanner coordX={0} coordY={"10%"} />
        </div>
      </Link>
      <h1 className="font-bold text-3xl mt-10">최신 글</h1>
      <PostHeadlines />
    </div>
  );
};

export default Home;
