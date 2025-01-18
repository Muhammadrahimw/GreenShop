import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";

interface BreadcrumbItemType {
	pathTitle: string;
}

const BreadcrumbItem = ({pathTitle}: BreadcrumbItemType) => {
	return (
		<Breadcrumb
			items={[{title: <Link to={`/`}>Home</Link>}, {title: pathTitle}]}
		/>
	);
};

export default BreadcrumbItem;
