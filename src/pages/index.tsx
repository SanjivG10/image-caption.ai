import GeneratedCaptionWithImage from "@components/GeneratedCaptionWithImage";
import Header from "@components/Header";
import AiImageCaptionGeneratorBlogContent from "@components/Info";
import InfoHeader from "@components/InfoHeader";
import Modal from "@components/Modal";
import SignInForm from "@components/SignInForm";
import UploadButton from "@components/Upload";
import { ModalContext } from "@context/modal";
import { Script } from "gatsby";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const isTimeGreaterThanOneDay = (date1: Date, date2: Date) => {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  const timeDifference = Math.abs(date1.getTime() - date2.getTime());

  return timeDifference > oneDayMilliseconds;
};

const IndexPage = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTrial, setIsTrial] = useState(false);

  ReactGA.initialize("G-SWGZG00FX2");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const todayCaptionString = localStorage.getItem("today");
    if (!todayCaptionString) {
      setIsTrial(true);
      return;
    }
    if (todayCaptionString) {
      const captionedDate = new Date(todayCaptionString);
      const date = new Date();
      if (isTimeGreaterThanOneDay(date, captionedDate)) {
        return setIsTrial(true);
      }
    }

    if (token) {
      setIsLoggedIn(true);
    }
  }, [showSignInModal]);

  const componentToRender = () => {
    if (uploadedImage) {
      return (
        <GeneratedCaptionWithImage
          uploadedImage={uploadedImage}
          isTrial={isTrial}
        />
      );
    }

    return (
      <>
        <Script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7316689194254147"
        />

        <div>
          <InfoHeader />
          <div className="flex flex-col items-center mt-2">
            <UploadButton
              setError={setError}
              setUploadedImage={setUploadedImage}
              isLoggedIn={isLoggedIn}
              isTrial={isTrial}
              setSignInModal={setShowSignInModal}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <ModalContext.Provider value={{ show: showModal, setShow: setShowModal }}>
      <main className="m-0 p-0 min-h-screen flex flex-col">
        <Header />
        <div
          className={`text-center grow flex flex-col justify-center items-center`}
        >
          <Modal
            show={showSignInModal}
            setShow={setShowSignInModal}
            title={
              isSignIn ? "Please sign in to continue. Its free" : "Register"
            }
            body={
              <SignInForm
                setShowSignInModal={setShowSignInModal}
                isSignIn={isSignIn}
                setIsSignIn={setIsSignIn}
              />
            }
          />
          <div className={`${showSignInModal ? "hidden" : ""}`}>
            {componentToRender()}
          </div>
          <div className=" m-2">
            {error && <p className="text-[#ff0000]">{error}</p>}
          </div>
        </div>
      </main>
      <AiImageCaptionGeneratorBlogContent />
    </ModalContext.Provider>
  );
};

export default IndexPage;
