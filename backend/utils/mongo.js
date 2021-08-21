const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
mongoose.set('useNewUrlParser', true);
mongoose.connect(MONGO_URI, err => {
    if (err){
	    console.error(`Unexpected error: ${err}`);
	    throw err;
    }
    else console.log(`Successfully connected to MongoDB.`);
});
