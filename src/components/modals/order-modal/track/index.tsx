import {Modal} from "antd";
import {useReduxDispatch, useReduxSelector} from "../../../../hooks/useRedux";
import {setTrackModalVisibility} from "../../../../redux/modal-slice";
import {PlantTypes, trackingOrderType} from "../../../../@types";
import {useNavigate} from "react-router-dom";
import {useAxios} from "../../../../hooks/useAxios";
import {LoadingOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useQueryClient} from "react-query";

export const TrackOrderModal = () => {
	const dispatch = useReduxDispatch();
	const axios = useAxios();
	const navigate = useNavigate();
	const {orderData} = useReduxSelector((state) => state.orderSlice);
	const {trackModalVisibility} = useReduxSelector((state) => state.modalSlice);
	const {shop} = useReduxSelector((state) => state.shopSLice);
	const [orderLoading, setOrderLoading] = useState<boolean>(false);
	const queryClient = useQueryClient();

	const deleteOrder = (_id: string) => {
		setOrderLoading(true);

		axios({
			url: `/order/delete-order`,
			method: "DELETE",
			body: {
				_id: _id,
			},
		})
			.then(() => {
				queryClient.setQueriesData(`get-order`, (oldData: any) => {
					return oldData.filter(
						(value: trackingOrderType) => value._id !== _id
					);
				});
				setOrderLoading(false);
				dispatch(setTrackModalVisibility());
			})
			.catch((error) => console.log(error));
	};

	return (
		<Modal
			className="!w-[48em]"
			open={trackModalVisibility}
			okText={orderLoading ? <LoadingOutlined /> : `Delete`}
			okType="danger"
			onOk={() => {
				deleteOrder(orderData?._id as string);
			}}
			onCancel={() => dispatch(setTrackModalVisibility())}>
			<div>
				<p className="text-xl font-semibold">Order</p>
				<div className="grid grid-cols-4 gap-3 px-2 mt-5">
					<div className="border-r">
						<p>Order Number</p>
						<b>{orderData?._id}</b>
					</div>
					<div className="border-r">
						<p>Date</p>
						<b>{orderData?.created_at?.slice(0, 10)}</b>
					</div>
					<div className="border-r">
						<p>Total</p>
						<b>${orderData?.extra_shop_info.total?.toFixed(2) || 0}</b>
					</div>
					<div>
						<p>Payment Method</p>
						<b>Cash on delivery</b>
					</div>
				</div>
				<h2 className="mt-5 text-3xl font-bold border-b border-opacity-50 border-primary">
					Order Details
				</h2>
				{orderData?.shop_list.map((value: PlantTypes, idx: number) => (
					<div
						key={value._id}
						className="w-full h-[4.5em] bg-[#FBFBFB] p-2 flex items-center justify-start gap-4 mt-2">
						<img
							onClick={() =>
								navigate(`/plant/${shop[idx].category}/${shop[idx]._id}`)
							}
							src={value.main_image}
							alt={value.short_description}
							className="w-[3.6em] h-full object-cover ml-4 cursor-pointer"
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
					<p className="text-[1.15em] font-bold text-primary">
						${orderData?.extra_shop_info.total?.toFixed(2)}
					</p>
				</div>
			</div>
		</Modal>
	);
};
