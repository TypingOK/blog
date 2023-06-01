import dynamic from "next/dynamic";

const ToastEditor = dynamic(
  () => import("../../src/component/Editor/ToastEditor"),
  { ssr: false }
);

const EditorComponent = () => {
  return <ToastEditor />;
};

export default EditorComponent;
