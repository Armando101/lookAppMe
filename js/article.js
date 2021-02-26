/*
@description    Clase que guarda datos de un articulo
*/
class Article{
    constructor(idArticle, name, price, description, category, status){
        this.idArticle = idArticle; 
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.status = status;
    }
    /*
    @description Método para guardar la información del articulo en la BD 
    */
    saveArticle(){
        //code
    }
    /*
    @description Método para modificar la información del artículo 
    @param {Number} idArticle Necesito identificador del articulo 
    */
    updateInformation(idArticle){
        //code
    }
    /*
    @description Método para buscar un articulo por identificador 
    @param {Number} idArticle Necesito identificador del articulo
    @return {Object} Regresa el objeto buscado 
    */
    searchArticleById(idArticle){
        //code
    }
    /*
    @description Método para buscar articulos por categoria 
    @param {String} category Necesito la categoria a buscar 
    @return {Array} Regresa una lista de los articulos pertenecientes a la categoria 
    */
    searchArticleByCategory(category){
        //code
    }
}