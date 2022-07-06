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


export const BACKEND_URL = "https://api.imagecaptionai.com";


export const SEO_HEADER = {
    title: "CaptionImage   - Caption your photos",
    description: "Caption your photos and share them with your friends",
    url: "https://captionimage.ai",
    image: "/assets/images/logo.png",
}