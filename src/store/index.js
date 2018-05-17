import Vue from 'vue'
import Vuex from 'vuex'
import Audio from './modules/Audio'
import Dashboard from './modules/dashboard'
import Thread from './modules/Threads'
import Navigation from './modules/Navigation'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Audio,
        Dashboard,
        Thread,
        Navigation
      }
    })