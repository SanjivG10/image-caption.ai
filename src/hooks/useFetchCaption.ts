import { useState } from "react";
import { ICaptionResponse } from "src/types";
import { BACKEND_URL } from 'src/constants';
import axios from "axios"

const useFetchCaption = () => {

    const [captions, setCaptions] = useState<ICaptionResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>("");

    const fetchCaption = async (image: File, selectedCaptionType: string) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("category", selectedCaptionType);


        try {
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