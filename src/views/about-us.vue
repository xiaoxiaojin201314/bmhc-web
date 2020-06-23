<template>
  <div class="about-us">
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
      <img src="../assets/23.jpg" alt="" />
    </div>
    <div class="menu">
      <div class="left">
        <div
          class="menu-item"
          :class="{ selected: ifactive == 10 }"
          @click="handleMenuClick(10)"
        >
          企业简介
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 11 }"
          @click="handleMenuClick(11)"
        >
          巴马文化
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 12 }"
          @click="handleMenuClick(12)"
        >
          团队介绍
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 13 }"
          @click="handleMenuClick(13)"
        >
          人才培养
        </div>
      </div>
      <!-- <span class="title">{{ selectedTitle }}</span> -->
      <div class="right" v-show="ifactive == 10">
        <h1>企业简介</h1>
        <p class="abstract">
          巴马华创科技有限公司（简称：巴马华创）在“世界长寿之乡·中国人瑞圣地”——广西巴马注册成立。在当地政府扶持领导下，合规稳健发展。
          <br />
          巴马华创注册资金2000万，在深圳市、桂林市和巴马县拥有3家运营中心，
          其中深圳运营中心（深圳市金诺投资发展有限公司）为巴马华创99%控股的子公司。于2015年开始成立运营，至今已处理超过百亿的不良资产，服务区域已覆盖全国近100个城市。
          <br />
          巴马华创的业务范围主要包括金融服务外包，为银行及非银行金融机构信用卡违约及消费金融不良贷款提供解决方案；承担银行及非银金融机构贷款客户的征信调查、资产管理、客户关系管理。同时，为企业应收帐款提供解决方案，并为企业提供信用报告及法律服务。
          <br />
          成立以来借鉴国际先进服务理念，依托创新科学技术，基于人工智能服务，进行精准数字化营销；以“厚德载物创品牌
          诚信经营得天下”的品牌理念，始终坚持科学发展、稳健经营、规范运作，不断打造和提升企业风险管控和信息管理技术，打造最值得信赖、客户首选的金融风险管理品牌。
          <br />
          坚持将专业化的不良资产经营管理技术、风险防范化解技术与多元化的综合服务手段有效结合起来，积极探索和推动各类业务及产品的“融合创新”，开发了一系列生态化，创新性服务产品。
          <br />
          巴马华创始终奉行“源于社会，回报社会”的宗旨，积极投身各项社会公益事业，践行企业社会责任，多年来在资助留守儿童、大病患儿救助、解决巴马就业等公益事业中持续投入，并引导员工、客户和公众共同参与社会公益活动。
          <br />
          展望未来，巴马华创始终秉承“化解金融风险、提升资产价值、构建多元化的综合服务”的经营理念，向多领域多业务拓展，构建信贷综合服务科技生态链，打造特色资产管理服务顶流品牌。
        </p>
      </div>
      <div class="right" v-show="ifactive == 11">
        <h1>巴马文化</h1>
        <p class="culture">
          文化是企业的灵魂，文化厚重则精神不腐。巴马华创持续推进企业文化的落地深植，不断提升企业文化的内涵，以
          <span style="color:#0d6fad">“真文化、善文化、新文化、忠文化”</span
          >为核心，以
          <span style="color:#0d6fad">“真于心、新于制、善于行、忠于言”</span
          >为准则，为企业发展提供不竭动力。
        </p>
        <div class="flex-container">
          <div class="flex-item">
            <img src="../assets/1.png" alt="" />
            <h4>企业使命</h4>
            <span>让社会信用体系更和谐</span>
          </div>
          <div class="flex-item">
            <img src="../assets/2.png" alt="" />
            <h4>企业精神</h4>
            <span>团结进取，求实创新</span>
          </div>
          <div class="flex-item">
            <img src="../assets/3.png" alt="" />
            <h4>企业愿景</h4>
            <span>让客户在服务体验中感受温暖</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="flex-item">
            <img src="../assets/4.png" alt="" />
            <h4>企业价值观</h4>
            <span>言必诚信，行必忠正，行稳必远</span>
          </div>
          <div class="flex-item">
            <img src="../assets/5.png" alt="" />
            <h4>企业经营理念</h4>
            <span>化解金融风险、提升资产价值、构建多元化的综合服务</span>
          </div>
          <div class="flex-item">
            <img src="../assets/6.png" alt="" />
            <h4>企业品牌理念</h4>
            <span>厚德载物创品牌 诚信经营得天下</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="flex-item">
            <img src="../assets/7.png" alt="" />
            <h4>企业宗旨</h4>
            <span>源于社会，回报社会</span>
          </div>
          <div class="flex-item">
            <img src="../assets/8.png" alt="" />
            <h4>企业管理文化</h4>
            <span class="text"
              >管理原则：合规、高效、耐心<br />
              管理方式：平等、协助、原则<br />
              管理风格：决策科学、管控到位、协同高效、技术领先</span
            >
          </div>
          <div class="flex-item"></div>
        </div>
      </div>
      <div class="right" v-show="ifactive == 12">
        <h1>团队介绍</h1>
        <p class="team">
          巴马华创拥有一支高素质、高效能、国际化、专业化的管理团队。
          <br />
          遵循“求才、育才、留才”的人才观以及“德才兼备、任人唯贤”的用人准则，打造了一支400多人的精英服务团队。
          <br />
          核心运营团队成员均来自国内金融集团或者业内领先的资产管理公司，有着十年以上的贷后运营管理经验。
          <br />
          共设七大部门：信控部、综合运营部、信息技术部、人事行政部、财务部、商务管理部、品牌管理部
        </p>
        <img class="bmphoto" src="../assets/24-.jpg" alt="" />
      </div>
      <div class="right" v-show="ifactive == 13">
        <h1>人才培养</h1>
        <p class="talent">
          目前全公司培训，专职讲师团队20
          余人，分别专注于职前培训、入职培训、晋升培训、业务能力提升、职业能力发展、领导力开发和线上学习。
          <br />
          对工作场景定期开发、更新学习内容，在岗辅导、案例学习和跨界交流等多种方式，满足各个层级各个岗位的学习需求。
          <br />
          用人才驱动组织创新和战略变革，建设优质人才培养基地、打造内部MBA。
        </p>
        <img class="talentimg" src="../assets/25.jpg" alt="" />
      </div>
    </div>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VFooter from "../components/VFooter.vue";
