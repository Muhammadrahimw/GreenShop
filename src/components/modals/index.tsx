import AuthorizationModal from "./authorization-modal";
import {ConfirmationModal} from "./order-modal/confirmation";
import {TrackOrderModal} from "./order-modal/track";

const Modals = () => {
	return (
		<>
			<AuthorizationModal />
			<ConfirmationModal />
			<TrackOrderModal />
		</>
	);
};

export default Modals;
