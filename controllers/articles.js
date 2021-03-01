/*
    Archivo controllers/articles.js
    @description simulando la respuesta de objetos Article
*/
const Article = require("../models/Article");
/*
    @description    función que crea un artículo 
*/
function crearArticulo(req, res) {
  const article = new Article(req.body);
  res.status(201).send(article);
}
/*
    @description    función que obtiene todos los artículos 
*/
function obtenerArticulos(req, res) {
  // Simulando dos artículos y respondiendolos
  const article1 = new Article(1, "camisa roja de mangas", 180);
  const article2 = new Article(2, "vestido floreado", 200);
  res.send([article1, article2]);
}
/*
    @description    función que modifica un artículo     
*/
function modificarArticulo(req, res) {
  // simulando un artículo previamente existente
  const article1 = new Article(
    req.params.idArticle,
    "camisa roja de mangas",
    180
  );
  const modificaciones = req.body;
  article1 = { ...article1, ...modificaciones };
  res.send(article1);
}
/*
    @description    función que elimina un artículo   
*/
function eliminarArticulo(req, res) {
  res.status(200).send(`Artículo ${req.params.idArticle} eliminado`);
}

module.exports = {
  eliminarArticulo,
  modificarArticulo,
  obtenerArticulos,
  crearArticulo,
};
