import React, { type FunctionComponent, useEffect, useRef } from "react";
import { usePersistentStore } from "../../../stores/PersistentStore";
import { useCreateListingStore } from "../../../stores/CreateListingStore";
import { CollateralCard } from "./CollateralCard";
import { PrincipalCard } from "./PrincipalCard";
import { ApproveCard, TermsCard } from "./Extra";

const CreateListing: FunctionComponent = () => {
	const createListingToggle = usePersistentStore(
		(state) => state.config.toggles.createListingToggle,
	);
	const createListingState = useCreateListingStore((state) => state);
	const misc = createListingState.misc;

	const usePrevious = (value) => {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	};

	const prevToggleValue = usePrevious(createListingToggle);

	useEffect(() => {
		if (createListingToggle !== prevToggleValue) misc.reset();
	}, [createListingToggle, misc.reset, prevToggleValue]);

	useEffect(() => {
		const duration = createListingState.duration.days;
		const principalAmount = createListingState.principal.amount;
		const collateralAmount = createListingState.collateral.amount;
		if (
			principalAmount !== -1 &&
			principalAmount !== 0 &&
			duration !== -1 &&
			duration !== 0 // TODO -- add check for collateral amount
		) {
			if (collateralAmount !== -1 && collateralAmount !== 0) {
				if (misc.signedTerms) {
					misc.setStep(4);
				} else {
					misc.setStep(3);
				}
			} else {
				misc.setStep(2);
			}
		} else {
			misc.setStep(1);
		}
	}, [createListingState, misc.setStep, misc.signedTerms]);

	return (
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 xl:gap-x-4 gap-y-6">
			<PrincipalCard />
			<CollateralCard />
			<TermsCard />
			<ApproveCard />
		</div>
	);
};

export default CreateListing;
