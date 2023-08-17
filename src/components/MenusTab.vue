<template>
    <div class="f-menu bg-light-50">
        <el-menu :default-active="defaultActiv" class="border-0" @select="handleMuSelect">
            <template v-for="(item, index) in asideMenus" :key="index">

                <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item v-for="(item2, index2) in item.child" :key="index2" :index="item2.frontpath">
                        <el-icon>
                            <component :is="item2.icon"></component>
                        </el-icon>
                        <span>{{ item2.name }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item v-else :index="item.frontpath">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>


        </el-menu>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref,computed } from 'vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()


const defaultActiv = ref(route.path)

const asideMenus = computed(() => userStore.menus)

const handleMuSelect = (e) => {
    const href = router.resolve({ path: e })
    window.open(href.href, '_blank')
}
</script>

<style >
.f-menu {
    overflow: auto;

}
</style>