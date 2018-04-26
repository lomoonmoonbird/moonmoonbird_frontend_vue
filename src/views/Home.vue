<template>
    <div>  
        <Banner></Banner>
        <Article></Article>
        <router-view></router-view>
    </div>
</template>

<script>
    import Banner from "@/components/Banner"
    import Article from "@/components/Article"
    export default {
        name: "Home",
        components: {
            Banner,
            Article
        }
    }
</script>