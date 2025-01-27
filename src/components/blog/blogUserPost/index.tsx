import {useNavigate, useParams} from "react-router-dom";
import {useQueryHandler} from "../../../hooks/useQuery";
import {BlogTypeApiItem} from "../../../@types";
import {Avatar, Skeleton} from "antd";
import {
	EyeOutlined,
	HeartOutlined,
	MessageOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";

const BlogUserPost = () => {
	const {id, user_id} = useParams();
	const navigate = useNavigate();
	const {
		data: user,
		isLoading: isLoadingUser,
		isError: isErrorUser,
	} = useQueryHandler({
		pathname: "user",
		url: `/user/by_id/${user_id}`,
	});
	const {data, isLoading, isError}: BlogTypeApiItem = useQueryHandler({
		pathname: `blog/${id}`,
		url: `/user/blog/${id}`,
	});
	const handleShare = async () => {
		const shareData = {
			title: data?.title,
			text: data?.short_description,
			url: window.location.href,
		};

		if (navigator.share) {
			try {
				await navigator.share(shareData);
				alert("Muvaffaqiyatli ulashildi!");
			} catch (err) {
				console.error("Ulashish bekor qilindi yoki xatolik yuz berdi:", err);
			}
		}
	};

	const loading = isLoading || isError || isErrorUser || isLoadingUser;
	return (
		<section className="w-[75%] m-auto py-10">
			{loading ? (
				<>
					{Array.from({length: 12}).map((_, idx) => (
						<Skeleton.Input active key={idx} className="!w-full mt-2" />
					))}
				</>
			) : (
				<div>
					<div className="flex justify-between item-end">
						<div className="flex items-center gap-4">
							<Avatar
								onClick={() => navigate(`/user/${user._id}`)}
								className="w-[50px] h-[50px] cursor-pointer"
								src={user?.profile_photo}
							/>
							<div>
								<h2 className="font-bold text-[18px]">
									{user?.name} {user?.surname}
								</h2>
								<p className="text-[12px]">
									Followers {user?.followers?.length}
								</p>
							</div>
						</div>
						<button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[20px] py-[8px]">
							Follow
						</button>
					</div>
					<div>
						<h2 className="py-[20px] font-bold text-[24px]">{data?.title}</h2>
						<div
							dangerouslySetInnerHTML={{__html: data?.content as string}}></div>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-1">
							<EyeOutlined /> <p>{data?.views}</p>
						</div>
						<div className="flex items-center gap-1">
							<HeartOutlined /> <p>0</p>
						</div>
						<div className="flex items-center gap-1">
							<MessageOutlined /> <p>0</p>
						</div>
						<div
							onClick={handleShare}
							className="flex items-center gap-1 cursor-pointer">
							<ShareAltOutlined /> <p>0</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default BlogUserPost;
