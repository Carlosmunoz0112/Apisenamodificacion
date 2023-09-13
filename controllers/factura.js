const { response } = require('express');
const Factura = require('../models/factura'); // Cambiar el nombre del modelo si es diferente

const getFactura = async (req, res = response) => {
    let mensaje = ''
    try {
        const facturas = await Factura.find()
        mensaje = facturas
    } catch (error) {
        mensaje = error

    }
    res.json({
        mensaje
    })
}

const postFactura = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    const factura = new Factura(body); // Cambiar el nombre del modelo si es diferente
    try {
        await factura.save();
        mensaje = 'Factura registrada';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

const putFactura = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    try {
        await Factura.findOneAndUpdate({
            Nombrefactura: body.Nombrefactura,
            fechaventa: body.fechaventa,
            producto: body.producto,
            precio: body.precio,
            cantidad: body.cantidad,
            estado: body.estado,
            total: body.total
        });
        mensaje = 'Factura Actualizada';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

const deleteFactura = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    try {
        await Factura.findOneAndUpdate({
            Nombrefactura: body.Nombrefactura,
            fechaventa: body.fechaventa,
            producto: body.producto,
            precio: body.precio,
            cantidad: body.cantidad,
            estado: body.estado,
            total: body.total
        });
        mensaje = 'Factura Borrada';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

module.exports = {
    getFactura,
    postFactura,
    putFactura,
    deleteFactura
};
