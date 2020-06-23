<template>
  <div class="home">
    <div class="banner">
      <el-carousel height="890px">
        <el-carousel-item v-for="(img, index) in img_list" :key="index">
          <img :src="img.url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <VHeader></VHeader> -->
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
    <div class="content">
      <h1>企业简介</h1>
      <h6>CORPORATE CULTURE</h6>
      <p>
        巴马华创科技有限公司（简称：巴马华创）在“世界长寿之乡·中国人瑞圣地”——广西巴马注册成立。在当地政府扶持领导下，合规稳健发展。
        <br />巴马华创注册资金2000万，在深圳市、桂林市和巴马县拥有3家运营中心，
        其中深圳运营中心（深圳市金诺投资发展有限公司）为巴马华创99%控股的子公司。于2015年开始成立运营，至今已处理超过百亿的不良资产，服务区域已覆盖全国近100个城市。
        <br />巴马华创的业务范围主要包括金融服务外包，为银行及非银行金融机构信用卡违约及消费金融不良贷款提供解决方案；承担银行及非银金融机构贷款客户的征信调查、资产管理、客户关系管理。同时，为企业应收帐款提供解决方案，并为企业提供信用报告及法律服务。
        <br />成立以来借鉴国际先进服务理念，依托创新科学技术，基于人工智能服务，进行精准数字化营销；以“厚德载物创品牌
        诚信经营得天下”的品牌理念，始终坚持科学发展、稳健经营、规范运作，不断打造和提升企业风险管控和信息管理技术，打造最值得信赖、客户首选的金融风险管理品牌。
      </p>
      <a href=""><b @click="goTo('corporate')">查看更多>></b></a>
    </div>
    <div class="culture">
      <h1>巴马文化</h1>
      <h6>BAMA CULTURE</h6>
      <div class="flex-container">
        <div class="flex-item">
          <img src="../assets/1.png" alt />
          <span>企业使命</span>
          <p>让社会信用体系更和谐</p>
        </div>
        <div class="flex-item">
          <img src="../assets/2.png" alt />
          <span>企业精神</span>
          <p>团结进取，求实创新</p>
        </div>
        <div class="flex-item">
          <img src="../assets/3.png" alt />
          <span>企业愿景</span>
          <p>让客户在服务体验中感受温暖</p>
        </div>
        <div class="flex-item">
          <img src="../assets/4.png" alt />
          <span>企业价值观</span>
          <p>言必诚信，行必忠正，行稳必远</p>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item">
          <img src="../assets/5.png" alt />
          <span>企业经营理念</span>
          <p>化解金融风险、提升资产价值、构建多元化的综合服务</p>
        </div>
        <div class="flex-item">
          <img src="../assets/6.png" alt />
          <span>企业品牌理念</span>
          <p>厚德载物创品牌 诚信经营得天下</p>
        </div>
        <div class="flex-item">
          <img src="../assets/7.png" alt />
          <span>企业宗旨</span>
          <p>源于社会，回报社会</p>
        </div>
        <div class="flex-item">
          <img src="../assets/8.png" alt />
          <span>企业管理文化</span>
          <p>平等、协助、原则</p>
        </div>
        <a href=""><b @click="goTo('bmwh')">查看更多>></b></a>
      </div>
    </div>
    <div class="business">
      <h1>业务范畴</h1>
      <h6>BUSINESS SCOPE</h6>
      <div class="flex-container">
        <div class="flex-item" @click="goBusiness('card')">
          <a href=""><img src="../assets/012.jpg" alt /> </a>
          <span>信用卡违约催告服务</span>
        </div>
        <div class="flex-item" @click="goBusiness('bank')">
          <a href="">
            <img src="../assets/013.jpg" alt />
          </a>
          <span>银行及非银机构不良贷款</span>
          <br />
          <span>应收账款管理服务</span>
        </div>
        <div class="flex-item" @click="goBusiness('customer')">
          <a href="">
            <img src="../assets/014.jpg" alt />
          </a>
          <span>客户关系管理服务</span>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item" @click="goBusiness('post-loan')">
          <a href="">
            <img src="../assets/009.jpg" alt />
          </a>
          <span>贷后逾期处理</span>
        </div>
        <div class="flex-item" @click="goBusiness('assets')">
          <a href="">
            <img src="../assets/010.jpg" alt />
          </a>
          <span>不良资产收购</span>
        </div>
        <div class="flex-item" @click="goBusiness('business')">
          <a href="">
            <img src="../assets/011.jpg" alt />
          </a>
          <span>商业诉讼支援</span>
        </div>
        <a href=""><b @click="goTo('business')">查看更多>></b></a>
      </div>
    </div>
    <div class="platrorm">
      <h1>平台优势</h1>
      <h6>PLATFORM ADVANTAGES</h6>
      <div class="flex-container">
        <div class="flex-item" @click="goPlatrorm('team')">
          <img src="../assets/015.jpg" alt />
          <span>高素质的专业团队</span>
        </div>
        <div class="flex-item" @click="goPlatrorm('security')">
          <img src="../assets/016.jpg" alt />
          <span>严谨的信息安全管控</span>
        </div>
        <div class="flex-item" @click="goPlatrorm('service')">
          <img src="../assets/017.jpg" alt />
          <span>广泛服务网络覆盖</span>
        </div>
        <div class="flex-item" @click="goPlatrorm('num')">
          <img src="../assets/018.jpg" alt />
          <span>承建数字化信息系统</span>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item" @click="goPlatrorm('science')">
          <img src="../assets/019.jpg" alt />
          <span>科学创新的服务模式</span>
        </div>
        <div class="flex-item" @click="goPlatrorm('management')">
          <img src="../assets/020-.jpg" alt />
          <span>千万级研发逾期</span>
          <br />
          <span>应收账款管理系统</span>
        </div>
        <div class="flex-item" @click="goPlatrorm('smart')">
          <img src="../assets/021.jpg" alt />
          <span>智能语音呼叫平台</span>
        </div>
      </div>
      <a href=""><b @click="goTo('platrorm')">查看更多>></b></a>
      <!-- <div class="flex-container"> -->
      <!-- <div
          class="flex-item"
          @click="collect(index)"
          v-for="(item, index) in list"
          :key="index"
        >
          <img :src="downIcon && num === index ? item.img1 : item.img" />
          <div :class="{ updata_clable: downIcon && num === index }">
            <span>{{ item.name }}</span>
            <br />
            <span>{{ item.name1 }}</span>
          </div>
        </div>
        <a href=""><b @click="goTo('platrorm')">查看更多>></b></a> -->
      <!-- </div> -->
    </div>
    <VFooter></VFooter>
    <!-- <div class="footer"> -->
    <!-- <div class="border"> -->
    <!-- <img src="../assets/line.jpg" alt="" /> -->
    <!-- </div> -->
    <!-- <div class="line">
        <p>如果你对我们感兴趣？</p>
        <div class="sjx">
          <i>联系我们 </i>
          <div class="el-icon-caret-bottom"></div>
        </div> -->
    <!-- </div> -->
    <!-- <div class="footer-content">
        <div class="footer-item">
          <b>
            合规至上&nbsp;&nbsp;&nbsp;&nbsp; 立存久远&nbsp;&nbsp;&nbsp;&nbsp;
            携手共赢
          </b>
        </div>
        <div class="footer-item">
          <div class="map">
            <span class="spark"></span>
            <span class="spark"></span>
            <span class="spark"></span>
            <span class="spark"></span>
            <span class="spark"></span>
            <span class="spark"></span>
          </div>
        </div>
      </div> -->
    <!-- <div class="footer-line"></div> -->
    <!-- <div class="footer-right">
        粤ICP备18072319号-1 Copyright2018 深圳市巴马华创信息咨询有限公司 Powered
        by vanchee
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import VHeader from "../components/VHeader.vue";
import VFooter from "../components/VFooter.vue";
export default {
  name: "Home",
  components: {
    // VHeader,
    VFooter
  },
  data() {
    return {
      num: null,
      //图片地址数组
      img_list: [
        { url: require("../assets/0602-banner1.jpg") },
        { url: require("../assets/0602-banner.jpg") }
      ],
      ifSelected: 0,
      downIcon: true,
      IsIndex: null,
      isFixed: false
      // list: [
      //   {
      //     name: "高素质的专业团队",
      //     img: require("../assets/015.jpg"),
      //     img1: require("../assets/015-.jpg")
      //   },
      //   {
      //     name: "严谨的信息安全管控",
      //     img: require("../assets/016.jpg"),
      //     img1: require("../assets/016-.jpg")
      //   },
      //   {
      //     name: "广泛服务网络覆盖",
      //     img: require("../assets/017.jpg"),
      //     img1: require("../assets/017-.jpg")
      //   },
      //   {
      //     name: "承建数字化信息系统",
      //     img: require("../assets/018.jpg"),
      //     img1: require("../assets/018-.jpg")
      //   },
      //   {
      //     name: "科学创新的服务模式",
      //     img: require("../assets/019.jpg"),
      //     img1: require("../assets/019-.jpg")
      //   },
      //   {
      //     name: "千万级研发逾期",
      //     name1: "应收账款管理系统",
      //     img: require("../assets/020-.jpg"),
      //     img1: require("../assets/020.jpg")
      //   },
      //   {
      //     name: "智能语音呼叫平台",
      //     img: require("../assets/021.jpg"),
      //     img1: require("../assets/021-.jpg")
      //   }
      // ]
    };
  },
  mounted() {
    this.offsetTop = document.querySelector(".head").offsetTop;
    console.log(this.offsetTop);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop >= this.offsetTop;
    },
    collect(index) {
      if (this.num === index) {
        this.downIcon = !this.downIcon;
      } else {
        this.downIcon = true;
      }
      this.num = index;
      this.IsIndex = index;
      this.updata_clable = !this.updata_clable;
    },
    goTo(type) {
      if (type == "corporate") {
        this.$router.push({ name: "关于我们", query: { step: 10 } });
      } else if (type == "bmwh") {
        this.$router.push({ name: "关于我们", query: { step: 11 } });
      } else if (type == "business") {
        this.$router.push({ name: "业务范围", query: { step: 10 } });
      } else if (type == "platrorm") {
        this.$router.push({ name: "平台优势", query: { step: 10 } });
      }
    },
    goBusiness(type) {
      if (type == "card") {
        this.$router.push({ name: "业务范围", query: { step: 10 } });
      } else if (type == "bank") {
        this.$router.push({ name: "业务范围", query: { step: 11 } });
      } else if (type == "customer") {
        this.$router.push({ name: "业务范围", query: { step: 12 } });
      } else if (type == "post-loan") {
        this.$router.push({ name: "业务范围", query: { step: 13 } });
      } else if (type == "assets") {
        this.$router.push({ name: "业务范围", query: { step: 14 } });
      } else if (type == "business") {
        this.$router.push({ name: "业务范围", query: { step: 15 } });
      }
    },
    goPlatrorm(type) {
      if (type == "team") {
        this.$router.push({ name: "平台优势", query: { step: 10 } });
      } else if (type == "security") {
        this.$router.push({ name: "平台优势", query: { step: 11 } });
      } else if (type == "service") {
        this.$router.push({ name: "平台优势", query: { step: 12 } });
      } else if (type == "num") {
        this.$router.push({ name: "平台优势", query: { step: 13 } });
      } else if (type == "science") {
        this.$router.push({ name: "平台优势", query: { step: 14 } });
      } else if (type == "management") {
        this.$router.push({ name: "平台优势", query: { step: 15 } });
      } else if (type == "smart") {
        this.$router.push({ name: "平台优势", query: { step: 16 } });
      }
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
.home {
  h1 {
    color: #0d6fad;
  }
  h6 {
    color: #9fa0a0;
    font-size: 16px;
  }
  .banner {
    width: 100%;
    height: 890px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    // button.el-carousel__button {
    //   border-radius: 50%;
    //   width: 20px;
    //   height: 20px;
    //   background-color: #c61c25;
    // }
  }
  .content {
    width: 100%;
    height: 700px;
    margin: 0 auto;
    // background-color: red;
    h1 {
      padding-top: 60px;
    }
    h6 {
      padding-top: 20px;
      margin-bottom: 30px;
    }
    p {
      width: 970px;
      height: 450px;
      margin: 0 auto;
      font-size: 20px;
      color: #444;
      text-align: left;
      margin-top: 40px;
      // margin-bottom: 25px;
      line-height: 40px;
    }
    b {
      color: #0d6fad;
      margin-left: 855px;
    }
  }
  .culture {
    width: 100%;
    height: 840px;
    margin: 0 auto;
    background-color: #eeeeee;
    h1 {
      padding-top: 60px;
    }
    h6 {
      padding-top: 20px;
      margin-bottom: 30px;
    }
    .flex-container {
      font-size: 18px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 1000px;
      justify-content: space-around;
      margin: 0 auto;
    }
    .flex-container .flex-item {
      box-sizing: border-box;
      width: 229px;
      height: 290px;
      margin: 10px;
      // background-color: lightsalmon;
      &:hover {
        border: 2px solid #a0a0a0;
        color: #0d6fad;
        img {
          margin-top: 8px;
        }
      }
    }
    img {
      display: block;
      width: 170px;
      height: 170px;
      text-align: center;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    span {
      font-size: 22px;
    }
    p {
      font-size: 15px;
      margin-top: 20px;
    }
    b {
      color: #0d6fad;
      margin-left: 855px;
      font-size: 16px;
    }
  }
  .business {
    width: 100%;
    height: 720px;
    margin: 0 auto;
    h1 {
      padding-top: 60px;
    }
    h6 {
      padding-top: 20px;
      margin-bottom: 30px;
    }
    .flex-container {
      font-size: 18px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 1000px;
      justify-content: space-around;
      margin: 0 auto;
    }
    .flex-container .flex-item {
      width: 310px;
      height: 230px;
      margin: 10px;
      cursor: pointer;
      &:hover {
        color: #0d6fad;
      }
    }
    img {
      display: block;
      width: 310px;
      height: 180px;
      text-align: center;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .flex-container:last-child {
      margin-top: 20px;
    }
    a {
      text-decoration: none;
    }
    b {
      color: #0d6fad;
      margin-left: 855px;
      font-size: 16px;
    }
  }
  .platrorm {
    width: 100%;
    height: 700px;
    margin: 0 auto;
    // background-color: red;
    h1 {
      padding-top: 60px;
    }
    h6 {
      padding-top: 20px;
      margin-bottom: 30px;
    }
    .flex-container {
      font-size: 18px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 1000px;
      justify-content: space-around;
      margin: 0 auto;
    }
    .flex-container .flex-item {
      width: 200px;
      height: 230px;
      margin: 10px;
      color: black;
      cursor: pointer;
      // position: relative;
      .updata_clable {
        color: #00a0e9;
      }
    }
    // img {
    //   display: block;
    //   width: 160px;
    //   height: 180px;
    //   text-align: center;
    //   margin: 0 auto;
    //   margin-top: 10px;
    //   margin-bottom: 10px;
    //   // position: absolute;
    //   cursor: pointer;
    // }
    b {
      color: #0d6fad;
      margin-left: 855px;
      font-size: 16px;
    }
  }
  .head {
    // display: flex;
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
    top: 890px;
    &.fixed {
      position: fixed;
      top: 0;
    }
  }
  .head-nav {
    // position: fixed;
    height: 100%;
    width: 980px;
    // top: 0;
    // left: 0;
    // float: left;
    // margin-left: 350px;
    margin: 0 auto;
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
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
  }
  // .footer {
  //   width: 100%;
  //   height: 560px;
  //   background: #f6f6f6;
  //   position: relative;
  //   .border {
  //     width: 100%;
  //     height: 100%;
  //     // background-color: aqua;
  //     background: url("../assets/line.jpg") center center no-repeat;
  //     position: absolute;
  //     opacity: 0.2;
  //   }
  //   p {
  //     width: 360px;
  //     height: 46px;
  //     font-size: 36px;
  //     color: #0d6fad;
  //     text-align: center;
  //     padding-top: 60px;
  //     margin: 0 auto;
  //   }
  //   .sjx {
  //     position: relative;
  //     // display: inline-block;
  //     width: 100px;
  //     height: 30px;
  //     margin: 0 auto;
  //     i {
  //       display: block;
  //       width: 100px;
  //       height: 30px;
  //       background-color: #c61c25;
  //       border-radius: 6px;
  //       // margin: 0 auto;
  //       text-align: center;
  //       line-height: 30px;
  //       color: aliceblue;
  //       margin-top: 80px;
  //       // color: #c61c25
  //     }
  //     .el-icon-caret-bottom:before {
  //       position: absolute;
  //       color: #c61c25;
  //       bottom: -10px;
  //       left: 42px;
  //     }
  //     // ul {
  //     //   // margin: 0 auto;
  //     //   color: #c61c25;
  //     //   // margin-top: -100px;
  //     //   // position: absolute;
  //     // }
  //     // .el-icon-caret-bottom:before {
  //     //   // position: absolute;
  //     //   // margin-top: 20px;
  //     //   // display: inline-block;
  //     //   color: #c61c25;
  //     //   // margin: auto;
  //     // }
  //   }
  //   .footer-content {
  //     width: 1045px;
  //     margin: 0 auto;
  //     // display: flex;
  //     justify-content: space-between;
  //     // padding-top: 50px;
  //   }
  //   a:-webkit-any-link {
  //     color: #fff;
  //   }
  //   .footer-item {
  //     color: #fff;
  //     margin-left: 50px;
  //     // display: flex;
  //     b {
  //       width: 100%;
  //       height: 20px;
  //       padding-top: 200px;
  //       color: black;
  //       font-size: 20px;
  //       font-family: YYZT;
  //       opacity: 0.6;
  //     }
  //     .map {
  //       width: 240px;
  //       height: 220px;
  //       margin: 30px 50px 30px 0;
  //       background: url("../assets/022.png") center center no-repeat;
  //       background-size: 240px 220px;
  //       position: relative;
  //       cursor: pointer;
  //     }
  //     .spark {
  //       width: 5px;
  //       height: 5px;
  //       border-radius: 50%;
  //       background: #f39800;
  //       display: inline-block;
  //       position: absolute;
  //       &:before {
  //         display: flex;
  //         width: 10px;
  //         height: 10px;
  //         content: "";
  //         display: inline-block;
  //         background: #f39800;
  //         opacity: 0.4;
  //         position: absolute;
  //         top: -2.5px;
  //         left: -2.5px;
  //         border-radius: 100%;
  //         animation: a_dot_grab 2s infinite;
  //       }
  //       &:nth-of-type(1) {
  //         // display: flex;
  //         // bottom: 300px;
  //         right: 160px;
  //         top: 115px;
  //         animation: mySpark1 2s infinite;
  //       }
  //       &:nth-of-type(2) {
  //         // display: flex;
  //         // bottom: 310px;
  //         // right: 600px;
  //         top: 150px;
  //         right: 130px;
  //         animation: mySpark2 2s infinite;
  //       }
  //       &:nth-of-type(3) {
  //         // display: flex;
  //         // bottom: 280px;
  //         // right: 680px;
  //         top: 80px;
  //         right: 200px;
  //         animation: mySpark3 2s infinite;
  //       }
  //       &:nth-of-type(4) {
  //         // display: flex;
  //         // bottom: 260px;
  //         // right: 620px;
  //         top: 100px;
  //         right: 190px;
  //         animation: mySpark1 2s infinite 0.4s;
  //       }
  //       &:nth-of-type(5) {
  //         // display: flex;
  //         // bottom: 340px;
  //         // right: 670px;
  //         top: 130px;
  //         right: 210px;
  //         animation: mySpark3 2s infinite;
  //       }
  //       &:nth-of-type(6) {
  //         // display: flex;
  //         // bottom: 310px;
  //         // right: 690px;
  //         top: 100px;
  //         right: 90px;
  //         animation: mySpark1 2s infinite;
  //       }
  //     }
  //   }
  //   .footer-line {
  //     width: 1000px;
  //     height: 2px;
  //     margin: 0 auto;
  //     background: #d5d5d5;
  //     opacity: 0.5;
  //     // margin-top: 170px;
  //   }
  //   .footer-right {
  //     width: 100%;
  //     margin-top: 22px;
  //     text-align: center;
  //     font-size: 17px;
  //     font-weight: 400;
  //     color: #9fa0a0;
  //     opacity: 0.5;
  //   }
  //   @keyframes myShow {
  //     from {
  //       height: 31px;
  //     }
  //     to {
  //       height: 100px;
  //     }
  //   }

  //   @keyframes a_dot_grab {
  //     0% {
  //       transform: scale(0.5);
  //       opacity: 0.5;
  //     }
  //     50% {
  //       transform: scale(1.1);
  //       opacity: 0.5;
  //     }
  //     to {
  //       transform: scale(1.15);
  //       opacity: 0;
  //     }
  //   }

  //   @keyframes mySpark1 {
  //     from {
  //       opacity: 1;
  //     }
  //     to {
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes mySpark2 {
  //     0% {
  //       opacity: 0.8;
  //     }
  //     20% {
  //       opacity: 1;
  //     }
  //     40% {
  //       opacity: 0.6;
  //     }
  //     80% {
  //       opacity: 0.2;
  //     }
  //     100% {
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes mySpark3 {
  //     from {
  //       opacity: 0;
  //     }
  //     to {
  //       opacity: 1;
  //     }
  //   }
  // }
}
</style>
