import {FunctionComponent} from "react";
import {MenuItem} from "../../types/general";
import {usePersistentStore} from "../../stores/Persistent";
import Link from "next/link";
import classNames from "classnames";

const Item: FunctionComponent<{ item: MenuItem, active: boolean }> = ({ item, active }) => {

    const isConnected = usePersistentStore((state) => state.wallet.connected);

    let disabled: boolean = !isConnected && item.walletRequired;

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

export default Item;