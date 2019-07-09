<template>
      <li class="comment-wrapper animate slideInLeft ">
        <div class="profile">
          <img :src="comment.avatar" alt=""></div>
        <div class="msg has-shadow">
          <div class="msg-body"><p class="name">{{comment.nickname}} <span class="date">{{comment.create_time*1000 | moment("dddd, MMMM Do YYYY")}}</span></p>
            <p class="content">{{comment.content}}</p></div>
        </div>
      </li>
  </template>

    <script>
      import moment from 'moment'
      export default {
        name: "ThreadComment",
        props: ['comment'],
        computed: {
           
        }
      }
    </script>

    <style lang="scss" scoped>
      .comment-wrapper {
        list-style: none;
        text-align: left;
        overflow: hidden;
        // margin-bottom: 2em;
        padding: 0em;

        .profile {
          width: 14%;
          float: left;
          img {
            width: 90%;
          }
        }
        
        .msg-body {
          padding: .8em;
          color: #000000;
          line-height: 1.5;
        }

        .msg {
          width: 86%;
          float: right;
          background-color: #fff;
          border-radius: 0 5px 5px 5px;
          position: relative;
          &::after {
            content: " ";
            position: absolute;
            left: -13px;
            top: 0;
            border: 14px solid transparent;
            border-top-color: #fff;
          }
        }

        .date {
          float: right;
        }
        .name {
          margin: 0;
          color: #999;
          font-weight: 700;
          font-size: .8em;
        }

        p:last-child {
          margin-top: .6em;
          margin-bottom: 0;
        }
  
      }


    </style>