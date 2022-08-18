import {FunctionComponent, ReactElement, useMemo} from "react";
import {Token, useAssetStore} from "../../stores/AssetStore";
import {useModalStore} from "../../stores/ModalStore";
import {useWalletStore} from "../../stores/WalletStore";
import {getSnip20Permit} from "../../func/secret";
import Image from "next/image";
import {ExternalLinkIcon, XIcon} from "@heroicons/react/solid";
import {useBalanceStore} from "../../stores/BalanceStore";

export const TableItem: FunctionComponent<{token: Token}> = ({token})  => {
    const setModalIsOpen = useModalStore((state) => state.setIsOpen);
    const setModalTitle = useModalStore((state) => state.setTitle);
    const setModalName = useModalStore((state) => state.setName);
    const setAsset = useModalStore((state) => state.setAsset);
    const client = useWalletStore((state) => state.client);
    const snip20 = useAssetStore((state) => state.assets.snip20);

    const tokenBalances = useBalanceStore((state) => state.tokenBalances);

    const tokenBalance = useMemo(
        () => tokenBalances.find(
            (tokenBalance) => tokenBalance.address === token.details.contract.address
        ), [tokenBalances]
    );

    const handlePermit = async () => {
        if(!client) {
            setModalName("select-wallet");
            setModalTitle("Connect a wallet");
            setModalIsOpen(true);
            return
        }
        let newToken = {...token};
        let permit = await getSnip20Permit(client, newToken);
        if(permit === null) {
            // Display error TODO
            return;
        }
        newToken.permit = permit;
        if(snip20.tokens && snip20.tokens.some((token) => token.details.contract.address === newToken.details.contract.address)) {
            snip20.updateToken(newToken);
        } else {
            snip20.addToken(newToken);
        }
    };

    const openPopup = (type: string) => {
        if(!client) {
            setModalName("select-wallet");
            setModalTitle("Connect a wallet");
            setModalIsOpen(true);
            return
        }
        if(type === "wrap") {
            setModalName("wrap-asset");
            setModalTitle("Wrap/Unwrap SCRT");
            setAsset({
                name: {
                    wrapped: token.details.name,
                    unwrapped: token.details.name.slice(1)
                },
                address: token.details.contract.address
            });
        } else if(type === "deposit") {
            setModalName("deposit-asset");
            setModalTitle("Deposit and Wrap IBC Asset");
            setAsset({
                name: {
                    wrapped: token.details.name,
                    unwrapped: token.details.name.slice(1)
                },
                address: token.details.contract.address
            });
        } else if(type === "withdraw") {
            setModalName("withdraw-asset");
            setModalTitle("Withdraw and Unwrap IBC Asset");
            setAsset({
                name: {
                    wrapped: token.details.name,
                    unwrapped: token.details.name.slice(1)
                },
                address: token.details.contract.address
            });
        }
        setModalIsOpen(true);
    };

    const assetName: ReactElement = (
        <>
            <div className="justify-center items-center flex col-start-2 h-8 w-8 sm:h-11 sm:w-11">
                <Image
                    src={token.details.icon ?? "https://res.cloudinary.com/drgbtjcgt/image/upload/v1663144475/unknownToken_zfyslv.svg"}
                    alt={token.details.name} width="50" height="50"
                />
            </div>
            <div className="col-start-3 col-span-3 xl:col-span-2 flex flex-col items-center">
                <p className="text-white text-sm sm:text-base">
                    { token.details.name }
                </p>
                <p className="text-[#cccccc] font-light text-xs hidden md:flex truncate">
                    { token.details.network ?? "Secret Network" }
                </p>
            </div>
        </>
    );

    let depositWithdrawOptions = {
        sSCRT:
            <>
                <p className="text-[#7BBD75] text-sm hidden md:block cursor-pointer" onClick={() => { openPopup("wrap") }}>
                    Wrap to { token.details.name }
                </p>
                <p className="text-[#7BBD75] text-sm hidden md:block cursor-pointer" onClick={() => { openPopup("wrap") }}>
                    Unwrap { token.details.name }
                </p>
                <p className="text-[#7BBD75] text-xs md:hidden cursor-pointer" onClick={() => { openPopup("wrap") }}>
                    Wrap / Unwrap
                </p>
            </>,
        ibc:
            <>
                <p className="text-[#7BBD75] text-sm hidden md:block cursor-pointer" onClick={() => { openPopup("deposit") }}>
                    Deposit via IBC
                </p>
                <p className="text-[#7BBD75] text-sm hidden md:block cursor-pointer" onClick={() => { openPopup("withdraw") }}>
                    Withdraw via IBC
                </p>
                <p className="text-[#7BBD75] text-xs md:hidden cursor-pointer" onClick={() => { openPopup("deposit") }}>
                    Deposit / Withdraw
                </p>
            </>,
        bridged:
            <div className="flex flex-col col-span-1 md:col-span-2 cursor-pointer">
                <a className="inline-flex text-[#7BBD75] text-xs md:text-sm items-center">
                    Go to the bridge
                    <ExternalLinkIcon className="ml-0.5 h-4 w-4" />
                </a>
            </div>
    };

    const balanceNotFound: ReactElement = (
        <div className="tooltip tooltip-error" data-tip="Failed to fetch balance." onClick={handlePermit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 mt-1.5 fill-red-400 hover:cursor-pointer">
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
        </div>
    );

    return (
        <div className="w-full bg-[#1A2128] rounded-xl mt-3 relative sm:py-2">
            <div className="grid grid-cols-3 md:grid-cols-4 place-items-center h-12">

                <div className="grid grid-cols-5 items-center w-full h-full">
                    { assetName }
                </div>

                { tokenBalance ?
                    <>
                        { tokenBalance.balance === -1 ?
                            balanceNotFound
                            :
                            <p className="text-white text-xs sm:text-sm md:text-base">
                                { tokenBalance.balance }
                            </p>
                        }
                    </>
                    :
                    <>
                        {
                            token.permit ?
                            <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            :
                            <div className="flex justify-center">
                                <Image src="/static/lock.svg" alt="Unlock" width="30" height="35"
                                       className="hover:cursor-pointer" onClick={handlePermit} />
                            </div>
                        }
                    </>
                }

                { depositWithdrawOptions[token.details.name === "sSCRT" ? token.details.name : token.details.type] }

                { token.isImported && (
                    <button className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-black p-0.5 rounded-md absolute -right-1 -top-1">
                        <XIcon className="fill-gray-200 w-full h-full" />
                    </button>
                )}
            </div>
        </div>
    )
};