import {SecretNetworkClient} from "secretjs";
import config from "../config.json";
import {getNativeBalance} from "./queries";
import {Collection, Token} from "../stores/AssetStore";

type KeplrWallet = {
    client?: SecretNetworkClient
    error?: string
    balance?: number
}

const addTestnet = async () => {
    try {
        await window.keplr.experimentalSuggestChain({
            chainId: config.secret.testnet.chain_id,
            chainName: "Pulsar-2 Testnet",
            rpc: config.secret.testnet.rpc,
            rest: config.secret.testnet.rest,
            bip44: {
                coinType: 529,
            },
            coinType: 529,
            stakeCurrency: {
                coinDenom: 'SCRT',
                coinMinimalDenom: 'uscrt',
                coinDecimals: 6,
            },
            bech32Config: {
                bech32PrefixAccAddr: 'secret',
                bech32PrefixAccPub: 'secretpub',
                bech32PrefixValAddr: 'secretvaloper',
                bech32PrefixValPub: 'secretvaloperpub',
                bech32PrefixConsAddr: 'secretvalcons',
                bech32PrefixConsPub: 'secretvalconspub',
            },
            currencies: [
                {
                    coinDenom: 'SCRT',
                    coinMinimalDenom: 'uscrt',
                    coinDecimals: 6,
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: 'SCRT',
                    coinMinimalDenom: 'uscrt',
                    coinDecimals: 6,
                },
            ],
            gasPriceStep: {
                low: 0.25,
                average: 0.35,
                high: 0.5,
            },
            features: ['secretwasm']
        });
        return true;
    } catch (e) {
        console.error(e.message);
        return false;
    }
};

export const setupWebKeplr = async (): Promise<KeplrWallet> => {
    try {
        // Testnet
        const network = config.secret.testnet;
        if(!await addTestnet()) {
            // TODO - display error
        }

        // Mainnet
        // const network = config.secret.mainnet;

        // Await Keplr detection
        while (!window.keplr || !window.getEnigmaUtils || !window.getOfflineSignerOnlyAmino) {
            await new Promise((resolve) => setTimeout(resolve, 50));
        }

        // Create the Keplr signing client
        await window.keplr.enable(network.chain_id);
        const keplrOfflineSigner = window.getOfflineSignerOnlyAmino(network.chain_id);
        const [{ address: address }] = await keplrOfflineSigner.getAccounts();

        const client = await SecretNetworkClient.create({
            grpcWebUrl: network.grpc_web,
            chainId: network.chain_id,
            wallet: keplrOfflineSigner,
            walletAddress: address,
            encryptionUtils: window.getEnigmaUtils(network.chain_id),
        });

        const balance = await getNativeBalance(client, "uscrt", 6);

        if(balance !== -1) {
            return {
                client: client,
                balance: balance
            };
        } else {
            // TODO -- show error, couldn't get balance
        }

    } catch (e) {
        console.error(e);
        return {
            error: e.message
        }
    }
};

export const getSnip20Permit = async (client: SecretNetworkClient, token: Token) => {
    try {
        // TODO -- update chain ID
        return await client.utils.accessControl.permit.sign(
            client.address,
            "pulsar-2",
            "View Balance - " + token.details.name,
            [token.details.contract.address],
            ["balance"],
            true
        );
    } catch (e) {
        console.error(e);
    }
    return null;
};

export const getSnip721Permit = async (client: SecretNetworkClient, collection: Collection) => {
    try {
        return await client.utils.accessControl.permit.sign(
            client.address,
            "pulsar-2",
            "View Collection - " + collection.details.name,
            [collection.details.contract.address],
            ["owner"],
            true
        );
    } catch (e) {
        console.error(e);
    }
    return null;
};