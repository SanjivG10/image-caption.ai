import React from 'react';
import { CAPTION_OPTIONS_MAP } from "src/constants";
import { ICaptionTypeChooserProps, IEmotionLabel } from 'src/types';

const EmotionLabel = ({ emotion, setSelectionCaptionType, isActive = false, isPremium = false }: IEmotionLabel) => {
    const handleSelectedCaptionType = () => {
        setSelectionCaptionType(emotion);
    }

    return (
        <div onClick={handleSelectedCaptionType} className={`flex flex-col min-w-[100px] justify-center items-center p-2 mt-2 border-2 border-secondary mx-2 rounded hover:cursor-pointer  ${isActive && "text-[#fff]  bg-secondary"} `}>
            {isPremium && <img alt="premium-logo" src={isActive ? "/assets/diamond_white.svg" : "/assets/diamond.svg"} width={"16px"} />}
            <p >
                {emotion}
            </p>
        </div>
    )
}


const CaptionTypeChooser = (props: ICaptionTypeChooserProps) => {
    const { selectedCaptionType, setSelectedCaptionType } = props;
    return <>
        <h3 className="mt-2 font-bold text-[20px]">Select caption type</h3>
        <div className="flex max-w-[350px] no-scrollbar overflow-x-scroll mx-auto">
            {CAPTION_OPTIONS_MAP.map((emotion) => {
                return <EmotionLabel key={emotion.label} emotion={emotion.label} isPremium={emotion.isPremium} isActive={emotion.label === selectedCaptionType} setSelectionCaptionType={setSelectedCaptionType} />
            })}
        </div>
    </>
}


export default CaptionTypeChooser;