const mongoose = require('mongoose');
const uri = "mongodb+srv://fdsalva:over38416960@cluster0.e0uhk.mongodb.net/ketrawe?retryWrites=true&w=majority";


const dbConnection = async (req, res) => {
    try {
        await mongoose.connect(uri , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarnos a la Db');
    }
}

module.exports = dbConnection;

