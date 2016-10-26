import express from 'express';
import nconf from 'nconf';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';


const app = express();

app.set('port', process.env.PORT || 8888);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function(){
    console.log('server start')
})
