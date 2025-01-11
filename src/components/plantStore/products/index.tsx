import {useEffect, useState} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {CatalogTypes, PlantTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";
import {useLocation} from "react-router-dom";
import {Catalogs} from "../../../utils";
import {Select} from "antd";
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
				{plants ? (
					plants.slice(0, 9).map((value: PlantTypes) => (
						<div key={value._id}>
							<div
								style={{
									backgroundImage: `url('${value.main_image}')`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
								className="w-full h-[18.75em] cursor-pointer hover:border-t-2 hover:border-primary flex items-end justify-center group">
								<div className="items-center hidden gap-2 mb-2 group-hover:flex">
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
				) : (
					<p className="text-[3em]">loading</p>
				)}
			</div>
		</div>
	);
};

export default Products;
