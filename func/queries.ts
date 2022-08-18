import {Collection, Snip721Token, Token} from "../stores/AssetStore";
import {SecretNetworkClient} from "secretjs";
import {trueBalance} from "./helper";


export const getSnip20Balance = async (client: SecretNetworkClient, token: Token) => {
    try {
        const tokenInfo = await client.query.snip20.getSnip20Params({ contract: token.details.contract });
        const { balance: { amount } } = await client.query.snip20.getBalance({
            contract: token.details.contract,
            address: client.address,
            auth: {
                permit: token.permit
            }
        });
        return trueBalance(Number(amount), tokenInfo.token_info.decimals);
    } catch (e) {
        console.error(e);
        return -1;
    }
};

export const getSnip721Inventory = async (client: SecretNetworkClient, collection: Collection) => {
    try {
        let inventory: Snip721Token[] = [];
        const tokenIds = await client.query.snip721.GetOwnedTokens({
            contract: collection.details.contract,
            auth: {
                permit: collection.permit
            },
            owner: client.address
        });
        if(tokenIds.token_list) {
            if(tokenIds.token_list.tokens.length === 0) return [];
            for(const tokenId of tokenIds.token_list.tokens) {
                const nftDossier = await client.query.snip721.GetTokenInfo({
                    contract: collection.details.contract,
                    auth: {
                        permit: collection.permit
                    },
                    token_id: tokenId
                });
                if(nftDossier && nftDossier.all_nft_info) {
                    let images: string[] = [];
                    const extension = nftDossier.all_nft_info.info.extension;
                    if(extension.image) images.push(extension.image);
                    if(extension.media) {
                        for(const media of extension.media) {
                            images.push(media.url);
                        }
                    }
                    inventory.push({
                        name: nftDossier.all_nft_info.info.extension.name,
                        tokenId: tokenId,
                        images: images
                    })
                }
            }
            return inventory;
        }
        console.error("Unable to find query token IDs for contract: " + collection.details.contract.address);
    } catch (e) {
        console.error(e);
    }
};

export const getNativeBalance = async (client: SecretNetworkClient, denom: string, decimals: number): Promise<number> => {
    try {
        const {
            balance: { amount },
        } = await client.query.bank.balance({
            address: client.address,
            denom: denom,
        });
        return trueBalance(Number(amount), decimals);
    } catch (e) {
        console.error(e);
        return -1;
    }
};