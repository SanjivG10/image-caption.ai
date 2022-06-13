import { useState } from "react";
import { ICaptionResponse } from "src/types";
import { BACKEND_URL } from 'src/constants';

const useFetchCaption = () => {

    const [captions, setCaptions] = useState<ICaptionResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>("");

    const fetchCaption = async (image: File, selectedCaption = "") => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("selectedCaption", selectedCaption);

        // for demo only
        if (!selectedCaption) {
            setCaptions([{
                type: "Sarcastic",
                caption: "This is a sarcastic comment"
            }])
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(BACKEND_URL, {
                method: "POST",
                body: formData
            });
            const data: ICaptionResponse[] = await response.json();
            setCaptions(data);
        }
        catch (error) {
            setError(error)
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