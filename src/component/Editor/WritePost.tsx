"use client";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ChangeEvent } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import imageCompression from "browser-image-compression";
import uploadFirebase from "@/src/common/uploadFirebase";
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";

interface postType {
  title: string;
  content: string;
  tag: string[];
  email: string;
  category: string;
  thumbnail: string;
  description: string;
  subCategory: number;
}
const MdEditor = dynamic(() => import("../Editor/MdEditor"), {
  ssr: false,
});

const fetcher = async (body: postType) => {
  const response = await fetch("/api/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response;
};

const subCategoryFetcher = async () => {
  const subCategory = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subCategory`
  ).then((res) => res.json());
  return subCategory;
};

const WritePost = () => {
  const router = useRouter();
  const { data: subCategory } = useSWR("/api/subCategory", subCategoryFetcher);
  const [subCategoryState, setSubCategoryState] = useState<number>();
  const [category, setCategory] = useState("develope");
  const [title, setTitle] = useState<String>("");
  const [thumbnail, setThumbnail] = useState<any>();
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [thumbnailPriview, setThumbnailPriview] = useState<string | null>(null);
  const thumbnailImage = useRef<HTMLInputElement>(null);
  const [descriptionState, setDescriptionState] = useState<string>("");
  const [descriptionLengthState, setDescriptionLengthState] =
    useState<number>(0);
  const { data } = useSession();

  const [tag, setTag] = useState<String[]>([]);

  const editorRef = useRef<any>(null);
  const tagRef = useRef<any>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const tagPush = () => {
    if (tagRef !== undefined && tagRef.current && tagRef.current.value) {
      setTag((prev) => [...prev, tagRef.current.value]);
    }
  };

  const tagDelete = (e: String) => {
    const tagList = tag.filter((element) => {
      return e !== element;
    });
    setTag((prev) => {
      return [...tagList];
    });
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
        content: editorRef.current.markdown as string,
        tag,
        category,
        thumbnail: thumbnailUrl,
        description: descriptionState,
        subCategory: subCategoryState,
      } as postType;
      const result = await fetcher(body);
      if (result.status === 200 && result.statusText === "OK") {
        router.push("/");
      }
      console.log(editorRef.current);
    }
  };
  const categoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target && e.target.value) {
      setCategory(e.target.value);
    }
  };
  const subCategoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target && e.target.value) {
      setSubCategoryState(parseInt(e.target.value));
      console.log("서브 카테고리", parseInt(e.target.value));
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
        {subCategory && (
          <div>
            서브카테고리
            <select onChange={subCategoryHandler} className="border-2 mb-4">
              {subCategory.map((e: { id: number; name: string }) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="w-full">
        <>
          {/* {editorRef !== undefined && <ToastEditor editorRef={editorRef} />} */}
          {data !== null && <MdEditor editorRef={editorRef} data={data} />}
        </>
      </div>
      <div className="mt-7">
        태그{" "}
        <input
          className="border-2 w-2/4 mr-4"
          ref={tagRef}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              tagPush();
            }
          }}
        />
        <button onClick={tagPush}>태그 추가하기</button>
      </div>
      <div>
        {tag.map((e, i) => (
          <span
            key={i}
            onClick={() => {
              tagDelete(e);
            }}
            className="ml-2"
          >
            {e},
          </span>
        ))}
      </div>
      <div className="mt-7 mb-24">
        <div>게시글에 대한 간단한 소개 (description)</div>
        <div className="p-1 w-96 h-64">
          <textarea
            className="w-full h-full border-2 rounded-lg"
            onChange={(e) => {
              setDescriptionState((prev) => {
                return e.target.value;
              });

              setDescriptionLengthState((prev) => {
                return e.target.value.length;
              });
            }}
          />
          <div>{descriptionLengthState}/80</div>
        </div>
      </div>
      <div className="mt-3 border-2">
        <div>섬네일 미리보기</div>
        {thumbnailPriview === null ? (
          <div>아무 이미지가 없음</div>
        ) : (
          <Image
            src={thumbnailPriview}
            alt="썸네일"
            width="200"
            height="200"
          ></Image>
        )}

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
