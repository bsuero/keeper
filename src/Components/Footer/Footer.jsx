import React from 'react';

let date = new Date();
let currentDate = date.getFullYear();

function Footer() {
	return (
		<div>
			<footer>
				<p>Copyright © {currentDate}</p>
			</footer>
		</div>
	);
}

export default Footer;
