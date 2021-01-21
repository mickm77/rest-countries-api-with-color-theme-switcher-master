import { useMemo, useState } from "react";
import { useQuery } from "react-query";


const fetcher = () => {
	return fetch("https://restcountries.eu/rest/v2/all").then(res => res.json());
}

const useCountries = () => {
	const [region, setRegion] = useState('');
	const [filter, setFilter] = useState('');
	const { data, ...statuses } = useQuery("all", fetcher);


	const regions = useMemo(() => {
		if (data)
			return [...new Set(data.map(x => x.region))]
		return [];
	}, [data])

	const results = useMemo(() => {
		if (!data) return [];
		const t = data.filter(x =>
			(region === "" || (region !== "" && x.region === region)) &&
			(filter === "" || (filter !== "" && x.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1)));
		return t;
	}, [filter, data, region])



	return {
		data,
		regions,
		statuses,
		results,
		setRegion,
		setFilter,
		region,
		filter,
	}
}

export default useCountries;