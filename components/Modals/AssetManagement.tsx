import {FunctionComponent, useMemo, useState} from "react";
import {useModalStore} from "../../stores/ModalStore";
import Image from "next/image";
import {TokenBalance, useBalanceStore} from "../../stores/BalanceStore";
import {assets, useAssetStore} from "../../stores/AssetStore";
import {getNativeBalance, getSnip20Balance} from "../../func/queries";
import {useWalletStore} from "../../stores/WalletStore";
import {toast} from "react-toastify";
import {unwrapSnip20, wrapSnip20} from "../../func/msgs";

// assets
const arrows = {
    wrap: "/static/arrows/wrap.svg",
    wrapLarge: "/static/arrows/wrapLarge.svg",
    unwrapRight: "/static/arrows/unwrapRight.svg",
    unwrapLeft: "/static/arrows/unwrapLeft.svg",
    transferDown: "/static/arrows/transferDown.svg",
    transferUp: "/static/arrows/transferUp.svg"
};

export const WithdrawModal: FunctionComponent = () => {

    const [nativeAmount, setNativeAmount] = useState<number>(0);
    const [ibcAmount, setIbcAmount] = useState<number>(0);
    const [wrappedAmount, setWrappedAmount] = useState<number>(0);

    const assetData = useModalStore((state) => state.asset);

    const balances = {
        native: 4432.5,
        ibc: 452.12,
        wrapped: 12.3
    };

    const handleChange = (e, type) => {
        if(isNaN(e.target.value)) return;
        if(type === "native") {
            if(e.target.value > balances.native) {
                setNativeAmount(balances.native);
                return;
            }
            if(e.target.value === undefined) {
                setNativeAmount(0);
                return;
            }
            setNativeAmount(e.target.value);
        } else if(type === "ibc") {
            if(e.target.value > balances.ibc) {
                setIbcAmount(balances.ibc);
                return;
            }
            if(e.target.value === undefined) {
                setIbcAmount(0);
                return;
            }
            setIbcAmount(e.target.value);
        } else {
            if(e.target.value > balances.wrapped) {
                setWrappedAmount(balances.wrapped);
                return;
            }
            if(e.target.value === undefined) {
                setWrappedAmount(0);
                return;
            }
            setWrappedAmount(e.target.value);
        }
    };


    return (
        <div className="w-full flex flex-col">
            <div className="grid grid-cols-5 items-center">
                <p className="col-span-1 text-[#B2BFCD]">Native</p>
                <div className="col-span-4 grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                    <p className="text-white pl-2 pb-0.5">{ assetData.name.unwrapped }</p>
                    <input type="text" value={nativeAmount === 0 ? "" : nativeAmount} onChange={(e) => { handleChange(e, "native") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                            if(balances) setNativeAmount(balances.native);
                        }}>
                            { balances.native }
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2">
                <Image src={arrows.transferUp} height="25" width="77" alt="Transfer ↑" />
            </div>


            <div className="grid grid-cols-5 items-center">
                <p className="col-span-1 text-[#B2BFCD] text-sm">Secret IBC</p>
                <div className="col-span-4 grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                    <p className="text-white pl-2 pb-0.5">{ assetData.name.unwrapped }</p>
                    <input type="text" value={ibcAmount === 0 ? "" : ibcAmount} onChange={(e) => { handleChange(e, "ibc") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                            if(balances) setIbcAmount(balances.ibc);
                        }}>
                            { balances.ibc }
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-2">
                <Image src={arrows.unwrapRight} height="25" width="77" alt="Unwrap ↑" />
            </div>

            <div className="grid grid-cols-5 items-center">
                <p className="col-span-1 text-[#B2BFCD]">Wrapped</p>
                <div className="col-span-4 grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                    <p className="text-white pl-2 pb-0.5">{ assetData.name.wrapped }</p>
                    <input type="text" value={wrappedAmount === 0 ? "" : wrappedAmount} onChange={(e) => { handleChange(e, "wrapped") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                            if(balances) setWrappedAmount(balances.wrapped);
                        }}>
                            { balances.wrapped }
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-2/3 pt-6 pb-2">
                <button className="py-2 px-4 w-24 bg-black border-[#D673FE] border rounded-lg hover:text-white duration-200 transition">
                    Unwrap
                </button>
                <button className="py-2 px-4 w-24 bg-black border-[#F2DC68] border rounded-lg hover:text-white duration-200 transition">
                    Transfer
                </button>
            </div>

        </div>
    )
};


