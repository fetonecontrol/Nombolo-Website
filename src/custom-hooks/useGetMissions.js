import React, { useEffect, useState, useMemo } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listMissions } from '../graphql/queries';

export default function useGetMissions(props) {
	const [missions, setMissions] = useState([]);
	const filteredMissions = useMissionFilterer();

	function useMissionFilterer() {
		useEffect(() => {
			fetchMissionData();
		}, []);

		const fetchMissionData = async () => {
			const twentyDaysAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
			let allMissions = [];
			let search = {
				limit: 100000,
				nextToken: null,
				visibility: 'public',
				createdAt: { gt: twentyDaysAgo },
			};
			try {
				do {
					let result = await API.graphql(
						graphqlOperation(listMissions, search)
					).catch((err) => {
						console.log(err);
					});
					allMissions = allMissions.concat(result.data.listMissions.items);
					search.nextToken = result.data.listMissions.nextToken;
				} while (search.nextToken);
				// console.log(allPosts);
				setMissions(allMissions);
			} catch (err) {
				console.log(err);
			}
		};

		const filteredMissions = useMemo(() => {
			return props
				? missions.filter(
						(mission) =>
							mission.description.match(new RegExp(props, 'gi'))?.length > 0
				  )
				: missions.filter((mission) => mission.missionClaimerId !== null)
			}, [missions, props]);
			
			console.log(filteredMissions);
			return filteredMissions;
	}
	return filteredMissions;
}
