
const Search = ({ filter, setFilter }) => {

	return (
		<div className="search">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="searchIcon">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input type="text" placeholder="Search for a country..." value={filter} onChange={e => setFilter(e.target.value)} />
		</div>
	)
}

export default Search;