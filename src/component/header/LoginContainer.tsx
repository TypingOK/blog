"use client";
import { signOut, useSession } from "next-auth/react";
const LoginContainer = () => {
  const { data, status } = useSession();
  console.log(data);
  if (status == "authenticated") {
    return (
      <div
        onClick={() => {
          signOut();
        }}
      >
        현재 로그인 되어있습니다.
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default LoginContainer;
