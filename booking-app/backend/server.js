import express from 'express';
import connect from './mongo.js';


const app = express();

app.use(express.json());


app.listen(8800, () => {
    connect();
    console.log('Server started..');
});

export default app;