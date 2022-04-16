import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Rules from "./components/Rules.vue";
import Punishments from "./components/Punishments.vue";

// lazy-loaded
const Profile = () => import("./components/Profile.vue")

const BoardAdmin = () => import("./components/Board/BoardAdmin.vue")
const BoardModerator = () => import("./components/Board/BoardModerator.vue")
const BoardUser = () => import("./components/Board/BoardUser.vue")

const routes = [
    {
        path: "/",
        name: "Inicio",
        component: Home,
    },
    {
        path: "/rules",
        name: "Reglas",
        component:  Rules,
    },
    {
        path: "/punishments",
        component:  Punishments,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
    },
    {
        path: "/mod",
        name: "moderator",
        // lazy-loaded
        component: BoardModerator,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home', '/rules', '/punishments'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) { next('/login'); } 
    else { next(); }
});

export default router;