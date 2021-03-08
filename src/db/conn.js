const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-a[i", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection is successful');
}).catch((err) => {
    console.log("No connection", err);
})