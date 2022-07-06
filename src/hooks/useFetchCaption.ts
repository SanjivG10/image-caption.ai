import { useState } from "react";
import { ICaptionResponse } from "src/types";
import { BACKEND_URL } from 'src/constants';

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
            const response = await fetch(BACKEND_URL, {
                method: "POST",
                body: formData
            });
            const data: ICaptionResponse = await response.json();
            setCaptions([data]);
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