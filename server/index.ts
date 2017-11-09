import { join } from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import apiRouter from './api';
import stateRouting from './middleware/routing.mw';

const clientPath = join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('*', stateRouting);

app.listen(process.env.PORT||3000, () => {
    console.log('Listening on port 3000.');
});