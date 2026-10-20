// Tema: Módulos de JavaScript e Integración
import { obtenerProductosAPI } from './api.js';
// Importamos funciones del Integrante 1
import { calcularDescuentoFlecha, calcularIvaEcuador } from '../index.js';
// Importamos el arreglo del Integrante 2
import { carritoTemu } from '../BarrenoNicolay-estructuras.js';

// Tema: Manipulación del DOM
const contenedorCarrito = document.getElementById('contenedor-carrito');
const contenedorApi = document.getElementById('contenedor-api');
const btnCargar = document.getElementById('btn-cargar-api');

// Tema: Programación Declarativa (Enfocada en el QUÉ, usando .map() en vez de for)
// INTEGRACIÓN: Mostramos el "carritoTemu" (Integrante 2) aplicándole "calcularDescuentoFlecha" (Integrante 1)
const renderizarCarritoLocal = () => {
    contenedorCarrito.innerHTML = carritoTemu.map(item => {
        // Usamos la función del Integrante 1 (15% de descuento)
        let precioConDescuento = calcularDescuentoFlecha(item.costo, 15);
        
        return `
            <div class="tarjeta">
                <strong>${item.articulo}</strong> <br>
                Precio Original: $${item.costo.toFixed(2)} <br>
                <span style="color:red;">Oferta Relámpago (15% off): $${precioConDescuento.toFixed(2)}</span>
            </div>
        `;
    }).join(''); // join('') evita las comas en el HTML (Declarativo)
};

// Llamamos a la función para pintar el DOM
renderizarCarritoLocal();


// Tema: Asincronismo y Eventos del DOM
btnCargar.addEventListener('click', async () => {
    contenedorApi.innerHTML = "<p>⏳ Cargando recomendaciones...</p>";
    
    // Obtenemos los datos de la API (Asincronismo)
    const productosRecomendados = await obtenerProductosAPI();
    
    // INTEGRACIÓN: Mostramos los de la API aplicándole "calcularIvaEcuador" (Integrante 1)
    contenedorApi.innerHTML = productosRecomendados.map(prod => {
        let precioConIva = calcularIvaEcuador(prod.price);
        
        return `
            <div class="tarjeta">
                <strong>${prod.title}</strong> <br>
                Categoría: ${prod.category} <br>
                Precio Base: $${prod.price.toFixed(2)} | Precio Final (IVA Ecuador): $${precioConIva.toFixed(2)}
            </div>
        `;
    }).join('');
});

// Nota de Programación Imperativa (No lo usamos, pero así sería):
// Un enfoque imperativo sería usar un ciclo "for", creando elementos con document.createElement("div"), 
// configurando sus clases una por una y usando appendChild() paso a paso.