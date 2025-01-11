import {useEffect, useState} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {CatalogTypes, PlantTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";
import {useLocation} from "react-router-dom";
import {Catalogs} from "../../../utils";
import {Select} from "antd";

const Products = () => {
	const [plants, setPlants] = useState<PlantTypes[]>();
	let {getParam, setParam} = searchParams();
	let axios = useAxios();

	let {search} = useLocation();

	useEffect(() => {
		getParam(`category`)
			? axios({
					url: `/flower/category/${getParam(`category`) || `house-plants`}?${
						getParam(`type`) || `all-plants`
					}?${getParam(`range_min`)}?${getParam(`range_max`)}?${getParam(
						`sort`
					)}`,
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
							defaultValue={getParam(`sort`) || `Default Sorting`}
							options={[
								{value: "default-sorting", label: "Default Sorting"},
								{value: "the-cheapest", label: "The Chepaest"},
								{value: "most-expansive", label: "Most Expensive"},
							]}
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-10 mt-10 gap-y-[4.75em]">
				{plants
					? plants.slice(0, 9).map((value: PlantTypes) => (
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
					: ""}
			</div>
		</div>
	);
};

export default Products;
