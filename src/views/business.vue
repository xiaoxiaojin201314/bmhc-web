<template>
  <div class="business">
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
      <img src="../assets/27.jpg" alt="" />
    </div>
    <div class="menu">
      <div class="left">
        <div
          class="menu-item"
          :class="{ selected: ifactive == 10 }"
          @click="handleMenuClick(10)"
        >
          信用卡违约催告服务
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 11 }"
          @click="handleMenuClick(11)"
        >
          银行及非银机构不良贷款应收账款管理服务
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 12 }"
          @click="handleMenuClick(12)"
        >
          客户关系管理服务
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 13 }"
          @click="handleMenuClick(13)"
        >
          贷后逾期处理
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 14 }"
          @click="handleMenuClick(14)"
        >
          不良资产收购
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 15 }"
          @click="handleMenuClick(15)"
        >
          商业诉讼支援
        </div>
      </div>
      <!-- <span class="title">{{ selectedTitle }}</span> -->
      <div class="right">
        <div class="content-item" v-show="ifactive == 10">
          <img src="../assets/28.jpg" />
          <h3>1.信用卡违约催告服务</h3>
          <p>
            经银行授权委托，通过提醒、协商和诉讼等合法手段督促持卡人偿还其消费的欠款，协助银行更好地管理应收账款，减少呆坏账损失。
          </p>
        </div>
        <div class="content-item" v-show="ifactive == 11">
          <img src="../assets/29.jpg" />
          <h3>2.银行及非银机构不良贷款应收账款管理服务</h3>
          <p>
            不良贷款基本概念：不良贷款是指借款人未能按原定的贷款协议按时偿还商业银行或非银机构的贷款本息，或者已有迹象表明借款人不可能按原定的贷款协议按时偿还商业银行或非银机构的贷款本息而形成的贷款。
          </p>
          <div class="bottom">
            <p>
              我们为银行及非银机构的不良贷款提供以下服务：<br />以银行及非银机构资产损失最小化为目标，采取经济、行政和法律手段协助客户回收应收账款。
            </p>
            <div class="box">
              <b>01.預防坏账产生</b
              ><br />协助客户制定有效机制，优化流程、设计量度标准等方法，预防不良资产产生。
              <br />
              <b>02.降低坏账率</b><br />
              专业信控团队可协助客户回收应收帐款，降低撇帐率及拨备成本，增加可动用资产。<br />
              <b>03.坏账管理</b><br />
              外包催收承办商和管理、提供咨询服务、出售不良资产的分层、分类包装，建议方案。
            </div>
          </div>
        </div>
        <div class="content-item" v-show="ifactive == 12">
          <img src="../assets/30.jpg" />
          <h3>3.客户关系管理服务</h3>
          <p>
            利用互联网技术协调企业在销售、营销和服务上的交互，提供创新式的个性化管理方式。<br />
            通过<b>"一对一"营销原则</b>，以丰富的服务项目，加强机构与顾客之间的沟通，
            实现客户价值持续贡献，从而全面提升企业盈利能力和提高核心竞争力。
          </p>
        </div>
        <div class="content-item" v-show="ifactive == 13">
          <img src="../assets/31.jpg" />
          <h3>4.贷后逾期处理</h3>
          <p>
            通过自有呼叫中心、安全高效的催收系统、外访团队及其他合作资源，协助委托人有效降低不良逾期压力。
            <br />经过多年积累的经验，我们逐步探索形成了符合自身业务特点的方法和贷后不良处理风险管控体系。
          </p>
        </div>
        <div class="content-item" v-show="ifactive == 14">
          <img src="../assets/32.jpg" />
          <h3>5.不良资产收购</h3>
          <p>
            根据市场原则购买各类金融机构和非金融机构的不良资产，自成立以来，先后收购、管理和处置了多家金融机构及非金融机构不良资产。积累了收购不良资产的丰富经验，形成了收购处置批量不良资产的专业能力，培养了大量的不良资产收购处置专业队伍，建立了能批量处置不良资产的信息系统。
            <br />凭借突出的专业技术优势、丰富的资本运作经验和多年积累的客户资源，能够最大化实现不良资产的价值管理。
          </p>
        </div>
        <div class="content-item" v-show="ifactive == 15">
          <img src="../assets/33.jpg" />
          <h3>6.商业诉讼支援</h3>
          <p>
            专业化一站式商业诉讼支援，全方位搜集与整理诉讼材料，规避材料错误信息与高效推进诉讼进度。强大的人脉网络保证集中诉讼，快速诉讼，有效执行。
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
      ifSelected: 3,
      ifactive: 10,
      selectedTitle: "信用卡违约催告服务",
      titles: [
        "信用卡违约催告服务",
        "银行及非银机构不良贷款应收账款管理服务",
        "客户关系管理服务",
        "贷后逾期处理",
        "不良资产收购",
        "商业诉讼支援"
      ],
      isFixed: false
    };
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
  },
  created() {
    let step = this.$route.query.step;
    if (step) {
      this.ifactive = step;
      this.selectedTitle = this.titles[step];
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
.business {
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
    width: 1300px;
    height: 600px;
    margin: 0 auto;
    text-align: left;
    margin-top: 50px;
    position: relative;
    .left {
      width: 400px;
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
    .right {
      width: 800px;
      height: 550px;
      // background-color: aqua;
      position: absolute;
      right: 0;
      top: 0px;
      .content-item {
        width: 760px;
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
          left: 414px;
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
          bottom: 20px;
          .box {
            padding-bottom: 10px;
            b {
              color: #00a0e9;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
