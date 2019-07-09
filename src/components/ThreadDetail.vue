<template>
  <v-app id="inspire">
      
        <v-container  grid-list-md  class='bg' >
            <!-- <div class="container">
                    <ul class="comment-list">
                    <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
                    </ul>
                </div> -->
            <v-layout row wrap>
                
                    <v-flex xs12 md8  >
                        <v-layout row wrap>
                            <v-flex xs12 md12 class="context_left" v-html="thread.html_content">
                            </v-flex>
                            <v-flex xs12 md12 >
                                <ThreadNewComment></ThreadNewComment>
                                <ul class="comment-list">
                                    <ThreadComment :key="comment.id" v-for="comment in comments" :comment="comment"></ThreadComment>
                                </ul>
                            </v-flex>
                            
                        </v-layout>    
                    </v-flex>
               
                
                <v-flex xs12 md4 class="context_right">
                    <CounterPannels :votes="thread.votes" :threadid="thread.id" :recommends="thread.recommends"></CounterPannels>

    
                    <!-- 此区域暂未开放 -->
                </v-flex>
            </v-layout>    
                    
        </v-container>       
  </v-app>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import CounterPannels from './CounterPannel'
    import ThreadComment from './ThreadsComment'   
    import ThreadNewComment from './ThreadsNewComment'
    export default {
        name: "ThreadDetail",
        data(){ 
            return{
                "hash_url": "",
                direction: 'bottom',
                fab: false,
                fling: false,
                hover: true,
                tabs: null,
                top: false,
                right: true,
                bottom: true,
                left: false,
                transition: 'slide-y-reverse-transition',
                // comments: [
                //     {"id":1, "author": "mmb", "content": "写的非常好"},
                //     {"id":2, "author": "mmb", "content": "写的非常好"}
                // ]
            }
        },
        components: {
          CounterPannels,
          ThreadComment,
          ThreadNewComment
        },
        computed: mapGetters({
            thread: 'getThreadDetail',
            comments: 'comments'
            
        }),
        created () {
            window.scrollTo(0, 0);
            this.hash_url = this.$route.params.hash_url
            this.ticket = this.$route.query.ticket
            this.$store.dispatch('getThreadDetail', {hash_url:this.hash_url, ticket:this.ticket})
            this.$store.dispatch('getAllComments', {hash_url:this.hash_url})
        },
        beforeEnter: (to, from, next) => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;


        }
    }
</script>

<style scoped>
.container.grid-list-md .layout .flex {
    padding: 0;
}
.context_left {
    background-color: #ffffff;
}
.context_right {
    background-color: #ffffff;
}
.context {
    word-break:break-all;
}
.comment-list {
        padding: 1em 0;
        margin-bottom: 2px;
}



</style>


