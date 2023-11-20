import Link from "next/link";
import LoginContainer from "./LoginContainer";
import MobileHeaderMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="flex w-full h-full  max-w-5xl items-center">
      <Link href={"/"}>
        <h1 className="md:text-4xl text-2xl font-bold">TypingOk.Blog</h1>
      </Link>
      <nav className="ml-auto hidden md:block">
        <Link href={"/info"} className="font-semibold">
          Info
        </Link>
        <Link className="ml-4 font-semibold" href={"/develop"}>
          Posts
        </Link>
      </nav>
      <nav className="md:hidden block ml-auto">
        <MobileHeaderMenu />
      </nav>
      <nav className="ml-8">
        <LoginContainer />
      </nav>
    </div>
  );
};

export default Header;
