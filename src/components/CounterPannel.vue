<template>

  <v-app id="inspire">
      
    <v-layout row wrap>
      <v-flex xs12 sm12 class="part1">
        <div class="info-box-3 bg-deep-purple" @click="like">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text" >有种</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">132</div>
            </div>
        </div>
         <div class="info-box-3 bg-deep-purple" @click="like">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text" >有趣</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">32</div>
            </div>
        </div>
         <div class="info-box-3 bg-deep-purple" @click="like">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text" >有料</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">21</div>
            </div>
        </div>
        <div class="info-box-3 bg-deep-purple">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text">有情</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">66</div>
            </div>
        </div>
        <div class="info-box-3 bg-deep-purple">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text">有才</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">751</div>
            </div>
        </div>
        
      </v-flex>
      <v-flex xs12 sm12 >
        <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile avatar v-else :key="item.title" @click="">
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
      </v-flex>
    </v-layout>
  </v-app>
</template>



    <script>
    export default {
        name: "CounterPannels",
        components: {
          
        },
        created() {

        },
        data () {
          return {
            items: [
              { header: '推荐' },
              { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
              { divider: true, inset: true },
              { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
              { divider: true, inset: true },
              { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }
            ]
          }
        },
        methods: {
          like: function(event){
            console.log('like')
          }
        }
    }
</script>

<style scoped>
#inspire {
    background-color: #ffffff;
}

.info-box-3 {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);
    height: 80px;
    display: flex;
    cursor: default;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    /* margin-bottom: 30px; */
}


.bg-deep-purple {
    background-color: #fff !important;
    color: rgba(0, 0, 0, 1);
    opacity: .8;
}
.info-box-3 .icon {
    position: absolute;
    right: 10px;
    bottom: 2px;
    text-align: center;
}
.info-box-3 .icon i {
    color: rgba(0, 0, 0, 0.15);
    font-size: 60px;
}
.info-box-3 .content {
    display: inline-block;
    padding: 7px 16px;
}
.info-box-3 .content .text {
    font-size: 13px;
    margin-top: 11px;
    color: rgba(187, 12, 12, 1);
}
.info-box-3 .content .number {
    font-weight: normal;
    font-size: 26px;
    margin-top: -4px;
    color: rgba(187, 12, 12, 1);  
}
</style>
