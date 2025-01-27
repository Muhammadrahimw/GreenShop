import {useForm} from "react-hook-form";
import {useReduxDispatch} from "../../../../hooks/useRedux";
import {setAuthorizationModalVisibility} from "../../../../redux/modal-slice";
import {useAxios} from "../../../../hooks/useAxios";
import {UserDataType} from "../../../../@types";
import {login} from "../../../../redux/auth-slice";

const Login = () => {
	let axios = useAxios();
	let dispatch = useReduxDispatch();

	let {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	let onSubmit = (data: any) => {
		axios({url: "/user/sign-in", body: data, method: "POST"})
			.then((data: UserDataType) => {
				dispatch(
					login({
						token: data.data.token,
						tokenType: `Bearer`,
						userState: JSON.stringify({
							...data.data.user,
						}),
					})
				);
				localStorage.setItem(`token`, data.data.token);
			})
			.catch((error) => console.log(error));
		reset();
		dispatch(setAuthorizationModalVisibility());
	};
	return (
		<div className="py-10 px-[2em]">
			<p>Enter your username and password to login.</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mt-5">
					<label htmlFor="email"></label>
					<input
						className="w-full h-12 pl-3 border rounded outline-none border-grayColor"
						id="email"
						placeholder="almamun_uxui@outlook.com"
						type="email"
						value={`sobirovmuhammadrahim@gmail.com`}
						{...register(`email`, {required: `email is required!`})}
					/>
					{errors.email && (
						<p className="text-red-500">{errors?.email?.message?.toString()}</p>
					)}
				</div>
				<div className="mt-5">
					<label htmlFor="password"></label>
					<input
						className="w-full h-12 pl-3 border rounded outline-none border-grayColor"
						id="password"
						placeholder="password"
						type="password"
						value={`12345`}
						{...register(`password`, {required: `password is required!`})}
					/>
					{errors.email && (
						<p className="text-red-500">
							{errors?.password?.message?.toString()}
						</p>
					)}
				</div>
				<p className="mt-3 cursor-pointer text-end text-primary">
					Forgot Password?
				</p>
				<button
					type="submit"
					className="w-full h-12 text-white rounded bg-primary mt-7">
					Login
				</button>
				<div className="flex items-center justify-between gap-3 mt-14">
					<div className="w-full h-[1px] bg-gray-300"></div>
					<span className="min-w-[6em]">Or login with</span>
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

export default Login;
