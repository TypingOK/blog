import prisma from "@/src/lib/prisma";
import { GetStaticProps } from "next";

const getPost = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    feed,
  };
};

const Home = async () => {
  const { feed } = await getPost();
  console.log(feed);
  return (
    <div>
      안녕하세요
      <div>
        {feed.map((e, i) => (
          <div key={i} className="bg-slate-600 mb-5">
            <div>{e.title}</div>
            <div>{e.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
