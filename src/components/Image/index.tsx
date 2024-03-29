import React from "react";

interface IImageProps {
  image: File;
  hasCancelButton?: boolean;
}

const Image = ({ image, hasCancelButton = true }: IImageProps) => {
  return (
    <div className="relative">
      <img
        alt="user-uploaded-image"
        src={URL.createObjectURL(image)}
        className="md:max-w-[600px] sm:max-w-[350px] max-h-[500px] rounded-[10px] border "
      />
    </div>
  );
};

export default Image;
