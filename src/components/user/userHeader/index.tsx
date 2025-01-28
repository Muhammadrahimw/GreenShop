import {useQueryClient} from "react-query";
import {useParams} from "react-router-dom";
import {UserStateType} from "../../../@types";
import {
	MessageOutlined,
	PlusCircleOutlined,
	SendOutlined,
	MinusCircleOutlined,
	UserOutlined,
	LoadingOutlined,
} from "@ant-design/icons";
import {useAxios} from "../../../hooks/useAxios";
import {GetUserInfo} from "../../../generic/getUserInfo";
import {useState} from "react";

export const UserHeader = () => {
	const {id} = useParams();
	const axios = useAxios();
	const userInfo = GetUserInfo();
	const queryClient = useQueryClient();
	const [followLoading, setFollowLoading] = useState<boolean>(false);
	const btnStyle = `bg-primary px-4 flex items-center gap-2 cursor-pointer py-2 rounded text-white`;
	const data: UserStateType =
		queryClient.getQueryData(`user-${id}`) ?? ({} as UserStateType);

	const followFunc = () => {
		setFollowLoading(true);
		axios({
			url: `/user/follow`,
			method: "POST",
			body: {_id: id},
		})
			.then((data) => {
				setFollowLoading(false);
				console.log(data);
			})
			.catch((error) => {
				setFollowLoading(false);
				console.log(error);
			});
	};

	const unFollowFunc = () => {
		setFollowLoading(true);
		axios({
			url: `/user/unfollow`,
			method: "POST",
			body: {_id: id},
		})
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

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
							className="object-cover w-full h-full rounded-full"
							src={`${
								data?.profile_photo ===
								`http://res.cloudinary.com/dj28bsagl/image/upload/v1705654703/cold6y8pracws33q3xes.jpg`
									? `https://skmahdi.wordpress.com/wp-content/uploads/2013/03/masjid-nabawi1.jpg?w=1024`
									: `https://skmahdi.wordpress.com/wp-content/uploads/2013/03/masjid-nabawi1.jpg?w=1024`
							} `}
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
					{data._id === userInfo._id ? (
						<button className={`${btnStyle}`} type="button">
							<UserOutlined />
							You
						</button>
					) : userInfo.followers.includes(data._id) ? (
						<button
							onClick={() => unFollowFunc()}
							className={`${btnStyle}`}
							type="button">
							{followLoading ? (
								<LoadingOutlined />
							) : (
								<>
									<MinusCircleOutlined />
									Unfollow
								</>
							)}
						</button>
					) : (
						<button
							onClick={() => followFunc()}
							className={`${btnStyle}`}
							type="button">
							{followLoading ? (
								<LoadingOutlined />
							) : (
								<>
									<PlusCircleOutlined />
									Follow
								</>
							)}
						</button>
					)}
				</div>
			</div>
		</section>
	);
};
