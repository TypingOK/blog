import React, { use } from "react";
import DeleteButton from "./DeleteButton";
import prisma from "@/src/lib/prisma";
import { remark } from "remark";
import html from "remark-html";

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
    const content = (await remark().use(html).process(post.content)).toString();
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

const Post = async ({ params: { post } }: { params: { post: string } }) => {
  const { data } = await fetcher({ id: post });
  console.log(data);
  if (data && data.id !== undefined) {
    const create = data.createdAt
      ? data.createdAt.toString().split("T")
      : ["데이터 없음", ""];

    return (
      <div className="w-full h-full min-h-[600px]">
        <h1 className="text-3xl font-extrabold">{data.title}</h1>
        <div className="w-full flex text-sm mt-5">
          <div className="mb-2">
            <DeleteButton post={post} author={data.author.name} />
          </div>
          <div className="ml-auto mr-2">작성시간 {create[0]}</div>
          <div>
            {create[1].length > 0
              ? create[1].split(":")[0] + ":" + create[1].split(":")[1]
              : create[1]}
          </div>
        </div>
        {/* <div>{data.tag}</div> */}
        <div className={`border w-full border-black`}></div>
        <div
          className="w-full h-full mt-5"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </div>
    );
  } else {
    return <div>에러가 발생하였습니다.</div>;
  }
};

export default Post;
