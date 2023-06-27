"use client";

import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor } from "@toast-ui/react-editor";
import imageCompression from "browser-image-compression";
import uploadFirebase from "@/src/common/uploadFirebase";

const ToastEditor = ({ editorRef }: { editorRef: React.Ref<any> }) => {
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
              if (file.type === "image/webp" || file.type === "image/gif") {
                const result = await uploadFirebase(file);
                console.log(result);
                callback(result, "삽입된 이미지");
              } else {
                const compressedFile = await imageCompression(file, options);
                const resizeFile = new File([compressedFile], file.name, {
                  type: file.type,
                });
                console.log("리사이징 결과 ", compressedFile);
                const result = await uploadFirebase(resizeFile);
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
};

export default ToastEditor;
