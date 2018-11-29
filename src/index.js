import express from 'express';
import bodyparser from 'body-parser';
import route from './routes';


// instantiating the instance
const app = express();

// parsing the data
app.use(bodyparser.json());

app.use(route);

//  creating the server connection
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
