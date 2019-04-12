import React from 'react';

import Smurf from './Smurf';

const SmurfList = (props) => {
	return <div className="smurfList">{props.smurfs.map((smurf) => <Smurf info={smurf} />)}</div>;
};

export default SmurfList;
