<template>
    <div class="input clearfix">
        <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
        <el-form :model="ruleForm "  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="right">
            <el-form-item label="医院名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="检查的时间" required>
                <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
                </el-col>
            </el-form-item>

            <div v-for="(domain, index) in ruleForm.domains" :key="domain.key">
                <el-form-item label="检查项目" :prop="'domains.' + index + '.prop'" style="display:inline-block" :rules="{required: true, message: '检查项目不能为空', trigger: 'change'}">
                    <el-select v-model="domain.prop" placeholder="检查项目">
                        <el-option label="TSH" value="TSH"></el-option>
                        <el-option label="FT3" value="FT3"></el-option>
                        <el-option label="FT4" value="FT4"></el-option>
                        <el-option label="TT3" value="TT3"></el-option>
                        <el-option label="TT4" value="TT4"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="结果" :prop="'domains.' + index + '.value'" style="display:inline-block" :rules="[{ required: true, message: '结果不能为空', trigger: 'blur' }]">
                    <el-input v-model="domain.value"></el-input>
                </el-form-item>
            </div>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button type="info" icon="edit"  @click="addprop">新增项目和结果</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style>
    .input{
        float: left;
        width: 100%;
        height: 100%;
        padding-left: 40px;
    }
</style>
<style scoped>
.el-col-2{
    text-align: center;
}
</style>

<script>
    import breadCrumb from '../Breadcrumb/bread'
export default {
    data() {
      return {
        ruleForm: {
            value:'',
            name: '',
            date1: '',
            date2: '',
            domains:[
                {prop:'',value:''}
            ],
            
        },
        
        rules: {
          name: [
            { required: true, message: '请输入医院名称', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.$refs[formName].model)
            this.$http.get('/api/login/getAccount')
                .then((response) => {
                    // 响应成功回调
                    console.log(response)
                    let params = { 
                    account : this.account,
                    password : this.password
                    };
                    // 创建一个账号密码
                    return this.$http.post('/api/login/createAccount',params);
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((reject) => {
                    console.log(reject)
                });
          } else {
            console.log(this.$refs[formName].model)
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
          console.log(this.$refs[formName].model)
        this.$refs[formName].resetFields();
      },
      addprop(){
        this.ruleForm.domains.push({value:'',prop:'',key: Date.now()})

        console.log(this.ruleForm.domains)
      }
    },
    components: {
        breadCrumb
    }
  }
</script>