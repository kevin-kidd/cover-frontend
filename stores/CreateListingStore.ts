import create from "zustand";
import { immer } from "zustand/middleware/immer";
import {Token, Collection} from "./AssetStore";


export type CreateListingState = {
    principal: {
        type?: string
        amount: number
        token?: Token
        nfts?: Collection
        setType: (type: string) => void
        setToken: (token: Token) => void
        setAmount: (amount: number) => void
    }
    collateral: {
        type?: string
        amount: number
        address?: string
        token?: Token
        name?: string
        setType: (type: string) => void
        setToken: (token: Token) => void
        setAmount: (amount: number) => void
    }
    duration: {
        days: number
        setDuration: (duration: number) => void
    }
    misc: {
        step: number
        signedTerms: boolean
        setStep: (step: number) => void
        setSignedTerms: (isSigned: boolean) => void
        reset: () => void
    }
    returnAmount: {
        percentage: number
        setPercentage: (percentage: number) => void
    }
}

export const useCreateListingStore = create<CreateListingState>()(
    immer((set) => ({
        principal: {
            amount: -1,
            setAmount: (amount: number) => set((state) => {
                state.principal.amount = amount
            }),
            setToken: (token: Token) => set((state) => {
                state.principal.token = token
            }),
            setType: (type: string) => set((state) => {
                state.principal.type = type
            })
        },
        collateral: {
            amount: -1,
            setAmount: (amount: number) => set((state) => {
                state.collateral.amount = amount
            }),
            setToken: (token: Token) => set((state) => {
                state.collateral.token = token
            }),
            setType: (type: string) => set((state) => {
                state.collateral.type = type
            })
        },
        duration: {
            days: 3,
            setDuration: (duration: number) => set((state) => {
                state.duration.days = duration
            })
        },
        misc: {
            step: 0,
            signedTerms: false,
            setStep: (step: number) => set((state) => {
                state.misc.step = step;
            }),
            setSignedTerms: (isSigned: boolean) => set((state) => {
                state.misc.signedTerms = isSigned;
            }),
            reset: () =>
                set((state) => {
                    state.principal.amount = -1;
                    state.collateral.amount = -1;
                    state.duration.days = 3;
                    state.misc.step = 1;
                    state.principal.token = undefined;
                    state.principal.type = undefined;
                    state.collateral.type = undefined;
                    state.collateral.token = undefined;
                    state.misc.signedTerms = false;
                }),
        },
        returnAmount: {
            percentage: 7,
            setPercentage: (percentage: number) => set((state) => {
                state.returnAmount.percentage = percentage
            })
        }
    }))
);