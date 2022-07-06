
export interface ICaptionResponse {
    caption: string;
}


export interface IEmotionLabel {
    emotion: string;
    isPremium: boolean;
    setSelectionCaptionType: Dispatch<SetStateAction<string>>;
    isActive?: boolean;
    loading: boolean
}

export interface ICaptionTypeChooserProps {
    selectedCaptionType: string;
    setSelectedCaptionType: Dispatch<SetStateAction<string>>;
    loading: boolean
}

