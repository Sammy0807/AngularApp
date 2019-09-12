module.exports = {
  // configure the code below with your username, password and mlab database information
<<<<<<< HEAD
  database: process.env.CONNECTIONSTRING, //prod
=======
  database: newFunction(), //prod
  //database: process.env.CONNECTIONSTRING,   
>>>>>>> 13798b7f6d9f7521d098b96aea0f681ba07db721
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: "yoursecret"
};
function newFunction() {
  return "mongodb+srv://samrem:3Gwurube.@cluster0-xjt13.mongodb.net/meanApp?retryWrites=true&w=majority";
}
