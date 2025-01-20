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
