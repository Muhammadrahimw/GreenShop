import {useForm} from "react-hook-form";
import {billingAddressType} from "../../../@types";
import {GetUserInfo} from "../../../generic/getUserInfo";
import {useAxios} from "../../../hooks/useAxios";
import {useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";

const Address = () => {
	const axios = useAxios();
	const [addressLoading, setAddressLoading] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const {_id} = GetUserInfo();
	const userInfo = GetUserInfo();

	const onSubmit = (info: any) => {
		setAddressLoading(true);
		const data: billingAddressType = {
			_id: _id,
			name: info.name,
			surname: info.surname,
			country: info.region,
			town: info.town,
			street_address: info.extraAddress,
			state: info.state,
			zip: info.zip,
			email: info.email,
			phone_number: info.number,
		};
		axios({
			url: `/user/address`,
			method: "POST",
			body: data,
		})
			.then((data) => {
				setAddressLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setAddressLoading(false);
			});
	};
	return (
		<section>
			<h2 className="text-xl font-medium">Billing Address</h2>
			<p className="mt-1 text-[1.1em] font-light">
				The following addresses will be used on the checkout page by default.
			</p>
			<div className="mt-5">
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
							defaultValue={userInfo.name}
							{...register(`name`, {required: `First name is required`})}
						/>
						{errors.name && (
							<p className="text-red-500">
								{errors?.name?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="surname" className="block">
							Last name
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="surname"
							defaultValue={userInfo.surname}
							{...register(`surname`, {required: `Last name is required`})}
						/>
						{errors.surname && (
							<p className="text-red-500">
								{errors?.surname?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="region" className="block">
							Country / Region
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="region"
							defaultValue={userInfo.billing_address?.country}
							{...register(`region`, {required: `Region is required`})}
						/>
						{errors.region && (
							<p className="text-red-500">
								{errors?.region?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="town" className="block">
							Town city
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="town"
							defaultValue={userInfo.billing_address.town}
							{...register(`town`, {required: `Town city is required`})}
						/>
						{errors.town && (
							<p className="text-red-500">
								{errors?.town?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="state" className="block">
							State adress
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="state"
							defaultValue={userInfo.billing_address.state}
							{...register(`state`, {required: `State address is required`})}
						/>
						{errors.state && (
							<p className="text-red-500">
								{errors?.state?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="extraAddress" className="block">
							Extra adress
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="extraAddress"
							defaultValue={userInfo.billing_address.street_address}
							{...register(`extraAddress`, {
								required: `Extra address is required`,
							})}
						/>
						{errors.extraAddress && (
							<p className="text-red-500">
								{errors?.extraAddress?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="zip" className="block">
							Zip
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="zip"
							defaultValue={userInfo.billing_address.zip}
							{...register(`zip`, {
								required: `Zip is required`,
							})}
						/>
						{errors.zip && (
							<p className="text-red-500">{errors?.zip?.message?.toString()}</p>
						)}
					</div>
					<div>
						<label htmlFor="email" className="block">
							Email adress
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="email"
							defaultValue={userInfo.email}
							{...register(`email`, {
								required: `Email adress is required`,
							})}
						/>
						{errors.email && (
							<p className="text-red-500">
								{errors?.email?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label htmlFor="number" className="block">
							Phone number
						</label>
						<input
							className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
							type="text"
							id="number"
							defaultValue={`+998`}
							{...register(`number`, {
								required: `Email adress is required`,
							})}
						/>
						{errors.number && (
							<p className="text-red-500">
								{errors?.number?.message?.toString()}
							</p>
						)}
					</div>
					<div>
						<label className="text-transparent">none</label>
						<button
							type="submit"
							className="w-full mt-2 text-white rounded h-11 bg-primary">
							{addressLoading ? <LoadingOutlined className="text-xl" /> : `Place Order`}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Address;
