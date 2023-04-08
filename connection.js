const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://admin:admin@batch230.1dtuoqz.mongodb.net/chat-application?retryWrites=true&w=majority`,
  () => {
    console.log('connected to mongodb');
  }
);
