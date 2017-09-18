<template>
    <div :class="bannerName">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                <img :src="'http://album.cxx66.com//'+item.pic" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name : "Banner",
        props : {
            bannerName : {
                type : String,
                default : ""
            },
            bannerList : {
                type : Array,
                default:function(){
                    return []
                }
            }
        }
    }
</script>

<style lang="">
    img{display:block;width:100%;height:auto;}
</style>