const { Schema, model } = require('mongoose');



const facturaSchema = new Schema({
    nombreFactura: {
        type: String,
        required: [true, 'El nombre de la factura es obligatorio']
    },
    producto: {
        type: String,
        required: [true, 'el nombre del producto es obligatorio']},
precio: {
    type: Number,
    required: [true, 'El precio es obligatorio obligatorio']
},
cantidad: {
    type: Number,
    required: [true, 'la cantidad es obligatoria obligatorio']
},

    fechaVenta: {
        type: String,
required: [true, 'la fecha es obligatoria']
        
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    },
    total: {
        type: Number,
        required: true
    }
});



module.exports = model('Factura', facturaSchema);




