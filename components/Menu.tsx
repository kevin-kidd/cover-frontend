import {FunctionComponent, useRef, useState} from "react";
import Image from "next/image"
import { Transition } from "@headlessui/react";
import { useMenuStore } from "../stores/Menu";
import { useOnClickOutside } from "../functions/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.svg";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MenuItem } from "../types/general";

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: {
      viewBox: "0 0 330.242 330.242",
      path: <path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999  c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314  c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053  v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5  c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z" />
    }
  },
  {
    title: "My Page",
    href: "/my-page",
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
    }
  },
  {
    title: "Assets",
    href: "#",
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
    }
  },
  {
    title: "Analytics",
    href: "#",
    icon: {
      viewBox: "0 0 448 512",
      path: <path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z" />
    }
  },
  {
    title: "Trade Bonds",
    href: "#",
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z" />
    }
  },
  {
    title: "Create Listing",
    href: "#",
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />
    }
  }
];

const MenuItem: FunctionComponent<{ item: MenuItem, active: boolean }> = ({ item, active }) => {

  const isConnected = useMenuStore((state) => state.walletConnected);

  return (
      <Link href={item.href}>
        <button
            className={`
              font-medium rounded-2xl flex items-center group text-white text-kindasmall 2xl:text-base w-full p-3 2xl:p-5 group
              ${ active ? "bg-[#7BBD75]" : "hover:bg-gray-700 transition duration-150" }
              ${ !isConnected && item.title === "My Page" ? "hover:cursor-default hover:bg-transparent text-gray-400" : null}
            `}
        >
          <svg
              xmlns="http://www.w3.org/2000/svg" viewBox={item.icon.viewBox}
              className={`
                flex-shrink-0 mr-4 h-7 w-5 2xl:h-8 2xl:w-6
                ${ active ? "fill-[#303C4A]" : "fill-[#B2BFCD] group-hover:text-[#B2BFCD] transition duration-150" }
                ${ !isConnected && item.title === "My Page" ? "fill-gray-400" : null }
              `}
          >
            { item.icon.path }
          </svg>
          { item.title }
        </button>
      </Link>
  )
};

const Menu: FunctionComponent<{ activeTitle: string }> = ({ activeTitle }) => {

  const setOpen = useMenuStore((state) => state.setOpen);
  const mobileMenuRef = useRef<HTMLDivElement>();
  useOnClickOutside(mobileMenuRef, () => setOpen(false));

  const isOpen = useMenuStore((state) => state.isOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

    return (
      <>
      {/* Mobile */}
        <div className="relative z-40 lg:hidden w-0" role="dialog" aria-modal="true">
          <Transition
            show={isOpen}
            as="div"
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#1A2128] bg-opacity-75" />
              <div className="fixed inset-0 flex z-40">
                <div className="grid grid-rows-8 gap-4 max-w-xs w-full bg-[#1A2128]" ref={mobileMenuRef}>
                  <div onClick={() => toggleMenu()} className="flex row-span-1 justify-end pr-5 pt-5">
                    <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Close sidebar</span>
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="justify-center row-span-2 -mt-10 max-h-16 h-auto w-auto relative flex">
                    <Image
                      priority={true}
                      src={logo}
                      layout="fill"
                      alt="Cover"
                    />
                  </div>
                  <div className="overflow-y-auto flex justify-center row-span-2">
                    <nav className="px-2 space-y-4">
                      {
                        menuItems.map((item) => (
                            <MenuItem key={`mobile-menu-item-${item.title}`} item={item} active={activeTitle === item.title} />
                        ))
                      }
                    </nav>
                  </div>
                  <MenuFooter />
                </div>
              </div>
            <div className="flex-shrink-0 w-14" aria-hidden="true" />
          </Transition>
        </div>

        {/* Desktop */}

        <div className="hidden sticky h-screen inset-y-0 max-w-[260px] w-full lg:flex lg:flex-col">
            <div className="h-full grid grid-flow-row auto-rows-auto bg-[#1A2128]">
              <div className="w-1/2 h-fit mx-auto">
                <Image
                    priority={true}
                    layout="responsive"
                    height="500"
                    width="500"
                    src={logo}
                    alt="Cover" />
              </div>
              <div className="flex flex-col justify-center items-center overflow-y-auto">
                  <nav className="space-y-2 xl:space-y-4 default:space-y-5 4k:space-y-10 w-fit">
                      {
                      menuItems.map((item) => (
                          <MenuItem key={`menu-item-${item.title}`} item={item} active={activeTitle === item.title} />
                      ))
                    }
                  </nav>
              </div>
              <MenuFooter />
            </div>
        </div>
      </>
    )
};

const MenuFooter: FunctionComponent = () => {

  const [hoverExit, setHoverExit] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const walletConnected = useMenuStore((state) => state.walletConnected);
  const setWalletConnected = useMenuStore((state) => state.setWalletConnected);

  const secretAddress = "secret18ld7zwzkgsfv9z6phqhlsft9prjysulpdq950z";

  if(walletConnected) {
    return (
        <div className="flex items-end">
          <div className="bg-gray-700 p-4 border-r-2 border-b-2 border-gray-800 w-full">
            <div className="grid grid-cols-4 flex items-center">
              <div
                  className="col-span-1 mx-auto bg-gray-900 flex rounded-full hover:cursor-pointer w-2/3 h-auto"
                  onClick={() => setWalletConnected(false)}
                  onMouseEnter={() => setHoverExit(true)} onMouseLeave={() => setHoverExit(false)}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className={`mx-auto p-2 transition duration-150 ${hoverExit ? "text-gray-400" : "text-gray-500"}`} />
              </div>
              <div className="col-span-3 mr-3 lg:mr-5">
                <div className="has-tooltip hover:cursor-pointer w-full flex justify-center"
                     onClick={() => {
                       document.addEventListener('copy', function(e) {
                         e.clipboardData.setData('text/plain', secretAddress);
                         e.preventDefault();
                       }, true);

                       document.execCommand('copy');
                       setIsCopied(true);
                     }}
                     onMouseLeave={() => setIsCopied(false)}>
                  <span className={`tooltip rounded shadow-lg p-1 px-2 bg-gray-200 text-black -mt-9 text-sm`}>{isCopied ? "Copied!" : "Copy to clipboard"}</span>
                  <p className="text-sm font-medium text-white truncate">{ secretAddress }</p>
                </div>
                <p
                    className={`text-xs font-medium hover:cursor-pointer transition duration-150 ${hoverExit ? "text-gray-300" : "text-gray-400"}`}
                    onClick={() => setWalletConnected(false)}
                    onMouseEnter={() => setHoverExit(true)}
                    onMouseLeave={() => setHoverExit(false)}
                >
                  Disconnect wallet
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
  return (
      <div className="row-span-1 flex justify-center mb-5 px-8 mx-2 md:px-6">
        <div className="flex items-center justify-center">
          <button
              onClick={() => setWalletConnected(true)}
              className="p-4 rounded-lg text-kindasmall bg-[#5596DC] text-white font-medium transition duration-150 hover:bg-[#66a0df]"
          >
            Connect Wallet
          </button>
        </div>
      </div>
  )
};

export default Menu