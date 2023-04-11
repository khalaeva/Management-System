import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state: {
        storages: []
    },

    mutations: {
        SET_STORAGES_TO_STATE: (state, storages) => {
            state.storages = storages;
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
    },

    getters: {
        STORAGES(state) {
            return state.storages;
        }
    }
});

export default store