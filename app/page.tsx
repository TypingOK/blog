import InfoBanner from "@/src/component/info/infoBanner";
import PostHeadlines from "@/src/component/posts/Headlines";

const Home = () => {
  return (
    <div className="w-full h-full">
      <InfoBanner />
      <h1 className="font-bold text-3xl mt-10">최신 글</h1>
      <PostHeadlines />
    </div>
  );
};

export default Home;
