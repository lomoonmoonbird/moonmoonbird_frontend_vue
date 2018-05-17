<template>
    <div>  
        <!-- <Banner></Banner> -->
        <ThreadDetailComponent></ThreadDetailComponent>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    import ThreadDetailComponent from "@/components/ThreadDetail"
    
    export default {
        name: "ThreadDetail",
        components: {
            ThreadDetailComponent,
        }
    }
</script>