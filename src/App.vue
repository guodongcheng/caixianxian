<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "./assets/media.less";
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input{margin:0;padding:0;}
body{font-family: "微软雅黑";}
ul,ol,li{list-style:none;}
a,u{text-decoration: none;}
em,i{font-style:normal;}
b,strong{font-weight:100;}
img{border:0;display:block;}
h1,h2,h3,h4,h5,h6{font-weight:100;}
.clearfix:after{content:".";clear:both;display:block;height:0;overflow:hidden;visibility: hidden;}
</style>
