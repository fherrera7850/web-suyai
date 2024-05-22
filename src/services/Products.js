import { fetchData } from "./Requests";

const getAllProducts = async () => {
    const methodUrl = 'products';
    const method = 'GET';
    
    try {
        const result = await fetchData({ methodUrl, method });
        console.log("🚀 Products fetched!", result)
        if (result.ok) {
            return result; // Retorno apropiado del resultado
        } else {
            // Lanza un error con un mensaje detallado
            console.log('Products fetch failed:', {
                status: result.status || 500, // Usa una propiedad de error si está disponible o usa un valor predeterminado
                message: result.message || 'Unknown error', // Usa un mensaje de error predeterminado si no está disponible
                ok: false
            });
            return {
                status: result.status || 500, // Usa una propiedad de error si está disponible o usa un valor predeterminado
                message: result.message || 'Unknown error', // Usa un mensaje de error predeterminado si no está disponible
                ok: false
            };
        }
    } catch (error) {
        console.log("🚀 ~ Catch LoginRegister.js: login ~ error:", error.message)
    }
};


export default getAllProducts;