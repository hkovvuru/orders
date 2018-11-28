import express from 'express';
import bodyparser from 'body-parser';

// instantiating the instance
const app = express();

// parsing the data
app.use(bodyparser.json());

//  creating the server ocnnection
app.listen(5000, () => {
  console.log('Servermis listening on port 5000');
});
