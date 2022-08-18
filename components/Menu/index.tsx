import {FunctionComponent, ReactElement, useRef} from "react";
import {useMenuStore} from "../../stores/Menu";
import {useOnClickOutside} from "../../functions/helper";
import {Transition} from "@headlessui/react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import MenuFooter from "./Footer";
import Item from "./Item";

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

const Menu: FunctionComponent<{ activeTitle: string }> = ({ activeTitle }) => {

    const setOpen = useMenuStore((state) => state.setOpen);
    const mobileMenuRef = useRef<HTMLDivElement>();
    useOnClickOutside(mobileMenuRef, () => setOpen(false));

    const isOpen = useMenuStore((state) => state.isOpen);
    const toggleMenu = useMenuStore((state) => state.toggleMenu);

    const Nav: ReactElement = (
        <nav className="m-auto lg:mx-0">
            {
                menuItems.map((item) => (
                    <Item key={`menu-item-${item.title}`} item={item} active={activeTitle === item.title} />
                ))
            }
        </nav>
    );

    const Logo: ReactElement = (
        <div className="w-full flex justify-center pt-4">
            <Image
                className="hover:cursor-pointer"
                height="42"
                width="123"
                src={logo}
                alt="Cover" />
        </div>
    );

    return (
        <>
            {/* Mobile */}
            {/*<div className="lg:hidden absolute h-screen z-40 w-0" role="dialog" aria-modal="true">*/}
            {/*    <Transition*/}
            {/*        show={isOpen}*/}
            {/*        as="div"*/}
            {/*        enter="transition-opacity duration-150"*/}
            {/*        enterFrom="opacity-0"*/}
            {/*        enterTo="opacity-100"*/}
            {/*        leave="transition-opacity duration-150"*/}
            {/*        leaveFrom="opacity-100"*/}
            {/*        leaveTo="opacity-0"*/}
            {/*    >*/}
            {/*        <div className="fixed inset-0 w-full bg-[#1A2128] bg-opacity-75" />*/}
            {/*        <div className="fixed inset-0 flex z-40">*/}
            {/*            <div className="flex flex-col overflow-x-hidden overflow-y-auto max-w-sidebar pb-6 w-full bg-[#1A2128]" ref={mobileMenuRef}>*/}
            {/*                <div onClick={() => toggleMenu()} className="flex row-span-1 justify-end pr-5 pt-5">*/}
            {/*                    <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">*/}
            {/*                        <span className="sr-only">Close sidebar</span>*/}
            {/*                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">*/}
            {/*                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />*/}
            {/*                        </svg>*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*                { Logo }*/}
            {/*                <div className="h-full flex flex-col justify-between">*/}
            {/*                    { Nav }*/}
            {/*                    <MenuFooter />*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="flex-shrink-0 w-14" aria-hidden="true" />*/}
            {/*    </Transition>*/}
            {/*</div>*/}

            {/* Desktop */}

            <div className="hidden lg:flex lg:flex-col fixed w-sidebar bg-[#1A2128] p-6 pb-3 h-full overflow-x-hidden overflow-y-auto">
                { Logo }
                <div className="h-full flex flex-col justify-between">
                    { Nav }
                    <MenuFooter />
                </div>
            </div>
        </>
    )
};

export default Menu;