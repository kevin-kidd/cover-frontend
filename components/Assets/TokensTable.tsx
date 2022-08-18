import {FunctionComponent, ReactElement} from "react";
import Image from "next/image";
import {Asset} from "../../types/general";
import { ExternalLinkIcon, XIcon } from "@heroicons/react/solid";
import {useModalStore} from "../../stores/ModalStore";

const tableHeader: ReactElement = (
    <div className="w-full bg-black/75 rounded-xl py-2">
        <div className="grid grid-cols-3 md:grid-cols-4 place-items-center">
            <p className="text-[#B2BFCD] text-sm md:text-base font-semibold">
                Asset / Chain
            </p>
            <p className="text-[#B2BFCD] text-sm md:text-base font-semibold">
                Balance
            </p>
            <p className="text-[#B2BFCD] text-base font-semibold hidden md:block">
                Deposit
            </p>
            <p className="text-[#B2BFCD] text-base font-semibold hidden md:block">
                Withdraw
            </p>
            <p className="text-[#B2BFCD] text-sm font-semibold md:hidden">
                Transfer
            </p>
        </div>
    </div>
);

const TableItem: FunctionComponent<Asset> = ({ assetData, isImported })  => {

    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const setModalTitle = useModalStore((state) => state.setTitle);
    const setModalName = useModalStore((state) => state.setName);
    const setAsset = useModalStore((state) => state.setAsset);

    const openPopup = (type: string) => {
        if(type === "wrap") {
            setModalName("wrap-asset");
            setModalTitle("Wrap/Unwrap " + assetData.name);
            setAsset({
                name: {
                    wrapped: assetData.name,
                    unwrapped: assetData.name.slice(1)
                },
                address: "secrettest123"
            });
        } else if(type === "deposit") {
            setModalName("deposit-asset");
            setModalTitle("Deposit and Wrap IBC Asset");
            setAsset({
                name: {
                    wrapped: assetData.name,
                    unwrapped: assetData.name.slice(1)
                },
                address: "secrettest123"
            });
        } else if(type === "withdraw") {
            setModalName("withdraw-asset");
            setModalTitle("Withdraw and Unwrap IBC Asset");
            setAsset({
                name: {
                    wrapped: assetData.name,
                    unwrapped: assetData.name.slice(1)
                },
                address: "secrettest123"
            });
        }

        setIsOpen(true);
    };

    const assetName: ReactElement = (
        <>
            { assetData.icon && (
                <div className="justify-center items-center flex col-start-2 h-8 w-8 sm:h-11 sm:w-11">
                    <Image
                        src={assetData.icon}
                        alt={assetData.name} width="50" height="50"
                    />
                </div>
            )}
            <div className="col-start-3 col-span-3 xl:col-span-2 flex flex-col items-center">
                <p className="text-white text-sm sm:text-base">{ assetData.name }</p>
                { assetData.network && (
                    <p className="text-[#cccccc] font-light text-xs hidden md:flex truncate">{ assetData.network }</p>
                )}
            </div>
        </>
    );

    const assetOptions: ReactElement = (
        <>
            { assetData.type === "token" && (
                <>
                    <p className="text-[#7BBD75] text-sm hidden md:block cursor-pointer" onClick={() => { openPopup("wrap") }}>
                        Wrap to { assetData.name }
                    </p>
                    <p className="text-[#7BBD75] text-sm hidden md:block cursor-pointer" onClick={() => { openPopup("wrap") }}>
                        Unwrap { assetData.name }
                    </p>
                    <p className="text-[#7BBD75] text-xs md:hidden cursor-pointer" onClick={() => { openPopup("wrap") }}>
                        Wrap / Unwrap
                    </p>
                </>
            )}

            { assetData.type === "coin" && (
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
                </>
            )}

            { assetData.type === "bridged" && (
                <div className="flex flex-col col-span-1 md:col-span-2 cursor-pointer">
                    <p className="inline-flex text-[#7BBD75] text-xs md:text-sm items-center">
                        Go to the bridge
                        <ExternalLinkIcon className="ml-0.5 h-4 w-4" />
                    </p>
                </div>

            )}
        </>
    );

    return (
        <div className="w-full bg-[#1A2128] rounded-xl mt-3 relative sm:py-2">
          <div className="grid grid-cols-3 md:grid-cols-4 place-items-center h-12">

              <div className="grid grid-cols-5 items-center w-full h-full">
                  { assetName }
              </div>

              <p className="text-white text-xs sm:text-sm md:text-base">
                  4242.42
              </p>

              { assetOptions }

              { isImported && (
                  <button className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-black p-0.5 rounded-md absolute -right-1 -top-1">
                      <XIcon className="fill-gray-200 w-full h-full" />
                  </button>
              )}
          </div>
      </div>
    )
};

const sscrt = {
    name: "sSCRT",
    type: "token",
    icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661027441/icon_sscrt_dp9yoh.svg",
    network: "Secret Network"
};

const exampleAssets = [
    {
        name: "sETH",
        type: "bridged",
        icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661028060/icon_seth_jopwc9.svg",
        network: "Ethereum"
    },
    {
        name: "sATOM",
        type: "coin",
        icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661030372/icon_satom_j45ol1.svg",
        network: "Cosmos Hub"
    },
    {
        name: "sXMR",
        type: "bridged",
        icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661030438/icon_sxmr_var4mw.svg",
        network: "Monero"
    }
];

export const TokensTable: FunctionComponent = () => {
    return (
        <div className="flex flex-col pt-3 sm:pt-4">
            { tableHeader }
            <TableItem assetData={sscrt} isImported={false} />
            {
                exampleAssets.map((asset) => (
                    <TableItem key={`asset-${asset.name}`} assetData={asset} isImported={true} />
                ))
            }
        </div>
    )
};