import React, {FunctionComponent, useEffect} from "react";
import {usePersistentStore} from "../../../stores/PersistentStore";
import {useCreateListingStore} from "../../../stores/CreateListingStore";
import {PrincipalCard, CollateralCard} from "./LoanCards";
import {ApproveCard, TermsCard} from "./Extra";

const CreateListing: FunctionComponent = () => {

    const createListingToggle = usePersistentStore((state) => state.config.toggles.createListingToggle);
    const createListingState = useCreateListingStore((state) => state);
    const misc = createListingState.misc;

    useEffect(() => {
        let duration = createListingState.duration.days;
        let principalAmount = createListingState.principal.amount;
        let collateralAmount = createListingState.collateral.amount;
        if(
            principalAmount === -1 || principalAmount === 0 ||
            duration === -1 || duration === 0 // TODO -- add check for collateral amount
        ) {
            misc.setIsFilled(false);
        } else {
            misc.setIsFilled(true);
        }
    }, [createListingToggle, createListingState, misc]);

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <PrincipalCard />
            <CollateralCard />
            <TermsCard type={"Borrowing"} />
            <ApproveCard type={"Borrowing"} />
        </div>
    );
};

export default CreateListing;