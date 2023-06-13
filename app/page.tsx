import { listFetcher } from "@/src/common/postListFetcher";

const getPost = async () => {
  const response = await listFetcher({ page: 1, perPage: 10 });

  return response;
};

const Home = async () => {
  const feed = await getPost();
  console.log(feed);
  return (
    <div>
      안녕하세요
      <div>
        {feed.map((e: { id: number; title: string; createdAt: Date }) => (
          <div key={e.id} className="bg-slate-600 mb-5">
            <div>{e.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
