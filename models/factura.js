const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'El precio del producto es obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad del producto es obligatoria']
    }
});

const facturaSchema = new Schema({
    nombreFactura: {
        type: String,
        required: [true, 'El nombre de la factura es obligatorio']
    },
    fechaVenta: {
        type: Date,
        required: [true, 'La fecha de venta es obligatoria'],
        validate: {
            validator: function (fechaVenta) {
                const fecha = new Date();
                return fechaVenta < fecha;
            },
            message: 'La fecha de venta es mayor a la fecha actual'
        }
    },
    productos: [productoSchema], // Arreglo de productos
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


// Antes de guardar, calcula el valor del campo 'total' multiplicando 'precio' por 'cantidad'
facturaSchema.pre('save', function (next) {
    const totalProductos = this.productos.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
    }, 0);
    this.total = totalProductos;
    next();
});

module.exports = model('factura', facturaSchema);
