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
    { label: "Sarcastic", isPremium: true },
    { label: "Sad", isPremium: false },
    { label: "Exciting", isPremium: false },
    { label: "Angry", isPremium: true },
    { label: "Movie", isPremium: true },
    { label: "Fearful", isPremium: true },
    { label: "Awkward", isPremium: true },
    { label: "Romantic", isPremium: true },
    { label: "Admiring", isPremium: true },
    { label: "Calming", isPremium: true },
    { label: "Horror", isPremium: true },
    { label: "Nostalgic", isPremium: false },
    { label: "Confusing", isPremium: true },
    { label: "Amusing", isPremium: true },
];


export const BACKEND_URL = "http://localhost:8000";


export const SEO_HEADER = {
    title: "CaptionImage   - Caption your photos",
    description: "Caption your photos and share them with your friends",
    url: "https://captionimage.ai",
    image: "/assets/images/logo.png",
}