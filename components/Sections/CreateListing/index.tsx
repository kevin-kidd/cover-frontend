import React, {FunctionComponent, useEffect} from "react";
import {usePersistentStore} from "../../../stores/PersistentStore";
import {useCreateListingStore} from "../../../stores/CreateListingStore";
import {LendingCard} from "./LendingCards";
import {BorrowingCard, BorrowingCollateralCard} from "./BorrowingCards";
import {ApproveCard, TermsCard} from "./Extra";

const CreateListing: FunctionComponent = () => {

    const createListingToggle = usePersistentStore((state) => state.config.toggles.createListingToggle);
    const createListingState = useCreateListingStore((state) => state);

    const borrowingMisc = useCreateListingStore((state) => state.borrowing.misc);
    // const lendingMisc = useCreateListingStore((state) => state.lending.misc);

    let misc = createListingToggle === "Borrowing" ? borrowingMisc : borrowingMisc; // TODO

    useEffect(() => {
        let activeState;
        if(createListingToggle === "borrowing") activeState = createListingState.borrowing;
        else activeState = createListingState.borrowing;  // TODO

        if(
            activeState.principal.amount === 0 || activeState.duration.days === 0 ||
            activeState.principal.amount === -1 || activeState.duration.days === -1 // TODO -- add check for collateral amount
        ) {
            misc.setIsFilled(false);
        } else {
            misc.setIsFilled(true);
        }
    }, [createListingToggle, createListingState, misc]);

    if(createListingToggle === "Lending") {
        return (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6">
                <LendingCard />
                {/*<LendingCollateralCard />*/}
                {/*<LendingTerms />*/}
                {/*<ApproveLoan />*/}
            </div>
        )
    }

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6">
            <BorrowingCard />
            <BorrowingCollateralCard />
            <TermsCard type={"Borrowing"} />
            <ApproveCard type={"Borrowing"} />
        </div>
    );
};

export default CreateListing;