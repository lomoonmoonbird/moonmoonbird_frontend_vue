<template>
    <div>  
        <ThreadsPagination></ThreadsPagination>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    import ThreadsPagination from '@/components/ThreadsPagination'

    export default {
        name: "ThreadList",
        components: {
            ThreadsPagination,
        },
        
    }
</script>