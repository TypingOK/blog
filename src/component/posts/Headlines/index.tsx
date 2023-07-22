import prisma from "@/src/lib/prisma";
import { use } from "react";
import Headline from "./Headline";

const getPost = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      published: true,
      // category: "develope",
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      thumbnail: true,
    },
    skip: 0,
    take: 5,
  });

  return { posts };
};

const PostHeadlines = () => {
  const { posts } = use(getPost());
  return (
    <div className="w-full h-full flex flex-wrap justify-center">
      {posts &&
        posts.map(
          (e: {
            id: number;
            title: string;
            createdAt: Date;
            thumbnail: string;
          }) => <Headline post={e} key={e.id} />
        )}
    </div>
  );
};

export default PostHeadlines;

export const revalidate = 3600 * 12;
