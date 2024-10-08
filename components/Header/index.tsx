import {
	type FunctionComponent,
	type ReactElement,
	useEffect,
	useState,
	useMemo,
} from "react";
import { useMenuStore } from "../../stores/MenuStore";
import classNames from "classnames";
import { useScroll } from "framer-motion";

import { throttle } from "lodash";

type Items = {
	items: {
		left: ReactElement[];
		right: ReactElement[];
	};
};

const Header: FunctionComponent<Items> = ({ items }) => {
	const { scrollY } = useScroll();

	const toggleMenu = useMenuStore((state) => state.toggleMenu);
	const [darkHeader, setDarkHeader] = useState<boolean>(false);

	const update = useMemo(
		() =>
			throttle(() => {
				const scrollHeight = scrollY.get();
				if (scrollHeight > 5 && !darkHeader) setDarkHeader(true);
				else if (scrollHeight <= 5 && darkHeader) setDarkHeader(false);
			}, 100),
		[scrollY, darkHeader],
	);

	useEffect(() => {
		scrollY.onChange(update);
	}, [scrollY, update]);

	return (
		<div
			className={classNames(
				"top-0 px-4 z-20 py-2 sm:py-4 w-full sticky flex flex-row lg:transition lg:duration-300 bg-[#1A2128]",
				!darkHeader
					? "lg:bg-transparent lg:backdrop-blur-none"
					: "lg:bg-[#1A2128]/75 lg:backdrop-blur",
			)}
		>
			<button
				type="button"
				onClick={() => toggleMenu()}
				className="text-white focus:outline-none lg:hidden ml-2 sm:ml-6"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 sm:h-7 sm:w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<title>Menu</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<div className="lg:container lg:mx-auto w-full">
				<div className="w-full flex sm:justify-between justify-end px-4 md:px-10 xl:px-20 items-center h-10">
					<div className="h-full hidden w-0 sm:w-fit sm:flex">
						{items.left.map((Item: ReactElement, index: number) => (
							<div
								className="h-full sm:px-4 px-1 py-1 sm:py-0"
								key={`header-item-${index + Math.random()}`}
							>
								{Item}
							</div>
						))}
					</div>
					<div className="flex w-fit h-full">
						{items.right.map((Item: ReactElement, index: number) => (
							<div
								className="h-full sm:px-4 px-1 py-1 sm:py-0"
								key={`header-item-${index + Math.random()}`}
							>
								{Item}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
