import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login/Login"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/home/Home"),
  },
];

const router = new VueRouter({
  routes,
});

//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 表示从哪个路径跳转而来
  //next 是一个函数，表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === "/login") return next();
  // 获取token
  const tokenStr = window.localStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
