import React from 'react';


const Filter = ({ region, setRegion, regions }) => {
	return (
		<div className="filter">
			<select value={region} onChange={e => setRegion(e.target.value)}>
				<option hidden value="">Filter by Region</option>
				{regions.map((x, id) => <option key={id} value={x}>{x}</option>)}
			</select>
		</div>
	)
}

export default Filter;