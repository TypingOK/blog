import truncateString from "@/src/common/truncateString";
import Image from "next/image";
import Link from "next/link";

const BottomPostList = ({
  previousPost,
  nextPost,
}: {
  previousPost: { id: number; title: string } | null;
  nextPost: { id: number; title: string } | null;
}) => {
  return (
    <div className="w-full h-16 mt-12 flex justify-between">
      {previousPost !== null && (
        <Link
          href={`/develop/${previousPost.id}`}
          about="이전 게시물"
          className="p-3 mr-2 relative flex-1 rounded-xl flex justify-start items-center border-2 shadow-xl bg-secondary-100 border-primary-200"
        >
          <Image
            src={"/leftArrow.svg"}
            alt="left arrow"
            width={30}
            height={30}
          />
          <div>
            <div className="text-sm">이전</div>
            <div className="md:w-36 lg:w-56 text-sm md:text-base truncate w-14">
              {previousPost.title}
            </div>
          </div>
        </Link>
      )}
      <Link
        href="/develop"
        className="flex items-center justify-center md:flex-[1.5] p-3 ml-2 rounded-xl border-2 shadow-xl bg-secondary-100 border-primary-200"
      >
        <Image src={"/menu.svg"} alt="left arrow" width={30} height={30} />
        <div>목록</div>
      </Link>
      {nextPost !== null && (
        <Link
          href={`/develop/${nextPost.id}`}
          about="다음 게시물"
          className="p-3 ml-2 flex-1 rounded-xl flex justify-end items-center border-2 shadow-xl bg-secondary-100 border-primary-200"
        >
          <div>
            <div className="md:text-sm text-end text-xs">다음</div>
            <div className="md:w-36 lg:w-56 text-sm md:text-base truncate w-14">
              {nextPost.title}
            </div>
          </div>
          <Image
            src={"/nextArrow.svg"}
            alt="left arrow"
            width={30}
            height={30}
          />
        </Link>
      )}
    </div>
  );
};

export default BottomPostList;
