// Tema: Módulos de JavaScript (Exportamos la función)
// Tema: Asincronismo (async / await)
export async function obtenerProductosAPI() {
    try {
        // Tema: Consumo de API
        const respuesta = await fetch('https://fakestoreapi.com/products?limit=3');
        const productos = await respuesta.json();
        
        // Tema: Local Storage
        localStorage.setItem('recomendacionesTemu', JSON.stringify(productos));
        console.log("Productos guardados en Local Storage");

        return productos;
    } catch (error) {
        console.error("Error al obtener los productos de la API:", error);
        return [];
    }
}