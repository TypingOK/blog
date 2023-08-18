"use client";

import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor } from "@toast-ui/react-editor";
import imageCompression from "browser-image-compression";
import uploadFirebase from "@/src/common/uploadFirebase";
import { useSession } from "next-auth/react";

const ToastEditor = ({ editorRef }: { editorRef: React.Ref<any> }) => {
  const { data } = useSession();
  console.log(data);
  if (data) {
    return (
      <div>
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          plugins={[colorSyntax]}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              console.log(blob);
              let file = blob as File;
              const options = {
                maxSizeMB: 2,
                maxWidthOrHeight: 800,
                useWebWorker: true,
                alwaysKeepResolution: true,
              };

              try {
                console.log("data?", data);
                if (
                  (file.type === "image/webp" || file.type === "image/gif") &&
                  data &&
                  data.user &&
                  data.user.email
                ) {
                  console.log(data);
                  const email = data.user.email;
                  const result = await uploadFirebase(file, email);
                  console.log(result);
                  callback(result, "삽입된 이미지");
                } else if (data && data.user && data.user.email) {
                  const compressedFile = await imageCompression(file, options);
                  const resizeFile = new File([compressedFile], file.name, {
                    type: file.type,
                  });
                  console.log(data);
                  const email = data.user.email;
                  console.log("리사이징 결과 ", compressedFile);
                  const result = await uploadFirebase(resizeFile, email);
                  console.log(result);
                  callback(result, "삽입된 이미지");
                }
              } catch (error) {
                console.log(error);
              }
            },
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default ToastEditor;
