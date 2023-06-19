"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const InfoBanner = () => {
  return (
    <div className="w-full h-[300px] mt-5 mb-5 border-b-2">
      <Link href={"/info"}>
        <div className="flex w-full h-full relative overflow-hidden">
          {/* <motion.div
            whileHover={{ x: 1000 }}
            transition={{ type: "spring", duration: 0.2, ease: "easeInOut" }}
            className="w-[1920px] h-full absolute  right-[0px] flex justify-center"
          >
            <div className="w-[1024px] bg-white h-full justify-center flex text-3xl">
              알아보기
            </div>
          </motion.div> */}
          <div className="w-full h-full">
            <h1 className="text-3xl">Author Info</h1>
            <div>( 클릭시 내 정보 페이지로 이동합니다. )</div>
          </div>
          <div className="relative w-2/6 h-full ml-auto">
            <Image
              src={"/사진.jpg"}
              alt="내 사진"
              width={400}
              height={400}
              className="bg-cover min-w-fit w-auto h-full ml-auto"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InfoBanner;
