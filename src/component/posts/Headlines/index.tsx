import { listFetcher } from "@/src/common/postListFetcher";
import prisma from "@/src/lib/prisma";
import Link from "next/link";
import { use } from "react";

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
    <div>
      {posts &&
        posts.map((e: { id: number; title: string; createdAt: Date }) => (
          <div key={e.id} className="bg-slate-600 mb-5">
            <div>
              <Link href={`/develop/${e.id}`}>{e.title}</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostHeadlines;
