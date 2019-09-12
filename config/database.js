module.exports = {
  // configure the code below with your username, password and mlab database information
  database: process.env.CONNECTIONSTRING, //prod
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: "yoursecret"
};
function newFunction() {
  return "mongodb+srv://samrem:3Gwurube.@cluster0-xjt13.mongodb.net/meanApp?retryWrites=true&w=majority";
}
