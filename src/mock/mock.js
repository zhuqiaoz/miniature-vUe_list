import Mock from 'mockjs'

const litem = Mock.mock('/api/Listitem',{
    'list': [
        { name : '结果输入' , path : 'input' , class : 'el-icon-edit' },
        { name : '化验项目' , path : 'pro'  , class : 'el-icon-date' },
        { name : '结果对比' , path : 'contrast' , class : 'el-icon-upload' },
        { name : '结果分析' , path : 'Analysis' , class : 'el-icon-setting' },
        { name : '历史项目' , path : 'history' , class : 'el-icon-warning' },
        { name : '相关知识' , path : 'knowledge' , class : 'el-icon-delete' },
    ]
})