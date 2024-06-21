import { useEffect, useState } from "react";

export default function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<div className="">
			<h3>Posts: </h3>
		</div>
	);
}

/**
 * 1. creat a state to store the data
 * 2. creat use effect with no dependencies
 * 3. use fetch to load data
 */
