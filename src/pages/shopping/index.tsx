import ShoppingComponent from "../../components/shopping";
import BreadcrumbItem from "../../generic/breadCrumb";

const Shopping = () => {
	return (
		<section className="mt-6">
			<BreadcrumbItem pathTitle="shopping card" />
			<ShoppingComponent />
		</section>
	);
};

export default Shopping;
