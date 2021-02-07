import * as express from 'express';
import * as mysql from 'mysql';
import * as config from '../config/config.js';

let router = express.Router();
const connection = mysql.createConnection(config);

router.get('/register', (req, res, next) => {
    res.render('register', 
        {
            title: 'register'
        }
    );
});

router.post('/register', (req, res, next) => {
    connection.query('INSERT INTO `user` (`id`, `password`, `name`, `phone`) VALUES ' + 
    "('" + req.body.id + "', '" + req.body.password + "', '" + req.body.name + "', '" + req.body.phone + "')", (error, rows) => {
        if (error) {
            console.log("Error", error);
            res.send({
                "code": 400,
                "error": "Something wrong!"
            })
        } else {
            res.render('signupresult', {
                title: 'Sign Up Result',
                success: "Register Success!"
            });
            console.log('New User info is: ', rows);
        };
    });
});

export { router };