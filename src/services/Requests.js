export const fetchData = async ({ url, method = 'POST', body, headers = {} }) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config = {
        method: method,
        headers: { ...defaultHeaders, ...headers },
        body: JSON.stringify(body),
    };

    try {
        const response = await fetch(url, config);
        if (!response.ok) return {
            status: response.status, // Devuelve el código de estado HTTP
            data: null, // Devuelve los datos de la respuestaf
            ok: false,
            message: response.statusText
        };
        
        const data = await response.json(); // Parsea la respuesta como JSON
        return {
            status: response.status, // Devuelve el código de estado HTTP
            data: data, // Devuelve los datos de la respuesta
            ok: response.ok,
            message: response.statusText
        };
    } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error)
        // Asegúrate de definir 'response' o manejar su ausencia correctamente
        /* return {
            status: error.response ? error.response.status : 500, // Usa el estado de la respuesta si está disponible
            message: error.message,
            ok: false
        }; */
    }
};
