import PremiumPlanChooser from "@components/PremiumPlanChooser";
import { ModalContext } from "@context/modal";
import React, { useContext } from "react";
import Modal from ".";


const PricingModal = () => {
    const { setShow, show } = useContext(ModalContext);

    return (
        <Modal show={show} setShow={setShow} title="One step away" body={<>
            <PremiumPlanChooser />
        </>} />
    )
}

export default PricingModal;
