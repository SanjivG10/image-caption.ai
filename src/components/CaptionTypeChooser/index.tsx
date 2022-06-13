import React from 'react';
import { CAPTION_OPTIONS_MAP } from "src/constants";
import { ICaptionTypeChooserProps, IEmotionLabel } from 'src/types';

const EmotionLabel = ({ emotion, setSelectionCaptionType, isActive = false }: IEmotionLabel) => {
    const handleSelectedCaptionType = () => {
        setSelectionCaptionType(emotion);
    }

    return (
        <p className={`p-2 mt-2 p-2 border-2 border-secondary rounded ml-2 hover:cursor-pointer ${isActive && "bg-secondary text-[#fff]"}`} onClick={handleSelectedCaptionType}>
            {emotion}
        </p>
    )
}


const CaptionTypeChooser = (props: ICaptionTypeChooserProps) => {
    const { selectedCaptionType, setSelectedCaptionType } = props;
    return <div className="mb-10">
        <h3 className="mt-2 font-bold text-[20px]">Select a caption type</h3>
        <div className="flex justify-center items-center flex-wrap">
            {CAPTION_OPTIONS_MAP.map((emotion) => {
                return <EmotionLabel key={emotion} emotion={emotion} isActive={emotion === selectedCaptionType} setSelectionCaptionType={setSelectedCaptionType} />
            })}
        </div>
    </div>
}


export default CaptionTypeChooser;