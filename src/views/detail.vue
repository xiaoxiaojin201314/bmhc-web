<template>
  <div class="detail">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="" />
    </div>
    <div id="item" v-html="content"></div>
    <!-- <div id="item"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    var val = window.localStorage.getItem("data");
    console.log(val);
    // console.log(JSON.stringify(val));
    this.content = val;
    // var obj = JSON.parse(val);
    // console.log(obj.CONTENT);
    // document.getElementById("item").innerHTML = obj.CONTENT;
  },
  methods: {
    // val(str) {
    //   str = str.replace(/\\/g, "%");
    //   //转换中文
    //   str = unescape(str);
    //   //将其他受影响的转换回原来
    //   str = str.replace(/%/g, "\\");
    //   //对网址的链接进行处理
    //   str = str.replace(/\\n/g, "");
    //   str = str.replace(/\\t/g, "");
    //   str = str.replace(/\\/g, "");
    //   return str;
    // }
  }
};
</script>

<style lang="less" scoped>
.detail {
  background-color: #f6f6f6;
  .logo {
    width: 100%;
    height: 124px;
    margin-bottom: 20px;
    background-color: white;
    img {
      display: block;
      width: 217px;
      height: 77px;
      padding-top: 25px;
      margin-left: 300px;
    }
  }
  #item {
    width: 1000px;
    // background-color: aqua;
    margin: 0 auto;
    text-align: left;
    padding-top: 30px;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>
