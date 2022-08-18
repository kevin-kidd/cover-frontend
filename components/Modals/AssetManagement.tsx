import {FunctionComponent, useState} from "react";
import {useModalStore} from "../../stores/ModalStore";
import Image from "next/image";

// assets
const arrows = {
    wrap: "/static/arrows/wrap.svg",
    unwrapUp: "/static/arrows/unwrapUp.svg",
    unwrapDown: "/static/arrows/unwrapDown.svg",
    transferDown: "/static/arrows/transferDown.svg",
    transferUp: "/static/arrows/transferUp.svg"
};

export const WithdrawModal: FunctionComponent = () => {

    const [nativeAmount, setNativeAmount] = useState<number>(0);
    const [unwrappedAmount, setUnwrappedAmount] = useState<number>(0);
    const [wrappedAmount, setWrappedAmount] = useState<number>(0);

    const assetData = useModalStore((state) => state.asset);

    const balances = {
        native: 4432.5,
        unwrapped: 452.12,
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
        } else if(type === "unwrapped") {
            if(e.target.value > balances.unwrapped) {
                setUnwrappedAmount(balances.unwrapped);
                return;
            }
            if(e.target.value === undefined) {
                setUnwrappedAmount(0);
                return;
            }
            setUnwrappedAmount(e.target.value);
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
                        <p className="text-white text-sm">{ balances.native }</p>
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
                    <input type="text" value={unwrappedAmount === 0 ? "" : unwrappedAmount} onChange={(e) => { handleChange(e, "unwrapped") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm">{ balances.unwrapped }</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-2">
                <Image src={arrows.unwrapDown} height="25" width="58" alt="Unwrap ↑" />
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
                        <p className="text-white text-sm">{ balances.wrapped }</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-2/3 pt-6 pb-2">
                <button className="py-2 px-4 bg-black border-[#D673FE] border rounded-lg hover:text-white duration-200 transition">
                    Unwrap
                </button>
                <button className="py-2 px-4 bg-black border-[#F2DC68] border rounded-lg hover:text-white duration-200 transition">
                    Transfer
                </button>
            </div>

        </div>
    )
};


export const DepositModal: FunctionComponent = () => {

    const [nativeAmount, setNativeAmount] = useState<number>(0);
    const [unwrappedAmount, setUnwrappedAmount] = useState<number>(0);
    const [wrappedAmount, setWrappedAmount] = useState<number>(0);

    const assetData = useModalStore((state) => state.asset);

    const balances = {
        native: 4432.5,
        unwrapped: 452.12,
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
        } else if(type === "unwrapped") {
            if(e.target.value > balances.unwrapped) {
                setUnwrappedAmount(balances.unwrapped);
                return;
            }
            if(e.target.value === undefined) {
                setUnwrappedAmount(0);
                return;
            }
            setUnwrappedAmount(e.target.value);
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
                        <p className="text-white text-sm">{ balances.native }</p>
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
                    <input type="text" value={unwrappedAmount === 0 ? "" : unwrappedAmount} onChange={(e) => { handleChange(e, "unwrapped") } }
                           maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                    />
                    <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                        <p className="text-xs">Balance:</p>
                        <p className="text-white text-sm">{ balances.unwrapped }</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-2">
                <Image src={arrows.wrap} height="25" width="43" alt="Wrap ↑" />
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
                        <p className="text-white text-sm">{ balances.wrapped }</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-2/3 pt-6 pb-2">
                <button className="py-2 px-4 bg-black border-[#68E6F2] border rounded-lg hover:text-white duration-200 transition">
                    Wrap
                </button>
                <button className="py-2 px-4 bg-black border-[#F2DC68] border rounded-lg hover:text-white duration-200 transition">
                    Transfer
                </button>
            </div>

        </div>
    )
};


export const WrapModal: FunctionComponent = () => {

    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const assetData = useModalStore((state) => state.asset);

    const balances = {
        wrapped: 4432.5,
        unwrapped: 452.12
    };

    const [wrapAmount, setWrapAmount] = useState<number>(0);
    const [unwrapAmount, setUnwrapAmount] = useState<number>(0);

    const handleChange = (e, type) => {
        if(isNaN(e.target.value)) return;
        if(type === "wrapped") {
            if(e.target.value > balances.wrapped) {
                setWrapAmount(balances.wrapped);
                return;
            }
            if(e.target.value === undefined) {
                setWrapAmount(0);
                return;
            }
            setWrapAmount(e.target.value);
        } else {
            if(e.target.value > balances.unwrapped) {
                setUnwrapAmount(balances.unwrapped);
                return;
            }
            if(e.target.value === undefined) {
                setUnwrapAmount(0);
                return;
            }
            setUnwrapAmount(e.target.value);
        }
    };

    return (
        <div className="w-full flex flex-col">

            <div className="grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                <p className="text-white pl-2 pb-0.5">{ assetData.name.wrapped }</p>
                <input type="text" value={wrapAmount === 0 ? "" : wrapAmount} onChange={(e) => { handleChange(e, "wrapped") } }
                       maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                />
                <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                    <p className="text-xs">Balance:</p>
                    <p className="text-white text-sm">{ balances.wrapped }</p>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-9/12 py-2">
                <Image src={arrows.wrap} height="25" width="43" alt="Wrap ↑" />
                <Image src={arrows.unwrapUp} height="25" width="58" alt="Unwrap ↑" />
            </div>

            <div className="grid grid-flow-col auto-cols-max h-10 popup-asset-textbox flex items-center">
                <p className="text-white pl-2 pb-0.5">{ assetData.name.unwrapped }</p>
                <input type="text" value={unwrapAmount === 0 ? "" : unwrapAmount} onChange={(e) => { handleChange(e, "unwrapped") } }
                       maxLength={10} className="h-9 -mt-0.5 w-40 bg-transparent focus:ring-0 focus:border-transparent border-transparent"
                />
                <div className="flex gap-x-2 items-center pr-2 pb-0.5">
                    <p className="text-xs">Balance:</p>
                    <p className="text-white text-sm">{ balances.unwrapped }</p>
                </div>
            </div>

            <div className="flex justify-between mx-auto w-2/3 pt-6 pb-2">
                <button className="py-2 px-4 bg-black border-[#68E6F2] border rounded-lg hover:text-white duration-200 transition">
                    Wrap
                </button>
                <button className="py-2 px-4 bg-black border-[#D673FE] border rounded-lg hover:text-white duration-200 transition">
                    Unwrap
                </button>
            </div>

        </div>
    )
};