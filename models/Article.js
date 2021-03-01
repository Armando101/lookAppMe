/*
    Article.js
    @author         Griselda Silvestre 
    @description    Clase que guarda los datos de una prenda de vestir 
    @version        2.0
*/
class Article{
    constructor(idArticle, name, price, photos, description, category, suplier, ubication, status){
        this.idArticle = idArticle; //identificador
        this.name = name; //nombre
        this.price = price; //precio
        this.photos = photos, //fotos
        this.description = description; //descripción
        this.category = category; //categoria
        this.suplier = suplier, //vendedor 
        this.ubication = ubication, //ubicación
        this.status = status; //estado de la prenda <usado, seminuevo>
    }
}

module.exports = Article; 