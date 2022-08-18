import create from "zustand";
import {immer} from "zustand/middleware/immer";


export type TokenBalance = {
    address: string
    type: string
    name: string
    balance: number
    unwrapped?: {
        name: string
        balance: number
    }
    error?: string
}

type BalanceState = {
    tokenBalances: TokenBalance[]
    addTokenBalance: (tokenBalance: TokenBalance) => void
    removeTokenBalance: (address: string) => void
    updateTokenBalance: (newTokenBalance: TokenBalance) => void
    resetSnip20Balances: () => void
}

const handleTokenBalanceUpdate = (tokenBalances: TokenBalance[], newTokenBalance: TokenBalance) => {
    let newTokenBalances = tokenBalances.filter((tokenBalance) => tokenBalance.address !== newTokenBalance.address);
    newTokenBalances.push(newTokenBalance);
    return newTokenBalances;
};

export const useBalanceStore = create<BalanceState>()(
    immer(
        (set) => ({
            tokenBalances: [],
            addTokenBalance: (tokenBalance: TokenBalance) =>
                set((state) => {
                    state.tokenBalances = [...state.tokenBalances, tokenBalance]
                }),
            removeTokenBalance: (address: string) =>
                set((state) => {
                    state.tokenBalances = state.tokenBalances.filter(
                        (tokenBalance) => tokenBalance.address !== address
                    )
                }),
            updateTokenBalance: (newTokenBalance: TokenBalance) =>
                set((state) => {
                    state.tokenBalances = handleTokenBalanceUpdate(state.tokenBalances, newTokenBalance)
                }),
            resetSnip20Balances: () =>
                set((state) => {
                    state.tokenBalances = state.tokenBalances.filter(
                        (token) => token.type === "snip721"
                    )
                })
        })
    )
);