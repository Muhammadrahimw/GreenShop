import {Slider} from "antd";
import {FC, useEffect, useState} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {CategoriesTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";

const Filters: FC<CategoriesTypes> = (props) => {
	let centerStyle = "flex items-center justify-between gap-4";
	let [price, setPrice] = useState<number[]>([39, 1230]);
	let axios = useAxios();
	let [categories, setCategories] = useState<CategoriesTypes[]>();
	useEffect(() => {
		axios({url: `/flower/category`})
			.then((response) => setCategories(response.data))
			.catch((error) => console.log(error));
	}, []);

	// let typeParam: string = getParam("type") || "all-plants";
	// let setCategory = () => {
	// 	setParam({category: props.route_path, type: typeParam});
	// };
	// let {getParam, setParam} = searchParams();

	// let type = getParam("type");
	// const category = getParam("category");
	// console.log(category);

	// setParam({category: "/flower/category/house-plants"})

	return (
		<div className="flex flex-col items-start justify-start">
			<div className="px-4 py-3 rounded-sm tracking-wide text-blackColor bg-[#FBFBFB] w-[20em]">
				<p className="mb-2 text-xl font-bold">Categories</p>
				<div className="pl-3">
					{categories
						? categories.map((value: CategoriesTypes) => (
								<div key={value._id} className={centerStyle}>
									<p className="mb-5 font-bold cursor-pointer text-primary">
										{value.title}
									</p>
									<p className="mb-5 font-bold cursor-pointer text-primary">
										({Math.abs(value.count)})
									</p>
								</div>
						  ))
						: ""}
					{/* <div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Potter Plants</p>
						<p className="mb-5">(12)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Seeds</p>
						<p className="mb-5">(33)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Small Plants</p>
						<p className="mb-5">(12)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Big Plants</p>
						<p className="mb-5">(65)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Succulents</p>
						<p className="mb-5">(39)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Trerrariums</p>
						<p className="mb-5">(23)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Gardening</p>
						<p className="mb-5">(17)</p>
					</div>
					<div className={centerStyle}>
						<p className="mb-5 cursor-pointer">Accessories</p>
						<p className="mb-5">(19)</p>
					</div> */}
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
