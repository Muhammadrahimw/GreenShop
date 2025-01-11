import {useState} from "react";

export const useProgress = () => {
	const [isProgress, setIsProgress] = useState<boolean>(false);
	return {isProgress, setIsProgress};
};
