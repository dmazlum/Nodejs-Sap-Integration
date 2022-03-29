const sap = require('./sap/sap-connector.js');

// ABAP structure
const abap_structure = {
	RFCINT4: 345,
	RFCFLOAT: 1.23456789,
	RFCCHAR4: 'ABCD',
	RFCDATE: '20180625', // ABAP date format
};

// ABAP table
let abap_table = [abap_structure];

sap(
	'YOUR_RFC_FUNCTION',
	{ IMPORTSTRUCT: abap_structure, RFCTABLE: abap_table },
	(err, result) => {
		if (err) {
			//Print Error Message
			console.log(err);
		} else {
			//Print Result Data
			console.log(result);
		}
	}
);

module.exports = app;
