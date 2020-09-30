import Vue from 'vue'
import Vuex from 'vuex'


const state = {
    count: 1
}

const getters = {
    // count: (state) => {
    //     return state.count += 100
    // }
}

 mutations : {
    // add(state) {
    //     state.count++
    // },
    // reduce(state) {
    //     state.count--
    // }
}

const actions = {
    addAction(context) {
        setTimeout(() => {
            context.commit('add')
        },2000)
        console.log('我先执行了')
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
   modules: {
    a: moduleA,
    b: moduleB
   }
})