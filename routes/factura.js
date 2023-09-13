const { Router } = require('express');

const route = Router();

const { getFactura, postFactura, putFactura, deleteFactura } = require('../controllers/factura');

route.put('/', putFactura);
route.delete('/', deleteFactura);

route.get('/', getFactura);

route.post('/', postFactura);

module.exports = route;