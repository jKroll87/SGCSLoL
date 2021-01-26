import * as express from 'express';
import * as mysql from 'mysql';
import * as dbconfig from '../config/database';

let router = express.Router();
const connection = mysql.createConnection(dbconfig);

router.get('/signup', (req, res, next) => {
    res.render('signup', 
        {
            title: 'SignUp'
        }
    );
});


// Error
router.post('/signup', (req, res, next) => {
    connection.query('INSERT INTO `user` (`id`, `password`, `name`, `phone`) VALUES ' + 
    "('" + req.body.id + "', '" + req.body.password + "', '" + req.body.name + "', '" + req.body.phone + "')", (error, rows) => {
        if (error) throw error;
        console.log('New User info is: ', rows);
        res.send(rows);
    });
});

export { router };