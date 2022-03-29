const Pool = require('node-rfc').Pool;
require('dotenv').config();

// Define SAP Connection Parameters
const connParams = {
	user: process.env.USER,
	passwd: process.env.PASSWD,
	ashost: process.env.ASHOST,
	sysnr: process.env.SYSNR,
	client: process.env.CLIENT,
	lang: process.env.LANG,
	dest: process.env.DEST,
};

const pool = new Pool({ connectionParameters: connParams });

// Connect to SAP Server
const sap = (rfcName, params, callback) => {
	(async () => {
		try {
			const client = await pool.acquire();

			const result = await client.call(rfcName, params);

			return callback(null, result);
		} catch (err) {
			return callback(err);
		}
	})();
};

module.exports = sap;
