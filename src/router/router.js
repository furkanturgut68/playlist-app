import { createRouter,createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import SignupView from '@/views/auth/SignupView.vue'
import CreatePlayList from '@/views/playlist/CreatePlayList.vue';
import { getAuth } from "firebase/auth";

const controlGuard = (to,from,next) =>{
    let auth = getAuth().currentUser;
    console.log(auth);
    if(!auth){
        next('/login')
    }else {
        next()
    }
}

const routes = [
    {path:'/',component:HomeView,name:'HomeView'},
    {path:'/login',component:LoginView,name:'LoginView'},
    {path:'/register',component:SignupView,name:'SignupView'},
    {path:'/playList/create',component:CreatePlayList,name:'CreatePlayList',beforeEnter:controlGuard}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;