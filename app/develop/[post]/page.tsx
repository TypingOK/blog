import React from "react";
import DeleteButton from "./DeleteButton";
import prisma from "@/src/lib/prisma";
import { read } from "to-vfile";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import html from "remark-html";
import BottomPostList from "./BottomPostList";

const fetcher = async ({ id }: { id: string }) => {
  const post = await prisma.post.findFirst({
    where: {
      AND: [{ id: parseInt(id) }, { published: true }],
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  if (post !== null && post !== undefined && post.content) {
    const schema = rehypeSanitize({
      tagNames: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "br",
        "p",
        "div",
        "span",
        "img",
      ],
    });
    const content = (
      await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize, schema)
        .use(rehypeStringify)
        .process(post.content)
    ).toString();
    const { content: _, ...rest } = post;
    const result = {
      ...rest,
      content,
      id,
    };

    return { data: result };
  } else {
    return {
      id: -1,
      title: "",
      published: false,
      createdAt: "2023-06-26T14:57:39.996Z",
      updatedAt: "2023-06-26T14:57:39.996Z",
      tag: [],
      authorId: "",
      category: "",
      thumbnail: "",
      author: {
        name: "",
      },
    };
  }
};

const getPreviousAndNextPosts = async ({ id }: { id: number }) => {
  const previousPost = await prisma.post.findFirst({
    where: {
      id: { lt: id },
    },
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      title: true,
    },
  });
  const nextPost = await prisma.post.findFirst({
    where: {
      id: { gt: id },
    },
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      title: true,
    },
  });

  return {
    previousPost,
    nextPost,
  };
};

const Post = async ({ params: { post } }: { params: { post: string } }) => {
  const { data } = await fetcher({ id: post });
  console.log(data);
  const { previousPost, nextPost } = await getPreviousAndNextPosts({
    id: parseInt(post),
  });
  if (data && data.id !== undefined && data.createdAt) {
    const dateObj = data.createdAt;

    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const date = dateObj.getDate().toString().padStart(2, "0");

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");

    let period = "오전";
    let formattedHours = hours;

    if (hours > 12) {
      period = "오후";
      formattedHours = hours - 12;
    }

    const formattedDateTime = `${year}. ${month}. ${date}. ${period} ${formattedHours}:${minutes}`;

    return (
      <div className="w-full h-full min-h-[600px]">
        <h1 className="text-2xl font-extrabold">{data.title}</h1>
        <div className="w-full flex text-sm mt-5">
          <div className="mb-2">
            <DeleteButton post={post} author={data.author.name} />
          </div>
          <div className="ml-auto mr-2">작성시간 {formattedDateTime}</div>
        </div>

        <div className={`border w-full border-primary-300`}></div>
        <article
          className="max-w-none h-full mt-5 prose"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></article>
        <div className="flex mt-5 mb-5">
          <div className="mr-2">태그: </div>
          {data.tag.map((e, index) => (
            <div className="mr-2" key={index}>
              {e}
            </div>
          ))}
        </div>
        <BottomPostList previousPost={previousPost} nextPost={nextPost} />
      </div>
    );
  } else {
    return <div>에러가 발생하였습니다.</div>;
  }
};

export default Post;
