import React, {FunctionComponent} from "react";
import {useCreateListingStore} from "../../../stores/CreateListingStore";
import {CollectionSearchBox, ReturnSlider, TokenSearchBox} from "./Inputs";

export const BorrowingCard: FunctionComponent = () => {

    const amount = useCreateListingStore((state) => state.borrowing.principal.amount);
    const setAmount = useCreateListingStore((state) => state.borrowing.principal.setAmount);
    const duration = useCreateListingStore((state) => state.borrowing.duration);

    const handleDurationChange = (e) => {
        if(!e.target.value) {
            duration.setDuration(-1);
            return
        }
        let { value, min, max } = e.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        duration.setDuration(value);
    };

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
                <input type="number" min="3" max="999" value={duration.days === -1 ? "" : duration.days}
                       className="w-16 h-7 text-tiny bg-transparent rounded-lg border border-accent focus:ring-0 focus:border-accent"
                       onChange={handleDurationChange}
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