import * as express from 'express';
import * as mysql from 'mysql';
import * as config from '../config/config.js';

let router = express.Router();
const connection = mysql.createConnection(config);

router.get('/login', (req, res, next) => {
    res.render('login',
        {
            title: 'Express Login'
        }
    );
});

// Error
router.post('/login', (req, res, next) => {
    var id = req.body.id;
    var password = req.body.password;
    connection.query('SELECT * FROM user WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            res.send({
                code: 400,
                failed: "error ocurred"
            })
        } else {
            console.log(results[0].password);
            console.log(password);
            if (results[0].password === password) {
                res.redirect('/');
            } else {
                res.render('login',
                    {
                        code: '204',
                        title: 'Express',
                        ErrorMessage: 'Please enter a right user name'
                    }
                );
            }
        }
    });
});

export { router };