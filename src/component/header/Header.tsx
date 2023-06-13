import Link from "next/link";
import LoginContainer from "./LoginContainer";

const Header = () => {
  return (
    <div className="flex w-full h-12 items-center">
      <Link href={"/"}>
        <h1 className="text-2xl">TypingOk.Blog</h1>
      </Link>
      <nav className="ml-auto">
        <Link href={"/info"}>Info</Link>
        <Link className="ml-4" href={"/develop"}>
          Develop
        </Link>
      </nav>
      <nav className="ml-8">
        <LoginContainer />
      </nav>
    </div>
  );
};

export default Header;
