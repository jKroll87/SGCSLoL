import * as express from 'express';
import { traceDeprecation } from 'process';
let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index',
        {
            title: 'Express',
            username : req.session['username']
        }
    );
});

export { router };