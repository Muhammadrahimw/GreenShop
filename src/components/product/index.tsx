import {useParams} from "react-router-dom";
import About from "./about";
import Preview from "./preview";
import {useQueryHandler} from "../../hooks/useQuery";
import {DataType} from "../../@types";
import Description from "./description";
import BreadcrumbItem from "../../generic/breadCrumb";

const ProductComp = () => {
	let {category, id} = useParams();

	let {data, isLoading, isError}: DataType = useQueryHandler({
		pathname: "id_card",
		url: `/flower/category/${category}/${id}`,
	});

	return (
		<section className="pt-6">
			<BreadcrumbItem pathTitle="shop" />
			<div className="mt-[3em] grid grid-cols-2 gap-12">
				<Preview data={data} isLoading={isLoading} isError={isError} />
				<About data={data} isLoading={isLoading} isError={isError} />
				<Description data={data} isLoading={isLoading} isError={isError} />
			</div>
		</section>
	);
};

export default ProductComp;
