import Filters from "./filters";
import Products from "./products";

const PlantStore = () => {
	return (
		<section className="flex items-start justify-between gap-12 mt-12">
			<Filters />
			<Products />
		</section>
	);
};

export default PlantStore;
