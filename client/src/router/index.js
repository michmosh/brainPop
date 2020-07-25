import Vue from "vue";
import VueRouter from "vue-router";
import List from "../components/List/List.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/list"
    },
    {
        path: "/list",
        // name: 'list',
        component: List,
        children: [
            {
                path: ":id",
                component: () => import(/* webpackChunkName: "dialog" */ "../components/modal/Modal.vue")
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
