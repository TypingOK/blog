import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full">
      <Link href={"/"}>
        <h1 className="text-2xl">TypingOk.Blog</h1>
      </Link>
      <nav className="ml-auto">
        <Link href={"/info"}>Info</Link>
        <Link className="ml-4" href={"/develope"}>Develope</Link>
      </nav>
    </div>
  );
};

export default Header;
