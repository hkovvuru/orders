import mongoose from 'mongoose';

const uri = 'mongodb://localhost/ordersDB';

const initializeDdatabase = mongoose.connect(uri, { useNewUrlParser: true });

initializeDdatabase.catch((err) => { console.log(`Error while connecting todatabse ${err}`); });

mongoose.connection.once('open', () => console.log('Successfully connected to the database'));

export default mongoose; s;
