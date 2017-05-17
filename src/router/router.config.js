import App from '../App.vue'

const index = r => require.ensure([], () => r(require('../components/index/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')

export default[{
  path:'/',
  component:App,
  children:[
    { path:'', redirect:'/home' },
    { path:'/index',component:index },
    { path:'/home',component:home}
  ]
}]