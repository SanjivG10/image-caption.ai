import { useState } from "react";
import { ICaptionResponse } from "src/types";
import { BACKEND_URL } from 'src/constants';
import axios from "axios"


async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}

const useFetchCaption = () => {

    const [captions, setCaptions] = useState<ICaptionResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>("");

    const fetchCaption = async (image: string, selectedCaptionType: string) => {
        try {
            const formData = new FormData();
            const imageFile = await dataUrlToFile(image, "image.jpg");
            formData.append("image", imageFile);
            formData.append("category", selectedCaptionType);


            setLoading(true);
            const response = await axios.post(BACKEND_URL,
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setCaptions([response.data]);
        }
        catch (error) {
            console.error(error);
            setError("Something went wrong");
        }
        finally {
            setLoading(false)
        }
    }

    return {
        captions,
        loading,
        error,
        fetchCaption
    }
}



export default useFetchCaption;