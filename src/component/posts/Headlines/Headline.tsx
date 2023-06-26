"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Headline = ({
  post,
}: {
  post: { id: number; title: string; createdAt: Date; thumbnail: string };
}) => {
  const date = post.createdAt;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  console.log(formattedDate);
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="relative border-2 rounded-xl mb-5 flex-1 m-2 shadow-xl h-64 md:flex-col"
    >
      <Link
        href={`/develop/${post.id}`}
        className="w-full h-full flex justify-center"
      >
        <Image src={post.thumbnail} width={100} height={100} alt="썸네일" />
        <div className="mt-auto ">
          <div className="text-xl font-bold">{post.title}</div>
        </div>
        <div className="text-xs absolute right-3"> {formattedDate}</div>
      </Link>
    </motion.div>
  );
};

export default Headline;
