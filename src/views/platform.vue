<template>
  <div class="platform">
    <div class="content">
      <div class="logo"></div>
    </div>
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
    <div class="bgurl">
      <img src="../assets/34.jpg" alt="" />
    </div>
    <div class="menu">
      <div class="left">
        <div
          class="menu-item"
          :class="{ selected: ifactive == 10 }"
          @click="handleMenuClick(10)"
        >
          高素质的专业团队
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 11 }"
          @click="handleMenuClick(11)"
        >
          严谨的信息安全管控
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 12 }"
          @click="handleMenuClick(12)"
        >
          广泛服务网络覆盖
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 13 }"
          @click="handleMenuClick(13)"
        >
          承建数字信息化系统
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 14 }"
          @click="handleMenuClick(14)"
        >
          千万级研发逾期应收账款管理系统
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 15 }"
          @click="handleMenuClick(15)"
        >
          科学创新的服务模式
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 16 }"
          @click="handleMenuClick(16)"
        >
          智能语音呼叫平台
        </div>
      </div>
      <!-- <span class="title">{{ selectedTitle }}</span> -->
      <div class="content-item" v-show="ifactive == 10">
        <img src="../assets/35.jpg" />
        <h3>1.高素质的专业团队</h3>
        <p>
          拥有<span style="color:#0d6fad">资深金融、投资、财务、风险管理</span>
          等领域专业人士组成的团队，有较丰富的市场运作和管理经验。<br />
          能洞悉国际市场变化，坚持开放、 共赢的理念，以<span
            style="color:#0d6fad"
            >“决策科学、管控到位、协同高效、技术领先”</span
          >的管理风格，服务客户。
        </p>
      </div>
      <div class="content-item" v-show="ifactive == 11">
        <img src="../assets/36.jpg" />
        <h3>2.严谨的信息安全管控</h3>
        <p>
          IT团队通过技术手段，打造<span style="color:#0d6fad"
            >全方位、立体化、多层次</span
          >
          的企业数据安全防护体系，结合各个层面构建纵深的安全防护体系，实现网络数据传输过程中分析、敏感数据识别审计、阻断策略响应访问控制，保障信息安全。
          <br />
          信控员所有电话通话及一线外访行动全程皆有录音记录，以供进行抽查、与信控员在催收系统输入的记录核对。
        </p>
      </div>
      <div class="content-item" v-show="ifactive == 12">
        <img src="../assets/37.jpg" />
        <h3>3.广泛服务网络覆盖</h3>
        <p>
          为客户提供<span style="color:#0d6fad">多元化、高效率</span>
          的本地及跨区域业务服务，服务区域已覆盖全国近100个城市，可协同联动，完美实现
          <span style="color:#0d6fad">线上线下、跨区域的对接融合</span
          >，服务人数达数十万。
        </p>
      </div>
      <div class="content-item" v-show="ifactive == 13">
        <img src="../assets/38.jpg" />
        <h3>4.承建数字信息化系统</h3>
        <p>
          建立了涵盖<span style="color:#0d6fad"
            >客户管理、业务运营、财务核算、办公管理、数据管理、安全管控</span
          >六大功能系统群的综合信息管理平台，实现了业务全覆盖和前后台一体化处理；拥有完善的信息技术基础设施，包括数据中心、专用网络和视频会议系统等。
        </p>
      </div>
      <div class="content-item" v-show="ifactive == 14">
        <img src="../assets/39.jpg" />
        <h3>5.千万级研发逾期应收账款管理系统</h3>
        <p>
          <span style="color:#0d6fad"
            >我司采用了一套成熟先进的逾期应收账款管理系统，该系统为我司投资千万自我研发的熊猫AMS系统。</span
          >该系统根据行业特点需求经过不断优化完善，是一套具有先进管理经验和管理理念的综合性管理系统。
          <br />
          系统涵盖逾期账款管理相关的各个作业环节，完全控制催收案件的整个作业流程，包括电话催收、产能管理与业绩考核等，实现业务流程整合、访问权限控制等实用功能，系统设置科学、功能齐全。
        </p>
      </div>
      <div class="content-item" v-show="ifactive == 15">
        <img src="../assets/40.jpg" />
        <h3>6.科学创新的服务模式</h3>
        <p>
          利用互联网技术结合人工智能科学的模式，精细化运营，满足业务细分拓展的需求。
          <br />
          <span style="color:#0d6fad">
            以人为本，客户至上，微笑服务，保密服务，一对一服务，效率服务，实现高效率、低成本的创新服务模式。</span
          >
        </p>
      </div>
      <div class="content-item" v-show="ifactive == 16">
        <img src="../assets/41.jpg" />
        <h3>7.智能语音呼叫平台</h3>
        <p>
          提供深度定制服务，根据客户需求，设置呼叫中心设备及业务场景呼叫平台解决方案。
          <br />
          外呼方案：
          <span style="color:#0d6fad">
            支持预测试、预览式、自动外呼，满足用户不同的业务场景。</span
          >
        </p>
        <div class="bottom">
          <p>
            开放平台：支持本地和第三方线路对接；支持催收系统或CRM系统对接，实现来电弹屏等功能。
            <br />智能路由：根据对接的线路按优先级外呼，或按线路轮询选择外呼，降低单线路的外呼频率的同时，可叠加外呼频次。
            <br />运维保障：已实现主备平台异地灾备；支持平台和资源使用情况的实时监控和告警（企业微信、短信、呼叫）。
          </p>
        </div>
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
      ifSelected: 4,
      ifactive: 10,
      selectedTitle: "高素质的专业团队",
      titles: [
        "高素质的专业团队",
        "严谨的信息安全管控",
        "广泛服务网络覆盖",
        "承建数字信息化系统",
        "千万级研发逾期应收账款管理系统",
        "科学创新的服务模式",
        "智能语音呼叫平台"
      ],
      isFixed: false
    };
  },
  created() {
    let step = this.$route.query.step;
    if (step) {
      this.ifactive = step;
      this.selectedTitle = this.titles[step];
    }
  },
  mounted() {
    this.offsetTop = document.querySelector(".head").offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleMenuClick(index) {
      this.ifactive = index;
      this.selectedTitle = this.titles[index];
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop >= this.offsetTop;
    }
  },
  components: {
    VFooter
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
.platform {
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
    // line-height: 124px;
    margin-top: 20px;
    background-image: url("../assets/logo.jpg");
    background-size: 217px 77px;
    // background-position: center;
    // background-repeat: no-repeat;
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
    height: 50px;
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
    height: 100%;
    float: left;
    margin-left: 350px;
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
  .menu {
    width: 1200px;
    height: 550px;
    margin: 0 auto;
    text-align: left;
    margin-top: 50px;
    position: relative;
    .left {
      width: 350px;
      background-color: #eee;
      .menu-item {
        height: 70px;
        width: 100%;
        line-height: 64px;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        // padding-right: 20px;
        &.selected {
          background-color: #c61c25;
          color: #fff;
        }
      }
    }
    .content-item {
      position: absolute;
      right: 0;
      top: 100px;
      width: 800px;
      // margin: 93px auto 130px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom {
        width: 100%;
        left: 0;
      }
      img {
        padding-right: 30px;
      }
      h3 {
        position: absolute;
        top: 0px;
        left: 400px;
      }
      p {
        // width: 880px;
        font-size: 18px;
        line-height: 35px;
        text-align: left;
        margin-top: 30px;
      }
      .bottom {
        position: absolute;
        bottom: -180px;
      }
    }
  }
}
</style>
