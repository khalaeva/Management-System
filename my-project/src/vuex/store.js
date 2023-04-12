import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state: {
        storages: [],
        products: [],
        cart: []
    },

    mutations: {
        SET_STORAGES_TO_STATE: (state, storages) => {
            state.storages = storages;
        },

        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },

        SET_CART: (state, prod) => {
            state.cart.push(prod);
            state.cart.forEach(function (product) {   //устанавливаем свойство "количество" элементам корзины
                product.quantity = 1;
              });
        
        }
    },

    actions: {
        async GET_STORAGES_FROM_API({commit}) {
            try {
                const storages = await axios('http://localhost:3000/storages', {
                    method: "GET"
                });
                commit('SET_STORAGES_TO_STATE', storages.data);
                return storages;
            } catch (e) {
                console.log(e);
                return e;
            }
        },
        async GET_PRODUCTS_FROM_API({commit}) {
            try {
                const products = await axios('http://localhost:3000/products', {
                    method: "GET"
                });
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            } catch (e) {
                console.log(e);
                return e;
            }
        },


        ADD_TO_CART({commit}, prod) {
            commit('SET_CART', prod);
        },
    },

    getters: {
        STORAGES(state) {
            return state.storages;
        },
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store