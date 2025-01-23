import {CatalogTypes, PlantTypes} from "../../../@types";
import {searchParams} from "../../../generic/searchParams";
import {useNavigate} from "react-router-dom";
import {Catalogs} from "../../../utils";
import {Select, Skeleton} from "antd";
import {useReduxDispatch, useReduxSelector} from "../../../hooks/useRedux";
import {getProductShop} from "../../../redux/shop-slice";
import {useQueryHandler} from "../../../hooks/useQuery";
import {setAuthorizationModalVisibility} from "../../../redux/modal-slice";
import {wishlistProduct} from "../../../redux/wishlist-slice";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";

const Products = () => {
	const {getParam, setParam} = searchParams();
	const navigate = useNavigate();
	const dispatch = useReduxDispatch();
	const {isAuthenticated} = useReduxSelector((state) => state.authSlice);
	const {wishlist} = useReduxSelector((state) => state.wishlistSlice);
	const category: string = getParam("category") || "accessories";
	const type: string = getParam("type") || "all-plants";
	const sort: string = getParam("sort") || "default-sorting";
	const range_min: number = Number(getParam("range_min")) || 0;
	const range_max: number = Number(getParam("range_max")) || 1500;

	const {data, isLoading, isError} = useQueryHandler({
		pathname: `/flower/category/${category}/${type})}/${sort}/${range_min}/${range_max}`,
		url: `/flower/category/${category}`,
		params: {
			type: type,
			sort: sort,
			range_min: range_min,
			range_max: range_max,
		},
	});

	const optionValue = (value: string) => {
		setParam({
			category: category,
			type: type,
			sort: value,
			range_min: range_min,
			range_max: range_max,
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
									category: category,
									type: `${value.path}`,
									sort: sort,
									range_min: range_min,
									range_max: range_max,
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
							defaultValue={sort}
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
				{isLoading || isError
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
					: data.slice(0, 9).map((value: PlantTypes) => (
							<div key={value._id}>
								<div className="relative w-full h-[18.75em] hover:border-t-2 hover:border-primary group">
									<img
										onClick={() =>
											navigate(`/plant/${value.category}/${value._id}`)
										}
										className="object-contain w-full h-full cursor-pointer"
										src={`${value.main_image}`}
										alt="plant image"
									/>
									<div className="absolute left-0 right-0 z-10 items-center justify-center hidden gap-2 bottom-3 group-hover:flex">
										<div
											onClick={() => dispatch(getProductShop(value))}
											className="flex items-center justify-center p-1 bg-white rounded cursor-pointer w-9 h-9">
											<img src="/src/assets/icons/basket.svg" alt="basket" />
										</div>
										<div
											onClick={() =>
												isAuthenticated
													? dispatch(wishlistProduct(value))
													: dispatch(setAuthorizationModalVisibility())
											}
											className="flex items-center justify-center p-1 bg-white rounded w-9 h-9">
											{wishlist.some(
												(product: PlantTypes) => product._id === value._id
											) ? (
												<HeartFilled className="text-[1.35em] cursor-pointer text-red-500" />
											) : (
												<HeartOutlined className="text-[1.35em] cursor-pointer" />
											)}
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
					  ))}
			</div>
		</div>
	);
};

export default Products;
