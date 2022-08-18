import {FunctionComponent, useEffect, useState} from "react";
import { useMenuStore} from "../stores/Menu";

type HeaderProps = {
    items: FunctionComponent[]
};

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
      <div className={`top-0 z-20 sticky transition duration-300 flex ${darkHeader ? "bg-transparent" : "bg-[#1A2128]"}`}>
        <button type="button" onClick={() => toggleMenu()} className="text-white focus:outline-none lg:hidden ml-6">
          <span className="sr-only">Open sidebar</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1 flex pl-4 sm:px-4 w-full">
          <div className="
            flex-1 flex my-4 justify-end items-center 
            big:my-8 4k:my-10 lg:mr-10 md:mr-2 sm:mr-6 
            h-8 lg:h-12 big:h-20 4k:h-28
            ">
              {
                  items.map((Item, index: number) => (
                      <Item key={`header-item-${index}`} />
                  ))
              }
          </div>
        </div>
      </div>
  )
};

export default Header