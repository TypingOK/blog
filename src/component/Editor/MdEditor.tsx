"use client";
import MDEditor, { commands } from "@uiw/react-md-editor";
import React, { useCallback, useRef } from "react";
import { useState } from "react";
import type { Session } from "next-auth";
import uploadFirebase from "@/src/common/uploadFirebase";
import imageCompression from "browser-image-compression";

const MdEditor = ({ editorRef, data }: { editorRef: any; data: Session }) => {
  const [value, setValue] = useState<string | undefined>("");
  const imageInsertRef = useRef<HTMLInputElement>(null);
  const image = {
    name: "imageUpload",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: (
      <svg viewBox="0 0 1024 1024" width="12" height="12">
        <path
          fill="currentColor"
          d="M716.8 921.6a51.2 51.2 0 1 1 0 102.4H307.2a51.2 51.2 0 1 1 0-102.4h409.6zM475.8016 382.1568a51.2 51.2 0 0 1 72.3968 0l144.8448 144.8448a51.2 51.2 0 0 1-72.448 72.3968L563.2 541.952V768a51.2 51.2 0 0 1-45.2096 50.8416L512 819.2a51.2 51.2 0 0 1-51.2-51.2v-226.048l-57.3952 57.4464a51.2 51.2 0 0 1-67.584 4.2496l-4.864-4.2496a51.2 51.2 0 0 1 0-72.3968zM512 0c138.6496 0 253.4912 102.144 277.1456 236.288l10.752 0.3072C924.928 242.688 1024 348.0576 1024 476.5696 1024 608.9728 918.8352 716.8 788.48 716.8a51.2 51.2 0 1 1 0-102.4l8.3968-0.256C866.2016 609.6384 921.6 550.0416 921.6 476.5696c0-76.4416-59.904-137.8816-133.12-137.8816h-97.28v-51.2C691.2 184.9856 610.6624 102.4 512 102.4S332.8 184.9856 332.8 287.488v51.2H235.52c-73.216 0-133.12 61.44-133.12 137.8816C102.4 552.96 162.304 614.4 235.52 614.4l5.9904 0.3584A51.2 51.2 0 0 1 235.52 716.8C105.1648 716.8 0 608.9728 0 476.5696c0-132.1984 104.8064-239.872 234.8544-240.2816C258.5088 102.144 373.3504 0 512 0z"
        />
      </svg>
      // <span style={{ padding: "0 5px" }}>Custom Toolbar</span>
    ),
    execute: async (state, api) => {
      if (!imageInsertRef.current) {
        return;
      } else {
        await imageInsertRef.current.click();
      }
    },
  };

  const imageUploadHandler = async (file: File) => {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 800,
      useWebWorker: true,
      alwaysKeepResolution: true,
    };
    try {
      if (
        (file.type === "image/webp" || file.type === "image/gif") &&
        data &&
        data.user &&
        data.user.email
      ) {
        console.log(data);
        const email = data.user.email;
        const result = (await uploadFirebase(file, email)) as string;
        console.log(result);
        return result as string;
      } else if (data && data.user && data.user.email) {
        const compressedFile = await imageCompression(file, options);
        const resizeFile = new File([compressedFile], file.name, {
          type: file.type,
        });
        console.log(data);
        const email = data.user.email;
        console.log("리사이징 결과 ", compressedFile);
        const result = (await uploadFirebase(resizeFile, email)) as string;
        // setValue((prev) => prev + `\n![Alt Text](${result})`);
        return result as string;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    } else {
      let file = e.target.files[0] as File;
      const result = await imageUploadHandler(file);
      setValue(
        (prev) =>
          prev +
          `\n <img src="${result}" width="800px" height="400px" alt="이미지" /> \n`
      );
    }
  };

  // const onImageUploadPasteOrDrop = async () => {
  //   const clipboardItems =
  //     typeof navigator?.clipboard?.read === "function" &&
  //     (await navigator.clipboard.read());
  //   console.log(clipboardItems);
  //   if (clipboardItems) {
  //     for (const clipboardItem of clipboardItems) {
  //      console.log(clipboardItem)
  //     }
  //   }
  // };
  // async (dataTransfer: DataTransfer) => {
  //   console.log(dataTransfer);

  //   if (dataTransfer && dataTransfer.items) {
  // dataTransfer
  // if (
  //   dataTransfer.items[0].type.includes("image/") &&
  //   dataTransfer.items[0].kind.includes("file")
  // ) {
  //   const file = (await dataTransfer.items[0]) as unknown as File;
  //   console.log("파일", dataTransfer.items[0], file);
  //   const result = await imageUploadHandler(file);
  //   console.log(result);
  //   setValue(
  //     (prev) =>
  //       prev +
  //       `\n <img src="${result}" width="800px" height="400px" alt="이미지" /> \n`
  //   );
  // } else {
  //   return;
  // }
  //   }
  // },

  return (
    <div className="w-full max-w-[1200px] h-full">
      <MDEditor
        commands={[
          commands.bold,
          commands.italic,
          commands.hr,
          commands.code,
          commands.codeBlock,
          commands.comment,
          commands.link,
          commands.quote,
          commands.strikethrough,
          commands.checkedListCommand,
          commands.orderedListCommand,
          commands.unorderedListCommand,

          image,
        ]}
        onPaste={async (event) => {
          event.preventDefault();
          const clipboardItems = event.clipboardData.files;
          console.log(clipboardItems);
          
          if (clipboardItems) {
            let files = [] as File[];
            for (const clipboardItem of clipboardItems) {
              if (clipboardItem.type.startsWith("image/")) {
                const result = await imageUploadHandler(clipboardItem);
                setValue(
                  (prev) =>
                    prev +
                    `\n <img src="${result}" width="800px" height="400px" alt="이미지" /> \n`
                );
              }
            }
          }

          // await onImageUploadPasteOrDrop();

          // await onImageUploadPasteOrDrop(event.clipboardData);
        }}
        // onDrop={async (event) => {
        //   event.preventDefault();
        //   await onImageUploadPasteOrDrop(await event.dataTransfer);
        // }}
        ref={editorRef}
        value={value}
        onChange={setValue}
        height={600}
      />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={imageInsertRef}
        onChange={onUploadImage}
      />
    </div>
  );
};

export default MdEditor;
