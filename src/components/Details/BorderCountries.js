import { useMemo } from "react"
import { useHistory } from "react-router-dom";


const BorderCountries = ({ countries, data }) => {
	let history = useHistory();

	const borders = useMemo(() => {
		return data.filter(x => countries.includes(x.alpha3Code));
	}, [countries, data]);

	if (!data) return null;
	if (!countries) return <span>Nor bordering countries</span>
	return <div className="borders">
		<div>Border Countries:</div>
		<div className="list">
			{borders.map(x => <button className="button" onClick={() => history.push(`/details/${x.alpha3Code}`)}>{x.name}</button>)}
		</div>
	</div>
}

export default BorderCountries