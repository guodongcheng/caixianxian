<template>
    <div class="content">
        <slot> content的内容 </slot>    
    </div>
</template>


<script>
export default {
    name:"conteng"
}
</script>

<style lang="less" scoped>
.header ~ .content { padding-top: 0.45rem}
.footer ~ .content { padding-bottom: 0.5rem}
</style>
