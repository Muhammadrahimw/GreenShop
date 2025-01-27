import {useNavigate} from "react-router-dom";
import {PlantTypes} from "../../../@types";
import {useQueryHandler} from "../../../hooks/useQuery";
import {useReduxDispatch, useReduxSelector} from "../../../hooks/useRedux";
import {getProductShop} from "../../../redux/shop-slice";
import {wishlistProduct} from "../../../redux/wishlist-slice";
import {setAuthorizationModalVisibility} from "../../../redux/modal-slice";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Skeleton} from "antd";

const Wishlist = () => {
	const navigate = useNavigate();
	const dispatch = useReduxDispatch();
	const {isAuthenticated} = useReduxSelector((state) => state.authSlice);
	const {wishlist} = useReduxSelector((state) => state.wishlistSlice);

	const {data, isLoading, isError} = useQueryHandler({
		pathname: "wishlist-cards",
		url: `/user/wishlist`,
	});

	return (
		<section className="grid grid-cols-3 gap-5">
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
				: data?.map((value: PlantTypes) => (
						<div key={value?._id}>
							<div className="relative w-full h-[18.75em] hover:border-t-2 hover:border-primary group">
								<img
									onClick={() =>
										navigate(`/plant/${value.category}/${value?._id}`)
									}
									className="object-contain w-full h-full cursor-pointer"
									src={`${value?.main_image}`}
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
											(product: PlantTypes) => product?._id === value?._id
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
									${value?.price}
								</p>
							</div>
						</div>
				  ))}
		</section>
	);
};

export default Wishlist;
