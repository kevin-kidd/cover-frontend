import create from "zustand";
import { immer } from "zustand/middleware/immer";


export type CREATE_LISTING_STATE = {
    lending?: {

    }
    borrowing?: {
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
    }
    returnAmount: {
        percentage: number
        setPercentage: (by: number) => void
    }
}

export const useCreateListingStore = create<CREATE_LISTING_STATE>()(
    immer((set, get) => ({
        borrowing: {
            principal: {
                amount: -1,
                setAmount: (by: number) =>
                    set((state) => {
                        state.borrowing.principal.amount = by
                    }),

            },
            collateral: {
                amount: -1,
                setAmount: (by: number) =>
                    set((state) => {
                        state.borrowing.collateral.amount = by
                    }),
            },
            duration: {
                days: 3,
                setDuration: (by: number) =>
                    set((state) => {
                    state.borrowing.duration.days = by
                })
            },
            misc: {
                isFilled: false,
                signedTerms: false,
                setIsFilled: (by: boolean) =>
                    set((state) => {
                        state.borrowing.misc.isFilled = by;
                    }),
                setSignedTerms: (by: boolean) =>
                    set((state) => {
                        state.borrowing.misc.signedTerms = by;
                    }),
                reset: () =>
                    set((state) => {
                        state.borrowing.principal.amount = -1;
                        state.borrowing.collateral.amount = -1;
                        state.borrowing.duration.days = 3;
                        state.borrowing.misc.isFilled = false;
                        state.borrowing.misc.signedTerms = false;
                    }),
            },
        },
        returnAmount: {
            percentage: 7,
            setPercentage: (by: number) =>
                set((state) => {
                    state.returnAmount.percentage = by
                })
        },
    }))
);