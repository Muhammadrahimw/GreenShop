import {
	EnvironmentOutlined,
	HeartOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import {CatalogTypes, MyAccountPointsType} from "../@types";

export const Catalogs: CatalogTypes[] = [
	{
		id: 1,
		title: `All Plants`,
		path: `all-plants`,
	},
	{
		id: 2,
		title: `New Arrivals`,
		path: `new-arrivals`,
	},
	{
		id: 3,
		title: `Sale`,
		path: `sale`,
	},
];

export const MyAccountPoints: MyAccountPointsType[] = [
	{
		id: 1,
		title: `Account Details`,
		path: `details`,
		icon: <UserOutlined />,
	},
	{
		id: 2,
		title: `Address`,
		path: `address`,
		icon: <EnvironmentOutlined />,
	},
	{
		id: 3,
		title: `Orders`,
		path: `orders`,
		icon: <ShoppingCartOutlined />,
	},
	{
		id: 4,
		title: `Wishlist`,
		path: `wishlist`,
		icon: <HeartOutlined />,
	},
	{
		id: 5,
		title: `My products`,
		path: `products`,
		icon: <ShoppingOutlined />,
	},
];
