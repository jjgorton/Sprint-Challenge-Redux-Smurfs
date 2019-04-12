import React from 'react';

const Smurf = (props) => {
	return (
		<div className="smurf">
			<h3>{props.info.name}</h3>
			<p>{props.info.age} smurf years old</p>
			<p>{props.info.height} tall</p>
		</div>
	);
};

export default Smurf;
