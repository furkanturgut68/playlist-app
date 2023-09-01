import { createRouter,createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import SignupView from '@/views/auth/SignupView.vue'


const routes = [
    {path:'/',component:HomeView,name:'HomeView'},
    {path:'/login',component:LoginView,name:'LoginView'},
    {path:'/register',component:SignupView,name:'SignupView'}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;