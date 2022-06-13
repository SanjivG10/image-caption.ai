import CaptionTypeChooser from '@components/CaptionTypeChooser';
import Image from '@components/Image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CAPTION_OPTIONS } from 'src/constants';
import useFetchCaption from 'src/hooks/useFetchCaption';
import { ICaptionResponse } from 'src/types';


interface IGeneratedCaptionProps {
    captions: ICaptionResponse[];
    uploadedImage: File;
    isPaidUser?: boolean
    setGeneratedCaptions: Dispatch<SetStateAction<ICaptionResponse[]>>
}

const GeneratedCaptionWithImage = ({ captions, uploadedImage, isPaidUser = false, setGeneratedCaptions }: IGeneratedCaptionProps) => {

    const [selectedCaptionType, setSelectedCaptionType] = useState(CAPTION_OPTIONS[0]);

    const { loading, error, fetchCaption, captions: latestCaptions } = useFetchCaption();

    useEffect(() => {
        (async () => {
            await fetchCaption(uploadedImage, selectedCaptionType);
        })();

    }, [selectedCaptionType]);

    useEffect(() => {
        if (latestCaptions.length && !loading && !error) {
            const totalCaptions = [...captions, ...latestCaptions];
            const uniqueCaptionsText = totalCaptions.map((caption) => caption.caption);
            const allCaptionsText = [...new Set(uniqueCaptionsText)];
            const allCaptions = totalCaptions.filter((caption) => allCaptionsText.find((uniqueCaption) => uniqueCaption === caption.caption));
            setGeneratedCaptions(allCaptions);
        }
    }, [latestCaptions, loading, error]);

    const copyCaptionToClipBoard = async (caption: string, index: number) => {
        navigator.clipboard.writeText(caption);
    }

    return (
        <>
            <div className='flex flex-col border-1 rounded-[10px] mt-4'>
                <div className='mx-auto'>
                    <Image image={uploadedImage} hasCancelButton={false} />
                </div>
                {
                    isPaidUser &&
                    <CaptionTypeChooser selectedCaptionType={selectedCaptionType} setSelectedCaptionType={setSelectedCaptionType} />
                }
                <div className='flex flex-col my-4'>
                    {captions.map((caption, index) => {
                        return <div className='relative mt-2 rounded-[4px] p-2 bg-[#fff] mx-2 flex flex-col border border-secondary hover:cursor-pointer hover:translate-y-[-5px] '>
                            <div onClick={() => copyCaptionToClipBoard(caption.caption, index)} className='flex items-center'>
                                <img alt="copy-icon" src='/assets/copy.svg' />
                                <div className='ml-2'>
                                    {caption.caption}
                                </div>
                            </div>
                            <p className='ml-auto mr-2 italic text-[#bfbfbf] text-sm'>{caption.type}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default GeneratedCaptionWithImage