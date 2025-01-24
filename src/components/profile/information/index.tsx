import {PlusOutlined} from "@ant-design/icons";
import {Upload} from "antd";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {GetUserInfo} from "../../../generic/getUserInfo";
import {useAxios} from "../../../hooks/useAxios";

const InformationComp = () => {
	const [photo, setPhoto] = useState(``);
	const axios = useAxios();

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = async (data: any) => {
		let userInfo = {
			_id: userState._id,
			name: data.name,
			surname: data.surname,
			email: data.email,
			phone_number: data.number,
			username: data.username,
			profile_photo:
				photo ||
				`https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg`,
		};

		await axios({
			url: "/user/account-details",
			method: "POST",
			body: userInfo,
		})
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const handleChange = (info: any) => {
		setPhoto(info);
	};

	const beforeUpload = () => {
		return false;
	};

	const userState = GetUserInfo();

	return (
		<section className="w-full">
			<h2 className="font-medium text-[#3D3D3D] mb-5">Personal Information</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid w-full grid-cols-2 gap-7">
				<div className="w-full">
					<label htmlFor="name" className="block font-light">
						First name
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="name"
						defaultValue={userState.name}
						{...register(`name`, {required: `First name is required`})}
					/>
					{errors.name && (
						<p className="text-red-500">{errors?.name?.message?.toString()}</p>
					)}
				</div>
				<div className="w-full">
					<label htmlFor="surname" className="block font-light">
						Last Name
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="surname"
						defaultValue={userState.surname}
						{...register(`surname`, {required: `Last name is required`})}
					/>
					{errors.surname && (
						<p className="text-red-500">
							{errors?.surname?.message?.toString()}
						</p>
					)}
				</div>
				<div className="w-full">
					<label htmlFor="email" className="block font-light">
						Email
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="email"
						defaultValue={userState.email}
						{...register(`email`, {required: `Email is required`})}
					/>
					{errors.email && (
						<p className="text-red-500">{errors?.email?.message?.toString()}</p>
					)}
				</div>
				<div className="w-full">
					<label htmlFor="number" className="block font-light">
						Phone Number
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="number"
						minLength={13}
						defaultValue={"+988"}
						{...register(`number`, {required: `Phone number is required`})}
					/>
					{errors.number && (
						<p className="text-red-500">
							{errors?.number?.message?.toString()}
						</p>
					)}
				</div>
				<div className="w-full">
					<label htmlFor="username" className="block font-light">
						Username
					</label>
					<input
						className="border border-[#EAEAEA] w-full h-11 rounded mt-2 pl-3 outline-none"
						type="text"
						id="username"
						defaultValue={userState.username}
						{...register(`username`, {required: `Username is required`})}
					/>
					{errors.username && (
						<p className="text-red-500">
							{errors?.username?.message?.toString()}
						</p>
					)}
				</div>
				<div className="flex justify-start w-full ml-[-0.75em]">
					<Upload
						className="scale-75"
						maxCount={1}
						listType="picture-circle"
						beforeUpload={beforeUpload}
						onChange={handleChange}>
						<div>
							<PlusOutlined />
							<div>Upload</div>
						</div>
					</Upload>
				</div>
				<button type="submit" className="text-white rounded bg-primary h-11">
					Save Change
				</button>
			</form>
		</section>
	);
};

export default InformationComp;
