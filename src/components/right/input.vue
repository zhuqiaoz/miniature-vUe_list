<template>
    <div class="input clearfix">
        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="right">
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
        <el-form-item label="检查项目" prop="region" style="display: inline-block;" >
            <el-select v-model="ruleForm.region" placeholder="检查项目">
            <el-option label="TSH" value="TSH"></el-option>
            <el-option label="FT3" value="FT3"></el-option>
            <el-option label="FT4" value="FT3"></el-option>
            <el-option label="TT3" value="TT3"></el-option>
            <el-option label="TT4" value="TT4"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="结果" prop="user" style="display: inline-block;" >
            <el-input v-model="ruleForm.user" placeholder="结果"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button type="info" icon="edit"  @click="addprop">新增项目和结果</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<style scoped>
    .input{
        float: left;
    }
</style>
<script>
export default {
    data() {
      return {
        ruleForm: {
            prop:'',
            name: '',
            date1: '',
            date2: '',
            type: [],  
            user:'',
            region:'',
        },
        propitem:{
            user:'',
            region:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入医院名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择检查项目', trigger: 'change' }
          ],
          user:[
              { required : true, message:'请输入结果'},
              { required : true, message:'请输入数字',type:'number'}
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
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      addprop(){
          
      }
    }
  }
</script>