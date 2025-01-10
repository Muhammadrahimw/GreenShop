import {useEffect, useState} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {PlantTypes} from "../../../@types";

const Products = () => {
	const [plants, setPlants] = useState<PlantTypes[]>();
	let axios = useAxios();

	useEffect(() => {
		axios({url: `/flower/category/house-plants`})
			.then((response) => setPlants(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="w-full tracking-wide text-blackColor">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center justify-between gap-10">
					<p className="font-semibold cursor-pointer text-primary hover-underline-animation2">
						All Plants
					</p>
					<p className="cursor-pointer hover-underline-animation2">
						New Arrivals
					</p>
					<p className="cursor-pointer hover-underline-animation2">Sale</p>
				</div>
				<div className="flex items-center gap-2">
					<p>Short by:</p>
					<div className="flex items-center gap-2">
						<p>Default sorting</p>
						<select
							className="cursor-pointer"
							title="Default sorting"
							name="sorting"
							id="">
							<option value="1"></option>
							<option value="2"></option>
						</select>
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
										$119.00
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
