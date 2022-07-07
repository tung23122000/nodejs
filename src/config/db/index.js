const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/data_test_dev');

        console.log(' CONNECT SUCCESSFUL !!!');
    } catch (error) {
        console.log(' CONNECT FAILED !!!');
    }
}

module.exports = { connect };
