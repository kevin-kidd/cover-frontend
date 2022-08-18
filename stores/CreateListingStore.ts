import create from "zustand";
import { immer } from "zustand/middleware/immer";


export type CREATE_LISTING_STATE = {
    principal: {
        type?: string
        amount: number
        address?: string
        name?: string
        setAmount: (by: number) => void
    }
    collateral: {
        type?: string
        amount: number
        address?: string
        tokens?: number
        name?: string
        setAmount: (by: number) => void
    }
    duration: {
        days: number
        setDuration: (by: number) => void
    }
    misc: {
        isFilled: boolean
        signedTerms: boolean
        setIsFilled: (by: boolean) => void
        setSignedTerms: (by: boolean) => void
        reset: () => void
    }
    returnAmount: {
        percentage: number
        setPercentage: (by: number) => void
    }
}

export const useCreateListingStore = create<CREATE_LISTING_STATE>()(
    immer((set, get) => ({
        principal: {
            amount: -1,
            setAmount: (by: number) =>
                set((state) => {
                    state.principal.amount = by
                }),

        },
        collateral: {
            amount: -1,
            setAmount: (by: number) =>
                set((state) => {
                    state.collateral.amount = by
                }),
        },
        duration: {
            days: 3,
            setDuration: (by: number) =>
                set((state) => {
                    state.duration.days = by
                })
        },
        misc: {
            isFilled: false,
            signedTerms: false,
            setIsFilled: (by: boolean) =>
                set((state) => {
                    state.misc.isFilled = by;
                }),
            setSignedTerms: (by: boolean) =>
                set((state) => {
                    state.misc.signedTerms = by;
                }),
            reset: () =>
                set((state) => {
                    state.principal.amount = -1;
                    state.collateral.amount = -1;
                    state.duration.days = 3;
                    state.misc.isFilled = false;
                    state.misc.signedTerms = false;
                }),
        },
        returnAmount: {
            percentage: 7,
            setPercentage: (by: number) =>
                set((state) => {
                    state.returnAmount.percentage = by
                })
        }
    }))
);