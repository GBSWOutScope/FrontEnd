import store from "@/store";
import { createWebHistory, createRouter } from "vue-router";



const routes = [
    {
        path: "/",
        name: "main",
        component: () => import("../views/Main.vue"),
        beforeEnter: (to, from, next) => {
            const isLogin = store.getters['loginStore/isLogin'];
            if(!isLogin) {
                next('/login?returnUrl=' + to.fullPath);
            } else {
                next();
            }
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/nav",
        name: "nav",
        component: () => import("../components/Nav.vue"),
    },
    {
        path: '/score',
        name: 'Score',
        component: () => import('../views/Score.vue')
      },
      
]; 



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.path == "/") {
        const isLogin = store.getters['loginStore/isLogin'];
        if(!isLogin) {
            next('/login?returnUrl=' + to.fullPath);
        } else {
            next();
        } 
    } else {
        next();
    }
});
export default router;
