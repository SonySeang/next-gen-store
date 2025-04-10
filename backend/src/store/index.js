import {createStore} from "vuex";

import * as action from "./actions";
import * as mutation from "./mutations";
import {computed} from "vue";


const store = createStore({
    state: {
        user: {
            token: sessionStorage.getItem('TOKEN'),
            data: {}
        }
    },
    getters: {},
    actions: action,
    mutations: mutation

})

export default store;
