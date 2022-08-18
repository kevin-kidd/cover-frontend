import {FunctionComponent} from "react";
import {Collection} from "../../stores/AssetStore";
import Image from "next/future/image";
import Link from "next/link";


export const CollectionCard: FunctionComponent<{ collection: Collection }> = ({ collection }) => {
    return (
        <Link href={`/assets/${collection.details.contract.address}`}>
            <div className="w-full rounded-lg w-80 h-72 bg-gray-900 flex flex-col
            hover:shadow-lg hover:cursor-pointer transition duration-200">
                <div className="h-3/5 w-full relative">
                    <Image src={collection.details.banner} className="object-cover h-full w-full rounded-t-lg"
                           alt={`collection_banner-${collection.details.name}`}
                    />
                    <div className="h-20 w-20 shadow-2xl drop-shadow-2xl rounded-full absolute left-7 -bottom-8">
                        <Image src={collection.details.logo} className="shadow-inner object-cover rounded-full"
                               alt={`collection_logo-${collection.details.name}`}
                        />
                    </div>
                </div>
                <div className="w-full h-1/5 flex flex-row justify-end pr-3 pt-3">
                    {/*<p className="text-xs">Test</p>*/}
                    {/*<p className="text-xs">$2.50</p>*/}
                </div>
                <div className="w-full px-4 mb-5 h-1/5 flex flex-col justify-end">
                    <h3 className="text-white">
                        {collection.details.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{collection.details.description}</p>
                </div>
            </div>
        </Link>
    )
};