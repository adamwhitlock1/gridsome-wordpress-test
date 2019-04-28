export default [
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/src/pages/About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "home",
    path: "/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "component--home" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/src/pages/Index.vue")
  },
  {
    name: "wordPressPostTag",
    path: "/tag/:slug/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "component--word-press-post-tag" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/src/templates/WordPressPostTag.vue")
  },
  {
    name: "wordPressPost",
    path: "/:year/:month/:day/:slug",
    component: () => import(/* webpackChunkName: "component--word-press-post" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/src/templates/WordPressPost.vue")
  },
  {
    name: "wordPressCategory",
    path: "/category/:slug/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "component--word-press-category" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/src/templates/WordPressCategory.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/adamwhitlock/Documents/GitHub/gridsome-wordpress-test/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

