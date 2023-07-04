import { useState } from "react";
import { ICaptionResponse } from "src/types";
import { BACKEND_URL, S3_BUCKET_URL_PREFIX } from "src/constants";
import axios from "axios";

async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
  const res: Response = await fetch(dataUrl);
  const blob: Blob = await res.blob();
  return new File([blob], fileName, { type: "image/png" });
}

const useFetchCaption = () => {
  const [captions, setCaptions] = useState<ICaptionResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>("");

  const fetchCaption = async (image: File, category: string) => {
    try {
      setLoading(true);
      const response = await axios.post(
        BACKEND_URL + "upload",
        {
          image: image.name,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      await axios.put(response.data.presigned_url, image);
      const captionResponse = await axios.post(
        BACKEND_URL,
        {
          image: S3_BUCKET_URL_PREFIX + response.data.filename,
          category,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
  };
};

export default useFetchCaption;
