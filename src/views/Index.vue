<template>
  <div id="sign">
    <div class="container">
      <div class="sign-tilte">
        <p>网上签约</p>
      </div>
      <div class="sign-main">
        <div class="breadcrumb">
          <el-breadcrumb separator="> ">
            <el-breadcrumb-item>发起签约</el-breadcrumb-item>
            <el-breadcrumb-item>签约确认</el-breadcrumb-item>
            <el-breadcrumb-item>双方签字完成</el-breadcrumb-item>
            <el-breadcrumb-item>完成</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="sign-button" v-show="this.finishstats">
          <el-button size="small" @click="submit" type="button"
            >下一步</el-button
          >
          <el-button size="medium" @click="goback">返回</el-button>
        </div>
      </div>
    </div>
    <router-view
      :submitstats="submitstats"
      :gobackstats="gobackstats"
      @finish="finishcallback"
    ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitstats: 1, //下一步 按钮改变
      gobackstats: 1, //返回 按钮改变
      finishstats: true, //协议完成标志
    };
  },

  components: {},

  computed: {},

  methods: {
    submit() {
      this.submitstats = -this.submitstats;
    }, //下一步
    goback() {
      this.gobackstats = -this.gobackstats;
    }, //返回
    finishcallback(e) {
      this.finishstats = e;
    }, //协议完成
  },
};
</script>
<style lang='less'>
#sign {
  .container {
    width: 70%;
    min-width: 800px;
    margin: auto;
  }
}
.sign-tilte {
  text-align: center;
  font: normal bold 16px/16px Avenir, sans-serif;
}
.sign-main {
  height: 30px;
  .breadcrumb {
    float: left;
    margin-left: 5%;
    .el-breadcrumb__item {
      &:last-child {
        .el-breadcrumb__separator {
          display: none;
        }
      }
    }
  }
  .sign-button {
    float: right;
    margin-right: 15%;
    .el-button {
      border-radius: 5px;
      padding: 2px 8px;
      border: 1px solid gray;
      background: #fff;
      margin-right: 10px;
      width: 60px;
      cursor: pointer;
    }
  }
}
</style>