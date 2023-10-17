import prisma from "@/src/lib/prisma";
import { use } from "react";
import Headline from "./Headline";

const getPost = async () => {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mainPostList`,
    { next: { tags: ["posts"] } }
  ).then((res) => res.json());
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
