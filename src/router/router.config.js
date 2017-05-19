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
        { path : '/input' , component : input,meta: ['结果输入']},
        { path : '/Analysis' , component : Analysis,meta: ['结果分析']},
        { path : '/contrast' , component : contrast,meta:['结果对比']},
        { path : '/history' , component : history,meta:['历史项目']},
        { path : '/knowledge' , component : knowledge,meta:['相关知识']},
        { path : '/pro' , component : pro,meta:['化验项目']},
    ]},
    
  ]
}]