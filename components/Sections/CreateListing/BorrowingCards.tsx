import React, {FunctionComponent} from "react";
import {useCreateListingStore} from "../../../stores/CreateListingStore";
import {CollectionSearchBox, ReturnSlider, TokenSearchBox} from "./Inputs";

export const BorrowingCard: FunctionComponent = () => {

    const amount = useCreateListingStore((state) => state.borrowing.principal.amount);
    const setAmount = useCreateListingStore((state) => state.borrowing.principal.setAmount);
    const duration = useCreateListingStore((state) => state.borrowing.duration);

    return (
        <div className="bg-[#1A2128] w-full max-w-md mx-auto rounded-lg px-10 py-6 flex flex-col items-center">
            <h2 className="card-title pb-7">Asking to Borrow</h2>
            <TokenSearchBox />
            <p className="py-3 text-white text-lg">
                or
            </p>
            <CollectionSearchBox />

            <div className="grid grid-flow-col auto-cols-max gap-x-4 text-white mt-8">
                <p>Amount:</p>
                <input type="number" value={ amount === -1 ? "" : amount }
                       className="w-20 h-7 text-tiny bg-transparent rounded-lg border border-accent focus:ring-0 focus:border-accent"
                       onChange={(e) => setAmount(Number(e.target.value))}
                />
                <p className="mx-auto">for</p>
                <input type="number" value={duration.days === -1 || duration.days === 0 ? "" : duration.days}
                       className="w-16 h-7 text-tiny bg-transparent rounded-lg border border-accent focus:ring-0 focus:border-accent"
                       onChange={(e) => {
                           if(Number(e.target.value) >= 1000) {
                               duration.setDuration(999);
                           } else {
                               duration.setDuration(Number(e.target.value))
                           }
                       }}
                />
                <p>days.</p>
            </div>

            { /* Show if token is selected */}
            <div className="flex w-full justify-center hidden">
                <ReturnSlider />
            </div>

        </div>
    )
};

export const BorrowingCollateralCard: FunctionComponent = () => {

    const amount = useCreateListingStore((state) => state.borrowing.collateral.amount);
    const setAmount = useCreateListingStore((state) => state.borrowing.collateral.setAmount);

    return (
        <div className="bg-[#1A2128] w-full max-w-md mx-auto rounded-lg px-10 py-6 flex flex-col items-center">
            <h2 className="card-title">
                Offering as Collateral
            </h2>
            <div className="flex flex-col w-full my-auto items-center">
                <TokenSearchBox />
                <p className="py-3 text-white text-lg">
                    or
                </p>
                <CollectionSearchBox />
            </div>

            { /* Show if token is selected */ }
            <div className="w-full flex justify-center gap-x-4 mt-6 text-white hidden">
                <p>Amount:</p>
                <input type="number" value={amount === -1 ? "" : amount}
                       className="w-20 h-7 text-tiny bg-transparent rounded-lg border border-accent focus:ring-0 focus:border-accent"
                       onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>

            { /* Show if token is selected */}
            <div className="flex w-full justify-center hidden">
                <ReturnSlider />
            </div>

        </div>
    )
};