const login = (email, password) => {
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
};

export default login;
/* 
const login = async (email, password) => {
    try {
        const response = await fetch('https://tuapi.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}; */

