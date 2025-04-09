const express = require("express")
const app = express();
require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dynamic-chat-app');



const http = require('http').Server(app);

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});  


/*http.listen(4000, function(){
    console.log('Server is runnig'); 
    });
*/
