export const fetchData = async ({ methodUrl, method = 'POST', body, headers = {} }) => {
    const defaultHeaders = {};

    // Añadir 'Content-Type' solo para métodos que envían datos en el cuerpo
    if (method === 'POST' || method === 'PUT') {
        defaultHeaders['Content-Type'] = 'application/json';
    }

    const config = {
        method: method,
        headers: { ...defaultHeaders, ...headers },
        credentials: 'include'  // Asegúrate de que las cookies sean enviadas con la solicitud
    };

    // Solo añadir body si el método es POST o PUT
    if (method === 'POST' || method === 'PUT') {
        config.body = JSON.stringify(body);
    }

    try {
        const url = process.env.REACT_APP_API_URL + methodUrl;
        const response = await fetch(url, config);
        if (!response.ok) {
            return {
                status: response.status,
                data: null,
                ok: false,
                message: response.statusText
            };
        }

        const data = await response.json(); // Parsea la respuesta como JSON
        return {
            status: response.status,
            data: data,
            ok: response.ok,
            message: response.statusText
        };
    } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.message);
        return {
            status: 500,
            data: null,
            ok: false,
            message: "Internal Server Error"
        };
    }
};
