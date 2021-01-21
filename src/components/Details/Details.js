import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
import BorderCountries from "./BorderCountries";

const back = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="backIcon">
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>;

const Details = ({ data }) => {
	const [selected, setSelected] = useState(null);

	const { a3c } = useParams();
	let history = useHistory();

	useEffect(() => {
		if (!data) return;
		const select = data.filter(x => x.alpha3Code === a3c);
		if (select.length === 1) {
			setSelected(select[0]);
		} else {
			history.push("/");
		}
	}, [a3c, data, history]);

	console.log(selected)
	if (!selected || !data)
		return <div>Loading...</div>

	return <div className="details">
		<button className="button gap iconCenter" onClick={() => history.goBack()}>{back} Back</button>
		<div className="grid">
			<div className="gridFlag">
				<img className="flag" src={selected.flag} alt={`Flag of ${selected.name}`} />
			</div>
			<div className="gridData1">
				<div className="title">{selected.name}</div>
			</div>
			<div className="gridData2">
				<div className="info">Native Name:<span>{selected.nativeName}</span></div>
				<div className="info">Population:<span>{Number(selected.population).toLocaleString()}</span></div>
				<div className="info">Region:<span>{selected.region}</span></div>
				<div className="info">Sub Region:<span>{selected.subregion}</span></div>
				<div className="info ">Capital:<span>{selected.capital}</span></div>
			</div>
			<div className="gridData3">
				<div className="info">Top Level Domain:<span>{selected.topLevelDomain.join(", ")}</span></div>
				<div className="info">Currencies:<span>{selected.currencies.map(x => x.name).join(", ")}</span></div>
				<div className="info ">Languages:<span>{selected.languages.map(x => x.name).join(", ")}</span></div>
			</div>
			<div className="gridData4">
				<BorderCountries countries={selected.borders} data={data} />
			</div>
		</div>
	</div>
}

export default Details;
