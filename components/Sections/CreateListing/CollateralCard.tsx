import React, {FunctionComponent, useEffect, useState} from "react";
import {useCreateListingStore} from "../../../stores/CreateListingStore";
import {CollectionSearchBox, TokenSearchBox} from "./Inputs";
import {usePersistentStore} from "../../../stores/PersistentStore";
import { Transition } from "@headlessui/react";
import {ArrowLeftIcon} from "@heroicons/react/solid";
import {Token, useAssetStore} from "../../../stores/AssetStore";
import {getSnip20Balance} from "../../../func/queries";
import {useWalletStore} from "../../../stores/WalletStore";
import {useBalanceStore} from "../../../stores/BalanceStore";
import {getSnip20Permit} from "../../../func/secret";
import {useModalStore} from "../../../stores/ModalStore";
import Image from "next/image";

export const CollateralCard: FunctionComponent = () => {
    const setModalIsOpen = useModalStore((state) => state.setIsOpen);
    const setModalTitle = useModalStore((state) => state.setTitle);
    const setModalName = useModalStore((state) => state.setName);
    const collateralState = useCreateListingStore((state) => state.collateral);
    const client = useWalletStore((state) => state.client);
    const createListingToggle = usePersistentStore((state) => state.config.toggles.createListingToggle);
    const tokenBalances = useBalanceStore((state) => state.tokenBalances);
    const snip20 = useAssetStore((state) => state.assets.snip20);
    const [collateralBalance, setCollateralBalance] = useState<number>();

    const resetCollateral = () => {
        collateralState.setToken(undefined);
        collateralState.setType(undefined);
        collateralState.setAmount(-1);
    };

    const handleKeyDown = (e) => {
        if(e.code === "Backspace" && e.target.valueAsNumber === 0) {
            collateralState.setAmount(-1);
        }
    };

    useEffect(() => {
        const getBalance = async (token: Token) => {
            setCollateralBalance(undefined);
            const tokenBalance = tokenBalances.find(
                (tokenBalance) => tokenBalance.address === token.details.contract.address
            );
            if(tokenBalance) {
                setCollateralBalance(tokenBalance.type === "native" ? tokenBalance.unwrapped.balance : tokenBalance.balance);
                return;
            }
            if(token.permit) {
                const balance = await getSnip20Balance(client, token);
                if(balance !== null) {
                    setCollateralBalance(balance);
                    return;
                }
            }
            setCollateralBalance(-1);
        };
        if(collateralState.token && createListingToggle === "Lending") {
            try {
                getBalance(collateralState.token);
            } catch (e) {
                console.error(e);
                // TODO -- add error handling
            }
        }
    }, [collateralState.token, snip20.tokens, client]);

    const handlePermit = async () => {
        if(!client) {
            setModalName("select-wallet");
            setModalTitle("Connect a wallet");
            setModalIsOpen(true);
            return
        }
        const newToken = { ...collateralState.token };
        const permit = await getSnip20Permit(client, newToken);
        if(permit === null) {
            // Display error TODO
            return;
        }
        newToken.permit = permit;
        if(snip20.tokens && snip20.tokens.some((token) => token.details.contract.address === newToken.details.contract.address)) {
            snip20.updateToken(newToken);
            collateralState.setToken(newToken);
        } else {
            snip20.addToken(newToken);
            collateralState.setToken(newToken);
        }
    };

    return (
        <Transition
            show={true}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="bg-[#1A2128] w-full max-w-md mx-auto h-full rounded-lg px-10 py-6 flex flex-col items-center relative">
                <h5 className="absolute bottom-2 right-3 text-gray-400">Step 2</h5>
                <h2 className="card-title mb-3">
                    { createListingToggle === "Lending" ? "Asking as Collateral" : "Offering as Collateral" }
                </h2>

                { !collateralState.type && (
                    <div className="mt-4 mb-6 w-full flex flex-col items-center h-full justify-center">
                        <TokenSearchBox type={"collateral"} />
                        <p className="py-3 text-white text-lg">
                            or
                        </p>
                        <CollectionSearchBox />
                    </div>
                )}

                {  collateralState.type === "snip20" && (
                    <div className="flex flex-col gap-y-2 w-full items-center relative bg-[#13181d] rounded-lg p-2 mb-4 mt-4">
                        <ArrowLeftIcon className="w-5 h-5 absolute left-2 top-2 hover:cursor-pointer"
                                       onClick={resetCollateral}
                        />
                        <p className="font-semibold">
                            Token:
                            <span className="font-normal">
                                {" " + collateralState.token.details.name}
                            </span>
                        </p>
                        <div className="font-semibold">
                            <span>Balance:</span>
                            <div className="font-normal inline-flex ml-1 items-end">
                                { collateralBalance === undefined ?
                                    <svg className="animate-spin h-4 w-4 text-white ml-1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"/>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                    </svg> : null
                                }
                                { collateralBalance && collateralBalance === -1 ?
                                    <>
                                        { collateralState.token.permit ?
                                            <div className="tooltip tooltip-error" data-tip="Failed to fetch balance." onClick={handlePermit}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 -mb-1 fill-red-400 hover:cursor-pointer">
                                                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            :
                                            <div className="tooltip tooltip-error flex justify-center ml-1" data-tip="Create a permit">
                                                <Image src="/static/lock.svg" alt="Unlock" width="16" height="20"
                                                       className="hover:cursor-pointer" onClick={handlePermit} />
                                            </div>
                                        }
                                    </>
                                    :
                                    collateralBalance
                                }
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-flow-col auto-cols-max gap-x-4 text-white mt-3">
                    { collateralState.type === "snip20" || (collateralState.type && createListingToggle === "Lending") ?
                        <>
                                <div className="w-full flex justify-center gap-x-4 text-white">
                                    <p>Amount:</p>
                                    <input type="number" value={collateralState.amount === -1 ? "" : collateralState.amount}
                                           className="w-20 h-7 text-tiny bg-transparent rounded-lg border border-accent focus:ring-0 focus:border-accent"
                                           onChange={(e) => {
                                               createListingToggle === "Borrowing" && collateralBalance && Number(e.target.value) > collateralBalance ?
                                                   collateralState.setAmount(collateralBalance) : collateralState.setAmount(Number(e.target.value))
                                           }}
                                           onKeyDown={handleKeyDown}
                                    />
                                </div>
                        </> : null
                    }
                </div>
            </div>
        </Transition>
    )
};