"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ post, author }: { post: string; author: string }) => {
  const router = useRouter();
  const { data } = useSession();

  if (data?.user?.name === author) {
    const deleteHandler = async () => {
      const result = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL +
          "/api/post?" +
          new URLSearchParams({
            id: post,
          }),
        {
          method: "DELETE",
        }
      ).then((response) => {
        console.log("아니오:", response);
        if (response.status === 200 && response.statusText === "OK") {
          router.push("/develop");
        }
      });

      console.log(result);
    };

    return <button onClick={deleteHandler}>삭제</button>;
  } else {
    return null;
  }
};

export default DeleteButton;
