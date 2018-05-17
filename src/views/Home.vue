<template>
    <div>  
        <!-- <Banner></Banner> -->
        <Profile></Profile>
        <Cards :cards="cards"></Cards> 
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex'
    import Profile from "@/components/Profile"
    import Cards from "@/components/Cards"
    import IndexService from '@/services/index.service'
    
    export default {
        name: "Home",
        components: {
            Profile,
            Cards
        },
        computed:{
          ...mapState({
            cards: state => {   
              return state.Dashboard.indexdata
            }
          })
        },
        created () {
            this.$store.dispatch('getIndexData')
            
        },
        methods: {
            ...mapActions(['getIndexData'])
        }

    }
</script>