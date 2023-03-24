//здесь все запросы которые мы делаем
import axios from 'axios';
import config from "@/config.js";

export const HTTP = axios.create({
    baseURL: config.MOCK,
});

export default {
    async getProducts() {
        try {
            const response = await HTTP.get('/products')
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}