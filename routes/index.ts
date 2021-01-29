import * as express from 'express';
import * as mysql from 'mysql';
import * as config from '../config/config.js';

let router = express.Router();
const connection = mysql.createConnection(config);

router.get('/', (req, res, next) => {
    connection.query('SELECT * from department', (err, results, fields) => {
        if (err) {
            res.send({
                code: 400,
                failed: "error ocurred"
            })
        } else {
            res.render('index', {
                title: 'Main',
                results : results
            });
        }
    });
});

export { router };