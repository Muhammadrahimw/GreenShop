import ShoppingProducts from "../../components/shopping/products";
import TotalProducts from "../../components/shopping/totalProducts";

const Shopping = () => {
	return (
		<section className="grid grid-cols-[2fr_1fr] gap-[5em] mt-6">
			<ShoppingProducts />
			<TotalProducts />
		</section>
	);
};

export default Shopping;
