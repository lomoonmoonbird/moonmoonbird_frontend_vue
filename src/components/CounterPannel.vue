<template>

  <v-app id="inspire">
      
    <v-layout row wrap>
      <v-flex xs12 sm12 class="part1">
        <div class="vote youzhong bg-deep-purple" @click="vote(1)">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text" >有种</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">132</div>
            </div>
        </div>
         <div class="vote youqu bg-deep-purple" @click="vote(2)">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text" >有趣</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">32</div>
            </div>
        </div>
         <div class="vote youliao bg-deep-purple" @click="vote(3)">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text" >有料</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">21</div>
            </div>
        </div>
        <div class="vote youqing bg-deep-purple" @click="vote(4)">
            <div class="icon">
                <i class="material-icons">favorite</i>
            </div>
            <div class="content">
                <div class="text">有情</div>
                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20">66</div>
            </div>
        </div>
        <div class="vote youcai bg-deep-purple" @click="vote(5)">
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
            <template v-for="(item, index) in recommends">
                <router-link class="link" :to="{name: 'threaddetail', params: {hash_url: item.hash_url}}">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile avatar v-else :key="item.title" @click="">
                <v-list-tile-avatar>
                  <img :src="item.thumbnail">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.desc"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              </router-link>
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
        props: {
            recommends: {
                type: Array,
                    default(){
                    return []
                }
            }
        },
        data () {
          return {
          }
        },
        methods: {
          vote: function(voteType){
            console.log(voteType)
          }
        }
    }
</script>

<style scoped>
#inspire {
    background-color: #ffffff;
}

.link {
    text-decoration: none;
    color: #000;
}

.vote {
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
.youzhong .icon {
    position: absolute;
    right: 10px;
    bottom: 2px;
    text-align: center;
}
.youzhong .icon i {
    color: #E53935;
    font-size: 60px;
}

.youqu .icon {
    position: absolute;
    right: 10px;
    bottom: 2px;
    text-align: center;
}
.youqu .icon i {
    color: #F57C00;
    font-size: 60px;
}

.youliao .icon {
    position: absolute;
    right: 10px;
    bottom: 2px;
    text-align: center;
}
.youliao .icon i {
    color: #5E35B1;
    font-size: 60px;
}

.youqing .icon {
    position: absolute;
    right: 10px;
    bottom: 2px;
    text-align: center;
}
.youqing .icon i {
    color: #43A047;
    font-size: 60px;
}

.youcai .icon {
    position: absolute;
    right: 10px;
    bottom: 2px;
    text-align: center;
}
.youcai .icon i {
    color: #1E88E5;
    font-size: 60px;
}
.vote .content {
    display: inline-block;
    padding: 7px 16px;
}
.youzhong .content .text {
    font-size: 13px;
    margin-top: 11px;
    color: #E53935;
}
.youzhong .content .number {
    font-weight: normal;
    font-size: 26px;
    margin-top: -4px;
    color: #E53935;  
}

.youqu .content .text {
    font-size: 13px;
    margin-top: 11px;
    color: #F57C00;
}
.youqu .content .number {
    font-weight: normal;
    font-size: 26px;
    margin-top: -4px;
    color: #F57C00;  
}

.youliao .content .text {
    font-size: 13px;
    margin-top: 11px;
    color: #5E35B1;
}
.youliao .content .number {
    font-weight: normal;
    font-size: 26px;
    margin-top: -4px;
    color: #5E35B1;  
}

.youqing .content .text {
    font-size: 13px;
    margin-top: 11px;
    color: #43A047;
}
.youqing .content .number {
    font-weight: normal;
    font-size: 26px;
    margin-top: -4px;
    color: #43A047;  
}

.youcai .content .text {
    font-size: 13px;
    margin-top: 11px;
    color: #1E88E5;
}
.youcai .content .number {
    font-weight: normal;
    font-size: 26px;
    margin-top: -4px;
    color: #1E88E5;  
}
</style>
