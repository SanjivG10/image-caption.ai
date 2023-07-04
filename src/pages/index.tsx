import FAQ from "@components/FAQ";
import GeneratedCaptionWithImage from "@components/GeneratedCaptionWithImage";
import Header from "@components/Header";
import InfoHeader from "@components/InfoHeader";
import UploadButton from "@components/Upload";
import { ModalContext } from "@context/modal";
import React, { useState } from "react";
import { Script } from "gatsby";

const IndexPage = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(true);

  const componentToRender = () => {
    if (uploadedImage) {
      return <GeneratedCaptionWithImage uploadedImage={uploadedImage} />;
    }

    return (
      <>
        <Script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SgqXHu" />

        <InfoHeader />
        <div className="flex flex-col items-center mt-2">
          <UploadButton
            setError={setError}
            setUploadedImage={setUploadedImage}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8 text-center">
          Thank you everyone for visiting. This is{" "}
          <a
            style={{
              color: "blue",
            }}
            href="https://www.instagram.com/_sanjivgautam/"
            target="blank"
          >
            Sanjiv
          </a>
          , we have relaunched the app.
        </div>
      </>
    );
  };

  return (
    <ModalContext.Provider value={{ show: showModal, setShow: setShowModal }}>
      <main className="m-0 p-0 min-h-screen flex flex-col">
        <Header />
        <div className="text-center grow flex flex-col justify-center items-center">
          {componentToRender()}
          <div className=" m-2">
            {error && <p className="text-[#ff0000]">{error}</p>}
          </div>
        </div>
      </main>
      <FAQ />
      {/* <ContactComponent /> */}
    </ModalContext.Provider>
  );
};

export default IndexPage;
