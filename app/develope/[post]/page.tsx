import React from "react";
import axios from "axios";

const fetcher = async ({ id }: { id: string }) => {
  const result = await axios.get(
    process.env.NEXT_BACKEND +
      "/api/post?" +
      new URLSearchParams({
        id,
      })
  );

  return result;
};

const Post = async ({ params: { post } }: { params: { post: string } }) => {
  const { data, status } = await fetcher({ id: post });
  console.log(data);
  if (status) {
    const create = data.createdAt
      ? data.createdAt.toString().split("T")
      : ["데이터 없음", ""];
    // const deleteHandler = () => {
    //   const result = axios.delete(
    //     process.env.NEXT_BACKEND +
    //       "/api/post?" +
    //       new URLSearchParams({
    //         id: post,
    //       })
    //   );
    //   console.log(result);
    // };
    return (
      <div className="w-full h-full min-h-[600px]">
        <h1 className="text-3xl font-extrabold">{data.title}</h1>
        <div className="w-full flex text-sm mt-5">
          <div className="mb-2">
            {/* <button onClick={deleteHandler}>삭제</button> */}
          </div>
          <div className="ml-auto mr-2">작성시간 {create[0]}</div>
          <div>
            {create[1].length > 0
              ? create[1].split(":")[0] + ":" + create[1].split(":")[1]
              : create[1]}
          </div>
        </div>
        {/* <div>{data.tag}</div> */}
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
