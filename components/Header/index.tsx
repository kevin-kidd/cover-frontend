import {FunctionComponent, ReactElement, useEffect, useState} from "react";
import { useMenuStore} from "../../stores/Menu";
import classNames from "classnames";

type Items = {
    items: {
        left: ReactElement[]
        right: ReactElement[]
    }
}

const Header: FunctionComponent<Items> = ({ items }) => {
    const toggleMenu = useMenuStore((state) => state.toggleMenu);
    const [darkHeader, setDarkHeader] = useState<boolean>(true);

    const handleScroll = () => {
        if(window.scrollY === 0) {
            setDarkHeader(true);
        } else if(window.scrollY !== 0) {
            setDarkHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classNames(
            "top-0 px-4 z-20 py-2 sm:py-4 w-full sticky flex flex-row lg:transition lg:duration-300",
            darkHeader ? "bg-transparent backdrop-blur-none" : "bg-[#1A2128]/75 backdrop-blur"
        )}>
            <button type="button" onClick={() => toggleMenu()} className="text-white focus:outline-none lg:hidden ml-2 sm:ml-6">
                <span className="sr-only">Open sidebar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className="lg:container lg:mx-auto w-full">
                <div className="w-full flex sm:justify-between justify-end px-4 md:px-10 xl:px-20 items-center h-10">
                    <div className="h-full hidden w-0 sm:w-fit sm:flex">
                        {
                            items.left.map((Item: ReactElement, index: number) => (
                                <div className="h-full sm:px-4 px-1 py-1 sm:py-0" key={`header-item-${index}`}>
                                    { Item }
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex w-fit h-full">
                        {
                            items.right.map((Item: ReactElement, index: number) => (
                                <div className="h-full sm:px-4 px-1 py-1 sm:py-0" key={`header-item-${index}`}>
                                    { Item }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;