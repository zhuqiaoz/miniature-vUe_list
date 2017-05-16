import App from '../App.vue'

const head = r => require.ensure([], () => r(require('../components/common/head.vue')), 'head')
const home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')

export default[{
  path:'/',
  component:App,
  children:[
    { path:'', redirect:'/home' },
    { path:'/head',component:head },
    { path:'/home',component:home}
  ]
}]