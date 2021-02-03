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
    // let now = Date.now();
    // let date = new Date(now);
    let query = 'INSERT INTO dragon (id, game, dragon, date) VALUES (?, ?, ?, ?)';
    // Escape SQL injection
    connection.query(query, ["00000000", 0, drake, "2000-01-01 00:00:00"], (error, rows) => {
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
