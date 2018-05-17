import ThreadService from "@/services/thread.service"

//state
const state = {
    thread: {},
    threads: []
}

//getters
const getters = {
    getThreadDetail: state => state.thread,
    getPaginationThreads: state => {return state.threads}
}

//actions
const actions = {
    getThreadDetail({commit}, hash_url){
        ThreadService.getDetail((thread) => {
            commit('setThread', thread.data.result)
        }, hash_url)
        
    },
    getPaginationThreads({commit}, {category_id, time}) {
        ThreadService.getPaginationThreads((threads) => {
            commit('setPaginationThreads', threads.data.result)
        }, category_id, time)
    }
}

//mutations
const mutations = {
    setThread(state, thread) {
        state.thread = thread
    },
    setPaginationThreads(state, threads) {
        if (state.threads.length){
            state.threads.concat(threads)
        }else{
            state.threads = threads
        }
    }
}


export default  {
    state,
    getters,
    actions,
    mutations
}