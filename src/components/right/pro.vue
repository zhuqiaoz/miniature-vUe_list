<template>
    <div class="input clearfix">
        <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
        <el-form :inline="true" :rules='rules' ref="formInline" :model="formInline" class="demo-form-inline">
          <el-form-item label="添加化验项目:" prop="prop">
              <el-input v-model="formInline.prop" placeholder="添加化验项目"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('formInline')">提交</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
  import breadCrumb from '../Breadcrumb/bread'
  import axios from 'axios'
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
 submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            	  axios.get('/api/Pro/getAccount')
                .then((response) => {
                    let params = { 
                     pro : this.formInline.prop
                  };
                   axios.post('/api/Pro/createAccount',params);
                   this.$message({
                            message: '数据插入成功',
                            duration :1000,
                            type: 'success'
                          });
                   this.formInline.prop='';
                }).catch((reject) => {
                    console.log(reject)
                });
          } else {
            this.$message({
              message: '错误,数据错误',
              duration :0,
              showClose : true,
              type:'error',
            })
            return false;
          }
        });
      },
    },
    components: {
      breadCrumb
    },
    
  }
</script>