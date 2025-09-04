const User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin(){
    try {
        let user = await User.findOne({email: 'sushil@gmail.com'});
        if(user) {
<<<<<<< HEAD
            console.log("User updated successfully");
=======
            console.log("User updated successfuly..")
>>>>>>> 73f50f8 (added mother field)
        } else {

        user = new User();
        user.firstName = "Sushil";
        user.lastName = "Patel";
        user.email = "sushil@gmail.com";
        let encryptedPassword = bcrypt.hashSync('1234', 10);
        user.password = encryptedPassword;
        user.userType = 'Admin';
        await user.save();
<<<<<<< HEAD
            console.log("User saved successfully");
=======
        console.log("user saved successfully");
>>>>>>> 73f50f8 (added mother field)
        }


    } catch(err) {
        console.log(err);
    }
}
module.exports = makeAdmin;
