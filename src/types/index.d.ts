
export interface ICaptionResponse {
    caption: string;
    type: CAPTION_OPTIONS
}


export interface IEmotionLabel {
    emotion: string;
    isPremium: boolean;
    setSelectionCaptionType: Dispatch<SetStateAction<string>>;
    isActive?: boolean;
}

export interface ICaptionTypeChooserProps {
    selectedCaptionType: string;
    setSelectedCaptionType: Dispatch<SetStateAction<string>>;
}

