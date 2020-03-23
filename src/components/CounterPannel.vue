<template>

  <v-app id="inspire">
      
      <v-flex xs12 sm12 class="part1">
        
        <div class="vote youzhong bg-deep-purple" @click="vote(threadid,1)">
            <div class="icon">
               <transition name="youzhongfade" @after-leave="youzhongAfterLeave">
                    <div v-if="youzhong_show">

                            <i class="material-icons">favorite</i>
                    </div>
                </transition>
            </div>
            <div class="content">
                <div class="text" >有种</div>
                <div class="number count-to" v-if="votes.youzhong">{{votes.youzhong}}</div>
                <div class="number count-to" v-else>{{!votes.youzhong ? 0: votes.youzhong}}</div>
            </div>
        </div>
         <div class="vote youqu bg-deep-purple" @click="vote(threadid,2)">
            <div class="icon">
                <transition name="youqufade" @after-leave="youquAfterLeave">
                    <div v-if="youqu_show">

                            <i class="material-icons">favorite</i>
                    </div>
                </transition>
            </div>
            <div class="content">
                <div class="text" >有趣</div>
                <div class="number count-to" v-if="votes.youqu">{{votes.youqu}}</div>
                <div class="number count-to" v-else>0</div>
            </div>
        </div>
         <div class="vote youliao bg-deep-purple" @click="vote(threadid,3)">
            <div class="icon">
                <transition name="youliaofade" @after-leave="youliaoAfterLeave">
                    <div v-if="youliao_show">

                            <i class="material-icons">favorite</i>
                    </div>
                </transition>
            </div>
            <div class="content">
                <div class="text" >有料</div>
                <div class="number count-to" v-if="votes.youliao">{{votes.youliao}}</div>
                <div class="number count-to" v-else>0</div>
            </div>
        </div>
        <div class="vote youqing bg-deep-purple" @click="vote(threadid,4)">
            <div class="icon">
                <transition name="youqingfade" @after-leave="youqingAfterLeave">
                    <div v-if="youqing_show">

                            <i class="material-icons">favorite</i>
                    </div>
                </transition>
            </div>
            <div class="content">
                <div class="text">有情</div>
                <div class="number count-to" v-if="votes.youqing">{{votes.youqing}}</div>
                <div class="number count-to" v-else>0</div>
            </div>
        </div>
        <div class="vote youcai bg-deep-purple" @click="vote(threadid,5)">
            <div class="icon">
                <transition name="youcaifade" @after-leave="youcaiAfterLeave">
                    <div v-if="youcai_show">

                            <i class="material-icons">favorite</i>
                    </div>
                </transition>
            </div>
            <div class="content">
                <div class="text">有才</div>
                <div class="number count-to" v-if="votes.youcai">{{votes.youcai}}</div>
                <div class="number count-to" v-else>0</div>
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
  </v-app>
</template>



    <script>
    import ThreadService from '@/services/thread.service'
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
            },
            threadid: {
                type: String,
                default(){
                    return ''
                }
            },
            votes: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data () {
          return {
              youzhong_show: true,
              youqu_show: true,
              youliao_show: true,
              youqing_show: true,
              youcai_show: true,
          }
        },
        methods: {
          vote: function(threadId, voteType){
            ThreadService.voteThread(threadId, voteType).then((data)=>{
                
                let item = ""
                if (voteType == 1){
                    this.votes.youzhong = !this.votes.youzhong ? 0: this.votes.youzhong
                    this.votes.youzhong += 1
                    this.youzhong_show = false
                }
                else if (voteType == 2){
                    this.votes.youqu = !this.votes.youqu ? 0: this.votes.youqu    
                    this.votes.youqu += 1
                    this.youqu_show = false
                }
                    
                else if (voteType == 3){
                    this.votes.youliao = !this.votes.youliao ? 0: this.votes.youliao
                    this.votes.youliao += 1
                    this.youliao_show = false
                }
                else if (voteType == 4){
                    this.votes.youqing = !this.votes.youqing ? 0: this.votes.youqing
                    this.votes.youqing += 1
                    this.youqing_show = false
                }
                else if (voteType == 5){
                    this.votes.youcai = !this.votes.youcai ? 0: this.votes.youcai
                    this.votes.youcai += 1
                    this.youcai_show = false
                }

                
            })
          },
          youzhongAfterLeave: function(el){
              this.youzhong_show = true
          },
          youquAfterLeave: function(el){
              this.youqu_show = true
          },
          youliaoAfterLeave: function(el){
              this.youliao_show = true
          },
          youqingAfterLeave: function(el){
              this.youqing_show = true
          },
          youcaiAfterLeave: function(el){
              this.youcai_show = true
          }
        }
    }
</script>

<style scoped>

@keyframes youzhongbounce-in {
    0% {
    transform: scale(0);
    }
    50% {
    transform: scale(1.2);
    }
    100% {
    transform: scale(1);
    }
}

@keyframes youqubounce-in {
    0% {
    transform: scale(0);
    }
    50% {
    transform: scale(1.2);
    }
    100% {
    transform: scale(1);
    }
}

@keyframes youliaobounce-in {
    0% {
    transform: scale(0);
    }
    50% {
    transform: scale(1.2);
    }
    100% {
    transform: scale(1);
    }
}

@keyframes youqingbounce-in {
    0% {
    transform: scale(0);
    }
    50% {
    transform: scale(1.2);
    }
    100% {
    transform: scale(1);
    }
}

@keyframes youcaibounce-in {
    0% {
    transform: scale(0);
    }
    50% {
    transform: scale(1.2);
    }
    100% {
    transform: scale(1);
    }
}

.youzhongfade-enter-active {
    transform-origin:  center;
    animation: youzhongbounce-in 1s;
}

.youzhongfade-leave-active {
    transform-origin:  center;
    animation: youzhongbounce-in 1s reverse;
}

.youqufade-enter-active {
    transform-origin:  center;
    animation: youqubounce-in 1s;
}

.youqufade-leave-active {
    transform-origin:  center;
    animation: youqubounce-in 1s reverse;
}
.youliaofade-enter-active {
    transform-origin:  center;
    animation: youliaobounce-in 1s;
}

.youliaofade-leave-active {
    transform-origin:  center;
    animation: youliaobounce-in 1s reverse;
}
.youqingfade-enter-active {
    transform-origin:  center;
    animation: youqingbounce-in 1s;
}

.youqingfade-leave-active {
    transform-origin:  center;
    animation: youqingbounce-in 1s reverse;
}
.youcaifade-enter-active {
    transform-origin:  center;
    animation: youcaibounce-in 1s;
}

.youcaifade-leave-active {
    transform-origin:  center;
    animation: youcaibounce-in 1s reverse;
}

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
