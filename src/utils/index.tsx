import {About} from "../components/user/userSections/about";
import {Products} from "../components/user/userSections/product";
import {Posts} from "../components/user/userSections/posts";
import {Like} from "../components/user/userSections/like";
import {Followers} from "../components/user/userSections/followers";

import {
	EnvironmentOutlined,
	HeartOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import {
	CatalogTypes,
	MyAccountPointsType,
	userSectionsTitleType,
} from "../@types";

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

export const user_body_title: userSectionsTitleType[] = [
	{
		id: "1",
		title: "About",
		Component: About,
	},
	{
		id: "2",
		title: "Products",
		Component: Products,
	},
	{
		id: "3",
		title: "Posts",
		Component: Posts,
	},
	{
		id: "4",
		title: "Likes",
		Component: Like,
	},
	{
		id: "5",
		title: "Followers",
		Component: Followers,
	},
];
