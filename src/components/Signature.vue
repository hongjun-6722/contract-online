<template>
  <div id="signature">
    <div class="container">
      <div class="title">
        <span>手写签字</span>
      </div>
      <div class="main">
        <vue-esign
          style="border: 2px solid #000"
          ref="esign"
          :width="700"
          :height="300"
          :isCrop="isCrop"
          :lineWidth="lineWidth"
          :lineColor="lineColor"
          :bgColor.sync="bgColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineWidth: 6,
      lineColor: "#000000",
      bgColor: "",
      resultImg: "",
      isCrop: false,
      nextpage:false,
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
    async submitstats() {
      await this.handleGenerate();
      if(this.nextpage == true){
        this.$emit("finish", false);
        this.$router.push({ name: "completion" });
      }
    },
    gobackstats() {
      this.handleReset();
      this.$router.push({ name: "information" });
    },
  },

  computed: {},

  methods: {
    // 清空画板
    handleReset() {
      this.$refs.esign.reset();
    },
    // 生成图片
     handleGenerate() {
       this.$refs.esign
        .generate()
        .then((res) => {
          this.resultImg = res;
          this.$store.commit("GeneratePng", res);
          console.log(res);
          this.nextpage = true;
        })
        .catch((err) => {
          this.nextpage = false;
          alert("未签名");
        });
    },
  },

  mounted() {
    this.$emit("finish", true);
  },
};
</script>
<style lang='less'>
#signature {
  font: normal 14px/16px Avenir,Helvetica sans-serif;
  .container {
    width: 70%;
    min-width: 800px;
    .title {
      width: 700px;
      height: 30px;
      margin: auto;
      margin-top: 30px;
      span {
        float: left;
      }
    }
    .main {
      canvas {
        margin: auto;
      }
    }
  }
}
</style>