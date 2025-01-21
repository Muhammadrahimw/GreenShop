import {Skeleton, Slider} from "antd";
import {useEffect, useState} from "react";
import {CategoriesTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";
import {useQueryHandler} from "../../../hooks/useQuery";

const Filters = () => {
	const centerStyle = "flex items-center justify-between gap-4";
	const [price, setPrice] = useState<number[]>([0, 1500]);
	const [priceStatus, setPriceStatus] = useState<boolean>(false);
	const {getParam, setParam} = searchParams();
	const category: string = getParam("category") || "house-plants";
	const type: string = getParam("type") || "all-plants";
	const sort: string = getParam("sort") || "default-sorting";
	const range_min: number = Number(getParam("range_min")) || 0;
	const range_max: number = Number(getParam("range_max")) || 1500;

	const {data, isLoading, isError} = useQueryHandler({
		pathname: `/flower/category`,
		url: `/flower/category`,
	});

	const editUrl = (url: string) => {
		setParam({
			category: `${url}`,
			type: type,
			range_min: range_min,
			range_max: range_max,
			sort: sort,
		});
	};

	useEffect(() => {
		setParam({
			category: category,
			type: type,
			range_min: price[0],
			range_max: price[1],
			sort: sort,
		});
	}, [priceStatus]);

	return (
		<div className="flex flex-col items-start justify-start">
			<div className="px-4 py-3 rounded-sm tracking-wide text-blackColor bg-[#FBFBFB] w-[20em]">
				<p className="mb-2 text-xl font-bold">Categories</p>
				<div className="pl-3">
					{isLoading || isError ? (
						<>
							{Array.from({length: 4}).map((_, idx) => (
								<Skeleton key={idx} className="!w-full mt-2" />
							))}
						</>
					) : (
						data.map((value: CategoriesTypes) => (
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
					)}
				</div>
				<p className="mt-4 mb-2 text-xl font-bold">Price Range</p>
				<div className="pl-3">
					<div className="w-[15em] mt-4">
						<Slider
							className="text-primary"
							range
							defaultValue={[0, 1500]}
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
							onClick={() => setPriceStatus(!priceStatus)}
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
