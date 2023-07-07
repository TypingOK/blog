"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Headline = ({
  post,
}: {
  post: { id: number; title: string; createdAt: Date; thumbnail: string };
}) => {
  const dateTimeString = post.createdAt;
  const dateTime = new Date(dateTimeString);
  const formattedDateTime = dateTime.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="relative min-w-[250px] border-2 flex-grow rounded-xl mb-5 flex-1 m-2 overflow-hidden shadow-xl h-64 md:flex-col"
    >
      <Link
        href={`/develop/${post.id}`}
        className="w-full h-[250px] flex justify-center flex-col items-center  relative"
      >
        <div className="max-w-[350px] w-full h-full overflow-hidden relative flex justify-center">
          <Image
            src={post.thumbnail !== "" ? post.thumbnail : "/basicThumbnail.jpg"}
            fill
            className="object-cover "
            alt="썸네일"
          />
        </div>
        <div className="w-full flex justify-center flex-col items-center h-28">
          <div className="mt-auto ">
            <div className="text-xl font-bold">{post.title}</div>
          </div>
          <div className="text-xs w-full flex justify-end">
            <div className="mr-3">{formattedDateTime}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Headline;
