"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const LoginContainer = () => {
  const { data, status } = useSession();
  if (status == "authenticated") {
    return (
      <div
        onClick={() => {
          signOut();
        }}
        className="relative w-7 h-7"
      >
        <Image src="/logout.svg" alt="로그아웃" fill />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default LoginContainer;
