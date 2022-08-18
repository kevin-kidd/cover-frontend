import React, {FunctionComponent} from "react";
import {usePersistentStore} from "../../stores/PersistentStore";
import {useModalStore} from "../../stores/ModalStore";
import Image from "next/image";
import metamaskIcon from "../../public/static/metamaskIcon.svg";
import keplrIcon from "../../public/static/keplrIcon.svg";
import {setupWebKeplr} from "../../func/secret";
import {useWalletStore} from "../../stores/WalletStore";

export const WalletModalContent: FunctionComponent = () => {

    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const updateWallet = usePersistentStore((state) => state.updateWallet);

    const setBalance = useWalletStore((state) => state.setBalance);
    const setClient = useWalletStore((state) => state.setClient);

    const connect = async (provider: string) => {
        if(provider === "keplr") {
            const wallet = await setupWebKeplr();
            if(wallet.error) {
                // TODO -- show error
            } else {
                setClient(wallet.client);
                setBalance(wallet.balance);
                updateWallet({
                   address: wallet.client.address,
                   connected: true,
                   provider: "keplr"
                });
                setIsOpen(false);
            }
        } else {
            // TODO - other wallets
        }
    };

    return (
        <>
            <p className="text-sm pr-4">Connect with one of our supported wallet providers.</p>
            <ul className="mt-4 mb-2 space-y-3">
                <li>
                    <a onClick={() => connect("keplr")}
                       className="hover:cursor-pointer transition duration-300 flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <Image src={keplrIcon} height="25" width="25" alt="metamask-logo" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Keplr</span>
                        <span className="
                            inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs
                            font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400
                        ">
                            Recommended
                        </span>
                    </a>
                </li>
                <li>
                    <a
                       className="hover:cursor-not-allowed transition duration-300 flex items-center p-3 text-base font-bold rounded-lg group dark:bg-gray-700 dark:text-white">
                        <Image src={metamaskIcon} height="25" width="25" alt="metamask-logo" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Metamask</span>
                        <span className="
                            inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs
                            font-medium rounded bg-gray-800 text-gray-400
                        ">
                            Coming Soon
                        </span>
                    </a>
                </li>
            </ul>
        </>
    )
};