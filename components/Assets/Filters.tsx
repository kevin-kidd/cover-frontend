import type { FunctionComponent } from "react";
import { usePersistentStore } from "../../stores/PersistentStore";
import { FolderDownloadIcon, RefreshIcon } from "@heroicons/react/solid";
import { useBalanceStore } from "../../stores/BalanceStore";

const SearchTokenBox: FunctionComponent<{ tokenType: string }> = ({
	tokenType,
}) => {
	return (
		<div className="search-box w-72 bg-[#0E1E2C] group h-8">
			<div className="inline-flex w-full h-full items-center ml-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-auto h-full py-2"
					fill="#B2BFCD"
					viewBox="0 0 512 512"
				>
					<title>Search</title>
					<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
				</svg>
				<input
					type="text"
					maxLength={12}
					placeholder="Search"
					className="placeholder-[#B2BFCD] text-[#c1ccd7] text-xs sm:text-sm focus:ring-0 border-0 w-full bg-transparent"
				/>
			</div>
		</div>
	);
};

export const ImportButton: FunctionComponent<{ tokenType: string }> = ({
	tokenType,
}) => {
	return (
		<button
			className="button-gradient border border-transparent rounded-xl px-3 flex items-center h-8 sm:ml-4 w-fit"
			type="button"
		>
			<FolderDownloadIcon className="mr-1 p-0.5 h-full text-[#d4d4d4]" />
			<p className="text-[#cccccc] text-xs sm:text-sm">
				Import a {tokenType === "NFTs" ? "collection" : "token"}
			</p>
		</button>
	);
};

const RefreshBalances: FunctionComponent = () => {
	const resetBalances = useBalanceStore((state) => state.resetSnip20Balances);
	const tokenBalances = useBalanceStore((state) => state.tokenBalances);

	const handleReset = () => {
		if (tokenBalances.length !== 0) {
			resetBalances();
		}
	};

	return (
		<div className="flex ml-3 h-7 my-auto pl-1">
			<RefreshIcon
				onClick={handleReset}
				className={`h-full 
                ${tokenBalances.length !== 0 && "hover:cursor-pointer"}
            `}
			/>
		</div>
	);
};

const HideZeroToggle: FunctionComponent = () => {
	const toggles = usePersistentStore((state) => state.config.toggles);
	const updateConfig = usePersistentStore((state) => state.updateConfig);

	const handleToggle = () => {
		updateConfig({
			toggles: {
				...toggles,
				hideZeroBalances: !toggles.hideZeroBalances,
			},
		});
	};

	return (
		<div className="flex items-center w-full sm:w-1/2 justify-end">
			<label
				htmlFor="default-toggle"
				className="inline-flex relative items-center cursor-pointer"
			>
				<input
					type="checkbox"
					id="default-toggle"
					className="sr-only peer"
					checked={toggles.hideZeroBalances}
					onChange={handleToggle}
				/>
				<div
					className="w-9 h-5 bg-gray-500 rounded-full peer-checked:after:translate-x-full after:h-4 after:w-4
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all
                    dark:border-gray-600 peer-checked:bg-gray-400"
				/>
				<span className="ml-2 text-xs sm:text-sm text-white/80">
					Hide zero balances
				</span>
			</label>
		</div>
	);
};

export const AssetsFilters: FunctionComponent<{ tokenType: string }> = ({
	tokenType,
}) => {
	return (
		<div className="pt-2 sm:pt-4 sm:px-4 w-full flex justify-between items-end">
			<div className="flex w-full flex-row items-end">
				<SearchTokenBox tokenType={tokenType} />
				<div className="hidden sm:flex">
					<ImportButton tokenType={tokenType} />
				</div>
				{tokenType === "Tokens" && <RefreshBalances />}
			</div>
			{tokenType === "Tokens" && <HideZeroToggle />}
		</div>
	);
};
