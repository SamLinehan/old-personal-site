'use strict'

const About = { template: '<div>About</div>' }
const Portfolio = { template: '<div>Portfolio</div>' }
const Contact = { template: '<div>Contact</div>'}

const routes = [
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router,
  data: {
      header: 'SAM LINEHAN'
  }
}).$mount('#app')