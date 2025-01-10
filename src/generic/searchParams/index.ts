import {useSearchParams} from "react-router-dom";

let searchParams = () => {
	let [params, setParams] = useSearchParams();
	let getParam = (path: string) => params.get(path);
	let setParam = (param: object) => {
		setParams({
			...param,
		});
	};
	return {getParam, setParam};
};

export {searchParams};
