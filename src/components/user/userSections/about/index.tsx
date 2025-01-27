import {useQueryClient} from "react-query";
import {useParams} from "react-router-dom";
import {UserStateType} from "../../../../@types";

export const About = () => {
	const {id} = useParams();
	const queryClient = useQueryClient();
	const data: UserStateType =
		queryClient.getQueryData(`user-${id}`) ?? ({} as UserStateType);
	return (
		<div className="flex flex-col gap-1 text-xl">
			<p>
				Name: <span className="font-semibold">{data.name}</span>
			</p>
			<p>
				Surname: <span className="font-semibold">{data.surname}</span>
			</p>
			<p>
				Username: <span className="font-semibold">{data.username}</span>
			</p>
		</div>
	);
};
