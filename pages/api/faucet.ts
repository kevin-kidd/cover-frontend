import {NextApiRequest, NextApiResponse} from "next";

type Response = {
    message?: string
    error?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>): Promise<void> => {
    try {
        // Faucet logic here
    } catch (e) {
        // 500 is the status code for an error
        res.status(500)
            .json(
                {
                    error: e.message,
                }
            );
    } finally {
        // 200 is the status code for success
        res.status(200)
            .json(
                {
                    message: "Success! You received 1000 $TEST",
                }
            );
    }
};

export default handler;