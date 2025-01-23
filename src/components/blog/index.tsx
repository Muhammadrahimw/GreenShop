import {Skeleton} from "antd";
import {BlogTypeApi} from "../../@types";
import {useQueryHandler} from "../../hooks/useQuery";
import BlogCard from "./blogCard";
import {useRef, useState} from "react";
import {useReduxSelector} from "../../hooks/useRedux";
import BlogHeader from "./blogHeader";

const BlogComponent = () => {
	let searchPostRef = useRef<HTMLInputElement>(null);
	let [searchPostState, setSearchPostState] = useState<string>(``);

	const {data, isLoading, isError}: BlogTypeApi = useQueryHandler({
		pathname: `blog?search=${searchPostState}`,
		url: "/user/blog",
		params: {
			search: searchPostState,
		},
	});

	const handleSearchPost = () => {
		setSearchPostState(searchPostRef.current?.value || ``);
	};

	const {isAuthenticated} = useReduxSelector((state) => state.authSlice);

	return (
		<section>
			{isAuthenticated ? (
				<>
					<div className="flex items-center justify-between w-[40em] mx-auto h-10 mt-12">
						<input
							ref={searchPostRef}
							className="w-full h-full pl-2 border rounded-l outline-none"
							placeholder="search posts"
							type="text"
						/>
						<button
							onClick={handleSearchPost}
							className="w-[8em] h-full bg-primary rounded-r text-white"
							type="button">
							Search
						</button>
					</div>
					<div className="grid grid-cols-3 gap-10 my-12">
						{isLoading || isError ? (
							<>
								{Array.from({length: 6}).map((_, idx) => (
									<div key={idx} className="flex flex-col gap-4">
										<Skeleton.Input active className="!w-full" />
										<Skeleton.Input active className="!w-full" />
										<Skeleton.Input active className="!w-full" />
										<Skeleton.Input active className="!w-full" />
										<Skeleton.Input active className="!w-full" />
									</div>
								))}
							</>
						) : (
							data?.map((value) => <BlogCard key={value._id} {...value} />)
						)}
					</div>
				</>
			) : (
				<BlogHeader />
			)}
		</section>
	);
};

export default BlogComponent;
