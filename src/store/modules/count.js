const state = {
    count: 0
}

const actions = {
    increase: ({commit}) => commit('increase'),
    decrease: ({commit, state}) => {
        if(state.count !== 0) commit('decrease')
        else alert('Already 0')
    }
}

const mutations = {
    increase: state => state.count++,
    decrease: state => state.count--
}

const getters = {

}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters

}