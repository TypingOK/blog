"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteButton = ({ post }: { post: string }) => {
  const router = useRouter();
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  const deleteHandler = () => {
    const result = axios
      .delete(
        process.env.NEXT_PUBLIC_BACKEND_URL +
          "/api/post?" +
          new URLSearchParams({
            id: post,
          })
      )
      .then((response) => {
        console.log("아니오:", response);
        if (response.status === 200 && response.statusText === "OK") {
          router.push("/develop");
        }
      });

    console.log(result);
  };

  return <button onClick={deleteHandler}>삭제</button>;
};

export default DeleteButton;
