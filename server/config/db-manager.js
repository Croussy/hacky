const mongoose = require('mongoose')

module.exports.dbConnect = async (uri) => {
    await mongoose.connect(uri)
        .then(() => {
            console.log('MongoDB connected!!');
        })
        .catch((err) => {
            console.log('Failed to connect to MongoDB', err);
        })
}