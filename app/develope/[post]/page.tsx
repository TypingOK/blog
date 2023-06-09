import React from "react";
import { remark } from "remark";
import html from "remark-html";
import prisma from "@lib/prisma";

const getPostDetail = async ({ id }: { id: string }) => {
  const feed = await prisma.post.findFirst({
    where: {
      AND: [{ id: parseInt(id) }, { published: true }],
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  const converter = await remark().use(html).process(feed.content);
  const content = converter.toString();
  const { content: _, ...rest } = feed;
  return {
    ...rest,
    content,
    id,
  };
};

const Post = async ({ params: { post } }: { params: { post: string } }) => {
  const props = await getPostDetail({ id: post });
  console.log(props);

  return (
    <div>
      <div>{props.title}</div>
      <div>{props.createdAt.toString()}</div>
      {/* <div>{props.tag}</div> */}
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  );
};

export default Post;
