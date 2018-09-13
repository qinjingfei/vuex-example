import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import course from './modules/course'

Vue.use(Vuex) 

export default new Vuex.Store({
  modules:{
    count,
    course
  }
})
