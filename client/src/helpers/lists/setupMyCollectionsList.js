import CollectionBlock from '../../components/MyCollections/components/CollectionBlock/CollectionBlock'

export const setupMyCollectionsList = (collections) => {
	return collections.map((collection, index) => {
		return (
			<CollectionBlock
				key={`myCollections__collectionBlock__${index}`}
				title={collection.name}
				description={collection.description}
				topic={collection.topic}
				id={collection.id}
				imageID={collection.image.id}
			/>
		)
	})
}
