import type {FC} from "react";
import {PlantTypes} from "../../../@types";
import {DeleteOutlined} from "@ant-design/icons";
import {useReduxDispatch} from "../../../hooks/useRedux";
import {
	decrementProductShop,
	deleteProductShop,
	incrementProductShop,
} from "../../../redux/shop-slice";

const ShopProductCard: FC<PlantTypes> = ({
	main_image,
	title,
	price,
	_id,
	count,
}) => {
	let dispatch = useReduxDispatch();

	return (
		<div className="grid items-center grid-cols-6 gap-4 p-2 my-3 bg-[#FBFBFB]">
			<div className="flex items-center col-span-2 gap-2">
				<img className="w-[4em] h-[4em] object-cover" src={main_image} alt="" />
				<div>
					<p className="font-medium">{title}</p>
					<p className="text-[#727272] text-xs">
						SKU: <span className="text-[#4b4b4b]">{_id}</span>
					</p>
				</div>
			</div>
			<p className="text-[#727272]">${price}</p>
			<div className="flex items-center gap-2">
				<div
					onClick={() => dispatch(incrementProductShop(_id))}
					className="flex items-center justify-center w-6 h-6 text-white rounded-full cursor-pointer bg-primary">
					<p className="text-xl">+</p>
				</div>
				<span>{count}</span>
				<div
					onClick={() => dispatch(decrementProductShop(_id))}
					className={`flex items-center justify-center w-6 h-6 text-white rounded-full cursor-pointer ${
						count === 1 ? `bg-[#77c283]` : `bg-primary`
					}`}>
					<p className="text-xl">-</p>
				</div>
			</div>
			<p className="font-bold text-primary">
				${(price * Number(count)).toFixed(2)}
			</p>
			<div>
				<DeleteOutlined
					onClick={() => dispatch(deleteProductShop(_id))}
					className="text-xl text-[#727272] cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default ShopProductCard;
