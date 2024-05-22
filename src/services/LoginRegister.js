import { fetchData } from "./Requests";

export const login = async (email, password) => {
    const methodUrl = 'signin';
    const body = { email, password };

    try {
        const result = await fetchData({ methodUrl, body });
        if (result.ok) {
            console.log('Login successful:', result.data);
            localStorage.setItem('userSession', JSON.stringify(result.data.user));
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

export const logout = async () => {
    const methodUrl = 'logout';

    try {
        const result = await fetchData({ methodUrl });
        if (result.ok) {
            console.log('Log Out successful:', result.data);
            return result; // Retorno apropiado del resultado
        } else {
            // Lanza un error con un mensaje detallado
            console.log('Logot failed:', {
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
        console.log("🚀 ~ Catch LoginRegister.js Logout: logout ~ error:", error.message)
    }
};

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