// import React, { useEffect, useState, useMemo } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { listPostsByActive } from '../graphql/custom/queries';

// export default function ApiCall(props){

//   const filteredPosts = usePostFilterer(props.query);

// 	function usePostFilterer(query) {
// 		const [posts, setPosts] = useState([]);
// 		const [comments, setComments] = useState([]);

// 		useEffect(() => {
// 			fetchPostData();
// 		}, []);

// 		const fetchPostData = async () => {
// 			const twentyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
// 			let allPosts = [];
// 			let search = {
// 				limit: 100000,
// 				nextToken: null,
// 				visibility: 'public',
// 				createdAt: { gt: twentyDaysAgo },
// 			};
// 			try {
// 				do {
// 					let result = await API.graphql(
// 						graphqlOperation(listPostsByActive, search)
// 					).catch((err) => {
// 						console.log(err)
// 					});
// 					allPosts = allPosts.concat(result.data.listPostsByActive.items);
// 					search.nextToken = result.data.listPostsByActive.nextToken;
// 				} while (search.nextToken);
// 				console.log(allPosts)
// 				setPosts(allPosts);
// 			} catch (err) {
// 				console.log(err);
// 			}
// 		};

// 		const filteredPosts = useMemo(() => {
// 			return query
// 				? posts.filter(
// 					(post) =>
// 						post.description.match(new RegExp(query, 'gi'))?.length > 0
// 				)
// 				: posts.filter((post) => post.description.match(/food/gi));
// 		}, [posts, query]);

//     return filteredPosts;
// 	}
// }
