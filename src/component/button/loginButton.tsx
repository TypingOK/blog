"use client";
import { signIn, signOut } from "next-auth/react";
import { useParams, useSearchParams } from "next/navigation";

export const LoginButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn("github", {
            callbackUrl: "http://localhost:3000/session_test",
          });
        }}
      >
        로그인
      </button>
    </div>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      로그아웃
    </button>
  );
};
