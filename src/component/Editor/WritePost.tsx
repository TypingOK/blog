"use client";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import dynamic from "next/dynamic";

const ToastEditor = dynamic(() => import("../Editor/ToastEditor"), {
  ssr: false,
});

const WritePost = () => {
  const [title, setTitle] = useState<String>("");
  const [content, setContent] = useState<String>("");
  const [tag, setTag] = useState<String[]>([]);

  const editorRef = useRef<any>("");
  const tagRef = useRef<any>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const tagPush = () => {
    if (tagRef !== undefined && tagRef.current && tagRef.current.value) {
      setTag((prev) => [...prev, tagRef.current.value]);
    }
  };
  useEffect(() => {
    if (tagRef && tagRef.current && tagRef.current.value) {
      tagRef.current.value = "";
    }
  }, [tag]);
  const onClick = () => {
    if (editorRef && editorRef.current) {
      setContent(editorRef.current.getInstance().getMarkdown());
    }
  };

  useEffect(() => {
    if (
      title &&
      title.split(" ").length > 0 &&
      content &&
      content.split(" ").length > 0
    ) {
      const body = {
        title,
        content,
        tag,
      };
        
    }
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-5 mt-5 w-full flex justify-center">
        제목 <input className="border-2 w-3/4" onChange={onChange} />
      </div>
      <div>
        <div>
          <ToastEditor editorRef={editorRef} />
        </div>
      </div>
      <div className="mt-7">
        태그 <input className="border-2 w-2/4 mr-4" ref={tagRef} />
        <button onClick={tagPush}>태그 추가하기</button>
      </div>
      <div>
        {tag.map((e, i) => (
          <span key={i} className="ml-2">
            {e},
          </span>
        ))}
      </div>

      <div className="w-full">
        <button className="border-2" onClick={onClick}>
          글 올리기
        </button>
      </div>
    </div>
  );
};

export default WritePost;
