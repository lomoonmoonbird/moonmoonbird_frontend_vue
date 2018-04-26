<template>

  <v-app id="inspire">
      
    <v-layout row>
      <v-flex xs12 sm12 >
            <template v-for="(item, index) in easehearts">
              <aplayer :autoplay="false" :key="index" :music="{
                    title: item.title,
                    artist: item.author,
                    src: item.url,
                    pic: ''
                }"
                />
            </template>
      </v-flex>
    </v-layout>
  </v-app>
  
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Aplayer from 'vue-aplayer'

    export default {
        name: "AudioList",
        components: {
          Aplayer
        },
        computed: mapGetters({
            easehearts: 'getEaseHearts'
            
        }),
        created () {
            this.$store.dispatch('getAllEaseHearts')
     
        }
    }
</script>