<template>
  <v-app id="inspire">
      <Cards :cards="cards"></Cards>   
      <infinite-loading @infinite="scrollpage" ref="infiniteLoading">
          <span slot="no-more">
            木有啦 :(
          </span>
        </infinite-loading>   
  </v-app>  
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex'
    import axios from 'axios';
    import InfiniteLoading from 'vue-infinite-loading';
    import Cards from '@/components/Cards'
    import ThreadService from '@/services/thread.service'

    export default {
        name: "ThreadsPagination",
        // directives: {infiniteScroll},
        components: {
          InfiniteLoading,
          Cards
        },
        // computed: mapGetters({
        //   threads: 'getPaginationThreads'
        // }),
        // computed:{
        //   ...mapState({
        //     threadState: state => {   
        //       return state.Thread
        //     }
        //   })
        // },
        created() {

        },
        data () {
          return {
            cards: [],
            time : Date.now()/1000
          } 
        },
        methods: {

          // ...mapActions(['getPaginationThreads']),
          scrollpage($state){
            this.category_id = this.$route.params.en_name
            
            ThreadService.getPageThread(this.category_id, this.time).then(({ data }) => {
                if (data.data.result.length) {
                  this.cards = this.cards.concat(data.data.result);
                  this.time = this.cards[this.cards.length-1].create_time
                  $state.loaded();
                } else {
                  $state.complete();
                }
              });

            // axios.get("http://localhost:52789/api/threads/page/${this.category_id}/${this.time}", {
            //     params: {
            //       category_id: this.category_id,
            //       time: this.time
            //     }, 
            //   }).then(({ data }) => {
            //     if (data.data.result.length) {
            //       this.cards = this.cards.concat(data.data.result);
                  
            //       this.time = this.cards[this.cards.length-1].create_time
            //       console.log(this.time, 'this.timethis.time')
            //       $state.loaded();
            //     } else {
            //       $state.complete();
            //     }
            //   });
            },

            // this.getPaginationThreads({category_id: this.category_id, time: this.time})
            // if (this.threadState.threads.length) {
            //   $state.loaded();
            //   if (this.list.length / 5 === 10) {
            //     $state.complete();
            //   }
            // } else{
            //   $state.complete();
            // }

          }
        }
    
</script>
