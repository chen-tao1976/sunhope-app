<template>
    <el-container class="min-h-screen flex">
        <el-header style="padding: 0;">
           <Header title="系统管理"></Header>
        </el-header>
        <el-container>
            <el-aside width="200px" class="pt-5">
                <el-input v-model="filterText" placeholder="Filter keyword" />
                <el-tree ref="treeRef" class="filter-tree" :data="treeData" :props="defaultProps" default-expand-all
                    :filter-node-method="filterNode" />
            </el-aside>
            <el-main>
                <el-button type="primary">
                    <el-icon >
                        <Upload />
                    </el-icon>
                    新建
                </el-button>
                <el-button type="success">
                    <el-icon >
                        <Edit  />
                    </el-icon>
                    修改
                </el-button>
                <el-button type="warning">
                    <el-icon >
                        <Delete  />
                    </el-icon>
                    删除
                </el-button>

                <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all class="mt-3">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="name" label="菜单名称" />
                    <el-table-column prop="icon" label="图标" />
                    <el-table-column prop="sort" label="排序" sortable />
                    <el-table-column prop="permisson" label="权限标识" />
                    <el-table-column prop="path" label="组件路径" />
                    <el-table-column prop="status" label="状态" />
                    <el-table-column prop="data" label="创建时间" sortable />
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import Header from '@/components/Header.vue'

const filterText = ref('')
const treeRef = ref()
const defaultProps = {
    children: 'children',
    label: 'label',
}
const treeData = [
    {
        id: 1,
        label: '专利部角色',
        children: [
            {
                id: 11,
                label: '主管',

            },
            {
                id: 12,
                label: '组长',

            },
            {
                id: 13,
                label: '组员',

            },
        ],
    },
    {
        id: 2,
        label: '管理部角色',
        children: [
            {
                id: 21,
                label: '主管',
            },
            {
                id: 22,
                label: '组长',
            },
            {
                id: 23,
                label: '组员',

            },
        ],
    }
]
const tableData = [
  {
    id: 1,
    name: '任务管理',
    icon: '',
    sort: '1',
    permisson: 'system:task:list',
    path: 'task',
    status: '1',
    data: '2016-05-02',
    children:[
        { 
            id: 11,
            name: '任务增加',
            icon: '',
            sort: '1',
            permisson: 'system:task:add',
            path: '',
            status: '1',
            data: '2016-05-02',
        },
        { 
            id: 12,
            name: '任务修改',
            icon: '',
            sort: '2',
            permisson: 'system:task:edit',
            path: '',
            status: '1',
            data: '2016-05-02',
        },
        { 
            id: 13,
            name: '任务删除',
            icon: '',
            sort: '3',
            permisson: 'system:task:del',
            path: '',
            status: '1',
            data: '2016-05-02',
        },
       
    ],
  },
  {
    id: 2,
    name: '邮件管理',
    icon: '',
    sort: '2',
    permisson: '1',
    path: 'mail',
    status: '1',
    data: '2016-05-02',
  },
  {
    id: 3,
    name: '案卷管理',
    icon: '',
    sort: '3',
    permisson: '1',
    path: 'case',
    status: '1',
    data: '2016-05-02',
  },

]

</script>

<style lang="scss" scoped></style>