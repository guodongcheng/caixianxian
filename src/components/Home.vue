<template>
    <div>
        <v-banner :banner-name="bannerName" :banner-list="bannerList"></v-banner>
    </div>
</template>

<script>
    export default {
        name : "Hmoe",
        data(){
            return {
                bannerName : "homeBanner"
            }
        },
        computed : {
            bannerList(){
                return this.$store.state.navList[0].bannerList
            }
        },
        mounted(){
            this.$store.dispatch("getNavList");
        }
    }
</script>

<style lang="" scoped>
    .homeBanner{height:5.1rem;}
</style>