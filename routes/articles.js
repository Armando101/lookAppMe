const router = require('express').Router();
const {
  crearArticulo,
  obtenerArticulos,
  modificarArticulo,
  eliminarArticulo
} = require('../controllers/users')

router.get('/', obtenerArticulos)
router.post('/', crearArticulo)
router.put('/:id', modificarArticulo)
router.delete('/:id', eliminarArticulo)

module.exports = router;