import {PlantTypes} from "../../../@types";
import {useReduxSelector} from "../../../hooks/useRedux";

const CheckoutOrders = () => {
	let {shop} = useReduxSelector((state) => state.shopSLice);

	let totalPrice = shop.reduce((acc: number, value: PlantTypes) => {
		return acc + value.price * Number(value.count);
	}, 0);

	let {coupon} = useReduxSelector((state) => state.couponSlice);

	let discountCouponPrice = (totalPrice / 100) * coupon;

	return (
		<section>
			<p className="mb-4 font-bold">Your Order</p>
			<div className="flex items-center justify-between gap-4 pb-2 border-b border-grayColor">
				<p className="font-medium">Products</p>
				<p className="font-medium">Subtotal</p>
			</div>
			{shop.map((value: PlantTypes) => (
				<div
					key={value._id}
					className="w-full h-[4.5em] bg-[#FBFBFB] p-2 flex items-center justify-start gap-4 mt-2">
					<img
						src={value.main_image}
						alt={value.short_description}
						className="w-[3.6em] h-full object-cover"
					/>
					<div className="text-sm w-[11em]">
						<p className="text-[#3D3D3D] font-medium">{value.title}</p>
						<p className="text-[#8f8f8f]">SKU: {value._id.slice(0, 13)}</p>
					</div>
					<p className="text-sm text-[#727272]">(x{value.count})</p>
					<p className="text-[1.15em] font-bold text-primary">{value.price}$</p>
				</div>
			))}
			<p className="mt-3 text-sm text-end">
				Have a coupon code?
				<span className="font-medium cursor-pointer text-primary">
					Click here
				</span>
			</p>
			<div className="flex justify-end w-full">
				<div className="w-[21em]">
					<div className="flex items-center justify-between gap-2 mt-4">
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
					<div className="flex items-center justify-between gap-2 pt-3 mt-4 border-t">
						<p className="font-bold text-[#3D3D3D]">Total</p>
						<p className="text-[1.15em] font-bold text-primary">
							${(totalPrice - discountCouponPrice + 16).toFixed(2)}
						</p>
					</div>
					<p className="mt-10 font-bold">Payment Method</p>
				</div>
			</div>
			<div className="flex flex-col items-end gap-4 mt-4">
				<div className="w-[21em] border h-12 border-[#EAEAEA] rounded flex items-center gap-3 pl-4">
					<input
						className="scale-125 cursor-pointer"
						type="radio"
						id="card"
						name="payment"
					/>
					<label className="cursor-pointer" htmlFor="card">
						<img
							className="w-full"
							src="/src/assets/imgs/payment-cards.png"
							alt="payment-cards"
						/>
					</label>
				</div>
				<div className="w-[21em] border h-12 border-[#EAEAEA] rounded flex items-center gap-3 pl-4">
					<input
						className="scale-125 cursor-pointer"
						type="radio"
						id="dorect"
						alt="payment-cards"
						name="payment"
					/>
					<label className="cursor-pointer text-[#3D3D3D]" htmlFor="dorect">
						Dorect bank transfer
					</label>
				</div>
				<div className="w-[21em] border h-12 border-[#EAEAEA] rounded flex items-center gap-3 pl-4">
					<input
						className="scale-125 cursor-pointer"
						type="radio"
						id="cash"
						name="payment"
					/>
					<label className="cursor-pointer text-[#3D3D3D]" htmlFor="cash">
						Cash on delivery
					</label>
				</div>
			</div>
		</section>
	);
};

export default CheckoutOrders;
