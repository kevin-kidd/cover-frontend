import {
	type FunctionComponent,
	type ReactElement,
	useEffect,
	useState,
} from "react";
import { usePersistentStore } from "../../stores/PersistentStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modals";
import { useModalStore } from "../../stores/ModalStore";
import { setupWebKeplr } from "../../func/secret";
import { useWalletStore } from "../../stores/WalletStore";

const MenuFooter: FunctionComponent = () => {
	const wallet = usePersistentStore((state) => state.wallet);
	const updateWallet = usePersistentStore((state) => state.updateWallet);

	const setIsOpen = useModalStore((state) => state.setIsOpen);
	const setModalTitle = useModalStore((state) => state.setTitle);
	const setModalName = useModalStore((state) => state.setName);

	const balance = useWalletStore((state) => state.balance);

	const setBalance = useWalletStore((state) => state.setBalance);
	const setClient = useWalletStore((state) => state.setClient);

	useEffect(() => {
		const connect = async (provider: string) => {
			if (provider === "keplr") {
				const wallet = await setupWebKeplr();
				if (wallet.error) {
					// TODO -- show error
				} else {
					setClient(wallet.client);
					setBalance(wallet.balance);
					updateWallet({
						address: wallet.client.address,
						connected: true,
						provider: "keplr",
					});
				}
			} else {
				// TODO - other wallets
			}
		};

		if (wallet.connected && balance === -1) {
			connect(wallet.provider).then(() => console.log("connected"));
		}

		window.addEventListener("keplr_keystorechange", () => {
			connect(wallet.provider).then(() => console.log("connected"));
		});

		return () => {
			window.removeEventListener("keplr_keystorechange", () =>
				connect(wallet.provider),
			);
		};
	}, [wallet, balance, setBalance, setClient, updateWallet]);

	const openWalletPopup = () => {
		setModalName("select-wallet");
		setModalTitle("Connect a wallet");
		setIsOpen(true);
	};

	const disconnectWallet = () => {
		updateWallet({
			connected: false,
		});
		setClient(undefined);
	};

	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(wallet.address);
		setIsCopied(true);
	};

	const links = [
		{
			viewBox: "0 0 512 512",
			href: "https://twitter.com/",
			d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
		},
		{
			viewBox: "0 0 640 512",
			href: "https://discord.com/",
			d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z",
		},
		{
			viewBox: "0 0 496 512",
			href: "https://github.com/",
			d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
		},
		{
			viewBox: "0 0 448 512",
			href: "https://medium.com/",
			d: "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z",
		},
	];

	const footerLinks: ReactElement = (
		<div className="w-full flex flex-row gap-x-3 mb-1 justify-center">
			{links.map((link) => (
				<a key={link.href} href={link.href} target="_blank" rel="noreferrer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox={link.viewBox}
						className="fill-white w-5 h-5 opacity-75 hover:cursor-pointer transition duration-500"
					>
						<title>{link.href}</title>
						<path d={link.d} />
					</svg>
				</a>
			))}
		</div>
	);

	const disconnectButton: ReactElement = (
		<button
			type="button"
			onClick={disconnectWallet}
			className="p-3 group w-fit flex items-center rounded-lg text-tiny border border-[#5596DC]
            text-[#cccccc] hover:text-[#eeeeee] transition duration-500 hover:border-[#66a0df]"
		>
			<FontAwesomeIcon
				icon={faSignOutAlt}
				className="p-1 mr-1 h-5 w-5 transition duration-500 text-[#cccccc] group-hover:text-[#eeeeee]"
			/>
			Disconnect
		</button>
	);

	const walletInfo: ReactElement = (
		<div className="flex flex-row items-center justify-center w-full gap-x-2 px-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className="flex-shrink-0 fill-white w-6 h-6"
			>
				<title>Wallet</title>
				<path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
			</svg>
			<div className="flex flex-col w-3/4 lg:w-full">
				<div
					className="tooltip hover:cursor-pointer flex justify-center"
					data-tip={isCopied ? "Copied!" : "Copy to clipboard"}
					onMouseLeave={() => setIsCopied(false)}
					onClick={handleCopy}
					onKeyDown={(e) => e.key === "Enter" && handleCopy()}
					tabIndex={0}
					role="button"
				>
					<p className="text-white text-sm truncate">
						{wallet.address ?? "Fetching..."}
					</p>
				</div>
				<p className="text-[#cecece] text-xs">
					{balance === -1 ? "??" : balance} SCRT
				</p>
			</div>
		</div>
	);

	return (
		<div className="flex flex-col gap-y-6 items-center w-full">
			{wallet.connected && (
				<>
					{walletInfo}
					{disconnectButton}
				</>
			)}
			{!wallet.connected && (
				<button
					type="button"
					onClick={openWalletPopup}
					className="hover:cursor-pointer p-3 rounded-lg w-fit text-tiny text-[#eeeeee] hover:text-[#ffffff] transition duration-150 bg-[#5596DC]/95  hover:bg-[#5596DC]"
				>
					Connect Wallet
				</button>
			)}
			{footerLinks}
			<Modal />
		</div>
	);
};

export default MenuFooter;
