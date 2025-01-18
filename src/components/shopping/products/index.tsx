import BreadcrumbItem from "../../../generic/breadCrumb";

const ShoppingProducts = () => {
	return (
		<div>
			<BreadcrumbItem pathTitle="shop chekout" />
			<div className="grid grid-cols-6 gap-4 pb-2 mt-6 font-medium border-b border-opacity-30 border-primary">
				<div className="col-span-2">Products</div>
				<div>Price</div>
				<div>Quantity</div>
				<div>Total</div>
			</div>
			<div className="grid grid-cols-6 gap-4 pb-2"></div>
		</div>
	);
};

export default ShoppingProducts;
