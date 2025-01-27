import {Tabs} from "antd";
import {user_body_title} from "../../../utils";

export const UserSections = () => {
	return (
		<section>
			<Tabs
				size="large"
				defaultActiveKey="1"
				items={user_body_title.map(({id, title, Component}) => ({
					label: title,
					key: id,
					children: <Component />,
				}))}
			/>
		</section>
	);
};
