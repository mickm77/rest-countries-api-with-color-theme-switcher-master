
import { Link } from "react-router-dom";

const Country = ({ name, flag, population, region, capital, alpha3Code }) => {

	return <Link to={`/details/${alpha3Code}`} className="country">
		<div className="imageClip" style={{ backgroundImage: `url(${flag})` }}>
		</div>
		<div className="data">
			<p className="name">{name}</p>
			<p className="figures">Population: <span>{Number(population).toLocaleString()}</span></p>
			<p className="figures">Region: <span>{region}</span></p>
			<p className="figures">Capital: <span>{capital}</span></p>
		</div>
	</Link>
}

export default Country;