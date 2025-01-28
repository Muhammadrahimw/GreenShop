import {useParams} from "react-router-dom";
import {useQueryHandler} from "../../hooks/useQuery";
import {UserHeader} from "./userHeader";
import {UserSections} from "./userSections";

const UserComponent = () => {
	const {id} = useParams();
	const {} = useQueryHandler({
		pathname: `user-${id}`,
		url: `/user/by_id/${id}`,
	});

	return (
		<>
			<UserHeader />
			<UserSections />
		</>
	);
};

export default UserComponent;
