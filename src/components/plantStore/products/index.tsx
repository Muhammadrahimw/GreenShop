import {useEffect, useState} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {CatalogTypes, PlantTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";
import {useLocation} from "react-router-dom";
import {Catalogs} from "../../../utils";
import {Select, Skeleton} from "antd";
import {useProgress} from "../../../generic/loading";

const Products = () => {
	const [plants, setPlants] = useState<PlantTypes[]>();
	let {getParam, setParam} = searchParams();
	let axios = useAxios();
	let {isProgress} = useProgress();
	let {search} = useLocation();

	useEffect(() => {
		getParam(`category`)
			? axios({
					url: `/flower/category/${getParam("category") || "house-plants"}`,
					params: {
						type: getParam("type") || "all-plants",
						sort: getParam("sort"),
						range_min: getParam("range_min"),
						range_max: getParam("range_max"),
					},
			  })
					.then((response) => setPlants(response.data))
					.catch((error) => console.log(error))
			: "";
	}, [search]);

	let optionValue = (value: string) => {
		setParam({
			category: getParam(`category`),
			type: getParam(`type`),
			range_min: getParam(`range_min`),
			range_max: getParam(`range_max`),
			sort: value,
		});
	};

	return (
		<div className="w-full tracking-wide text-blackColor">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center justify-between gap-10">
					{Catalogs.map((value: CatalogTypes) => (
						<p
							key={value.id}
							onClick={() =>
								setParam({
									category: `${getParam(`category`)}`,
									type: `${value.path}`,
									range_min: getParam(`range_min`),
									range_max: getParam(`range_max`),
									sort: getParam(`sort`),
								})
							}
							className={`cursor-pointer hover-underline-animation2 ${
								getParam(`type`) === value.path
									? `font-medium text-primary bottom-line`
									: ""
							}`}>
							{value.title}
						</p>
					))}
				</div>
				<div className="flex items-center gap-2">
					<p>Sort by:</p>
					<div className="flex items-center gap-2">
						<Select
							onChange={optionValue}
							defaultValue={getParam(`sort`) || `default-sorting`}
							options={[
								{value: "default-sorting", label: "Default Sorting"},
								{value: "the-cheapest", label: "The Chepaest"},
								{value: "most-expensive", label: "Most Expensive"},
							]}
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-10 mt-10 gap-y-[4.75em]">
				{isProgress
					? Array.from({length: 9}, (_, index) => {
							return (
								<div key={index}>
									<Skeleton.Image active className="!w-full !h-[18.75em]" />
									<div className="flex flex-col bg-white">
										<Skeleton.Input active className="!w-[90%] mt-1" />
										<Skeleton.Input active className="!w-[60%] mt-1" />
									</div>
								</div>
							);
					  })
					: plants
					? plants.slice(0, 9).map((value: PlantTypes) => (
							<div key={value._id}>
								<div className="relative w-full h-[18.75em] hover:border-t-2 hover:border-primary group">
									<img
										className="object-contain w-full h-full cursor-pointer"
										src={`${value.main_image}`}
										alt="plant image"
									/>
									<div className="absolute left-0 right-0 z-10 items-center justify-center hidden gap-2 bottom-3 group-hover:flex">
										<div className="flex items-center justify-center p-1 bg-white rounded w-9 h-9">
											<img src="/src/assets/icons/basket.svg" alt="basket" />
										</div>
										<div className="flex items-center justify-center p-1 bg-white rounded w-9 h-9">
											<img src="/src/assets/icons/heart.svg" alt="heart" />
										</div>
										<div className="flex items-center justify-center p-1 bg-white rounded w-9 h-9">
											<img src="/src/assets/icons/search.svg" alt="search" />
										</div>
									</div>
								</div>
								<div className="bg-white">
									<p className="mt-3">Barberton Daisy</p>
									<p className="text-[1.15em] font-semibold text-primary">
										${value.price}
									</p>
								</div>
							</div>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default Products;
