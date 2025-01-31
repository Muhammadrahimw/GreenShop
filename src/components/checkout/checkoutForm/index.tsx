import TextArea from "antd/es/input/TextArea";
import {useForm} from "react-hook-form";
import {MakeOrderType, PlantTypes} from "../../../@types";
import {useReduxDispatch, useReduxSelector} from "../../../hooks/useRedux";
import {useAxios} from "../../../hooks/useAxios";
import {
	setConfirmationModalVisibility,
	setModalIsLoading,
} from "../../../redux/modal-slice";
import {LoadingOutlined} from "@ant-design/icons";
import {ConfirmationModal} from "../../modals/order-modal/confirmation";

const CheckoutFormComponent = () => {
	const axios = useAxios();
	const dispatch = useReduxDispatch();
	const {modalIsLoading} = useReduxSelector((state) => state.modalSlice);
	const shop: PlantTypes[] = useReduxSelector((state) => state.shopSLice.shop);

	const totalPrice = shop.reduce((acc: number, value: PlantTypes) => {
		return acc + value.price * Number(value.count);
	}, 0);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = (halfData: any) => {
		dispatch(setModalIsLoading());
		const data: MakeOrderType = {
			shop_list: shop,
			billing_address: {
				name: halfData.name,
				surname: halfData.surname,
			},
			extra_shop_info: {
				total: totalPrice,
				method: "cash-on-delivery",
			},
		};

		axios({url: `/order/make-order`, method: "POST", body: data})
			.then((data) => {
				console.log(data);
				dispatch(setModalIsLoading());
				dispatch(setConfirmationModalVisibility());
			})
			.catch((error) => console.log(error));
	};

	return (
		<section className="col-span-2">
			<p className="mb-4 font-bold">Billing Address</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-2 gap-5">
				<div>
					<label htmlFor="name" className="block">
						First name
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="name"
						{...register(`name`, {required: `First name is required`})}
					/>
					{errors.name && (
						<p className="text-red-500">{errors?.name?.message?.toString()}</p>
					)}
				</div>
				<div>
					<label htmlFor="surname" className="block">
						Last Name
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="surname"
						{...register(`surname`, {required: `Last name is required`})}
					/>
					{errors.surname && (
						<p className="text-red-500">
							{errors?.surname?.message?.toString()}
						</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="region" className="block">
						Country / Region
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="region"
						{...register(`region`, {required: `Region name is required`})}
					/>
					{errors.region && (
						<p className="text-red-500">
							{errors?.region?.message?.toString()}
						</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="city" className="block">
						Town / City
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="city"
						{...register(`city`, {required: `City name is required`})}
					/>
					{errors.city && (
						<p className="text-red-500">{errors?.city?.message?.toString()}</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="street" className="block">
						Street Address
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="street"
						placeholder="House number and street name"
						{...register(`street`, {required: `Street name is required`})}
					/>
					{errors.street && (
						<p className="text-red-500">
							{errors?.street?.message?.toString()}
						</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="apartment" className="block">
						<p className="text-transparent">Apartment</p>
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="apartment"
						placeholder="Appartment, suite, unit, etc. (optional)"
						{...register(`apartment`)}
					/>
				</div>
				<div className="mt-3">
					<label htmlFor="state" className="block">
						State
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="state"
						{...register(`state`, {required: `State is required`})}
					/>
					{errors.state && (
						<p className="text-red-500">{errors?.state?.message?.toString()}</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="zip" className="block">
						Zip
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="zip"
						{...register(`zip`, {required: `Zip is required`})}
					/>
					{errors.zip && (
						<p className="text-red-500">{errors?.zip?.message?.toString()}</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="email" className="block">
						Email address
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="email"
						{...register(`email`, {required: `Email is required`})}
					/>
					{errors.email && (
						<p className="text-red-500">{errors?.email?.message?.toString()}</p>
					)}
				</div>
				<div className="mt-3">
					<label htmlFor="phone" className="block">
						Phone Number
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="phone"
						{...register(`phone`, {required: `Phone is required`})}
					/>
					{errors.phone && (
						<p className="text-red-500">{errors?.phone?.message?.toString()}</p>
					)}
				</div>
				<div className="flex items-center gap-2 mt-3">
					<input
						className="scale-125 cursor-pointer text-primary"
						type="radio"
						id="other"
					/>
					<label htmlFor="other" className="block">
						<p className="font-semibold cursor-pointer">
							Ship to a different address?
						</p>
					</label>
				</div>
				<div></div>
				<div className="mt-12">
					<div>
						<p className="text-[#3D3D3D]">Order notes (optional)</p>
						<TextArea className="mt-2" />
					</div>
				</div>
				<div className="col-span-2">
					<button
						type="submit"
						className="w-full mt-10 font-medium text-white rounded h-11 bg-primary">
						{modalIsLoading ? (
							<LoadingOutlined className="text-xl" />
						) : (
							<p>Place order</p>
						)}
					</button>
				</div>
			</form>
			<ConfirmationModal />
		</section>
	);
};

export default CheckoutFormComponent;
