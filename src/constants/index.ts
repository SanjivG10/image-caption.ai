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
  "Romantic",
}

export const CAPTION_OPTIONS_MAP = [
  { label: "Happy", isPremium: false },
  { label: "Sarcastic", isPremium: false },
  { label: "Sad", isPremium: false },
  { label: "Exciting", isPremium: false },
  { label: "Angry", isPremium: false },
  { label: "Romantic", isPremium: false },
  { label: "Nostalgic", isPremium: false },
  { label: "Philosophical", isPremium: false },
  { label: "Movie-Quote", isPremium: false },
  { label: "Fearful", isPremium: false },
  { label: "Surprise", isPremium: false },
  { label: "Disgust", isPremium: false },
  { label: "Horror", isPremium: false },
  { label: "Admirable", isPremium: false },
  { label: "Amusing", isPremium: false },
  { label: "Awkward", isPremium: false },
  { label: "Interesting", isPremium: false },
  { label: "Relieving", isPremium: false },
  { label: "Boring", isPremium: false },
];

export const BACKEND_URL =
  process.env["NODE_ENV"] === "production"
    ? "https://api.imagecaptionai.com/"
    : "http://localhost:9999/";

export const S3_BUCKET_URL_PREFIX =
  "https://imagecaptionai.s3.us-west-2.amazonaws.com/";

export const SEO_HEADER = {
  title: "CaptionImage   - Let AI Caption your image",
  description: "Caption your photos with AI",
  url: "https://imagecaptionai.com",
  image: "https://imagecaptionai.com" + "/homepage.png",
};
