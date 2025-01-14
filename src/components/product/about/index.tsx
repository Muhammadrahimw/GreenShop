import {FC} from "react";
import {DataType} from "../../../@types";

const About: FC<DataType> = ({data, isLoading, isError}) => {
	console.log(data, isLoading, isError);

	return <div>About</div>;
};

export default About;
