import {SecretNetworkClient} from "secretjs";
import {Contract} from "../stores/AssetStore";


export const wrapSnip20 = async (client: SecretNetworkClient, contract: Contract, denom: string, amount: string): Promise<{ success: boolean, message: string }> => {
    try {
        let success: boolean = false;
        let message: string = "";
        const response = await client.tx.compute.executeContract(
            {
                sender: client.address,
                contractAddress: contract.address,
                codeHash: contract.codeHash,
                msg: {
                    deposit: {}
                },
                sentFunds: [
                    {
                        amount: amount,
                        denom: denom
                    }
                ]
            },
            {
                gasLimit: 200_000,
            }
        );

        if(response.code === 0) {
            success = true;
            message = "Successfully wrapped your tokens!";
        } else if(response.rawLog.includes("out of gas")) {
            success = false;
            message = "Not enough gas. Increase the gas amount or contact support.";
        }

        return { success, message }
    } catch (e) {
        console.error(e);
        return {
            success: false,
            message: e.message
        }
    }
};

export const unwrapSnip20 = async (client: SecretNetworkClient, contract: Contract, denom: string, amount: string): Promise<{ success: boolean, message: string }> => {
    try {
        let success: boolean = false;
        let message: string = "";
        const response = await client.tx.compute.executeContract(
            {
                sender: client.address,
                contractAddress: contract.address,
                codeHash: contract.codeHash,
                msg: {
                    redeem: {
                        amount: amount
                    }
                }
            },
            {
                gasLimit: 200_000,
            }
        );

        if(response.code === 0) {
            success = true;
            message = "Successfully unwrapped your tokens!";
        } else if(response.rawLog.includes("out of gas")) {
            success = false;
            message = "Not enough gas. Increase the gas amount or contact support.";
        }

        return { success, message }
    } catch (e) {
        console.error(e);
        return {
            success: false,
            message: e.message
        }
    }
};