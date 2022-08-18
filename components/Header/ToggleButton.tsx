import {FunctionComponent, useEffect} from "react";
import {HomeConfig, useHomeStore} from "../../stores/Home";
import classNames from "classnames";

type Toggle = {
    toggle: (by: string) => void
    names: string[]
    type: string
}

type Toggles = {
    token: Toggle
    listing: Toggle
}

export const ToggleButton: FunctionComponent<{type: string}> = ({ type }) => {

    const listingType = useHomeStore((state) => state.toggles.listingType);
    const toggleListing = useHomeStore((state) => state.toggleListing);
    const tokenType = useHomeStore((state) => state.toggles.tokenType);
    const toggleToken = useHomeStore((state) => state.toggleToken);

    useEffect(() => {
        try {
            let config;
            if (typeof window !== "undefined") {
                config = localStorage.getItem("home-config");
            }
            if(config !== null) {
                const configObj: HomeConfig = JSON.parse(config);
                console.log(configObj);
                toggleListing(configObj.listingToggle);
                toggleToken(configObj.tokenToggle)
            }
        } catch (e) {
            console.error(e);
        }
    }, [toggleListing, toggleToken]);

    let toggles: Toggles = {
        token: {
            toggle: toggleToken,
            names: ["NFTs", "Tokens"],
            type: tokenType
        },
        listing: {
            toggle: toggleListing,
            names: ["Lend", "Borrow"],
            type: listingType
        },
    };

    const execToggle = async () => {
        try {
            let configChanges, currentToggle;
            if(type === "token") {
                currentToggle = toggles.token;
                if(currentToggle.type === currentToggle.names[0]) {
                    configChanges = {
                        tokenToggle: currentToggle.names[1]
                    };
                    currentToggle.toggle(currentToggle.names[1]);
                } else {
                    configChanges = {
                        tokenToggle: currentToggle.names[0]
                    };
                    currentToggle.toggle(currentToggle.names[0]);
                }
            } else {
                currentToggle = toggles.listing;
                if(currentToggle.type === currentToggle.names[0]) {
                    configChanges = {
                        listingToggle: currentToggle.names[1]
                    };
                    currentToggle.toggle(currentToggle.names[1]);
                } else {
                    configChanges = {
                        listingToggle: currentToggle.names[0]
                    };
                    currentToggle.toggle(currentToggle.names[0]);
                }
            }

            let config;
            if (typeof window !== "undefined") {
                config = localStorage.getItem("home-config");
            }

            const configObj: HomeConfig = JSON.parse(config);

            if(config !== undefined) {
                const newConfig = {...configObj, ...configChanges };
                localStorage.setItem("home-config", JSON.stringify(newConfig));
            }

        } catch (e) {
            console.error(e);
            // TODO -- Add error handling for db.put
        }
    };

    const toggle: Toggle = type === "token" ? toggles.token : toggles.listing;

    let activeId: number = toggle.names[0] === toggle.type ? 0 : 1;

    return (
        <div className="toggle-button-gradient border border-transparent rounded-2xl flex h-full" onClick={execToggle}>
            <button className={classNames(
                "w-1/2 h-full group flex items-center",
                activeId === 0 ? "toggle-active rounded-2xl bg-[#28333e]" : null
            )}>
                <a className={classNames(
                    "text-xs sm:text-sm px-3 sm:px-5 mr-1",
                    activeId === 0 ? "text-[#eeeeee]" : "group-hover:text-[#c5c5c5] text-[#8c8c8c] transition duration-300"
                )}>
                    { toggle.names[0] }
                </a>
            </button>
            <button className={classNames(
                "w-1/2 group flex items-center",
                activeId === 1 ? "toggle-active rounded-2xl bg-[#28333e]" : null
            )}>
                <a className={classNames(
                    "text-xs sm:text-sm px-3 sm:px-5 mr-1",
                    activeId === 1 ? "text-[#eeeeee]" : "group-hover:text-[#c5c5c5] text-[#8c8c8c] transition duration-300"
                )}>
                    { toggle.names[1] }
                </a>
            </button>
        </div>
    )
};