import * as express from 'express';
import * as mysql from 'mysql';
import * as config from '../config/config.js';

let router = express.Router();
const connection = mysql.createConnection(config);

router.get('/vote', (req, res, next) => {
    res.render('vote', {
            title: 'vote'
        }
    );
})

router.post('/vote', (req, res, next) => {
    let drake = req.body.drake;
    let now = Date.now();
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(now + (KR_TIME_DIFF));
    let date = new Date(kr_curr).toISOString().slice(0, 19).replace('T', ' ');
    console.log(date);
    let query = 'INSERT INTO dragon (id, game, dragon, date) VALUES ("00000000", 0, ' + drake + ', "' + date + '")';

    connection.query(query, (error, rows) => {
        if (error) {
            console.log("Error", error);
            res.send({
                "code": 400,
                "error": "Something wrong!"
            })
        } else {
            console.log("Success");
        }
    });
});

export { router };