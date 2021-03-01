/*
    Archivo controllers/users.js
    @description simulando la respuesta de objetos User 
*/
const User = require("../models/User");
/*
    @description    función que crea un usuario 
*/
function crearUsuario(req, res) {
  const user = new User(req.body);
  res.status(201).send(user);
}
/*
    @description    función que obtiene todos los usuarios   
*/
function obtenerUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  const user1 = new User(1, "gguti2403XZ", "Luis", "Vega", "luis_90@gmail.com");
  const user2 = new User(2, "silmFRL095g", "Ricardo", "ricardo95@gmail.com");
  res.send([user1, user2]);
}
/*
    @description    función que modifica un usuario    
*/
function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  const user1 = new User(
    req.params.idUser,
    "gguti2403XZ",
    "Luis",
    "Vega",
    "luis_90@gmail.com"
  );
  const modificaciones = req.body;
  user1 = { ...user1, ...modificaciones };
  res.send(user1);
}
/*
    @description    función que elimina un usuario    
*/
function eliminarUsuario(req, res) {
  res.status(200).send(`Usuario ${req.params.idUser} eliminado`);
}

module.exports = {
  eliminarUsuario,
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
};
