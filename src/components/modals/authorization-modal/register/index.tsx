import {useForm} from "react-hook-form";
import {useReduxDispatch} from "../../../../hooks/useRedux";
import {setAuthorizationModalVisibility} from "../../../../redux/modal-slice";

const Register = () => {
	let dispatch = useReduxDispatch();

	let {
		register,
		handleSubmit,
		reset,
		watch,
		formState: {errors},
	} = useForm();

	let onSubmit = (data: any) => {
		console.log(data);
		reset();
		dispatch(setAuthorizationModalVisibility());
	};

	return (
		<div className="py-10 px-[2em]">
			<p>Enter your email and password to register.</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mt-5">
					<label htmlFor="username"></label>
					<input
						className="w-full h-12 pl-3 border rounded outline-none border-grayColor"
						id="username"
						placeholder="Username"
						type="text"
						{...register(`username`, {required: `username is required!`})}
					/>
					{errors.email && (
						<p className="mt-1 text-red-500">
							{errors?.username?.message?.toString()}
						</p>
					)}
				</div>
				<div className="mt-5">
					<label htmlFor="email"></label>
					<input
						className="w-full h-12 pl-3 border rounded outline-none border-grayColor"
						id="email"
						placeholder="Enter your email address"
						type="email"
						{...register(`email`, {required: `email is required!`})}
					/>
					{errors.email && (
						<p className="mt-1 text-red-500">
							{errors?.email?.message?.toString()}
						</p>
					)}
				</div>
				<div className="mt-5">
					<label htmlFor="password"></label>
					<input
						className="w-full h-12 pl-3 border rounded outline-none border-grayColor"
						id="password"
						placeholder="password"
						type="password"
						{...register(`password`, {required: `password is required!`})}
					/>
					{errors.email && (
						<p className="mt-1 text-red-500">
							{errors?.password?.message?.toString()}
						</p>
					)}
				</div>
				<div className="mt-5">
					<label htmlFor="confirmPassword"></label>
					<input
						className="w-full h-12 pl-3 border rounded outline-none border-grayColor"
						id="confirmPassword"
						placeholder="Confirm password"
						type="password"
						{...register(`confirmPassword`, {
							required: `confirm password is required!`,
							validate: (value) =>
								value === watch("password") || "Passwords do not match!",
						})}
					/>
					{errors.confirmPassword && (
						<p className="mt-1 text-red-500">
							{errors?.confirmPassword?.message?.toString()}
						</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full h-12 text-white rounded bg-primary mt-7">
					Register
				</button>
				<div className="flex items-center justify-between gap-3 mt-14">
					<div className="w-full h-[1px] bg-gray-300"></div>
					<span className="min-w-[7.35em]">Or register with</span>
					<div className="w-full h-[1px] bg-gray-300"></div>
				</div>
				<button
					className="flex items-center justify-center w-full h-12 gap-3 mt-6 bg-transparent border rounded text-blackColor border-grayColor"
					type="button">
					<img src="/src/assets/icons/google.svg" alt="google" />
					Login with Google
				</button>
			</form>
		</div>
	);
};

export default Register;
