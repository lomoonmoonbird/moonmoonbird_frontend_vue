import CommentService from "@/services/comment.service"

//state
const state = {
    comments: []
}

//getters
const getters = {
    comments: state => state.comments,
}

//setters

//actions
const actions = {
    postComment({commit}, comment){
        console.log(comment,    '@@@@@')
        return CommentService.comment((comment) => {
            commit('pushComments', comment.data.result)
        }, comment)
        
    },
    getAllComments({commit}, {hash_url}) {
        console.log(hash_url, 'hash_urlhash_url')
        CommentService.getComments((comments) => {
            commit('setComments', comments.data.result)
        }, hash_url)
    }
}

//mutations
const mutations = {
    setComments(state, comments) {
        state.comments = comments
    },
    pushComments(state, comment){
        state.comments  = [comment, ...state.comments]
        // state.comments.push(comment)
    }
}


export default  {
    state,
    getters,
    actions,
    mutations
}