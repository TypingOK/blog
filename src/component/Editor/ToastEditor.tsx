"use client";

import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor } from "@toast-ui/react-editor";

const ToastEditor = ({editorRef}:{editorRef:React.Ref<any>}) => {
  

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
        // language="ko-KR"
      />
    </div>
  );
};

export default ToastEditor;
