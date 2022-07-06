export enum CAPTION_OPTIONS {
    "Happy",
    "Sad",
    "Fear",
    "Anger",
    "Disgusting",
    "Sarcastic",
    "Boring",
    "Awkward",
    "Exciting",
    "Romantic"
}

export const CAPTION_OPTIONS_MAP = [
    { label: "Happy", isPremium: false },
    { label: "Sarcastic", isPremium: false },
    { label: "Sad", isPremium: false },
    { label: "Exciting", isPremium: false },
    { label: "Angry", isPremium: false },
    { label: "Romantic", isPremium: false },
    { label: "Nostalgic", isPremium: false },
    { label: "Motivational", isPremium: false },
];


export const BACKEND_URL = "http://localhost:5000/";


export const SEO_HEADER = {
    title: "CaptionImage   - Let AI Caption your image",
    description: "Caption your photos with AI",
    url: "https://captionimageai.com",
    image: "/assets/images/logo.png",
}