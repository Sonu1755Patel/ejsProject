const mongoose = require('mongoose');

async function connect () {
    try{
        await mongoose.connect('mongodb://localhost:27017/ejsstudentproject');
<<<<<<< HEAD
        console.log("Database connected successfully..");
=======
        console.log("db connected successfully...")
>>>>>>> 73f50f8 (added mother field)

    } catch (err) {
        console.log(err);
    }
}
module.exports = connect;
