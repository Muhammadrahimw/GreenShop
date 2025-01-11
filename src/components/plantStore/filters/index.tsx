import {Slider} from "antd";
import {FC, useEffect, useState} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {CategoriesTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";

const Filters: FC<CategoriesTypes> = () => {
	let centerStyle = "flex items-center justify-between gap-4";
	let [price, setPrice] = useState<number[]>([39, 1230]);
	let axios = useAxios();
	let [categories, setCategories] = useState<CategoriesTypes[]>();

	useEffect(() => {
		axios({url: `/flower/category`})
			.then((response) => {
				setCategories(response.data);
				setParam({
					category: getParam(`category`) || response.data[0].route_path,
					type: getParam(`type`) || `all-plants`,
					range_min: getParam(`range_min`) || price[0],
					range_max: getParam(`range_max`) || price[1],
					sort: getParam(`sort`) || `default-sorting`,
				});
			})
			.catch((error) => console.log(error));
	}, []);

	let {getParam, setParam} = searchParams();
	let editUrl = (url: string) => {
		setParam({
			category: `${url}`,
			type: getParam(`type`) || `all-plants`,
			range_min: price[0],
			range_max: price[1],
			sort: getParam(`sort`),
		});
	};

	useEffect(() => {
		setParam({
			category: getParam(`category`),
			type: getParam(`type`),
			range_min: price[0],
			range_max: price[1],
			sort: getParam(`sort`),
		});
	}, [price]);

	return (
		<div className="flex flex-col items-start justify-start">
			<div className="px-4 py-3 rounded-sm tracking-wide text-blackColor bg-[#FBFBFB] w-[20em]">
				<p className="mb-2 text-xl font-bold">Categories</p>
				<div className="pl-3">
					{categories
						? categories.map((value: CategoriesTypes) => (
								<div
									key={value._id}
									className={centerStyle}
									onClick={() => editUrl(value.route_path)}>
									<p
										className={`mb-5 cursor-pointer ${
											getParam(`category`) === value.route_path
												? `text-primary font-bold`
												: ""
										}`}>
										{value.title}
									</p>
									<p
										className={`mb-5 cursor-pointer ${
											getParam(`category`) === value.route_path
												? `text-primary font-bold`
												: ""
										}`}>
										({Math.abs(value.count)})
									</p>
								</div>
						  ))
						: ""}
				</div>
				<p className="mt-4 mb-2 text-xl font-bold">Price Range</p>
				<div className="pl-3">
					<div className="w-[15em] mt-4">
						<Slider
							className="text-primary"
							range
							defaultValue={[39, 1230]}
							min={0}
							max={1500}
							onChange={(e) => setPrice(e)}
						/>
						<p className="mt-4">
							Price:
							<span className="font-semibold text-primary">
								{price[0]}$ - {price[1]}$
							</span>
						</p>
						<button
							type="button"
							className="w-[6em] h-9 rounded-md bg-primary text-white mt-4 font-semibold">
							Filter
						</button>
					</div>
				</div>
				<p className="mb-2 text-xl font-bold mt-9">Size</p>
				<div className="pl-3">
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Small</p>
						<p className="mb-5">(119)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Medium</p>
						<p className="mb-5">(86)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Large</p>
						<p className="mb-5">(78)</p>
					</div>
				</div>
			</div>
			<div className="w-[20em] h-[29.3em] bg-[url('/src/assets/imgs/sale-image.png')] bg-no-repeat bg-cover bg-center cursor-pointer"></div>
		</div>
	);
};

export default Filters;
