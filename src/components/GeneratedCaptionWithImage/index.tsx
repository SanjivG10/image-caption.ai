import CaptionTypeChooser from "@components/CaptionTypeChooser";
import Image from "@components/Image";
import Spinner from "@components/Spinner";
import React, { useEffect, useState } from "react";
import { CAPTION_OPTIONS } from "src/constants";
import useFetchCaption from "src/hooks/useFetchCaption";
import { ICaptionResponse } from "src/types";

interface IGeneratedCaptionProps {
  uploadedImage: File;
}

const GeneratedCaptionWithImage = ({
  uploadedImage,
}: IGeneratedCaptionProps) => {
  const [generatedCaptions, setGeneratedCaptions] = useState<
    ICaptionResponse[]
  >([]);

  const [selectedCaptionType, setSelectedCaptionType] = useState(
    CAPTION_OPTIONS[0]
  );

  const {
    loading,
    fetchCaption,
    captions: fetchedCaptions,
  } = useFetchCaption();

  useEffect(() => {
    if (!(selectedCaptionType && uploadedImage)) {
      return;
    }
    (async () => {
      await fetchCaption(uploadedImage, selectedCaptionType);
    })();
  }, [selectedCaptionType]);

  useEffect(() => {
    if (!fetchedCaptions.length) {
      return;
    }

    const allCaptions = [...fetchedCaptions, ...generatedCaptions];
    const uniqueCaptionWithText = [
      ...new Set(allCaptions.map((caption) => caption.caption)),
    ];
    const allUniqueCaptions: ICaptionResponse[] = [];
    uniqueCaptionWithText.map((text) => {
      const caption = allCaptions.find((caption) => caption.caption === text);
      if (caption) return allUniqueCaptions.push(caption);
    });

    setGeneratedCaptions(allUniqueCaptions);
  }, [fetchedCaptions]);

  const copyCaptionToClipBoard = async (caption: string) => {
    navigator.clipboard.writeText(caption);
  };

  return (
    <>
      <div className="flex flex-col border-1 rounded-[10px] mt-4">
        <div
          onClick={() => window.location.reload()}
          className="my-1 p-1 hover:cursor-pointer rounded-lg max-w-[100px] border-2 border-secondary flex justify-center items-center "
        >
          Restart
        </div>
        <div className="mx-auto border-secondary">
          <Image image={uploadedImage} hasCancelButton={false} />
        </div>

        <CaptionTypeChooser
          loading={loading}
          selectedCaptionType={selectedCaptionType}
          setSelectedCaptionType={setSelectedCaptionType}
        />
        <div className="flex flex-col my-4">
          {loading && <Spinner />}
          {generatedCaptions.map((caption) => {
            return (
              <div
                key={caption.caption}
                onClick={() => copyCaptionToClipBoard(caption.caption)}
                className="relative mt-2 rounded-[4px] p-2 bg-[#fff] mx-2 border border-secondary hover:cursor-pointer hover:translate-y-[-1px] flex flex-col "
              >
                <img src="/copy.svg" width={24} alt="copy-icon" />
                <div className="">{caption.caption}</div>
                <i className="mr-auto text-[8px]">click to copy</i>
                <p className="absolute top-0 right-2 mr-2 italic text-[#bfbfbf] text-sm">
                  {caption.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GeneratedCaptionWithImage;
