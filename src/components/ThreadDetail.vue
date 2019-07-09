<template>
  <v-app id="inspire">
      
        <v-container  grid-list-md  class='bg' >
            
            <v-layout row wrap>
                
                <v-flex xs12 md8 class="context_left" v-html="thread.html_content">
                    
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
                transition: 'slide-y-reverse-transition'
            }
        },
        components: {
          CounterPannels
        },
        computed: mapGetters({
            thread: 'getThreadDetail',
            activeFab () {
                switch (this.tabs) {
                case 'one': return { 'class': 'purple', icon: 'account_circle' }
                case 'two': return { 'class': 'red', icon: 'edit' }
                case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
                default: return {}
                }
      }
            
        }),
        created () {
            window.scrollTo(0, 0);
            this.hash_url = this.$route.params.hash_url
            this.ticket = this.$route.query.ticket
            this.$store.dispatch('getThreadDetail', {hash_url:this.hash_url, ticket:this.ticket})
        },
        beforeEnter: (to, from, next) => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;


        }
    }
</script>

<style scoped>
.context_left {
    background-color: #ffffff;
}
.context_right {
    background-color: #ffffff;
}
.context {
    word-break:break-all;
}

</style>


