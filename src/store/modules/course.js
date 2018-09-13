
const state = {
    storage: [],
    category: '',
    staff: '',
    course: ''
}

const actions = {
    addCourse: ({commit, state}) => {
        if (!(state.course && state.staff && state.category)) return
        const category = state.category
        const staff = state.staff
        const course = state.course
        commit('updateStorage', {category, staff, course})
        commit('updateCategory', '')
        commit('updateCourse', '')
        commit('updateStaff', '')
    },
    removeCourse: ({commit,getters}, data) => 
        commit('removeCourse', getters.removeCourse(data))
}

const mutations = {
    updateCategory: (state, value) => state.category = value,
    updateStaff: (state, value) => state.staff = value,
    updateCourse: (state, value) => state.course = value,
    updateStorage: (state, obj) => state.storage.push(obj),
    removeCourse: (state, obj) => state.storage = obj
}

const getters = {
    removeCourse: state => data => state.storage.filter(value => value != data)
}


export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}