import GeneratedCaptionWithImage from "@components/GeneratedCaptionWithImage";
import Header from "@components/Header";
import InfoHeader from "@components/InfoHeader";
import Navbar from "@components/Navbar";
import UploadButton from "@components/Upload";
import React, { useState } from "react";

const IndexPage = () => {

  const [uploadedImage, setUploadedImage] = useState<File>();
  const [error, setError] = useState("");


  const componentToRender = () => {
    if (uploadedImage) {
      return <GeneratedCaptionWithImage uploadedImage={uploadedImage} />
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
