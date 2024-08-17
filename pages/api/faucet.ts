import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
	message?: string;
	error?: string;
};

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Response>,
): Promise<void> => {
	res.status(200).json({
		message: "Success! You received 1000 $TEST",
	});
};

export default handler;
