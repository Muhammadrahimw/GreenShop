import BreadcrumbItem from "../../generic/breadCrumb";
import CheckoutFormComponent from "./checkoutForm";
import CheckoutOrders from "./checkoutOrders";

const CheckoutComponent = () => {
	return (
		<div className="pt-6">
			<BreadcrumbItem pathTitle="checkout" />
			<div className="grid grid-cols-3 gap-[4em] mt-6">
				<CheckoutFormComponent />
				<CheckoutOrders />
			</div>
		</div>
	);
};

export default CheckoutComponent;
