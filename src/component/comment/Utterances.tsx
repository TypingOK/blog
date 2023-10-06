"use client";

import { useUtterances } from "@/src/hooks/useUtterances";
import { useEffect, useState } from "react";

const Utterances = () => {
  const [commentNodeId, setCommentNodeId] = useState("");
  useEffect(() => setCommentNodeId("comments"), []);
  useUtterances(commentNodeId);
  return <section id={commentNodeId} className="mt-5" />;
};

export default Utterances;
