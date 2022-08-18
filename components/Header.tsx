import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useMenuStore} from "../stores/Menu";

const Header: FunctionComponent<{ items: ReactElement[] }> = ({ items }) => {

  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const [darkHeader, setDarkHeader] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0 && !darkHeader) {
                setDarkHeader(true);
            } else if(window.scrollY !== 0 && darkHeader) {
                setDarkHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [darkHeader]);

  return (
    <div className={`px-2 top-0 z-20 py-2 sm:py-4 w-full sticky flex flex-row transition duration-300 ${darkHeader ? "bg-transparent" : "bg-[#1A2128]"}`}>
            <button type="button" onClick={() => toggleMenu()} className="text-white focus:outline-none lg:hidden ml-2 sm:ml-6">
                <span className="sr-only">Open sidebar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className="lg:container lg:mx-auto lg:pr-20 w-full">
                <div className="w-full flex justify-end items-center h-10">
                    {
                        items.map((Item: ReactElement, index: number) => (
                            <div className="h-full sm:px-4 px-1 py-1 sm:py-0" key={`header-item-${index}`}>
                                { Item }
                            </div>
                        ))
                    }
                </div>
            </div>
      </div>
  )
};

export default Header