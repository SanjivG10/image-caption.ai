
export interface ICaptionResponse {
    caption: string;
    type: CAPTION_OPTIONS
}


export interface IEmotionLabel {
    emotion: string;
    isActive?: boolean;
    setSelectionCaptionType: Dispatch<SetStateAction<string>>;
}

export interface ICaptionTypeChooserProps {
    selectedCaptionType: string;
    setSelectedCaptionType: Dispatch<SetStateAction<string>>;
}

