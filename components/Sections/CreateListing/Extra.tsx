import React, {FunctionComponent} from "react";
import {useCreateListingStore} from "../../../stores/CreateListingStore";
import {Transition} from "@headlessui/react";
import {round} from "../../../functions/helper";


export const TermsCard: FunctionComponent<{ type: string }> = ({ type }) => {

    const createListingState = useCreateListingStore((state) => state);
    let misc = createListingState.misc;

    return (
        <Transition
            show={misc.isFilled}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="bg-[#1A2128] w-full max-w-md mx-auto rounded-lg px-8 py-6 flex flex-col items-center">

                <h2 className="card-title pb-5">Terms & Conditions</h2>

                <p className="text-white w-full text-center text-sm mb-2">
                    { type === "Borrowing" ?
                        <>
                            You agree to pay the lender
                            <span className="font-semibold">
                                { " " + createListingState.principal.amount} sSCRT
                            </span>
                            {" "} (principal) + up to
                            <span className="font-semibold">
                                {" " +
                                    round(
                                        createListingState.principal.amount * (createListingState.returnAmount.percentage / 100),
                                        2
                                    ).toFixed(2)
                                } sSCRT
                            </span> (interest) in at most <span className="font-semibold">{ createListingState.duration.days } days</span>.
                            The interest owed is applied in hourly increments. If you fail to repay the loan, you will lose your collateral.
                        </>
                        :
                        <>
                        </>
                    }
                </p>

                <div className="form-control">
                    <label className="cursor-pointer label">
                        <input type="checkbox" checked={misc.signedTerms} onChange={() => misc.setSignedTerms(!misc.signedTerms)}
                               className="checkbox checkbox-accent bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none" />
                        <span className="label-text ml-2 text-white text-sm">I agree to the terms</span>
                    </label>
                </div>

            </div>
        </Transition>
    )
};

export const ApproveCard: FunctionComponent<{ type: string }> = ({ type }) => {

    const misc = useCreateListingStore((state) => state.misc);

    return (
        <Transition
            show={misc.signedTerms && misc.isFilled}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="bg-[#1A2128] w-full h-full max-w-md mx-auto rounded-lg px-10 py-6 flex flex-col items-center">
                <h2 className="card-title">Approve Listing</h2>
                <div className="flex flex-col my-auto">
                    <h4>Are you sure you want to create this listing?</h4>
                    <div className="flex justify-between mx-auto w-1/2 mt-6">
                        <button
                            onClick={misc.reset}
                            className="py-2 px-4 bg-transparent border-[#D45E5E] border rounded-lg hover:text-white duration-200 transition"
                        >
                            No
                        </button>
                        <button className="py-2 px-4 bg-transparent border-[#5AAD52] border rounded-lg hover:text-white duration-200 transition">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    )
};