export const DepositModal: FunctionComponent = () => {

    const [nativeAmount, setNativeAmount] = useState<number>(0);
    const [ibcAmount, setIbcAmount] = useState<number>(0);
    const [wrappedAmount, setWrappedAmount] = useState<number>(0);

    const assetData = useModalStore((state) => state.asset);

    const balances = {
        native: 4432.5,
        ibc: 452.12,
        wrapped: 12.3
    };

    const handleChange = (e, type) => {
        if(isNaN(e.target.value)) return;
        if(type === "native") {
            if(e.target.value > balances.native) {
                setNativeAmount(balances.native);
                return;
            }
            if(e.target.value === undefined) {
                setNativeAmount(0);
                return;
            }
            setNativeAmount(e.target.value);
        } else if(type === "ibc") {
            if(e.target.value > balances.ibc) {
                setIbcAmount(balances.ibc);
                return;
            }
            if(e.target.value === undefined) {
                setIbcAmount(0);
                return;
            }
            setIbcAmount(e.target.value);
        } else {
            if(e.target.value > balances.wrapped) {
                setWrappedAmount(balances.wrapped);
                return;
            }
            if(e.target.value === undefined) {
                setWrappedAmount(0);
                return;
            }
            setWrappedAmount(e.target.value);
        }
    };


    return (
        <div className="w-full flex flex-col">
            <div className="grid grid-cols-5 items-center">
                <p className="col-span-1 text-[#B2BFCD]">Native</p>
                <div className="col-span-4 grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                    <p className="text-white pl-2 pb-0.5">{ assetData.name.unwrapped }</p>
                    <input type="text" value={nativeAmount === 0 ? "" : nativeAmount} onChange={(e) => { handleChange(e, "native") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                            if(balances) setNativeAmount(balances.native);
                        }}>
                            { balances.native }
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2">
                <Image src={arrows.transferDown} height="25" width="77" alt="Transfer ↑" />
            </div>


            <div className="grid grid-cols-5 items-center">
                <p className="col-span-1 text-[#B2BFCD] text-sm">Secret IBC</p>
                <div className="col-span-4 grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                    <p className="text-white pl-2 pb-0.5">{ assetData.name.unwrapped }</p>
                    <input type="text" value={ibcAmount === 0 ? "" : ibcAmount} onChange={(e) => { handleChange(e, "ibc") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                            if(balances) setIbcAmount(balances.ibc);
                        }}>
                            { balances.ibc }
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-2">
                <Image src={arrows.wrapLarge} height="25" width="77" alt="Wrap ↑" />
            </div>

            <div className="grid grid-cols-5 items-center">
                <p className="col-span-1 text-[#B2BFCD]">Wrapped</p>
                <div className="col-span-4 grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                    <p className="text-white pl-2 pb-0.5">{ assetData.name.wrapped }</p>
                    <input type="text" value={wrappedAmount === 0 ? "" : wrappedAmount} onChange={(e) => { handleChange(e, "wrapped") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                            if(balances) setWrappedAmount(balances.wrapped);
                        }}>
                            { balances.wrapped }
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-2/3 pt-6 pb-2">
                <button className="py-2 px-4 w-24 bg-black border-[#68E6F2] border rounded-lg hover:text-white duration-200 transition">
                    Wrap
                </button>
                <button className="py-2 px-4 w-24 bg-black border-[#F2DC68] border rounded-lg hover:text-white duration-200 transition">
                    Transfer
                </button>
            </div>

        </div>
    )
};


