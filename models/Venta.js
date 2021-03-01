/*
    Venta.js
    @author         Griselda Silvestre 
    @description    Clase que guarda los datos de una solicitud de venta 
    @version        2.0
*/
class Venta{
    constructor(id, idArticle, idUserCustomer, idUserSuplier, date, status){
        this.id = id; //identificador
        this.idArticle = idArticle, //identificador del artículo
        this.idUserCustomer = idUserCustomer, //identificador del cliente (comprador)
        this.idUserSuplier = idUserSuplier, //identificador del proveedor (vendedor)
        this.date = date, //fecha de la solicitud 
        this.status = status //estado de la solicitud <cancelado, vendido, apartado>
    }
}

module.exports = Venta;

