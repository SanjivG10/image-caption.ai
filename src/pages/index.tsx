import GeneratedCaptionWithImage from "@components/GeneratedCaptionWithImage";
import Header from "@components/Header";
import InfoHeader from "@components/InfoHeader";
import Modal from "@components/Modal";
import SignInForm from "@components/SignInForm";
import UploadButton from "@components/Upload";
import { ModalContext } from "@context/modal";
import { Script } from "gatsby";
import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const componentToRender = () => {
    if (uploadedImage) {
      return <GeneratedCaptionWithImage uploadedImage={uploadedImage} />;
    }

    return (
      <>
        <Script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SgqXHu" />

        <div>
          <InfoHeader />
          <div className="flex flex-col items-center mt-2">
            <UploadButton
              setError={setError}
              setUploadedImage={setUploadedImage}
              isLoggedIn={isLoggedIn}
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
            title={isSignIn ? "Sign In" : "Register"}
            body={<SignInForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />}
          />
          <div className={`${showSignInModal ? "hidden" : ""}`}>
            {componentToRender()}
          </div>
          <div className=" m-2">
            {error && <p className="text-[#ff0000]">{error}</p>}
          </div>
        </div>
      </main>
    </ModalContext.Provider>
  );
};

export default IndexPage;
