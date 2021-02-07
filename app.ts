import * as express from 'express';
let app = express();

import * as index from './routes/index';
import * as login from './routes/login';
import * as register from './routes/register';
import * as vote from './routes/vote';
import * as config from './config/config.js';

import * as path from 'path';
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret : config.session.secret,
    resave: false,
    saveUninitialized: true
}));

app.use('/', index.router);
app.use('/', login.router);
app.use('/', register.router);
app.use('/', vote.router);

app.listen(3000, () => {
    console.log('listenling on port 3000');
});