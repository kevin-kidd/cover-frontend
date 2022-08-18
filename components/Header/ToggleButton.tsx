import {FunctionComponent, useEffect, useState} from "react";
import classNames from "classnames";
import {usePersistentStore} from "../../stores/PersistentStore";

const toggleData = {
    tokenToggle: {
        names: ["NFTs", "Tokens"]
    },
    listingToggle: {
        names: ["Lend", "Borrow"]
    },
    myTokensToggle: {
        names: ["NFTs", "Tokens"]
    },
    createListingToggle: {
        names: ["Lending", "Borrow"]
    }
};

export const ToggleButton: FunctionComponent<{type: string}> = ({ type }) => {

    const toggles = usePersistentStore((state) => state.config.toggles);
    const updateConfig = usePersistentStore((state) => state.updateConfig);

    const [selectedToggle, setSelectedToggle] = useState<{
        activeId: number,
        toggleNames: string[],
        type: string
    }>({
        activeId: 0,
        toggleNames: [],
        type: ""
    });

    useEffect(() => {
        for(const toggleType of Object.keys(toggles)) {
            if(toggleType === type) {
                const names = toggleData[toggleType].names;
                const state = toggles[toggleType];
                const index = names.findIndex((element) => element === state);
                setSelectedToggle({ activeId: index >= 0 ? index : 0, toggleNames: names, type: toggleType });
            }
        }
    }, [toggles, type]);

    const execToggle = () => {
        if(selectedToggle.type === "" || selectedToggle.toggleNames.length !== 2) return;

        let newConfig = {};
        const index = selectedToggle.activeId === 0 ? 1 : 0;
        newConfig[selectedToggle.type] = selectedToggle.toggleNames[index];

        updateConfig({
            toggles: {
                ...toggles,
                ...newConfig
            }
        });
    };

    return (
        <div className="button-gradient border border-transparent rounded-2xl flex h-full w-full" onClick={execToggle}>
            <button className={classNames(
                "w-1/2 group flex items-center",
                selectedToggle.activeId === 0 ? "toggle-active rounded-2xl bg-[#28333e]" : null
            )}>
                <a className={classNames(
                    "text-xs sm:text-sm px-3 sm:px-5 ml-1",
                    selectedToggle.activeId === 0 ? "text-[#eeeeee]" : "group-hover:text-[#c5c5c5] text-[#8c8c8c] transition duration-300"
                )}>
                    { selectedToggle.toggleNames[0] }
                </a>
            </button>
            <button className={classNames(
                "w-1/2 group flex items-center",
                selectedToggle.activeId === 1 ? "toggle-active rounded-2xl bg-[#28333e]" : null
            )}>
                <a className={classNames(
                    "text-xs sm:text-sm px-3 sm:px-5 mr-1",
                    selectedToggle.activeId === 1 ? "text-[#eeeeee]" : "group-hover:text-[#c5c5c5] text-[#8c8c8c] transition duration-300"
                )}>
                    { selectedToggle.toggleNames[1] }
                </a>
            </button>
        </div>
    )
};