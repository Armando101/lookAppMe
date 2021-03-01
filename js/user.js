/*
@author         Griselda Silvestre 
@description    Clase que guarda los datos y métodos de un cliente
@version        1.0
*/
class User {
  constructor(firstName, lastName, birthdayDate, address, ocupation, type) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdayDate = birthdayDate;
    this.address = address;
    this.ocupation = ocupation;
    this.type = type;
    this.articles = {};
  }
  /*
    @description    Método para actualizar la información del cliente 
    */
  updateInformation() {
    //code
  }

  /*
    @param      Artículo que se agrega  
    */
  addArticle() {
    //code
  }

  /*
    @param      Artículo que se elimina 
    */
  deleteArticle() {
    //code
  }
}

exports.module = User;
