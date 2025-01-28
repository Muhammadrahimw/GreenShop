import {useQueryClient} from "react-query";
import {useParams} from "react-router-dom";
import {UserStateType} from "../../../../@types";
import {Empty} from "antd";

export const Products = () => {
	const {id} = useParams();
	const queryClient = useQueryClient();
	const data: UserStateType =
		queryClient.getQueryData(`user-${id}`) ?? ({} as UserStateType);

	return (
		<section className="grid grid-cols-5 gap-4">
			{data.order_list.length ? (
				data.order_list?.map((value) => <p>{value || 0}</p>)
			) : (
				<Empty className="col-start-3" />
			)}
		</section>
	);
};
