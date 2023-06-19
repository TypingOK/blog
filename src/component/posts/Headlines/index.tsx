import { listFetcher } from "@/src/common/postListFetcher";
import prisma from "@/src/lib/prisma";
import Link from "next/link";
import { use } from "react";
import Headline from "./Headline";

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

const PostHeadlines = () => {
  const { posts } = use(getPost());
  console.log(posts);
  return (
    <div className="w-full h-full flex flex-wrap ">
      {posts &&
        posts.map((e: { id: number; title: string; createdAt: Date }) => (
          <Headline post={e} key={e.id} />
        ))}
    </div>
  );
};

export default PostHeadlines;
