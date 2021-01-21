import React from 'react';

const Header = ({ themeButtonText, themeButtonclick }) => {

	return (
		<header>
			<h1><a href="/">Where in the world?</a></h1>
			<button className="button iconCenter" style={{ width: "200px" }}
				onClick={themeButtonclick}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="moonIcon">
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>{themeButtonText}</button>

		</header>
	)
}

export default Header;