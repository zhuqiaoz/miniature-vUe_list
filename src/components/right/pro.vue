<template>
    <div class="input clearfix">
        <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
        <el-form :inline="true" :rules='rules' :model="formInline" class="demo-form-inline">
        <el-form-item label="添加化验项目:" prop="prop">
            <el-input v-model="formInline.prop" placeholder="添加化验项目"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
  import breadCrumb from '../Breadcrumb/bread'
  export default {
    data() {
      return {
        formInline: {
          prop: '',
        },
        rules:{
          prop:[
            {required: true, message: '请输入化验项目', trigger: 'blur'},
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      onSubmit() {
        this.$http.get('/api/Pro/getAccount')
                .then((response) => {
                    // 响应成功回调
                    //console.log(response)
                    let params = { 
                     pro : this.formInline.prop
                  };
                  console.log(params);
                    return this.$http.post('/api/Pro/createAccount',params);
                }).catch((reject) => {
                    console.log(reject)
                });
      }
    },
    components: {
      breadCrumb
    }
  }
</script>