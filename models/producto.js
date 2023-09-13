const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
   
    Nombreproducto: {
        type: String,
        required: [true, 'el nombre del producto es obligatorio']
    },
    categoria: {
        type: String,
        enum: ['Shampoos', 'Acondicionador','Gominas','Geles'],
        required: [true, 'La categoria  es obligatoria']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'la cantidad es obligatoria obligatorio']
    },
    descripcionproducto: {
        type: String,
        required: [true, 'la descripcion del producto es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    }
});

module.exports = model('Producto', ProductoSchema);
