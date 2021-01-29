import * as express from 'express';
let router = express.Router();

router.get('/vote', (req, res, next) => {
    res.render('vote'
        
    );
});

export { router };