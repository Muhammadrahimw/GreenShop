import {useQueryClient} from "react-query";
import {useParams} from "react-router-dom";
import {UserStateType} from "../../../@types";
import {
	MessageOutlined,
	PlusCircleOutlined,
	SendOutlined,
	MinusCircleOutlined,
	UserOutlined,
} from "@ant-design/icons";

export const UserHeader = () => {
	const {id} = useParams();
	const queryClient = useQueryClient();
	const btnStyle = `bg-primary px-4 flex items-center gap-2 cursor-pointer py-2 rounded text-white`;
	const data: UserStateType =
		queryClient.getQueryData(`user-${id}`) ?? ({} as UserStateType);

	console.log(data);

	return (
		<section className="mt-12">
			<div>
				<img
					className="object-cover h-[26em] w-full rounded-b-lg"
					src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
					alt="image of nature"
				/>
			</div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-6">
					<div className="w-[10em] h-[10em] rounded-full border-4 border-primary translate-y-[-3.5em]">
						<img
							className="object-contain w-full h-full rounded-full"
							src={`${data.profile_photo}`}
							alt="user photo"
						/>
					</div>
					<div className="mb-8">
						<p className="text-[1.75em] font-semibold">
							{data.name} {data.surname}
						</p>
						<p className="">Followers: {data.followers?.length || 0}</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<button className={`${btnStyle}`} type="button">
						<MessageOutlined />
						Start chat
					</button>
					<button className={`${btnStyle}`} type="button">
						<SendOutlined />
						Send Invitation
					</button>
					<button className={`${btnStyle}`} type="button">
						<PlusCircleOutlined />
						Follow
					</button>
					{/* <button className={`${btnStyle}`} type="button">
						<UserOutlined />
						You
					</button>
					<button className={`${btnStyle}`} type="button">
						<MinusCircleOutlined />
						Unfollow
					</button> */}
				</div>
			</div>
		</section>
	);
};
