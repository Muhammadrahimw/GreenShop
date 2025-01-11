import axios from "axios";
import {useProgress} from "../../generic/loading";

interface PropTypes {
	url: string;
	method?: "GET" | "POST" | "DELETE" | "PUT";
	body?: object;
	headers?: object;
	params?: object;
}

export let useAxios = () => {
	let {setIsProgress} = useProgress();

	let response = (props: PropTypes) => {
		let {url, method = "GET", body, headers, params} = props;
		setIsProgress(true);
		return axios({
			url: `${import.meta.env.VITE_BASE_URL}${url}`,
			method,
			data: body,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": true,
				...headers,
			},
			params: {
				access_token: "64bebc1e2c6d3f056a8c85b7",
				...params,
			},
		})
			.then((data) => {
				setTimeout(() => {
					setIsProgress(false);
				}, 80);

				return data.data;
			})
			.catch((error) => console.log(error));
	};
	return response;
};
