"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const InfoBanner = () => {
  const aControls = useAnimation();
  const bControls = useAnimation();

  const handleHoverStart = () => {
    aControls.start({ x: 200 });
    bControls.start({ x: 0 });
  };
  const handleHoverEnd = () => {
    aControls.start({ x: 0 });
    bControls.start({ x: 0 });
  };

  return (
    <div className="w-full h-[300px] mt-5 mb-5 border-b-2">
      <Link href={"/info"}>
        <div className="flex w-full h-full relative overflow-hidden">
          <motion.div
            // whileHover={{ x: 1000 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            transition={{ type: "spring", duration: 0.2, ease: "easeInOut" }}
            className="w-full h-full absolute  right-[0px] flex justify-center"
          >
            <motion.div
              className="w-full text-3xl h-full absolute bg-white"
              animate={aControls}
              transition={{ duration: 0.3 }}
            >
              <div>알아보기</div>
            </motion.div>
            <motion.div className="w-full h-full absolute" animate={bControls}>
              <div className="w-full h-full">
                <h1 className="text-3xl">Author Info</h1>
                <div>( 클릭시 내 정보 페이지로 이동합니다. )</div>
              </div>
            </motion.div>
            <div className="relative w-2/6 h-full ml-auto">
              <Image
                src={"/사진.jpg"}
                alt="내 사진"
                width={400}
                height={400}
                className="bg-cover min-w-fit w-auto h-full ml-auto"
              />
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default InfoBanner;
