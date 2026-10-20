/*==========================================
PARTE 1: OBJETOS EN TEMU
 ==========================================*/

// 1. Objetos: propiedades y valores clave
const productoTemu = {
    id: "TM-9982",
    nombre: "Auriculares Inalámbricos Bluetooth 5.0",
    precio: 15.99,
    categoria: "Electrónica",
    detalles: {
        color: "Negro",
        envioGratis: true
    }
};

// 2. Agregar y eliminar propiedades
productoTemu.stock = 150; 
delete productoTemu.categoria; 

// 3. Consultar propiedades mediante la notación de punto
console.log("Nombre del producto:", productoTemu.nombre);
console.log("Color:", productoTemu.detalles.color);

// 4. Encadenamiento opcional (?.)
console.log("Descuento aplicado:", productoTemu.promociones?.descuentoExtra); 

// 5. Desestructuración de objetos y renombramiento de propiedades
const { nombre: tituloArticulo, precio } = productoTemu;
console.log(`Artículo: ${tituloArticulo} a $${precio}`);

// 6. Operador spread para combinar objetos
const calificacionesExtra = { rating: 4.8, totalReviews: 3420 };
const productoCompleto = { ...productoTemu, ...calificacionesExtra };
console.log("Producto combinado con Spread:", productoCompleto);

// 7. Object.values() e includes()
const valoresDetalles = Object.values(productoTemu.detalles);
const tieneEnvioGratis = valoresDetalles.includes(true);
console.log("¿El producto tiene envío gratis?:", tieneEnvioGratis);

/*==========================================
// PARTE 2: ARREGLOS EN TEMU
==========================================*/

// 1. Arreglos y recorrido con forEach() + Funciones callback
const carritoTemu = [
    { id: 1, articulo: "Zapatillas Deportivas", costo: 25.50 },
    { id: 2, articulo: "Reloj Inteligente", costo: 30.00 },
    { id: 3, articulo: "Funda para celular", costo: 5.99 }
];

console.log("--- Resumen de tu Carrito TEMU ---");
carritoTemu.forEach(function(item) { 
    console.log(`- ${item.articulo}: $${item.costo}`);
});

// 2. Desestructuración de arreglos
const [primerArticulo, segundoArticulo] = carritoTemu;
console.log("El primer artículo que agregaste fue:", primerArticulo.articulo);

// 3. Spread para combinar arreglos
const listaDeseos = [
    { id: 4, articulo: "Gafas de sol polarizadas", costo: 12.00 }
];
const todosMisProductos = [...carritoTemu, ...listaDeseos];

// 4. Rest (...) para agrupar elementos
const [productoPrincipal, ...otrosProductos] = todosMisProductos;
console.log("Otros productos agrupados con Rest:", otrosProductos);

// 5. Métodos: push(), unshift(), pop() y shift()
const historialBusqueda = ["camisetas", "pantalones"];

historialBusqueda.push("zapatos"); 
historialBusqueda.unshift("gorras"); 
historialBusqueda.pop(); 
historialBusqueda.shift(); 
console.log("Historial de búsqueda final:", historialBusqueda);

// 6. Métodos: find(), includes() y filter()
const buscarReloj = carritoTemu.find(item => item.articulo === "Reloj Inteligente");
const buscasteCamisetas = historialBusqueda.includes("camisetas");
const productosCaros = carritoTemu.filter(item => item.costo > 20);
console.log("Productos mayores a $20:", productosCaros);
// 7. Métodos: map() y reduce()
const nombresArticulos = carritoTemu.map(item => item.articulo.toUpperCase());
console.log("Nombres de artículos:", nombresArticulos);
const totalPagar = carritoTemu.reduce((acumulador, item) => acumulador + item.costo, 0);
console.log(`Total a pagar en TEMU: $${totalPagar.toFixed(2)}`);
