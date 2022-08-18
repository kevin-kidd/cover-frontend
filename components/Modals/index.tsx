import React, {Fragment, FunctionComponent, ReactElement, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/solid";
import {useModalStore} from "../../stores/ModalStore";
import {WalletModalContent} from "./SelectWallet";
import {DepositModal, WithdrawModal, WrapModal} from "./AssetManagement";


{/* LIST OF MODAL CONTENT COMPONENTS */}
const modals = {
    "select-wallet": <WalletModalContent />,
    "wrap-asset": <WrapModal />,
    "deposit-asset": <DepositModal />,
    "withdraw-asset": <WithdrawModal />,
    "default": <></>
};

const Modal: FunctionComponent = () => {

    const isOpen = useModalStore((state) => state.isOpen);
    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const name = useModalStore((state) => state.name);
    const title = useModalStore((state) => state.title);


    const modalContent = modals[name] ?? modals.default;

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}
        >
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50 my-auto h-screen">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="flex min-h-full items-center justify-center">

                        <Dialog.Panel className="mx-auto max-w-96 rounded bg-[#0D1822] rounded-xl shadow-xl">
                            <div className="flex justify-between w-full pt-2 px-4">
                                <p className="modal-title text-lg">
                                    { title }
                                </p>
                                <XIcon className="w-6 h-6 hover:cursor-pointer" onClick={() => setIsOpen(false)} />
                            </div>
                            <div className="p-5 w-full">
                                { modalContent }
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
};

export default Modal;