<template>
    <!-- 自定义的右键菜单 -->
    <ul v-show="menus.contextMenuVisible" :style="{ top: menus.contextMenuTop, left: menus.contextMenuLeft }" class="context-menu">
        <li v-for="(menu,id) in menus.menuItme" :key="id" @click="handleOptionClick(menu)">{{ menu.title }}</li>
    </ul>
</template>

<script>
    export default {
        name:'RightMenu',
        data() {
            return {
                
            }
        },
        props:['menus'],
    }
</script>

<style scoped>
    .ul {
        position: fixed;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 200px;
        z-index: 9999;
    }
</style>