import React, {Fragment, FunctionComponent, ReactElement, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/solid";
import {useModalStore} from "../stores/modalStore";
import Image from "next/image";
import metamaskIcon from "../static/metamaskIcon.svg";
import keplrIcon from "../static/keplrIcon.svg";
import {usePersistentStore} from "../stores/Persistent";

{/* LIST OF MODAL CONTENT COMPONENTS */}
const WalletModalContent: FunctionComponent = () => {

    const updateWallet = usePersistentStore((state) => state.updateWallet);
    const setIsOpen = useModalStore((state) => state.setIsOpen);

    const connect = () => {
        updateWallet({
            connected: true,
            address: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek"
        });
        setIsOpen(false);
    };

    return (
        <>
            <p className="text-sm pr-4">Connect with one of our supported wallet providers.</p>
            <ul className="mt-4 mb-2 space-y-3">
                <li>
                    <a onClick={connect}
                       className="hover:cursor-pointer flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <Image src={keplrIcon} height="25" width="25" alt="metamask-logo" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Keplr</span>
                        <span
                            className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Recommended</span>
                    </a>
                </li>
                <li>
                    <a onClick={connect}
                       className="hover:cursor-pointer flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <Image src={metamaskIcon} height="25" width="25" alt="metamask-logo" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Metamask</span>
                    </a>
                </li>
            </ul>
        </>
    )
};

export const Modal: FunctionComponent = () => {

    const isOpen = useModalStore((state) => state.isOpen);
    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const name = useModalStore((state) => state.name);
    const title = useModalStore((state) => state.title);

    const [modalContent, setModalContent] = useState<ReactElement>();

    useEffect(() => {
        if(name === "select-wallet") {
            setModalContent(<WalletModalContent />);
        }
    }, [name]);

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
