import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IUploadButtonProps {
  setUploadedImage: React.Dispatch<React.SetStateAction<File | null>>;
  setError: (error: string) => void;
  isLoggedIn: boolean;
  isTrial: boolean;
  setSignInModal: Dispatch<SetStateAction<boolean>>;
}

const isImage = (file: File) => file["type"].includes("image");

const UploadButton = ({
  setUploadedImage,
  setError,
  isLoggedIn,
  isTrial,
  setSignInModal,
}: IUploadButtonProps) => {
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.removeItem("UPLOAD");
    const allFiles = e.target.files;
    if (!allFiles) {
      setError("Something went wrong");
      return;
    }
    if (allFiles?.length > 1) {
      setError("Please upload only one image");
      return;
    }

    const file = allFiles[0];
    const isUploadedFileImage = isImage(file);

    if (!isUploadedFileImage) {
      setError("Please upload an image");
      return;
    }

    setUploadedImage(file);
  };

  const handleUploadButtonClick = () => {
    if (!isLoggedIn && !isTrial) {
      setSignInModal(true);
    }
  };

  const handleFileInputClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (!isLoggedIn && !isTrial) {
      e.preventDefault();
    }
  };

  return (
    <label
      className="w-64 flex flex-col items-center px-4 py-6 bg-indigo-500 text-[#fff] text-secondary rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-secondary hover:text-white"
      onClick={handleUploadButtonClick}
    >
      <svg
        className="w-8 h-8 animate-bounce"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <span className="mt-2 text-base leading-normal">Upload an image</span>
      <input
        type="file"
        id="uploadInput"
        className="hidden"
        onChange={handleImageUpload}
        onClick={handleFileInputClick}
        accept="image/*"
        multiple={false}
      />
    </label>
  );
};

export default UploadButton;
