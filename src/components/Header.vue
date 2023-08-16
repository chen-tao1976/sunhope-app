<template>
    <div class="bg-indigo-500 text-light-50 flex items-center h-full pl-2 pr-2" >
        <div class="flex-1">
            <span>{{ title }}</span>
        </div>
        <div>
            <el-avatar :size="25" :src="userStore.userInfo.avatar" />
            <span>{{ userStore.userInfo.username }}</span>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
defineProps({
    title: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped></style>