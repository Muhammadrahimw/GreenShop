import {useRef} from "react";
import {PlantTypes} from "../../@types";
import {useReduxSelector} from "../../hooks/useRedux";
import ShopProductCard from "./products";
import {useGetCoupon} from "../../hooks/useQuery/useQueryAction";
import {LoadingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const ShoppingComponent = () => {
	let {shop} = useReduxSelector((state) => state.shopSLice);

	let totalPrice = shop.reduce((acc: number, value: PlantTypes) => {
		return acc + value.price * Number(value.count);
	}, 0);

	let couponRef = useRef<HTMLInputElement>(null);

	let {mutate} = useGetCoupon();

	let {coupon, isLoading} = useReduxSelector((state) => state.couponSlice);

	let getCoupon = () => {
		const coupon_code: string = couponRef.current?.value as string;
		let newDataCoupon = {coupon_code};
		if (coupon_code.trim()) {
			mutate(newDataCoupon);
		}
	};

	let discountCouponPrice = (totalPrice / 100) * coupon;

	return (
		<div className="grid grid-cols-[2fr_1fr] gap-[4em] mt-3">
			<div>
				<div className="grid grid-cols-6 gap-4 pb-2 mt-6 font-medium border-b border-opacity-30 border-primary">
					<div className="col-span-2">Products</div>
					<div>Price</div>
					<div>Quantity</div>
					<div>Total</div>
				</div>
				<div>
					{shop.map((value: PlantTypes) => (
						<ShopProductCard key={value._id} {...value} />
					))}
				</div>
			</div>
			<div className="mt-6">
				<p className="text-[1.15em] font-bold pb-1 border-b border-opacity-30 border-primary">
					Cart Totals
				</p>
				<p className="text-sm text-[#3D3D3D] mt-2">Coupon Apply</p>
				<div className="flex items-center justify-between mt-2 mb-8 h-11">
					<input
						type="text"
						className="w-full h-full pl-2 border rounded-l outline-none border-primary"
						placeholder="Enter coupon code here..."
						ref={couponRef}
					/>
					<button
						onClick={() => getCoupon()}
						type="button"
						className="w-[7.25em] h-full rounded-r text-white bg-primary">
						{isLoading ? <LoadingOutlined className="mb-1 text-xl" /> : `Apply`}
					</button>
				</div>
				<div className="flex items-center justify-between gap-2">
					<p className="text-sm text-[#3D3D3D]">Subtotal</p>
					<p className="text-[1.15em] font-medium">{totalPrice.toFixed(2)}</p>
				</div>
				<div className="flex items-center justify-between gap-2 mt-3">
					<p className="text-sm text-[#3D3D3D]">Coupon Discount</p>
					<p className="text-[#3D3D3D]">%{coupon}</p>
				</div>
				<div className="flex items-center justify-between gap-2 mt-3">
					<p className="text-sm text-[#3D3D3D]">Shiping</p>
					<p className="text-[1.15em] font-medium">$16.00</p>
				</div>
				<p className="mt-1 text-xs cursor-pointer text-primary text-end">
					View shipping charge
				</p>
				<div className="flex items-center justify-between gap-2 mt-6">
					<p className="font-bold text-[#3D3D3D]">Total</p>
					<p className="text-[1.15em] font-bold text-primary">
						${(totalPrice - discountCouponPrice + 16).toFixed(2)}
					</p>
				</div>
				<Link to={`/plant/checkout`}>
					<button
						type="button"
						className="block w-full mt-8 text-white rounded h-11 bg-primary">
						Proceed To Checkout
					</button>
				</Link>
				<Link to={`/`}>
					<button
						type="button"
						className="block w-full rounded text-primary h-11">
						Continue Shopping
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ShoppingComponent;
