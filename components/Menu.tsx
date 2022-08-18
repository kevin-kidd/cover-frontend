import {FunctionComponent, ReactElement, useRef, useState} from "react";
import Image from "next/image"
import { Transition } from "@headlessui/react";
import { useMenuStore } from "../stores/Menu";
import { useOnClickOutside } from "../functions/helper";
import logo from "../assets/logo.svg";

import Link from "next/link";
import { MenuItem } from "../types/general";
import classNames from "classnames";

// Icons
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
  {
    title: "Explore",
    href: "/",
    walletRequired: false,
    icon: {
      viewBox: "0 0 496 512",
      path: <path d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z" />
    }
  },
  {
    title: "My Page",
    href: "/my-page",
    walletRequired: true,
    icon: {
      viewBox: "0 0 37.5 37.499999",
      path: <path d="M 36.179688 15.519531 L 19.867188 1.019531 C 19.144531 0.476562 18.238281 0.476562 17.511719 1.019531 L 1.199219 15.519531 C 0.476562 16.242188 0.292969 17.332031 1.019531 18.054688 C 1.742188 18.78125 2.832031 18.960938 3.554688 18.238281 L 4.101562 17.511719 L 4.101562 34.914062 C 4.101562 36 4.824219 36.726562 5.914062 36.726562 L 31.289062 36.726562 C 32.375 36.726562 33.101562 36 33.101562 34.914062 L 33.101562 17.511719 L 33.644531 18.054688 C 34.367188 18.78125 35.457031 18.601562 36.179688 17.875 C 36.90625 17.332031 36.90625 16.0625 36.179688 15.519531 Z M 18.601562 16.789062 C 21.320312 16.789062 23.492188 18.960938 23.492188 21.679688 C 23.492188 24.398438 21.320312 26.574219 18.601562 26.574219 C 15.882812 26.574219 13.707031 24.398438 13.707031 21.679688 C 13.707031 18.960938 15.882812 16.789062 18.601562 16.789062 Z M 9.539062 33.101562 C 9.539062 32.917969 9.539062 32.917969 9.71875 32.738281 C 13.707031 27.84375 20.957031 26.9375 25.851562 30.925781 C 26.574219 31.46875 27.117188 32.011719 27.664062 32.738281 C 27.664062 32.738281 27.664062 32.917969 27.84375 33.101562 Z M 9.539062 33.101562 " />
    }
  },
  {
    title: "Assets",
    href: "#",
    walletRequired: false,
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
    }
  },
  {
    title: "Trade",
    href: "#",
    walletRequired: false,
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z" />
    }
  },
  {
    title: "Info",
    href: "#",
    walletRequired: false,
    icon: {
      viewBox: "0 0 448 512",
      path: <path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z" />
    }
  },
  {
    title: "Create",
    href: "#",
    walletRequired: true,
    icon: {
      viewBox: "0 0 512 512",
      path: <path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />
    }
  }
];

