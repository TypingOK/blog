"use client";

import { useSession } from "next-auth/react";

const Session = () => {
  const { data, status } = useSession();

  console.log(data);

  return <div>test</div>;
};

export default Session;
