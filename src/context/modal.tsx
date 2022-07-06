import { createContext, Dispatch, SetStateAction } from "react"

export const ModalContext = createContext<{
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>
}>({
    show: false,
    setShow: () => { }
});