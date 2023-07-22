"use client";

import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion, useAnimation } from "framer-motion";

const InfoBanner = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const bottomControls = useAnimation();
  const topControls = useAnimation();

  const handleHoverStart = () => {
    leftControls.start({ x: -400 });
    rightControls.start({ x: 384 });
    bottomControls.start({ y: 60 });
    topControls.start({ y: -60 });
  };
  const handleHoverEnd = () => {
    leftControls.start({ x: 0 });
    rightControls.start({ x: 0 });
    bottomControls.start({ y: 0 });
    topControls.start({ y: 0 });
  };

  return (
    <div className="w-full bg-secondary-100 h-[300px] mt-5 mb-5 border-2 border-primary-200 rounded-2xl shadow-lg overflow-hidden">
      <Link href={"/info"}>
        <div className="flex w-full h-full relative overflow-hidden">
          <motion.div
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full h-full absolute  right-[0px] flex justify-center"
          >
            <motion.div
              className="w-fit h-full absolute z-10 bg-white -right-96 flex items-center"
              animate={leftControls}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-fit h-full ml-auto z-20">
                <Image
                  src={"/사진.jpg"}
                  alt="내 사진"
                  width={400}
                  height={400}
                  className="bg-cover min-w-fit w-auto h-full ml-auto"
                />
              </div>
            </motion.div>
            <motion.div
              className="w-fit h-full absolute z-10 -left-96 bg-white flex items-center"
              animate={rightControls}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <div className="w-full text-2xl z-10">블로그에 대해</div>
            </motion.div>
            <motion.div
              className="w-fit h-fit absolute z-10 -top-14  bg-white flex items-center"
              animate={bottomControls}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <div className="w-full text-2xl z-10">TypingOK에 대해</div>
            </motion.div>
            <motion.div
              className="w-fit h-fit absolute z-10 -bottom-14  bg-white flex items-center"
              animate={topControls}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <div className="w-full text-2xl z-10">개발자에 대해</div>
            </motion.div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold">알아보러 가기</h1>
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default InfoBanner;
