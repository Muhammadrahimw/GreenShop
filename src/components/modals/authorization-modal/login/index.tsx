import {useForm} from "react-hook-form";
import {useReduxDispatch} from "../../../../hooks/useRedux";
import {setAuthorizationModalVisibility} from "../../../../redux/modal-slice";
import {useAxios} from "../../../../hooks/useAxios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

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
		console.log(data);
		axios({url: "/user/sign-in", body: data, method: "POST"}).then((data) =>
			console.log(data.data)
		);
		reset();
		dispatch(setAuthorizationModalVisibility());
	};

	// let signIn = useSignIn();

	// let handleLogin = () => {
	// 	let result = signIn({
	// 		token: "sampleToken",
	// 		expiresIn: 3600,
	// 		tokenType: "Bearer",
	// 		authState: {username: "exampleUser"},
	// 	});
	// };

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
