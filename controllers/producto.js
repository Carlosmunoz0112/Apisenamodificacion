const { response } = require('express');
const Producto = require('../models/producto'); // Cambiar el nombre del modelo si es diferente

const getProducto=async(req, res=response) => {
    let mensaje=''
    try {
        const productos= await Producto.find()
        mensaje= productos
    } catch (error) {
        mensaje= error
        
    }
    res.json({
        mensaje
    })
  }

const postProducto = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    
    const producto = new Producto(body); // Cambiar el nombre del modelo si es diferente
    try {
        await producto.save();
        mensaje = 'Producto registrado';
    } catch (error) {
        mensaje = error ;
    }
    res.json({
        mensaje
    });
};

const putProducto = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    try {
        await Producto.findOneAndUpdate({
            Nombreproducto: body.Nombreproducto,
            categoria: body.categoria,
            precio: body.precio,
            cantidad: body.cantidad,
            descripcionproducto: body.descripcionproducto,
            estado: body.estado
        });
        mensaje = 'Factura Actualizada';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

const deleteProducto = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
    try {
        await Producto.findOneAndUpdate({
            Nombreproducto: body.Nombreproducto,
            categoria: body.categoria,
            precio: body.precio,
            cantidad: body.cantidad,
            descripcionproducto: body.descripcionproducto,
            estado: body.estado
        });       
         mensaje = 'Producto Borrado';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
};
