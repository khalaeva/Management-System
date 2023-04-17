import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state: {
        storages: [],
        products: [],
        cart: [],
        buyers: [],
        orders: [],
        posts: []
    },

    mutations: {
        SET_STORAGES_TO_STATE: (state, storages) => {
            state.storages = storages;
        },
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_BUYERS_TO_STATE: (state, buyers) => {
            state.buyers = buyers;
        },
        SET_ORDERS_TO_STATE: (state, orders) => {
            state.orders = orders;
        },
        SET_POSTS_TO_STATE: (state, posts) => {
            state.posts = posts;
        },
        
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProdExist = false;
                state.cart.map(function(item) {
                    if (item.id === product.id) {
                        isProdExist = true;
                    }
                })
                if (!isProdExist) {
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
                }
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
        async GET_BUYERS_FROM_API({commit}) {
            try {
                const buyers = await axios('http://localhost:3000/buyers', {
                    method: "GET"
                });
                commit('SET_BUYERS_TO_STATE', buyers.data);
                return buyers;
            } catch (e) {
                console.log(e);
                return e;
            }
        },
        async GET_ORDERS_FROM_API({commit}) {
            try {
                const orders = await axios('http://localhost:3000/orders', {
                    method: "GET"
                });
                commit('SET_ORDERS_TO_STATE', orders.data);
                return orders;
            } catch (e) {
                console.log(e);
                return e;
            }
        },
        async GET_POSTS_FROM_API({commit}) {
            try {
                const posts = await axios('http://localhost:3000/posts', {
                    method: "GET"
                });
                commit('SET_POSTS_TO_STATE', posts.data);
                return posts;
            } catch (e) {
                console.log(e);
                return e;
            }
        },

        ADD_TO_CART({commit}, prod) {
            commit('SET_CART',  prod);
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
        },
        BUYERS(state) {
            return state.buyers;
        },
        ORDERS(state) {
            return state.orders;
        },
        POSTS(state) {
            return state.posts;
        }
    }
});

export default store