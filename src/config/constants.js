/**
 * Created by Harrison on 05/12/2017.
 * defines constants used by the application.
 */

var fs = require('fs');

export var constants = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// export var constants = {

//     "database": {
//         "host": "127.0.0.1",
//         "port": "3306",
//         "user": "root",
//         "password": "",
//         "name": "express_test"
//     }
// };
