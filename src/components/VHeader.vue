<template>
  <div class="head">
    <!-- <div class="logo"></div> -->
    <div class="head-nav">
      <router-link
        class="nav-item"
        :class="{ selected: ifSelected == 0 }"
        to="/"
        >首页</router-link
      >
      <router-link
        class="nav-item"
        to="/about-us"
        :class="{ selected: ifSelected == 1 }"
        >关于我们</router-link
      >
      <router-link
        class="nav-item"
        :class="{ selected: ifSelected == 2 }"
        to="/news"
        >新闻资讯</router-link
      >
      <router-link
        class="nav-item"
        :class="{ selected: ifSelected == 3 }"
        to="/business"
        >业务范围</router-link
      >
      <router-link
        class="nav-item"
        :class="{ selected: ifSelected == 4 }"
        to="/platform"
        >平台优势</router-link
      >
      <router-link
        class="nav-item"
        :class="{ selected: ifSelected == 5 }"
        to="/enterprise"
        >企业社会责任</router-link
      >
      <router-link
        class="nav-item"
        :class="{ selected: ifSelected == 6 }"
        to="/contact-us"
        >联系我们</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "VHeader",
  data() {
    return {
      ifSelected: 0
    };
  },
  methods: {},
  watch: {
    $route(n) {
      if (n.name == "home") {
        this.ifSelected = 0;
      } else if (n.name == "about-us") {
        this.ifSelected = 1;
      } else if (n.name == "news") {
        this.ifSelected = 2;
      } else if (n.name == "business") {
        this.ifSelected = 3;
      } else if (n.name == "platform") {
        this.ifSelected = 4;
      } else if (n.name == "enterprise") {
        this.ifSelected = 5;
      } else if (n.name == "contact-us") {
        this.ifSelected = 6;
      }
    }
  }
};
</script>
<style lang="less">
.head {
  // display: flex;
  width: 100%;
  height: 57px;
  background: #242c39;
  box-sizing: border-box;
  margin: 0 auto;
  line-height: 57px;
  font-size: 18px;
  position: relative;
}
.head-nav {
  // position: fixed;
  height: 100%;
  float: left;
  margin-left: 350px;
  position: absolute;
  top: 720px;
  a {
    display: block;
    width: 140px;
    height: 100%;
    float: left;
    color: white;
  }
  .nav-item {
    // display: block;
    // padding-left: 30px;
    // padding-right: 30px;
    // color: white;
    &.selected {
      background-color: #c61c25;
    }
  }
}
</style>