export const WrapModal: FunctionComponent = () => {

    const tokenBalances = useBalanceStore((state) => state.tokenBalances);
    const savedTokens = useAssetStore((state) => state.assets.snip20.tokens);
    const client = useWalletStore((state) => state.client);
    const updateTokenBalance = useBalanceStore((state) => state.updateTokenBalance);
    const addTokenBalance = useBalanceStore((state) => state.addTokenBalance);
    const setScrtBalance = useWalletStore((state) => state.setBalance);

    const [balances, setBalances] = useState<{
        scrt: number
        wrapped: number
    }>();

    const getBalances = async (fetchNew: boolean) => {
        let scrtBalance;
        if(!fetchNew) {
            scrtBalance = tokenBalances.find(
                (tokenBalance) => tokenBalance.address === assets.sscrt.contract.address
            );
        }
        if(scrtBalance) {
            setBalances({
                scrt: scrtBalance.unwrapped.balance,
                wrapped: scrtBalance.balance
            });
        } else {
            const scrtToken = savedTokens.find(
                (token) => token.details.contract.address === assets.sscrt.contract.address
            );
            if(scrtToken) {
                const scrtBalance = await getNativeBalance(client, "uscrt", 6);
                const wrappedBalance = await getSnip20Balance(client, scrtToken);
                let newTokenBalance: TokenBalance = {
                    address: assets.sscrt.contract.address,
                    type: assets.sscrt.type,
                    name: assets.sscrt.name,
                    balance: wrappedBalance,
                    unwrapped: {
                        name: assets.sscrt.unwrappedName,
                        balance: scrtBalance
                    }
                };
                if(tokenBalances.some((tokenBalance) => tokenBalance.address === newTokenBalance.address)) {
                    updateTokenBalance(newTokenBalance);
                } else {
                    addTokenBalance(newTokenBalance);
                }
                setScrtBalance(scrtBalance);
                setBalances({
                    scrt: scrtBalance,
                    wrapped: wrappedBalance
                });
            }
        }
    };

    useMemo(() => {
        if(client) {
            try {
                getBalances(false);
            } catch (e) {
                console.error(e);
                // TODO -- add error handling
            }
        }
    }, [client]);

    const [scrtAmount, setScrtAmount] = useState<number>(0);
    const [wrappedAmount, setWrappedAmount] = useState<number>(0);

    const handleChange = (e, type) => {
        if(isNaN(e.target.value)) return;
        if(type === "sscrt") {
            setWrappedAmount(e.target.value);
            if(balances && e.target.value > balances.wrapped) {
                setWrappedAmount(balances.wrapped);
                return;
            }
            if(e.target.value === undefined) {
                setWrappedAmount(0);
                return;
            }
            setWrappedAmount(e.target.value);
        } else {
            if(balances && e.target.value > balances.scrt) {
                setScrtAmount(balances.scrt);
                return;
            }
            if(e.target.value === undefined) {
                setScrtAmount(0);
                return;
            }
            setScrtAmount(e.target.value);
        }
    };

    const handleWrap = async () => {

        if(scrtAmount <= 0) {
            toast.error("You must enter the amount of tokens you want to wrap.");
            return;
        }

        const id = toast.loading("Wrapping your tokens...");

        const decimals = 6;
        const amount = (scrtAmount * (10 * 10**(decimals - 1))).toString();
        const wrapResponse = await wrapSnip20(
            client,
            assets.sscrt.contract,
            "uscrt",
            amount
        );
        if(wrapResponse.success) {
            toast.update(
                id,
                {
                    render: wrapResponse.message,
                    type: "success",
                    isLoading: false,
                    icon: "🟢",
                    autoClose: 5000
                }
            );
            setBalances(null);
            await getBalances(true);
        } else {
            toast.update(
                id,
                {
                    render: wrapResponse.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                }
            );
        }

    };

    const handleUnwrap = async () => {

        if(wrappedAmount <= 0) {
            toast.error("You must enter the amount of tokens you want to unwrap.");
            return;
        }

        const id = toast.loading("Unwrapping your tokens...");

        const decimals = 6;
        const amount = (wrappedAmount * (10 * 10**(decimals - 1))).toString();
        const unwrapResponse = await unwrapSnip20(
            client,
            assets.sscrt.contract,
            "uscrt",
            amount
        );
        if(unwrapResponse.success) {
            toast.update(
                id,
                {
                    render: unwrapResponse.message,
                    type: "success",
                    isLoading: false,
                    icon: "🟢",
                    autoClose: 5000
                }
            );
            setBalances(null);
            await getBalances(true);
        } else {
            toast.update(
                id,
                {
                    render: unwrapResponse.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                }
            );
        }

    };

    return (
        <div className="w-full flex flex-col">
            <div className="grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                <p className="text-white pl-2 pb-0.5">SCRT</p>
                <input type="text" value={scrtAmount === 0 ? "" : scrtAmount} onChange={(e) => { handleChange(e, "scrt") } }
                       maxLength={8} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                />
                <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                    <p className="text-xs">Balance:</p>
                    <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                        if(balances) setScrtAmount(balances.scrt);
                    }}>
                        { balances ?
                            balances.scrt
                            :
                            <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        }
                    </p>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-9/12 py-2">
                <Image src={arrows.wrap} height="25" width="43" alt="Wrap ↑" />
                <Image src={arrows.unwrapRight} height="25" width="58" alt="Unwrap ↑" />
            </div>

            <div className="grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                <p className="text-white pl-2 pb-0.5">sSCRT</p>
                <input type="text" value={wrappedAmount === 0 ? "" : wrappedAmount} onChange={(e) => { handleChange(e, "sscrt") } }
                       maxLength={8} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                />
                <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                    <p className="text-xs">Balance:</p>
                    <p className="text-white text-sm hover:cursor-pointer" onClick={() => {
                        if(balances) setWrappedAmount(balances.wrapped);
                    }}>
                        { balances ?
                            balances.wrapped
                            :
                            <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        }
                    </p>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-2/3 pt-6 pb-2">
                <button
                    onClick={handleWrap}
                    className="py-2 px-4 w-24 bg-black border-[#68E6F2] border rounded-lg
                        hover:text-white duration-200 transition">
                    Wrap
                </button>
                <button
                    onClick={handleUnwrap}
                    className="py-2 px-4 w-24 bg-black border-[#D673FE] border rounded-lg
                    hover:text-white duration-200 transition">
                    Unwrap
                </button>
            </div>

        </div>
    )
};