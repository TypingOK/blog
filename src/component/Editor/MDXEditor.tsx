"use client";

import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  BlockTypeSelect,
  CreateLink,
  linkDialogPlugin,
  linkPlugin,
  InsertCodeBlock,
  imagePlugin,
} from "@mdxeditor/editor";
import { FC } from "react";
import "@mdxeditor/editor/style.css";
import { useSession } from "next-auth/react";
import uploadFirebase from "@/src/common/uploadFirebase";
import imageCompression from "browser-image-compression";

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  const { data } = useSession();

  const imageUploadHandler = async (image: File) => {
    let file = image as File;
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
        return result as string;
      }
    } catch (error) {
      console.log(error);

      return "error: ";
    }
    return "";
  };

  return (
    <MDXEditor
      className="w-[1000px] h-min-[600px]"
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        linkDialogPlugin(),
        linkPlugin(),
        imagePlugin({ imageUploadHandler }),
        toolbarPlugin({
          toolbarContents: () => {
            return (
              <>
                <BlockTypeSelect />
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CreateLink />
                <InsertCodeBlock />
              </>
            );
          },
        }),
      ]}
    />
  );
};

export default Editor;
