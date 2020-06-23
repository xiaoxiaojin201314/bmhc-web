<template>
  <div class="contact-us">
    <div class="content">
      <div class="logo"></div>
    </div>
    <div class="head">
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
    <div class="head1" :class="[isFixed ? 'fixed' : '']">
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
    <div class="bgurl">
      <img src="../assets/49.jpg" alt="" />
    </div>
    <div class="content-wrapper">
      <div class="content">
        <p class="title">深圳总部</p>
        <p class="company-info">
          办公地址: &nbsp;&nbsp;深圳市南山区新光路聚创金谷B栋5楼
        </p>
        <p class="title">巴马</p>
        <p class="company-info">
          办公地址:
          &nbsp;&nbsp;广西壮族自治区河池市巴马瑶族自治县巴马镇文体路133号
        </p>
        <p class="title">桂林</p>
        <p class="company-info">
          办公地址: &nbsp;&nbsp;桂林市七星区朝阳乡信息产业园D-04号地块1栋厂房
        </p>
        <p class="company-info">
          联系邮箱: &nbsp;&nbsp;jnswb@jinnuosz.com
        </p>
      </div>
      <div class="xian">
        <img src="../assets/50.jpg" alt="" />
      </div>
    </div>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VFooter from "../components/VFooter.vue";
export default {
  data() {
    return {
      ifSelected: 6,
      isFixed: false
    };
  },
  components: {
    VFooter
  },
  mounted() {
    this.offsetTop = document.querySelector(".head").offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      //   let scrollTop =
      //     window.pageYOffset ||
      //     document.documentElement.scrollTop ||
      //     document.body.scrollTop;
      //   let offsetTop = document.querySelector("#head1").offsetTop;
      // scrollTop > offsetTop ? this.isShow = true : this.isShow = false
      this.isFixed = scrollTop >= this.offsetTop;
    }
  }
  // watch: {
  //   $route(n) {
  //     if (n.name == "home") {
  //       this.ifSelected = 0;
  //     } else if (n.name == "about-us") {
  //       this.ifSelected = 1;
  //     } else if (n.name == "news") {
  //       this.ifSelected = 2;
  //     } else if (n.name == "business") {
  //       this.ifSelected = 3;
  //     } else if (n.name == "platform") {
  //       this.ifSelected = 4;
  //     } else if (n.name == "enterprise") {
  //       this.ifSelected = 5;
  //     } else if (n.name == "contact-us") {
  //       this.ifSelected = 6;
  //     }
  //   }
  // }
};
</script>

<style lang="less" scoped>
.contact-us {
  .content {
    width: 100%;
    height: 124px;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .logo {
    width: 217px;
    height: 77px;
    float: left;
    margin-left: 300px;
    margin-top: 20px;
    background-image: url("../assets/logo.jpg");
    background-size: 217px 77px;
  }
  .head {
    display: flex;
    width: 100%;
    height: 57px;
    background: #242c39;
    box-sizing: border-box;
    margin: 0 auto;
    line-height: 50px;
    font-size: 18px;
  }
  .head1 {
    z-index: 99999;
    width: 100%;
    height: 57px;
    background: #242c39;
    box-sizing: border-box;
    margin: 0 auto;
    line-height: 50px;
    font-size: 18px;
    // float: left;
    position: absolute;
    top: 124px;
    &.fixed {
      position: fixed;
      top: 0;
    }
  }
  .head-nav {
    // position: fixed;
    // top: 124px;
    // width: 1000px;
    height: 100%;
    // margin: 0 auto;
    float: left;
    margin-left: 350px;
    background-color: #242c39;
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
  .bgurl {
    width: 100%;
    height: 220px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .content-wrapper {
    display: flex;
    width: 1000px;
    height: 350px;
    padding-top: 100px;
    text-align: left;
    margin: auto;
    justify-content: space-between;
    .content {
      margin: 0 auto;
      box-sizing: border-box;
      font-size: 16px;
      color: #333;
      background: #fff;
      p {
        margin-bottom: 18px;
        &:last-child {
          margin-top: 60px;
          font-size: 18px;
          color: #0d6fad;
          font-weight: 700;
        }
      }
      .title {
        font-weight: 700;
        color: #0d6fad;
      }
      .company-info {
        margin-left: 20px;
      }
    }
    .xian {
      // display: block;
      width: 386px;
      height: 246px;
      img {
        display: block;
        width: 386px;
        height: 246px;
      }
    }
    .title:before {
      width: 10px;
      height: 10px;
      margin-right: 5px;
      background: #0d6fad;
      border-radius: 50%;
      content: "";
      display: inline-block;
    }
  }
}
</style>
