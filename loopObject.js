let data = require('./data');
console.log("Data before modification: ", data);

//changing data of Silver from 1000 => 999
data.data[0].Price = 999;

//changed data
console.log("Data after modification: ", data);