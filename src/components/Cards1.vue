<template>
<v-container fluid grid-list-md fill-height>
  <v-layout column>
    <v-flex xs12 sm6>
          <v-layout row wrap>
            <v-flex
              v-for="card in indexdata"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
            <v-card>
        <v-card-media
          class="thumbnail"
          :src="card.thumbnail"
          height="300px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class=""><router-link class="nav" :to="{name: 'threaddetail', params: {hash_url: card.hash_url}}">{{card.title}}</router-link></div>
            <span class="grey--text">{{card.desc}}</span>
          </div>
        </v-card-title>
        <v-card-actions >
          <v-btn flat v-for="tag in card.tags" :key="tag">{{tag}}</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{card.desc}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
            </v-flex>
          </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: "Cards",
  }
</script>

<style scoped>
  .nav {
    text-decoration: none;
  }

</style>
