/*
    User.js
    @author         Griselda Silvestre 
    @description    Clase que guarda los datos de un usuario, type define si es vendedor o comprador 
    @version        2.0
*/
class User{
    constructor(idUser, password, firstName, lastName, birthdayDate, email, phone, address, photo, ocupation, type){
        this.idUser = idUser; //identificador 
        this.password = password, //contraseña 
        this.firstName = firstName; //primer nombre
        this.lastName = lastName; //primer apellido 
        this.birthdayDate = birthdayDate; //fecha de cumpleaños
        this.email = email, //correo electrónico 
        this.phone = phone, //número de celular 
        this.address = address; //domicilio
        this.photo = photo, //foto
        this.ocupation = ocupation; //ocupación
        this.type = type; //tipo de usuario <vendedor o comprador>
    }
}

module.exports = User; 

