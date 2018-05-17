import IndexService from "@/services/index.service"

//state
const state = {
    indexdata: []
}

//getters
const getters = {
    getIndexData: state => state.indexdata
}

//actions
const actions = {
    getIndexData({commit}){
        IndexService.getIndex(indexdata => {
            commit('setIndexData', indexdata.data.result)
        })
        
    }
}

//mutations
const mutations = {
    setIndexData(state, indexdata) {
        state.indexdata = indexdata
    }
}


export default  {
    state,
    getters,
    actions,
    mutations
}