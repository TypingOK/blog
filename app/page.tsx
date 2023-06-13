import { listFetcher } from "@/src/common/postListFetcher";
import prisma from "@/src/lib/prisma";

const getPost = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
    skip: 0,
    take: 10,
  });
  console.log(posts);

  return { posts };
};

const Home = async () => {
  const { posts } = await getPost();
  console.log(posts);
  return (
    <div>
      안녕하세요
      <div>
        {posts &&
          posts.map((e: { id: number; title: string; createdAt: Date }) => (
            <div key={e.id} className="bg-slate-600 mb-5">
              <div>{e.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
