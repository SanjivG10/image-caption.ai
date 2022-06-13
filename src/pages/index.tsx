import React, { useEffect, useState } from "react";
import InfoHeader from "@components/InfoHeader";
import UploadButton from "@components/Upload";
import GeneratedCaptionWithImage from "@components/GeneratedCaptionWithImage";
import Spinner from "@components/Spinner";
import Image from "@components/Image";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import { ICaptionResponse } from "src/types";
import useFetchCaption from "src/hooks/useFetchCaption";

const IndexPage = () => {

  const [uploadedImage, setUploadedImage] = useState<File>();
  const [error, setError] = useState("");
  const [generatedCaptions, setGeneratedCaptions] = useState<ICaptionResponse[]>([]);
  const [isPaidUser, setIsPaidUser] = useState(true);
  const { loading, error: fetchError, fetchCaption, captions } = useFetchCaption();

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
    }
  }, [fetchError]);

  const onCancelButtonClicked = () => {
    setUploadedImage(undefined);
  }

  const onNextClick = async () => {
    if (!uploadedImage) {
      setError("Please upload an image");
      return;
    }
    await fetchCaption(uploadedImage);
  }

  const componentToRender = () => {
    if (uploadedImage && generatedCaptions.length) {
      return <GeneratedCaptionWithImage setGeneratedCaptions={setGeneratedCaptions} uploadedImage={uploadedImage} captions={generatedCaptions} isPaidUser={isPaidUser} />
    }
    else if (uploadedImage) {
      return <div className="flex flex-col justify-center items-center">
        <Image onCancel={onCancelButtonClicked} image={uploadedImage} />
        {
          loading ? <Spinner />
            :
            <button disabled={Boolean(error)} className="mt-5 p-2 border-1 bg-secondary text-[#fff] rounded-[4px] w-[120px]" onClick={onNextClick}>
              Next
            </button>}
      </div>
    }

    return <>
      <InfoHeader />
      <div className="flex flex-col items-center mt-2">
        <UploadButton setError={setError} setUploadedImage={setUploadedImage} />
      </div>
    </>

  }

  return (
    <main className="m-0 p-0 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="text-center grow flex flex-col justify-center items-center">
        {componentToRender()}
        <div className=" m-2">
          {error && <p className="text-[#ff0000]">{error}</p>}
        </div>
      </div>
    </main>
  )
}

export default IndexPage
