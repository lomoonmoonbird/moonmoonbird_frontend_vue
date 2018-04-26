<template>
  <v-app id="inspire">
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>

    export default {
      name: "Banner",
      data () {
        return {
          items: [
            {
              src: 'http://f.hiphotos.baidu.com/image/pic/item/3ac79f3df8dcd1007fde3f4e7e8b4710b9122f1b.jpg'
            },
            {
              src: 'http://f.hiphotos.baidu.com/image/pic/item/3ac79f3df8dcd1007fde3f4e7e8b4710b9122f1b.jpg'
            },
            {
              src: 'http://f.hiphotos.baidu.com/image/pic/item/3ac79f3df8dcd1007fde3f4e7e8b4710b9122f1b.jpg'
            },
            {
              src: 'http://f.hiphotos.baidu.com/image/pic/item/3ac79f3df8dcd1007fde3f4e7e8b4710b9122f1b.jpg'
            }
          ]
        }
      }
  }
</script>

<style>
img {
  height:100%;
  width: 100px;
  border-image-repeat: stretch
}
.application--wrap {
  min-height: 100px;
}
</style>

