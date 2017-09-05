'use strict'


const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Portfolio = { template: '<div>Portfolio</div>' }
const Contact = { template: '<div>Contact</div>'}

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact},
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
  router
}).$mount('#app')