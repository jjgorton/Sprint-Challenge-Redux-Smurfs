import React from 'react';

import Smurf from './Smurf';

const SmurfList = (props) => {
	return (
		<div className="smurfList">
			<h3>smurfs</h3>
			{props.smurfs.map((smurf) => <Smurf info={smurf} />)}
		</div>
	);
};

export default SmurfList;
