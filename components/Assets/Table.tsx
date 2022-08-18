import {FunctionComponent, ReactElement, useEffect, useState} from "react";
import {assets, Token, useAssetStore} from "../../stores/AssetStore";
import {TableItem} from "./TableItem";
import {useWalletStore} from "../../stores/WalletStore";
import {getNativeBalance, getSnip20Balance} from "../../func/queries";
import {TokenBalance, useBalanceStore} from "../../stores/BalanceStore";
import {usePersistentStore} from "../../stores/PersistentStore";

const tableHeader: ReactElement = (
    <div className="w-full bg-[#171d24] rounded-xl py-2">
        <div className="grid grid-cols-3 md:grid-cols-4 place-items-center">
            <p className="text-[#B2BFCD] text-sm md:text-base font-semibold">
                Asset / Chain
            </p>
            <p className="text-[#B2BFCD] text-sm md:text-base font-semibold">
                Balance
            </p>
            <p className="text-[#B2BFCD] text-base font-semibold hidden md:block">
                Deposit
            </p>
            <p className="text-[#B2BFCD] text-base font-semibold hidden md:block">
                Withdraw
            </p>
            <p className="text-[#B2BFCD] text-sm font-semibold md:hidden">
                Transfer
            </p>
        </div>
    </div>
);

export const Table: FunctionComponent = () => {

    const savedTokens = useAssetStore((state) => state.assets.snip20.tokens);
    const client = useWalletStore((state) => state.client);
    const tokenBalances = useBalanceStore((state) => state.tokenBalances);
    const updateTokenBalance = useBalanceStore((state) => state.updateTokenBalance);
    const addTokenBalance = useBalanceStore((state) => state.addTokenBalance);
    const hideZeroToggle = usePersistentStore((state) => state.config.toggles.hideZeroBalances);

    const [filteredTokens, setFilteredTokens] = useState<Token[]>();

    useEffect(() => {
        const getBalance = async (token: Token) => {
            let newTokenBalance: TokenBalance = {
                address: token.details.contract.address,
                type: token.details.type,
                name: token.details.name,
                balance: -1,
                unwrapped: {
                    name: token.details.unwrappedName,
                    balance: -1
                }
            };
            const balance = await getSnip20Balance(client, token);
            if(balance !== -1) {
                if(token.details.type === "native") {
                    newTokenBalance.balance = balance;
                    const nativeBalance = await getNativeBalance(client, token.details.denom, token.details.decimals);
                    if(nativeBalance !== -1) {
                        newTokenBalance.unwrapped = {
                            name: token.details.unwrappedName,
                            balance: nativeBalance
                        };
                    }
                } else {
                    newTokenBalance.balance = balance;
                }
            } else {
                console.error("Unable to fetch balance.")
            }
            if(tokenBalances.some((tokenBalance) => tokenBalance.address === newTokenBalance.address)) {
                updateTokenBalance(newTokenBalance);
            } else {
                addTokenBalance(newTokenBalance);
            }
        };

        if(client && tokenBalances.length === 0) {
            for(const token of savedTokens) {
                if(token.permit) {
                    try {
                        getBalance(token);
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        }
    });

    useEffect(() => {
        if(hideZeroToggle && tokenBalances.length !== 0) {
            const filteredTokensResults: Token[] = savedTokens.filter((token) => {
                return !(token.isImported && tokenBalances.some((tokenBalance) =>
                    tokenBalance.balance === 0 && tokenBalance.address === token.details.contract.address
                ));
            });
            setFilteredTokens(filteredTokensResults);
        } else {
            setFilteredTokens(savedTokens);
        }
    }, [hideZeroToggle, savedTokens, tokenBalances]);

    return (
        <div className="flex flex-col pt-3 sm:pt-4">
            { tableHeader }
            { savedTokens && savedTokens.some((token) => token.details.contract.address === assets.sscrt.contract.address) ?
                <>
                    <TableItem key="asset-sscrt" token={savedTokens.find(
                        (token) => token.details.contract.address === assets.sscrt.contract.address
                    )} />
                    <TableItem key="asset-test" token={savedTokens.find(
                        (token) => token.details.contract.address === assets.test.contract.address
                    )} />
                </>
                :
                <>
                    <TableItem key="asset-sscrt" token={{
                        details: assets.sscrt,
                        isImported: false,
                        permit: null
                    }} />
                    <TableItem key="asset-test" token={{
                        details: assets.test,
                        isImported: false,
                        permit: null
                    }} />
                </>

            }
            {
                filteredTokens && filteredTokens
                    .filter((token) =>
                        token.details.contract.address !== assets.sscrt.contract.address && token.details.contract.address !== assets.test.contract.address
                    )
                    .map((token) => (
                    <TableItem
                        key={`asset-${token.details.name}${(Math.random() + 1).toString(36).substring(3)}`}
                        token={token}
                    />
                ))
            }
        </div>
    )
};