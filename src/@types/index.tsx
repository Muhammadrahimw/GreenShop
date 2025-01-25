import {ReactNode} from "react";

export interface PlantTypes {
	category: string;
	comments: string[];
	created_at: string;
	created_by: string;
	description: string;
	detailed_images: string[];
	discount: boolean;
	discount_price: string;
	main_image: string;
	price: number;
	rate: number;
	short_description: string;
	sold_times: number;
	tags: string[];
	title: string;
	views: number;
	__v: number;
	_id: string;
	count?: number;
}

export interface CategoriesTypes {
	count: number;
	created_at: string;
	created_by: string;
	route_path: string;
	title: string;
	__v: number;
	_id: string;
}

export interface CatalogTypes {
	id: number;
	title: string;
	path: string;
}

export interface DataType {
	isLoading: boolean;
	isError: boolean;
	data?: PlantTypes;
}

export interface couponType {
	data: {
		code: string;
		discount_for: number;
		id: number;
		title: string;
	};
	message: string;
}

export interface BlogType {
	content: string;
	created_at: string;
	created_by: string;
	reaction_length: number;
	short_description: string;
	title: string;
	views: number;
	__v: number;
	_id: string;
}
export interface BlogTypeApi {
	data?: BlogType[];
	isLoading: boolean;
	isError: boolean;
}

export interface BlogTypeApiItem {
	data?: BlogType;
	isLoading: boolean;
	isError: boolean;
}

export interface UserDataType {
	message: string;
	data: {
		token: string;
		user: {
			_id: string;
			name: string;
			surname: string;
			password: string;
			username: string;
			permission: {
				create: boolean;
				update: boolean;
				delete: boolean;
				read: boolean;
			};
			email: string;
			profile_photo: string;
			followers: any[];
			billing_address: {
				country: string;
				town: string;
				street_address: string;
				extra_address: string;
				state: string;
				zip: string;
			};
			user_type: string;
			create_post_limit: number;
			create_account_limit: number;
			create_plant_limit: number;
			hashtags: any[];
			wishlist: any[];
			created_by: string;
			order_list: any[];
			created_at: string;
			__v: number;
		};
	};
}

export interface UserStateType {
	_id: string;
	name: string;
	surname: string;
	password: string;
	username: string;
	permission: {
		create: boolean;
		update: boolean;
		delete: boolean;
		read: boolean;
	};
	email: string;
	profile_photo: string;
	followers: any[];
	billing_address: {
		country: string;
		town: string;
		street_address: string;
		extra_address: string;
		state: string;
		zip: string;
	};
	user_type: string;
	create_post_limit: number;
	create_account_limit: number;
	create_plant_limit: number;
	hashtags: any[];
	wishlist: any[];
	created_by: string;
	order_list: any[];
	created_at: string;
	__v: number;
}

export interface MyAccountPointsType {
	id: number;
	title: string;
	path: string;
	icon: ReactNode;
}

export interface MakeOrderType {
	shop_list: PlantTypes[];
	billing_address: {
		name: string;
		surname: string;
	};
	extra_shop_info: {
		total: number;
		method: string;
	};
}

export interface trackingOrderType extends MakeOrderType {
	created_at: string;
	created_by: string;
	_v: number;
	_id: string;
}

export interface billingAddressType {
	_id: string;
	name: string;
	surname: string;
	country: string;
	town: string;
	street_address: string;
	state: string;
	zip: string;
	email: string;
	phone_number: string;
}
