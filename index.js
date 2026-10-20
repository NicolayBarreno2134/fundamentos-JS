// ==========================================
// FUNDAMENTOS DE JAVASCRIPT - APLICADO A TEMU
// ==========================================

//  -------- 1. Comentarios de una línea y multilínea ------------------
// Este es un comentario de una sola línea: Simulación del carrito de Temu.

/*
 Integrantes:
- Araujo Gregory
- Barreno Nicolay 
- Cajas Jordy
  Modelado del flujo de compras e información de productos en Temu.
*/

// -------------- 2. Variables: let y const --------------
let cantidadEnCarrito = 3; // Variable reutilizable (puede cambiar al agregar más items)
const NOMBRE_TIENDA = "Temu"; // Constante (no cambia)
const ID_PRODUCTO = "TM-994812";

// ----------- 3. Tipos de datos primitivos y compuestos-----------
// Primitivos:
let tituloProducto = "  Audífonos Inalámbricos Bluetooth Lenovo  "; // String
let precioOriginal = 25.99; // Number
let tieneEnvioGratis = true; // Boolean
let idPromocion = null; // Null
let cuponDescuento; // Undefined

// Compuestos:
let productoTemu = {
  id: ID_PRODUCTO,
  nombre: "Audífonos Inalámbricos",
  categoria: "Electrónica",
  valoracion: 4.8
}; // Object

let categoriasPopulares = ["Hogar", "Ropa", "Electrónica", "Juguetes"]; // Array

// ---------------4. Strings y sus métodos--------------
// trim(), toLowerCase(), includes(), endsWith(), length, toUpperCase()
let tituloLimpio = tituloProducto.trim(); // Quita espacios al inicio y final
let tituloMinusculas = tituloLimpio.toLowerCase();
let tituloMayusculas = tituloLimpio.toUpperCase();
let tieneBluetooth = tituloLimpio.includes("Bluetooth"); // Retorna true si existe la palabra
let esAudifono = tituloLimpio.endsWith("Lenovo"); // Verifica con qué termina el string
let longitudTitulo = tituloLimpio.length; // Cantidad de caracteres

console.log("--- METODOS DE STRINGS ---");
console.log("Título sin espacios:", tituloLimpio);
console.log("Longitud del título:", longitudTitulo);
console.log("¿Contiene 'Bluetooth'?:", tieneBluetooth);
console.log("En mayúsculas:", tituloMayusculas);

// -------------- 5. Template strings-------------
let resumenProducto = `Producto de ${NOMBRE_TIENDA}: ${tituloLimpio} | Precio: $${precioOriginal}`;
console.log("--- TEMPLATE STRINGS ---");
console.log(resumenProducto);

// -------------- 6. Numbers: conversión y toFixed()--------------
let precioTexto = "12.4599";
let precioConvertido = parseFloat(precioTexto); // Conversión de texto a número flotante
let precioEntero = parseInt("10"); // Conversión a entero
let precioFormateado = precioConvertido.toFixed(2); // Redondea a 2 decimales (retorna string "12.46")

console.log("--- NUMBERS ---");
console.log("Precio convertido a Number:", precioConvertido);
console.log("Precio para mostrar al usuario (toFixed):", `$${precioFormateado}`);

// ------------ 7. Booleans, comparaciones estrictas y no estrictas---------
let stockDisponible = 50;
let comparacionNoEstricta = (stockDisponible == "50"); // true (compara solo valor)
let comparacionEstricta = (stockDisponible === "50"); // false (compara valor y tipo de dato)

console.log("--- COMPARACIONES ---");
console.log("Comparación no estricta (==):", comparacionNoEstricta);
console.log("Comparación estricta (===):", comparacionEstricta);

// -------- 8. Valores truthy y falsy -------------
let itemsSeleccionados = 0; // 0 es un valor Falsy
let usuarioLogueado = "JuanPerez"; // String no vacío es Truthy

if (itemsSeleccionados) {
  console.log("Tienes items seleccionados.");
} else {
  console.log("Falsy: El carrito está vacío (0 items).");
}

if (usuarioLogueado) {
  console.log(`Truthy: Bienvenido de nuevo, ${usuarioLogueado}`);
}

// ---------------- 9. Nullish coalescing (??) --------------
// Devuelve el lado derecho solo si el lado izquierdo es null o undefined
let cuponUsuario = null;
let cuponAplicado = cuponUsuario ?? "DESCUENTO_BIENVENIDA_TEMU";

let costoEnvio = 0; // 0 NO es null ni undefined, por lo que se respeta
let costoFinalEnvio = costoEnvio ?? 5.00;

console.log("--- NULLISH COALESCING (??) ---");
console.log("Cupón aplicado:", cuponAplicado);
console.log("Costo final de envío:", costoFinalEnvio);

// ------------ 10. Condicionales y operador ternario---------------
let montoTotalCompra = 15.00;
let mensajeEnvio;

// Condicional tradicional if / else
if (montoTotalCompra >= 10.00) {
  mensajeEnvio = "¡Calificas para Envío Gratis en Temu!";
} else {
  mensajeEnvio = "Agrega más productos para obtener Envío Gratis.";
}

// Operador ternario (condición ? verdadero : falso)
let estadoOferta = (precioOriginal < 20) ? "Oferta Relámpago" : "Precio Normal";

console.log("--- CONDICIONALES Y TERNARIO ---");
console.log(mensajeEnvio);
console.log("Estado del producto:", estadoOferta);

// 11. --------- Funciones declaradas, expresadas y flecha ---------------

// Función declarada
function calcularDescuentoDeclarada(precio, porcentaje) {
  return precio - (precio * (porcentaje / 100));
}

// Función expresada
const calcularDescuentoExpresada = function(precio, porcentaje) {
  return precio - (precio * (porcentaje / 100));
};

// Función flecha (Arrow function)
const calcularDescuentoFlecha = (precio, porcentaje) => precio - (precio * (porcentaje / 100));

console.log("--- FUNCIONES ---");
console.log("Descuento (Declarada):", calcularDescuentoDeclarada(100, 20));
console.log("Descuento (Flecha):", calcularDescuentoFlecha(100, 20));

// 12. ------------ Tipos de retorno y funciones que retornan otras funciones -------------------

// Función que calcula el impuesto según el país (Closure)
function crearCalculadorImpuesto(tasaImpuesto) {
  // Retorna una nueva función
  return function(precioBase) {
    return precioBase + (precioBase * tasaImpuesto);
  };
}

// Creamos un calculador específico para Ecuador (IVA 15%)
const calcularIvaEcuador = crearCalculadorImpuesto(0.15);

console.log("--- FUNCIONES QUE RETORNAN FUNCIONES ---");
console.log("Precio final con IVA (Ecuador):", calcularIvaEcuador(precioOriginal).toFixed(2));

// ==========================================
// AGREGADO PARA LA INTEGRACIÓN (MÓDULOS)
// ==========================================
export { calcularDescuentoFlecha, calcularIvaEcuador };