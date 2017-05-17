import App from '../App.vue'

const index = r => require.ensure([], () => r(require('../components/index/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')
const left = r => require.ensure([], () => r(require('../components/common/left.vue')), 'left')
const input = r => require.ensure([], () => r(require('../components/right/input.vue')), 'right')
const Analysis = r => require.ensure([], () => r(require('../components/right/Analysis.vue')), 'Analysis')
const contrast = r => require.ensure([], () => r(require('../components/right/contrast.vue')), 'contrast')
const history = r => require.ensure([], () => r(require('../components/right/history.vue')), 'history')
const knowledge = r => require.ensure([], () => r(require('../components/right/knowledge.vue')), 'knowledge')
const pro = r => require.ensure([], () => r(require('../components/right/pro.vue')), 'pro')


export default[{
  path:'/',
  component:App,
  children:[
    { path : '' , redirect:'/home' },
    { path : '/home' , component:home },
    { path : '/index' , component:index , children : [
        { path : '/left' , component : left },
        { path : '/input' , component : input},
        { path : '/Analysis' , component : Analysis},
        { path : '/contrast' , component : contrast},
        { path : '/history' , component : history},
        { path : '/knowledge' , component : knowledge},
        { path : '/pro' , component : pro},
    ]},
    
  ]
}]