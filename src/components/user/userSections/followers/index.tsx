import {useParams} from "react-router-dom";
import {useQueryHandler} from "../../../../hooks/useQuery";
import {useQueryClient} from "react-query";
import {UserStateType} from "../../../../@types";
import {Card, Empty, Skeleton} from "antd";

export const Followers = () => {
	const {id} = useParams();
	const queryClient = useQueryClient();
	const data: UserStateType =
		queryClient.getQueryData(`user-${id}`) ?? ({} as UserStateType);

	let allFollowers = data?.followers?.map((value) => {
		const {data: follower} = useQueryHandler({
			pathname: `user-follower-${value}`,
			url: `/user/by_id/${value}`,
		});

		return follower;
	});

	return (
		<section>
			<div>
				{allFollowers?.includes(undefined) || !data ? (
					<div className="grid grid-cols-4 gap-4">
						<Skeleton.Input active className="!w-full !h-[5.5em]" />
						<Skeleton.Input active className="!w-full !h-[5.5em]" />
						<Skeleton.Input active className="!w-full !h-[5.5em]" />
						<Skeleton.Input active className="!w-full !h-[5.5em]" />
					</div>
				) : allFollowers?.length ? (
					<div className="grid grid-cols-4 gap-4">
						{allFollowers?.map((value: UserStateType, idx) => (
							<Card key={idx} className="cursor-pointer">
								<div className="flex items-center gap-2">
									<div className={`w-10 h-10 rounded-full`}>
										<img
											className="w-full h-full rounded-full"
											src={`${value?.profile_photo}`}
											alt="follower photo"
										/>
									</div>
									<p className="font-bold">
										{value?.name} {value?.surname}
									</p>
								</div>
							</Card>
						))}
					</div>
				) : (
					<Empty />
				)}
			</div>
		</section>
	);
};
