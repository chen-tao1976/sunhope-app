<template>
    <div class="flex flex-col items-center">
        <router-link target="_blank" to="/task" >任务管理</router-link>
        <router-link target="_blank" to="/mail" >邮件管理</router-link>
        <router-link target="_blank" to="/case" >案卷管理</router-link>
        <router-link target="_blank" to="/hr" >人事管理</router-link>
        <router-link target="_blank" to="/system" >系统管理</router-link>
    </div>
</template>

<script setup>
const asideMenus = [{
    "name": "后台面板",
    "icon": "help",
    "child": [
        { "name": "主控台", "icon": "home-filled", "frontpath": "/" }
    ]
}, {
    "name": "商城管理",
    "icon": "shopping-bag",
    "child": [
        { "name": "商品管理", "icon": "home-filled", "frontpath": "/" }
    ]
}]
</script>

<style lang="scss" scoped>
a.router-link-exact-active {
  color:green;
}
</style>