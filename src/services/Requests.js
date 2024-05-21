export const fetchData = async ({ methodUrl, method = 'POST', body, headers = {} }) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config = {
        method: method,
        headers: { ...defaultHeaders, ...headers },
        body: JSON.stringify(body),
    };

    try {
        const url = process.env.REACT_APP_API_URL + methodUrl
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
        console.log("🚀 ~ fetchData ~ error:", error.message)
    }
};