export default {
  components: {
    // VHeader,
    VFooter
  },
  data() {
    return {
      ifSelected: 1,
      ifactive: 10,
      selectedTitle: "企业简介",
      titles: ["企业简介", "巴马文化", "团队介绍", "人才培养"],
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

<style lang="less" scope>
.about-us {
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
    width: 1000px;
    height: 900px;
    margin: 0 auto;
    text-align: left;
    margin-top: 50px;
    position: relative;
    .left {
      width: 200px;
      background-color: #eee;
      .menu-item {
        height: 78px;
        width: 100%;
        line-height: 68px;
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
      position: absolute;
      width: 760px;
      height: 900px;
      // background-color: red;
      right: 0;
      top: 0;
      h1 {
        margin-bottom: 20px;
      }
      .abstract {
        font-size: 18px;
        color: #444;
        line-height: 40px;
      }
      .flex-container {
        // font-size: 18px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        // margin: 0 auto;
      }
      .flex-container .flex-item {
        line-height: 30px;
        width: 230px;
        // height: 190px;
        margin: 10px;
        text-align: center;
        &:hover {
          color: #0d6fad;
        }
        img {
          display: block;
          width: 110px;
          height: 100px;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 10px;
        }
      }
      .culture {
        line-height: 40px;
        font-size: 18px;
      }
      .team {
        line-height: 40px;
        font-size: 18px;
      }
      .talent {
        line-height: 40px;
        font-size: 18px;
      }
      .bmphoto {
        display: block;
        width: 600px;
        height: 500px;
        margin: auto;
      }
      .talentimg {
        margin-top: 100px;
        margin-left: 100px;
      }
    }
  }
}
</style>