const Item: FunctionComponent<{ item: MenuItem, active: boolean }> = ({ item, active }) => {

  const isConnected = useMenuStore((state) => state.walletConnected);
  let disabled: boolean = false;
  if(!isConnected && item.walletRequired) disabled = true;

  return (
      <Link href={ disabled ? "" : item.href }>
        <div className="group flex items-center text-base w-full px-4 my-4 group h-12 hover:cursor-pointer transition duration-150">
          <div className={classNames(
              "mr-2 p-2 h-9 w-9 border rounded-xl",
              active ? "border-[#7BBD75]" : "border-[#eeeeee]/90 transition duration-150"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.icon.viewBox} className={classNames(
                "m-auto",
                active ? "fill-[#7BBD75]/90" : "group-hover:fill-[#eeeeee]/90 fill-[#c0c0c0] transition duration-150"
            )}>
              { item.icon.path }
            </svg>
          </div>

          <p className={classNames(
              "font-medium text-base pl-1",
              active ? "text-[#eeeeee]" : "text-[#c0c0c0] group-hover:text-[#eeeeee]/90"
          )}>
            { item.title }
          </p>
        </div>
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
            <div className="fixed inset-0 w-full bg-[#1A2128] bg-opacity-75" />
              <div className="fixed inset-0 flex z-40">
                <div className="flex flex-col overflow-x-hidden overflow-y-auto max-w-sidebar pb-6 w-full bg-[#1A2128]" ref={mobileMenuRef}>
                  <div onClick={() => toggleMenu()} className="flex row-span-1 justify-end pr-5 pt-5">
                    <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Close sidebar</span>
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full flex justify-center pt-4">
                    <Image
                        className="hover:cursor-pointer"
                        height="42"
                        width="123"
                        src={logo}
                        alt="Cover" />
                  </div>
                  <div className="h-full flex flex-col justify-between">
                    <nav className="m-auto w-fit">
                      {
                        menuItems.map((item) => (
                            <Item key={`menu-item-${item.title}`} item={item} active={activeTitle === item.title} />
                        ))
                      }
                    </nav>
                    <MenuFooter />
                  </div>
                </div>
              </div>
            <div className="flex-shrink-0 w-14" aria-hidden="true" />
          </Transition>
        </div>

        {/* Desktop */}

        <div className="hidden lg:flex lg:flex-col fixed w-sidebar bg-[#1A2128] p-6 pb-3 h-full overflow-x-hidden overflow-y-auto">
            <div className="w-full flex justify-center pt-4">
              <Image
                  className="hover:cursor-pointer"
                  height="42"
                  width="123"
                  src={logo}
                  alt="Cover" />
            </div>
            <div className="h-full flex flex-col justify-between">
                <nav className="my-auto">
                    {
                    menuItems.map((item) => (
                        <Item key={`menu-item-${item.title}`} item={item} active={activeTitle === item.title} />
                    ))
                  }
                </nav>
                <MenuFooter />
            </div>
          </div>
      </>
    )
};

const MenuFooter: FunctionComponent = () => {

  const [isCopied, setIsCopied] = useState(false);

  const walletConnected = useMenuStore((state) => state.walletConnected);
  const setWalletConnected = useMenuStore((state) => state.setWalletConnected);

  const secretAddress = "secret18ld7zwzkgsfv9z6phqhlsft9prjysulpdq950z";

  const footerIcons = [
    {
      viewBox: "0 0 512 512",
      href: "https://twitter.com/",
      d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    },
    {
      viewBox: "0 0 640 512",
      href: "https://discord.com/",
      d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
    },
    {
      viewBox: "0 0 496 512",
      href: "https://github.com/",
      d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    },
    {
      viewBox: "0 0 448 512",
      href: "https://medium.com/",
      d: "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
    }
  ];

  const footerLinks: ReactElement = (
      <div className="w-full flex flex-row gap-x-2 mb-1 justify-center">
        {
          footerIcons.map((icon) => (
              <a key={icon.href} href={icon.href} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox}
                     className="fill-white w-5 h-5 opacity-75 hover:opacity-90 hover:cursor-pointer transition duration-500"
                >
                  <path d={icon.d} />
                </svg>
              </a>
          ))
        }
      </div>
  );

  const connectButton: ReactElement = (
      <button onClick={() => setWalletConnected(true)}
          className="p-3 rounded-lg w-fit text-tiny text-[#eeeeee] hover:text-[#ffffff] transition duration-150 bg-[#5596DC]/95  hover:bg-[#5596DC]"
      >
        Connect Wallet
      </button>
  );

  const disconnectButton: ReactElement = (
      <button onClick={() => setWalletConnected(false)}
          className="p-3 group w-fit flex items-center rounded-lg text-tiny border border-[#5596DC]
            text-[#cccccc] hover:text-[#eeeeee] transition duration-500 hover:border-[#66a0df]"
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="p-1 mr-1 h-5 w-5 transition duration-500 text-[#cccccc] group-hover:text-[#eeeeee]" />
        Disconnect
      </button>
  );

  const balance: ReactElement = (
    <div className="flex flex-row items-center justify-center w-full gap-x-2 px-2 lg:px-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="flex-shrink-0 fill-white w-6 h-6">
        <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
      </svg>
      <div className="flex flex-col w-3/4 lg:w-full">
        <div className="hover:cursor-pointer has-tooltip flex justify-center" onMouseLeave={() => setIsCopied(false)}
            onClick={() => {
              document.addEventListener('copy', function(e) {
                e.clipboardData.setData('text/plain', secretAddress);
                e.preventDefault();
              }, true);

              document.execCommand('copy');
              setIsCopied(true);
            }}
          >
          <span className="tooltip rounded shadow-lg p-1 px-2 bg-gray-200 text-black -mt-8 text-xs">{isCopied ? "Copied!" : "Copy to clipboard"}</span>
          <p className="text-white text-sm truncate">{ secretAddress }</p>
        </div>
        <p className="text-[#cecece] text-xs">
          10.2 SCRT
        </p>
      </div>
    </div>
  );


  return (
      <div className="flex flex-col gap-y-6 items-center w-full">
        {
          walletConnected && (
              <>
                { balance }
                { disconnectButton }
              </>
          )
        }
        {
          !walletConnected && (connectButton)
        }
        { footerLinks }
      </div>
  );
};

export default Menu