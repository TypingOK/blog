import storage from "./firebaseconfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getMetadata,
} from "firebase/storage";

const uploadFirebase = async (file: File, email: string): Promise<string> => {
  const storageRef = ref(storage, `files/${file.name}`);
  const existingMetadata = await getMetadata(storageRef);

  const uploadTask = uploadBytesResumable(storageRef, file, {
    customMetadata: { ...existingMetadata.customMetadata, email: email },
  });

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        reject(""); // added this line
        alert(error);
      },
      () => {
        const result = getDownloadURL(uploadTask.snapshot.ref);
        resolve(result);
      }
    );
  });
};
export default uploadFirebase;
