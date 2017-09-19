<template>
    <div class="header">
        <ul>
            <li class="header-btn">
                <slot name="left"></slot>
            </li>
            <li class="header-tit">{{tit}}</li>
            <li class="header-btn" :style="rightStyle">
                <slot name="right"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'header',
    props: {
        tit: {
            type: String,
            default: "注册"
        },
        rightStyle: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.45rem;
    border-bottom: 1px solid #ccc;
    line-height: 0.44rem;
    text-align: center;
    background: #fff;
    font-size: 0.2rem;
}

.header ul {
    display: flex
}

.header-btn {
    width: 0.4rem;
}

.header-tit {
    flex: 1;
    font-size: 0.2rem;
}
</style>