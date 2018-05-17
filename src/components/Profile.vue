<template>
<v-container fluid grid-list-md>
  <div class="mmb-profile">
  <div class="wrap">
      <div class="middle">
          <span>constructing...</span>
      </div>
  </div>
</div>
</v-container>
</template>

<style scoped>
.mmb-profile {
  width: 100%;
  height: 100%;
  z-index: -1;
  margin-bottom: 2em;
  -moz-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}
.mmb-profile .wrap {
  width: 100%;
  min-height: 300px;
  opacity: .5;
  background: linear-gradient(270deg, #f50000, #e4370b, #cfe016, #11c913, #0d4cbc, #1699cf, #880dbc);
  background-size: 1400% 1400%;
  text-align: center;
  line-height: 300px;
  color: #fff;
  align-content: center;
  -webkit-animation: AnimationName 11s ease infinite;
  -moz-animation: AnimationName 11s ease infinite;
  animation: AnimationName 11s ease infinite;
  
}

.mmb-profile .left {
    
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}
@keyframes AnimationName { 
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
}


@media screen and (max-width: 760px) {

}


</style>
