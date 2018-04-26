import AudioService from "@/services/audio.service"
// import { ApiService } from "../../services/base.service";

//state
const state = {
    easehearts: []
}

//getters
const getters = {
    getEaseHearts: state => state.easehearts
}

//actions
const actions = {
    getAllEaseHearts({commit}){
        AudioService.getEaseHearts(easehearts => {
            commit('setEaseHearts', easehearts.data.result)
        })
        
    }
}

//mutations
const mutations = {
    setEaseHearts(state, easehearts) {
        state.easehearts = easehearts
    }
}


export default  {
    state,
    getters,
    actions,
    mutations
}