import Link from "next/link";
import LoginContainer from "./LoginContainer";

const Header = () => {
  return (
    <div className="flex w-full h-full  max-w-5xl items-center">
      <Link href={"/"}>
        <h1 className="text-4xl font-bold">TypingOk.Blog</h1>
      </Link>
      <nav className="ml-auto">
        <Link href={"/info"} className="font-semibold">
          Info
        </Link>
        <Link className="ml-4 font-semibold" href={"/develop"}>
          Posts
        </Link>
      </nav>
      <nav className="ml-8">
        <LoginContainer />
      </nav>
    </div>
  );
};

export default Header;
