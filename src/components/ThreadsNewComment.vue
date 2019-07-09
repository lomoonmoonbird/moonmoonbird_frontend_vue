<template>
<v-container  fluid grid-list-md class="bg" >
  <v-layout  row wrap>
    
    <!-- <v-form ref="form" > -->
     <v-flex xs12 md12 >
          <v-text-field
            value=""
            label="昵称"
            outlined
            v-model="comment.nickname"
          ></v-text-field>
        </v-flex>
    <v-flex xs12 md12>
        <v-textarea
          outlined
          name="input-7-4"
          label="评论"
          value=""
          v-model="comment.content"
        ></v-textarea>
      </v-flex>
    <v-btn
      :disabled="!isValid"
      color="success"
      class="mr-3"
      @click.prevent="postComment"
      :class="{'is-loading': submit}"
    >
      啾
    </v-btn>
    
    <!-- </v-form> -->
  </v-layout>
</v-container>
</template>

    <script>
      import { mapGetters, mapActions } from 'vuex'
      export default {
        name: "ThreadNewComment",
        data() {
          return {
            submit: false,
            comment: {
              "nickname": '',
              "content": '',
            }
          }
        },
        methods: {
          postComment() {
            this.submit = true;
            this.comment['hash_url'] = this.$route.params.hash_url
            console.log( this.comment ,'  this.comment')
            this.$store.dispatch('postComment', this.comment)
              .then(response => {
                console.log(response, 'responseresponseresponseresponse')
                this.submit = false;
                this.comment.content = ""
              }).catch(err => {
              this.submit = false
            })

          },
        },
        computed: {
          isValid() {
            return this.comment.content !== '' && this.comment.nickname !== ''
          }
        }
      }
    </script>

    <style scoped>
      .has-margin-top {
        margin-top: 15px;
      }
      .bg {
        background: #ffffff;
      }

    </style>