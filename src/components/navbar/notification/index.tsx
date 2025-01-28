import {Spin} from "antd";
import {useQueryHandler} from "../../../hooks/useQuery";
import {notification_stack, notificationType} from "../../../@types";
import {SendOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

export const Notification = () => {
	const navigate = useNavigate();
	const {data, isLoading, isError} = useQueryHandler({
		pathname: `user-notification`,
		url: `/user/notification`,
	});

	data as notificationType;

	console.log(data);

	return (
		<section>
			{isLoading || isError ? (
				<div className="flex justify-center w-full mt-4">
					<Spin size="large" />
				</div>
			) : (
				<div>
					{data.notification_stack?.map(
						(value: notification_stack, idx: number) => (
							<div key={idx} className="flex items-center gap-2 mt-2">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
									{value.type === "follow_stack" ? (
										<UserOutlined className="text-white" />
									) : (
										<SendOutlined className="text-white" />
									)}
								</div>
								<div>
									<p className="text-[1.1em]">{value.message}</p>
									<div className="flex items-center gap-2 text-sm">
										<p
											className="cursor-pointer text-primary"
											onClick={() => navigate(`/user/${value.user_id}`)}>
											Go to profile
										</p>
										<p className="text-[12px] cursor-pointer">
											{new Date(value.time_stamp).toLocaleDateString("en-us", {
												month: "short",
												day: "numeric",
												hour: "2-digit",
												minute: "2-digit",
											})}
										</p>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			)}
		</section>
	);
};
