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
                            <!-- <aplayer v-bind:class="{on_border: (item.status==2)}" :controls="true" autoplay :key="item.id" :music="{
                                title: item.name,
                                artist: item.artist,
                                src: item.url,
                                pic: '',
                            }"
                            /> -->
                            
                                 
                            <v-flex xs12 md12 class="context_left" v-html="thread.html_content"></v-flex>
                            <v-flex xs12 md12 >
                                
                                <ThreadNewComment></ThreadNewComment>
                                <ul class="comment-list">
                                    <ThreadComment :key="comment.id" v-for="comment in comments" :comment="comment"></ThreadComment>
                                </ul>
                            </v-flex>
                            
                    </v-flex>
               
                
                <v-flex xs12 md4 class="context_right">
                    <!-- <v-flex>
                        <aplayer float repeat theme="#4fffff" ref="player"
                                :audio="{
                                    autoplay:true,
                                    controls:true
                                    }"
                                :music="{
                                    title: 'secret base~君がくれたもの~',
                                    artist: 'Silent Siren',
                                    src: 'http://7xilr2.com1.z0.glb.clouddn.com/easeheart1-8.mp4',
                                    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                                }"
                                />
                    </v-flex> -->
                    <CounterPannels :votes="thread.votes" :threadid="thread.id" :recommends="thread.recommends"></CounterPannels>

    
                    <!-- 此区域暂未开放 -->
                </v-flex>
            </v-layout>    
                    
        </v-container>       
  </v-app>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Aplayer from 'vue-aplayer'
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
                item: {
                    id:"1",
                    name: 'The Party We Have Never Seen',
                    artist: 'Nana Takahashi',
                    url: 'http://7xilr2.com1.z0.glb.clouddn.com/easeheart1-8.mp4',
                    cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300', // prettier-ignore
                    lrc: 'https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc',
                },
                ap: true

            }
        },
        components: {
          CounterPannels,
          ThreadComment,
          ThreadNewComment,
          Aplayer
        },
        computed: mapGetters({
            thread: 'getThreadDetail',
            comments: 'comments'
            
        }),
        created () {
            window.scrollTo(0, 0);
            this.hash_url = this.$route.params.hash_url
            this.ticket = this.$route.query.ticket
            this.source = this.$route.query.source
            this.$store.dispatch('getThreadDetail', {hash_url:this.hash_url, ticket:this.ticket, source:this.source})
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


