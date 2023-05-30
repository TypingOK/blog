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
    props: { feed },
    revalidate: 10,
  };
};

const Home = async () => {
  const data = await getPost();
  console.log(data);
  return <div>안녕하세요</div>;
};

export default Home;
