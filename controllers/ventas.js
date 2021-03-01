/*
    Archivo controllers/ventas.js
    @description simulando la respuesta de objetos Venta
*/
const Venta = require("../models/Venta");
/*
    @description    función que crea una venta 
*/
function crearVenta(req, res) {
  var venta = new Venta(req.body);
  res.status(201).send(venta);
}
/*
    @description    función que obtiene todos las ventas 
*/
function obtenerVentas(req, res) {
  // Simulando dos ventas y respondiendolas
  var venta1 = new Venta(1, 43, 5, 1, "12/05/2021", "vendido");
  var venta2 = new Venta(2, 31, 6, 2, "01/07/2021", "cancelado");
  res.send([venta1, venta2]);
}
/*
    @description    función que modifica una venta     
*/
function modificarVenta(req, res) {
  // simulando una venta previamente existente
  var venta1 = new Venta(req.params.id, "28/02/2021", "cancelado");
  var modificaciones = req.body;
  venta1 = { ...venta1, ...modificaciones };
  res.send(venta1);
}
/*
    @description    función que elimina una venta   
*/
function eliminarVenta(req, res) {
  res.status(200).send(`Venta ${req.params.id} eliminada`);
}
