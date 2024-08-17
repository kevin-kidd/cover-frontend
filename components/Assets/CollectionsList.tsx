import type { FunctionComponent } from "react";
import { useAssetStore } from "../../stores/AssetStore";
import { CollectionCard } from "./CollectionCard";

export const CollectionsList: FunctionComponent = () => {
	const savedCollections = useAssetStore(
		(state) => state.assets.snip721.collections,
	);

	return (
		<div className="w-full justify-center mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{savedCollections.map((collection) => (
				<CollectionCard
					key={`collection_card-${collection.details.name}`}
					collection={collection}
				/>
			))}
		</div>
	);
};
