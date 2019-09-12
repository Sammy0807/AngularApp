module.exports = {
  // configure the code below with your username, password and mlab database information
<<<<<<< HEAD
  database: newFunction(), //prod
=======
  database: process.env.CONNECTIONSTRING,   //prod
  
>>>>>>> 4bc0f770825997fb23c37b48388ccf1ed37635c7
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: "yoursecret"
};
function newFunction() {
  return "mongodb+srv://samrem:3Gwurube.@cluster0-xjt13.mongodb.net/meanApp?retryWrites=true&w=majority";
}
