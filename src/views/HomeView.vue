<template>
  <el-container class="min-h-screen flex">
    <el-header class="bg-indigo-500 text-light-50 flex items-center">
      <el-avatar :size="25" :src="userStore.userInfo.avatar" />
      <span>{{ userStore.userInfo.username }}</span> 
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Menu" name="first">
          <MenusTab></MenusTab>
        </el-tab-pane>       
        <el-tab-pane label="User" name="second">
          <UsersTab></UsersTab>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer class="border-1 border-t-dark-100">Footer</el-footer>
  </el-container>
</template>

<script setup>
  import { useUserStore } from '@/stores/user'
  import MenusTab from '@/components/MenusTab.vue'
  import UsersTab from '@/components/UsersTab.vue'
  import { ref } from 'vue'

  const userStore = useUserStore()
  const activeName = ref('first')

  const handleClick = (tab, event) => {
    console.log(tab, event)
  }

</script>
