import {Modal} from "antd";
import {useReduxDispatch, useReduxSelector} from "../../../../hooks/useRedux";
import {setConfirmationModalVisibility} from "../../../../redux/modal-slice";
import {PlantTypes} from "../../../../@types";

export const ConfirmationModal = () => {
	const dispatch = useReduxDispatch();
	const {confirmationModalVisibility} = useReduxSelector(
		(state) => state.modalSlice
	);

	let {shop} = useReduxSelector((state) => state.shopSLice);

	let totalPrice = shop.reduce((acc: number, value: PlantTypes) => {
		return acc + value.price * Number(value.count);
	}, 0);

	const today = new Date();
	const date = today.toDateString();

	return (
		<Modal
			className="!w-[48em]"
			open={confirmationModalVisibility}
			onCancel={() => dispatch(setConfirmationModalVisibility())}
			footer={false}>
			<div>
				<p className="text-xl font-semibold">Order Confirmation</p>
				<div className="grid grid-cols-4 gap-3 px-2 mt-5">
					<div className="border-r">
						<p>Order Number</p>
						<b>1737609475628</b>
					</div>
					<div className="border-r">
						<p>Date</p>
						<b>{date}</b>
					</div>
					<div className="border-r">
						<p>Total</p>
						<b>${totalPrice}</b>
					</div>
					<div>
						<p>Payment Method</p>
						<b>Cash on delivery</b>
					</div>
				</div>
				<h2 className="mt-5 text-3xl font-bold border-b border-opacity-50 border-primary">
					Order Details
				</h2>
				{shop.map((value: PlantTypes) => (
					<div
						key={value._id}
						className="w-full h-[4.5em] bg-[#FBFBFB] p-2 flex items-center justify-start gap-4 mt-2">
						<img
							// onClick={() =>
							// 	navigate(`/plant/${shop[idx].category}/${shop[idx]._id}`)
							// }
							src={value.main_image}
							alt={value.short_description}
							className="w-[3.6em] h-full object-cover ml-4"
						/>
						<div className="text-sm w-[25em]">
							<strong className="text-[#3D3D3D]">{value.title}</strong>
							<p className="text-[#8f8f8f]">SKU: {value._id}</p>
						</div>
						<p className="text-sm text-[#727272] w-[9em]">(x{value.count})</p>
						<p className="text-[1.15em] font-bold text-primary">
							{value.price}$
						</p>
					</div>
				))}
				<div className="flex items-center justify-between gap-4 mt-4">
					<p className="text-[1.15em]">Shipping</p>
					<p className="text-[1.15em] font-bold text-primary">$16.00</p>
				</div>
				<div className="flex items-center justify-between gap-4 mt-8 border-b border-opacity-50 border-primary">
					<p className="text-[1.15em]">Total</p>
					<p className="text-[1.15em] font-bold text-primary">${totalPrice}</p>
				</div>
				<p className="px-[6em] mt-4 text-center">
					Your order is currently being processed. You will receive an order
					confirmation email shortly with the expected delivery date for your
					items.
				</p>
				<div className="flex justify-center">
					<button
						className="px-3 py-3 text-white rounded bg-primary mt-[3.5em] tracking-wider"
						type="button">
						Track your order
					</button>
				</div>
			</div>
		</Modal>
	);
};
