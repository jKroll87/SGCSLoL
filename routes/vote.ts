import * as express from 'express';
import * as mysql from 'mysql';
import * as config from '../config/config.js';

let router = express.Router();
const connection = mysql.createConnection(config);

router.get('/vote', (req, res, next) => {
    connection.query('', (error, rows) => {
        if (error) {
            console.log("Error", error);
            res.send({
                "code": 400,
                "error": "Something wrong!"
            })
        } else {
            //
        };
    });
});

export { router };