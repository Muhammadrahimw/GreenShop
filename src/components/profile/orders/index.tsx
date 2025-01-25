import {Skeleton} from "antd";
import {trackingOrderType} from "../../../@types";
import {useQueryHandler} from "../../../hooks/useQuery";
import {useReduxDispatch} from "../../../hooks/useRedux";
import {setTrackModalVisibility} from "../../../redux/modal-slice";
import {TrackOrderModal} from "../../modals/order-modal/track";
import {setOrderData} from "../../../redux/order-slice";

const Orders = () => {
	const dispatch = useReduxDispatch();

	const {data, isLoading, isError} = useQueryHandler({
		pathname: `get-order`,
		url: `/order/get-order`,
	});

	const getDetailOrder = (value: trackingOrderType) => {
		dispatch(setOrderData(value));
		dispatch(setTrackModalVisibility());
	};

	return (
		<section>
			<h2 className="text-xl font-semibold">Track your Orders</h2>
			{isLoading || isError ? (
				<div>
					{Array.from({length: 10}).map((_, idx) => (
						<Skeleton.Input
							key={idx}
							active
							className="!w-full !h-[3.5em] mt-5"
						/>
					))}
				</div>
			) : (
				data?.slice(45).map((value: trackingOrderType) => (
					<div
						key={value._id}
						className="grid grid-cols-4 gap-3 px-2 mt-5 tracking-wide">
						<div className="border-r">
							<p>Order Number</p>
							<b>{value._id.slice(0, 18)}..</b>
						</div>
						<div className="border-r">
							<p>Date</p>
							<b>{value.created_at.slice(0, 10)}</b>
						</div>
						<div className="border-r">
							<p>Total</p>
							<b>${value.extra_shop_info.total?.toFixed(2) || 0}</b>
						</div>
						<div>
							<p>More</p>
							<p
								onClick={() => getDetailOrder(value)}
								className="font-semibold cursor-pointer text-primary">
								Get Details
							</p>
						</div>
					</div>
				))
			)}
			<TrackOrderModal />
		</section>
	);
};

export default Orders;
