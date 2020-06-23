import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/about-us.vue";
import News from "../views/news.vue";
import Business from "../views/business.vue";
import Platform from "../views/platform.vue";
import Enterprise from "../views/enterprise.vue";
import ContactUs from "../views/contact-us.vue";
import Detail from "../views/detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: Home
  },
  {
    path: "/about-us",
    name: "关于我们",
    component: AboutUs
  },
  {
    path: "/news",
    name: "新闻资讯",
    component: News
  },
  {
    path: "/detail",
    name: "详情",
    component: Detail
  },
  {
    path: "/business",
    name: "业务范围",
    component: Business
  },
  {
    path: "/platform",
    name: "平台优势",
    component: Platform
  },
  {
    path: "/enterprise",
    name: "企业社会责任",
    component: Enterprise
  },
  {
    path: "/contact-us",
    name: "联系我们",
    component: ContactUs
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
