import { fetchData } from "./Requests";

const login = async (email, password) => {
    const url = 'http://localhost:5000/signin';
    const body = { email, password };

    try {
        const result = await fetchData({ url, body });
        if (result.ok) {
            console.log('Login successful:', result.data);
            return result; // Retorno apropiado del resultado
        } else {
            // Lanza un error con un mensaje detallado
            console.log('Login failed:', {
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


export default login;

/* const login = (email, password) => {
    // Simula una llamada a API para autenticar al usuario
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "user@example.com" && password === "password") {
                resolve({ status: 'success', message: 'Login Successful' });
            } else {
                reject({ status: 'error', message: 'Invalid Credentials' });
            }
        }, 1000);
    });
}; */