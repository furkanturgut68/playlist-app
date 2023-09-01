import { createRouter,createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import SignupView from '@/views/auth/SignupView.vue'
import CreatePlayList from '@/views/playlist/CreatePlayList.vue';

const routes = [
    {path:'/',component:HomeView,name:'HomeView'},
    {path:'/login',component:LoginView,name:'LoginView'},
    {path:'/register',component:SignupView,name:'SignupView'},
    {path:'/playList/create',component:CreatePlayList,name:'CreatePlayList'}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;