import React, { useEffect, useState } from 'react';
import Header from '../Header';

import Filter from '../Filter';
import Search from '../Search'
import Country from '../Country';
import "./App.css";

import useCountries from '../../logic/useCountries';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Details from '../Details/Details';

const lightMode = {
	current: "light",
	switch: "Dark Mode"
};
const darkMode = {
	current: "dark",
	switch: "Light Mode"
}

const App = () => {
	const { filter, setFilter, regions, region, setRegion, results, data } = useCountries();

	const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useState(userPrefersDark ? darkMode : lightMode)

	const search = <div className="searchFilt">
		<Search filter={filter} setFilter={setFilter} />
		<Filter region={region} regions={regions} setRegion={setRegion} />
	</div>;
	const main = <div className="mainList">
		{results.map(x => <Country key={x.numericCode} {...x}></Country>)}
	</div>;

	const switchThemes = () => {
		if (theme.current === lightMode.current) {
			setTheme(darkMode);
		} else {
			setTheme(lightMode);
		}
	}



	return (
		<Router>
			<div className="app" data-theme={theme.current}>
				<Header themeButtonText={theme.switch} themeButtonclick={switchThemes} />
				<Switch>
					<Route path="/details/:a3c">
						<Details data={data} />
					</Route>
					<Route path="/">
						{search}
						{main}
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;