<template>
    <div class="min-h-screen flex items-center justify-center">
        <el-card class="flex justify-center w-[300px]">
            <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="w-[250px]" >
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入登录名">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>                    
                </el-form-item>
                <el-form-item prop="password">                    
                    <el-input v-model="loginForm.password" placeholder="请输入密码" show-password>
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>                       
                    </el-input>
                </el-form-item>                
                <el-form-item>
                    <el-button type="primary" class="w-[250px]" @click="handleLogin" :loading="loading">登 录</el-button>                
                </el-form-item>
            </el-form>
        </el-card>
    </div>  
</template>

<script setup>
    import {ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/user'
    const router = useRouter()

    // do not use same name with ref
    const loginForm = reactive({username:'admin',password:'admin' })
    const loginFormRef = ref(null)
    const loading = ref(false)

    const rules = {
        username:[
            { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password:[
            { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
    }
   
    const userStore = useUserStore()
    const handleLogin = () => {
        loginFormRef.value.validate((valid)=>{
            if(!valid){
                return false
            }
            loading.value = true
            userStore.login(loginForm).then(()=>{           
                router.push("/")
            }).finally(()=>{
                loading.value = false           
            })            
        })       
    }
    //enter login

</script>

