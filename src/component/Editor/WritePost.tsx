"use client";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/navigation";
import imageCompression from "browser-image-compression";
import uploadFirebase from "@/src/common/uploadFirebase";
import { useSession } from "next-auth/react";

interface postType {
  title: string;
  content: string;
  tag: string[];
  email: string;
  category: string;
  thumbnail: string;
}

const ToastEditor = dynamic(() => import("../Editor/ToastEditor"), {
  ssr: false,
});

const fetcher = async (body: postType) => {
  const response = await axios.post("/api/create", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

const WritePost = () => {
  const router = useRouter();
  const [category, setCategory] = useState("develope");
  const [title, setTitle] = useState<String>("");
  const [thumbnail, setThumbnail] = useState<any>();
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [thumbnailPriview, setThumbnailPriview] = useState<any>([]);
  const thumbnailImage = useRef<any>();
  const { data } = useSession();

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
  const onClick = async () => {
    if (editorRef && editorRef.current) {
      const body = {
        title,
        content: editorRef.current.getInstance().getMarkdown() as string,
        tag,
        category,
        thumbnail: thumbnailUrl,
      } as postType;
      const result = await fetcher(body);
      console.log(result);
      if (result.status === 200 && result.statusText === "OK") {
        router.push("/");
      }
    }
  };
  const categoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target && e.target.value) {
      setCategory(e.target.value);
    }
  };

  const onClickThumbnailUpload = async () => {
    if (data && data.user && data.user.email) {
      const email = data.user.email;
      const result = await uploadFirebase(thumbnail, email);
      console.log(result);
      setThumbnailUrl(result);
    }
  };

  const onChangeThumbnail = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      let file = e.target.files[0];
      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 200,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(file, options);
        setThumbnail(compressedFile);
        const promise = imageCompression.getDataUrlFromFile(compressedFile);
        promise.then((result) => {
          setThumbnailPriview(result);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-5 mt-5 w-full flex justify-center">
        제목 <input className="border-2 w-3/4" onChange={onChange} />
      </div>
      <div>
        카테고리
        <select
          onChange={categoryHandler}
          value={category}
          className="border-2 mb-4"
        >
          <option value={"develope"} key={"develope"}>
            develope
          </option>
          <option value={"etc"} key={"etc"}>
            etc
          </option>
        </select>
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
      <div className="mt-3 border-2">
        <div>섬네일 미리보기</div>
        <img
          src={thumbnailPriview}
          alt="썸네일"
          width="200px"
          height="auto"
        ></img>
        <input
          type="file"
          accept="image/*"
          id="thumbnail"
          ref={thumbnailImage}
          onChange={onChangeThumbnail}
        />
        {thumbnailUrl.length > 0 && <div>이미지 업로드 완료</div>}
        <button onClick={onClickThumbnailUpload}>이미지 업로드 하기</button>
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
