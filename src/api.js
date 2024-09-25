import axios from 'axios'
export async function fetchRates() {
    const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
    const baseUrl = import.meta.env.VITE_CURRENCY_BASE_URL;
    let data;
    try {
        const response = await axios({
            method: "GET",
            url: `${baseUrl}`,
            params: {
                apikey: `${apiKey}`
            }
        })
        data = response.data;

    }
    catch (err) {
        console.log(err);

    }
    return data;
}