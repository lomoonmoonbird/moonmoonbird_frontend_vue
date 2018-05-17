import NavigationService from "@/services/navigation.service"

//state
const state = {
    navigations: []
}

//getters
const getters = {
    getNavigation: state => state.navigations
}

//actions
const actions = {
    getNavigationData({commit}){
        NavigationService.getNavigation(navigations => {
            commit('setNavigationData', navigations.data.result)
        })
        
    }
}

//mutations
const mutations = {
    setNavigationData(state, navigations) {
        state.navigations = navigations
    }
}


export default  {
    state,
    getters,
    actions,
    mutations
}