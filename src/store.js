import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        boodschappen: []
    },
    mutations: {
        updateList(state, newList) {
            state.boodschappen = newList;
        },
        deleteBoodschap(state, id) {
            state.boodschappen = state.boodschappen.filter(
                (boodschap) => boodschap.id !== id
            );
        },
        addBoodschap(state, newBoodschap) {
            state.boodschappen = [...state.boodschappen, newBoodschap];
        },
        markComplete(state, id) {
            state.boodschappen = state.boodschappen.map((boodschap) => {
                if (boodschap.id === id) {
                    return {
                        ...boodschap,
                        completed: true,
                    };
                }
                return boodschap;
            });
        },
    }
})

export default store;