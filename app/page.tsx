import axios from "axios";

const getPost = async () => {
  const params = new URLSearchParams();
  params.append("page", "1");
  params.append("perPage", "10");
  const posts = await axios(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/develop?${params.toString()}`
  );
  console.log("서버측 데이터?", posts.data);
  if (posts.status) {
    return posts.data;
  } else {
    return undefined;
  }
};

const Home = async () => {
  const feed = await getPost();
  console.log(feed);
  return (
    <div>
      안녕하세요
      <div>
        {feed &&
          feed.map((e: { id: number; title: string; createdAt: Date }) => (
            <div key={e.id} className="bg-slate-600 mb-5">
              <div>{e.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
