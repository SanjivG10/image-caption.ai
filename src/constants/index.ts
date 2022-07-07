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
    // { label: "Fearful", isPremium: false },
    // { label: "Surprise", isPremium: false },
    // { label: "Disgust", isPremium: false },
    // { label: "Horror", isPremium: false },
    // { label: "Admirable", isPremium: false },
    // { label: "Amusing", isPremium: false },
    // { label: "Awkward", isPremium: false },
    // { label: "Interesting", isPremium: false },
    // { label: "Relieving", isPremium: false },
    // { label: "sexual desire", isPremium: false },
    // { label: "Movie related", isPremium: false },
    // { label: "boring", isPremium: false },
];


export const BACKEND_URL = "https://api.imagecaptionai.com/";


export const SEO_HEADER = {
    title: "CaptionImage   - Let AI Caption your image",
    description: "Caption your photos with AI",
    url: "https://imagecaptionai.com",
    image: "https://imagecaptionai.com" + "/homepage.png",
}