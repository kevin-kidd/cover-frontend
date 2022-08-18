import {FunctionComponent, useEffect, useState} from "react";
import { useMenuStore} from "../stores/Menu";
import { HeaderProps } from "../types/general";

const Header: FunctionComponent<HeaderProps> = ({ items }) => {

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
    <div className={`px-2 sm:px-10 top-0 z-20 py-4 lg:py-5 2xl:py-6 sticky transition duration-300 flex ${darkHeader ? "bg-transparent" : "bg-[#1A2128]"}`}>
        <button type="button" onClick={() => toggleMenu()} className="text-white focus:outline-none lg:hidden ml-2 sm:ml-6">
          <span className="sr-only">Open sidebar</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1 flex justify-end items-center lg:mr-10 md:mr-2 sm:mr-6 h-10 sm:h-12 2xl:h-14">
          {
              items.map((Item, index: number) => (
                  <Item key={`header-item-${index}`} />
              ))
          }
        </div>
      </div>
  )
};

export default Header