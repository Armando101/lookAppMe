:high_brightness: **Integrantes** :high_brightness:
1. Armando Rivera
2. Griselda Silvestre
3. Manuel Santiago


:zap: **Objetivo** :zap:

lookAppMe permite a usuarios (vendedores y compradores) comprar y/o vender ropa semi nueva y nueva. 

Algunas prendas que se publican son:

- 👕
- 👗
- 👖
- 👚
- 👞
- 👓
- 👜
- Etcétera 


:exclamation: :exclamation: **Tipos de usuarios** :exclamation: :exclamation:

Se definio un solo usuario, con un atributo de tipo que nos permite conocer si se trata de un usuario-vendedor o usuario-comprador

- Administrador
- Vendedor
- Comprador


:x::x:**Historias de usuarios**:x::x:

:point_right: **Administrador**

- Agregar vendedores
- Dar de baja vendedores
- Eliminar las prendas que no cumplan con los requisitos o políticas de la app

:point_right:**Usuario (vendedor)**

- Vender productos
- Editar y eliminar prendas ya publicadas 
- Dejar un comentario al cliente

:point_right:**Usuario (comprador)**

- Agregar productos favoritos o a la lista de deseos
- Comprar productos
- Cancelar productos 
- Hacer devoluciones
- Dejar calificación del vendedor y producto

:point_right:**Todos**

- Ver los productos en la plataforma
- Autenticación (login)

:star2::star2: **Entidades principales y características** :star2::star2:

1. Usuario:
    - id
    - username
    - nombre
    - apellido 
    - correo
    - password
    - teléfono
    - domicilio
    - ocupación
    - foto
    - tipo


2. Prenda (artículo)

    - id
    - nombre
    - precio
    - fotos
    - descripción
    - categoría
    - vendedor
    - ubicación
    - estado

3. Venta
    - id
    - idPrenda
    - idComprador
    - idVendedor
    - fecha
    - estado

:anger::anger: **Información necesaria** :anger::anger:

Los datos de contácto, tanto del vendedor como del comprador y las características de la prenda. También se necesita saber cuando ocurre una venta, quien vende, quien compra y que compra. 

:boom::boom: **Funcionalidades de cada entidad** :boom::boom:

:arrow_right: Usuario

* Agregar un usuario
* Actualizar la información del usuario
* Buscar un usuario
* Eliminar un usuario

:arrow_right: Artículo (prenda)

* Crear una prenda
* Actualizar la información de la prenda
* Eliminar una prenda
* Buscar una prenda 

:arrow_right: Venta

* Crear una venta
* Modificar la información de una venta
* Eliminar una venta
* Buscar una venta 
## Deploy
Esta aplicación está en heroku y puedes acceder a ella desde el siguiente link
https://lookappme-api.herokuapp.com/api/users

