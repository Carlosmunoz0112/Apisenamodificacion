const { Router } = require('express');

const route = Router();

const { getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/producto');

route.put('/', putProducto);
route.delete('/', deleteProducto);

route.get('/', getProducto);

route.post('/', postProducto);

module.exports = route;
