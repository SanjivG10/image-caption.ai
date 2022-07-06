import React, { Dispatch, SetStateAction } from 'react'

interface IModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    title?: string;
    body?: React.ReactNode;
}

const Modal = ({ show, setShow, title, body }: IModalProps) => {
    return (
        show ?
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#fff] border-b border-solid outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 rounded-t">
                                <h3 className="text-xl font-semibold text-center">
                                    {title}
                                </h3>
                            </div>
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>
                            <div className="flex items-center justify-end p-6">
                                <button
                                    className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShow(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </> : <></>
    )
}

export default Modal