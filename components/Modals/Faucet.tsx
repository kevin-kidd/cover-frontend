import {FunctionComponent} from "react";


export const FaucetModal: FunctionComponent = () => {
    return (
        <div className="flex flex-col px-8 pt-2 pb-4 gap-y-6 w-80">
            <button className="text-tiny py-2 px-4 w-full bg-black border-[#68E6F2] border rounded-lg hover:text-white duration-200 transition">
                Request SCRT
            </button>
            <button className="text-tiny py-2 px-4 w-full bg-black border-[#F2DC68] border rounded-lg hover:text-white duration-200 transition">
                Request $COVER
            </button>
            <button className="text-tiny py-2 px-4 w-full bg-black border-[#D673FE] border rounded-lg hover:text-white duration-200 transition">
                Request Anons
            </button>
        </div>
    )
};