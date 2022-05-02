<template>
  <div id="info">
    <div class="container">
      <div class="info-main">
        <div class="company">
          <div class="company-title">
            <span>甲方</span>
          </div>
          <el-form :rules="rules" :model="firstCompany" ref="firstCompany">
            <el-form-item label="公司名称" prop="companyName">
              <el-input v-model="firstCompany.companyName"></el-input>
            </el-form-item>

            <el-form-item label="联系人" prop="contactName">
              <el-input v-model="firstCompany.contactName"></el-input>
            </el-form-item>

            <el-form-item label="联系电话" prop="contactNumber">
              <el-input v-model="firstCompany.contactNumber"></el-input>
            </el-form-item>

            <el-form-item label="联系地址" prop="contactAddress">
              <el-input v-model="firstCompany.contactAddress"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="company">
          <div class="company-title">
            <span>乙方</span>
          </div>
          <el-form :rules="rules" :model="secondCompany" ref="secondCompany">
            <el-form-item label="公司名称" prop="companyName">
              <el-input v-model="secondCompany.companyName"></el-input>
            </el-form-item>

            <el-form-item label="联系人" prop="contactName">
              <el-input v-model="secondCompany.contactName"></el-input>
            </el-form-item>

            <el-form-item label="联系电话" prop="contactNumber">
              <el-input v-model="secondCompany.contactNumber"></el-input>
            </el-form-item>

            <el-form-item label="联系地址" prop="contactAddress">
              <el-input v-model="secondCompany.contactAddress"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="agreement-content">
          <div class="agreement-tilte">
            <span>协议内容</span>
          </div>
          <div class="agreement-main">
            <textarea v-model="agreement"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkInfo = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入"));
      } else {
        callback();
      }
    };
    return {
      firstCompany: {
        companyName: "",
        contactName: "测试数据",
        contactNumber: "测试数据",
        contactAddress: "测试数据",
      },
      secondCompany: {
        companyName: "测试数据",
        contactName: "测试数据",
        contactNumber: "测试数据",
        contactAddress: "测试数据",
      },
      agreement: "1：测试数据",
      rules: {
        companyName: [{ validator: checkInfo, trigger: "blur" }],
        contactName: [{ validator: checkInfo, trigger: "blur" }],
        contactNumber: [{ validator: checkInfo, trigger: "blur" }],
        contactAddress: [{ validator: checkInfo, trigger: "blur" }],
      },
    };
  },

  props: {
    submitstats: {
      type: Number,
      default: 0,
    },
    gobackstats: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    submitstats() {
      if(this.submitForm("firstCompany") & this.submitForm("secondCompany")){
        this.nextpage();
      } else {
        alert("验证未通过")
      }     
    },
    goback() {},
  },

  components: {},

  computed: {},

  methods: {
    submitForm(formName) {
      let passstate
      this.$refs[formName].validate((valid) => {
        if (valid) {
          passstate = true;
        } else {
          passstate = false;
        }
      });
      return passstate
    }, //验证字段
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }, //重置
    nextpage() {
      var data = {};
      data.firstCompany = this.firstCompany;
      data.secondCompany = this.secondCompany;
      data.agreement = this.agreement;
      this.$store.commit("submit", data);
      this.$router.push({ name: "signature" });
    },
  },

  mounted() {
    this.$emit("finish", true);
    let signData = this.$store.state.signData;
    if (signData) {
      if (signData.firstCompany) {
        this.firstCompany = signData.firstCompany;
      }
      if (signData.secondCompany) {
        this.secondCompany = signData.secondCompany;
      }
      if (signData.agreement) {
        this.agreement = signData.agreement;
      }
    }
  },
};
</script>
<style lang='less'>
#info {
  .container {
    width: 60%;
    min-width: 800px;
  }
}
.info-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .company {
    margin-bottom: 15px;
    .company-title {
      text-align: left;
      font: normal bold 16px/16px Avenir, sans-serif;
      margin-bottom: 15px;
    }
    .el-form-item {
      margin-bottom: 15px;
      font: normal 14px/16px Avenir, sans-serif;
      .el-form-item__label {
        vertical-align: top;
        display: inline-block;
        width: 60px;
        text-align: left;
      }
      .el-form-item__content {
        vertical-align: top;
        display: inline-block;
        margin-left: 20px;
        .el-input {
          .el-input__inner {
            width: 300px;
            height: 16px;
          }
        }
        .el-form-item__error {
          color: red;
          float: left;
        }
      }
    }
  }
  .agreement-content {
    .agreement-tilte {
      text-align: left;
      font: normal 14px/16px Avenir, sans-serif;
    }
    .agreement-main {
      textarea {
        font: normal 14px/16px Avenir,Helvetica sans-serif;
        width: 800px;
        height: 200px;
      }
    }
  }
}
</style>