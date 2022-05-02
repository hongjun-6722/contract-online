<template>
  <div id="completion">
    <div class="container">
      <div class="completion-main">
        <div class="company">
          <div class="company-title">
            <span>甲方</span>
          </div>
          <div class="company-item">
            <span class="label">公司名称</span>
            <span class="content">{{ firstCompany.companyName }}</span>
          </div>
          <div class="company-item">
            <span class="label">联系人</span>
            <span class="content">{{ firstCompany.contactName }}</span>
          </div>
          <div class="company-item">
            <span class="label">联系电话</span>
            <span class="content">{{ firstCompany.contactNumber }}</span>
          </div>
          <div class="company-item">
            <span class="label">联系地址</span>
            <span class="content">{{ firstCompany.contactAddress }}</span>
          </div>
        </div>
        <div class="company">
          <div class="company-title">
            <span>乙方</span>
          </div>
          <div class="company-main">
            <div class="company-item">
              <span class="label">公司名称</span>
              <span class="content">{{ secondCompany.companyName }}</span>
            </div>
            <div class="company-item">
              <span class="label">联系人</span>
              <span class="content">{{ secondCompany.contactName }}</span>
            </div>
            <div class="company-item">
              <span class="label">联系电话</span>
              <span class="content">{{ secondCompany.contactNumber }}</span>
            </div>
            <div class="company-item">
              <span class="label">联系地址</span>
              <span class="content">{{ secondCompany.contactAddress }}</span>
            </div>
          </div>
        </div>
        <div class="agreement-content">
          <div class="agreement-tilte">
            <span>协议内容</span>
          </div>
          <div class="agreement-main">
            <pre>{{ agreement }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstCompany: {
        companyName: "",
        contactName: "",
        contactNumber: "",
        contactAddress: "",
      },
      secondCompany: {
        companyName: "",
        contactName: "",
        contactNumber: "",
        contactAddress: "",
      },
      agreement: "",
    };
  },

  mounted() {
    this.$emit("finish", false);
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
#completion {
  .container {
    width: 60%;
    min-width: 800px;
  }
}
.completion-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .company {
    margin-bottom: 15px;
    text-align:left;
    .company-title {
      text-align: left;
      font: normal bold 16px/16px Avenir, sans-serif;
      margin-bottom: 15px;
    }
    .company-item {
      margin-bottom: 15px;
      font: normal 14px/16px Avenir, sans-serif;
      .label {
        vertical-align: top;
        display: inline-block;
        width: 60px;
        text-align: right;
      }
      .content {
        vertical-align: top;
        display: inline-block;
        margin-left: 20px;
        .span {
          .span__inner {
            width: 300px;
            height: 16px;
          }
        }
      }
    }
  }
  .agreement-content {
    font: normal 14px/16px Avenir, sans-serif;
    .agreement-tilte {
      text-align: left;
      margin-bottom: 20px;
    }
    .agreement-main {
      pre{
        font: normal 14px/16px Avenir,Helvetica sans-serif;
      }  
    }
  }
}
</style>