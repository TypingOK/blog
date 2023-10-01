import type { SetStateAction } from "react";
import uploadFirebase from "@/src/common/uploadFirebase";
export const onImageUploadPasteOrDrop = async (
    dataTransfer: DataTransfer,
    setValue: (value: SetStateAction<string | undefined>) => void,
    imageUploadHandler: (file:File) => string,
) => {
  console.log(dataTransfer);

  if (dataTransfer && dataTransfer.items) {
    dataTransfer;
    if (
      dataTransfer.items[0].type.includes("image/") &&
      dataTransfer.items[0].kind.includes("file")
    ) {
      const file = (await dataTransfer.items[0]) as unknown as File;
      console.log("파일", dataTransfer.items[0], file);
      const result = await imageUploadHandler(file);
      console.log(result);
      setValue(
        (prev) =>
          prev +
          `\n <img src="${result}" width="800px" height="400px" alt="이미지" /> \n`
      );
    } else {
      return;
    }
  }
};
