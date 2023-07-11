import { useState } from "react";
import { ICaptionResponse } from "src/types";
import { BACKEND_URL, S3_BUCKET_URL_PREFIX } from "src/constants";
import axios from "axios";

const useFetchCaption = ({ isTrial }: { isTrial: boolean }) => {
  const [captions, setCaptions] = useState<ICaptionResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>("");
  const [uploadedAWSImage, setUploadedImage] = useState("");

  const fetchCaption = async (
    image: File,
    category: string,
    upload?: string
  ) => {
    try {
      setLoading(true);
      let imageUrl = "";
      if (upload) {
        imageUrl = upload;
      } else {
        const response = await axios.post(
          BACKEND_URL + "upload",
          {
            image: image.name,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: isTrial
                ? "trial"
                : localStorage.getItem("token") ?? "",
            },
          }
        );
        const fileType = image.name.split(".").pop();
        await axios.put(response.data.presigned_url, image, {
          headers: {
            "Content-Type": `image/${fileType}`,
          },
        });
        imageUrl = S3_BUCKET_URL_PREFIX + response.data.filename;
        localStorage.setItem("UPLOAD", imageUrl);
        localStorage.setItem("today", new Date().toISOString());
      }

      const captionResponse = await axios.post(
        BACKEND_URL,
        {
          image: imageUrl,
          category,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: isTrial
              ? "trial"
              : localStorage.getItem("token") ?? "",
          },
        }
      );
      setUploadedImage(imageUrl);

      setCaptions(captionResponse.data);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    captions,
    loading,
    error,
    fetchCaption,
    uploadedAWSImage,
  };
};

export default useFetchCaption;
