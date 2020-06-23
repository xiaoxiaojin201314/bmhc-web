<template>
  <div class="enterprise">
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
      <img src="../assets/41-.jpg" alt="" />
    </div>
    <div class="menu">
      <div class="left">
        <div
          class="menu-item"
          :class="{ selected: ifactive == 10 }"
          @click="handleMenuClick(10)"
        >
          关爱留守儿童
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 11 }"
          @click="handleMenuClick(11)"
        >
          大病患儿救助
        </div>
        <div
          class="menu-item"
          :class="{ selected: ifactive == 12 }"
          @click="handleMenuClick(12)"
        >
          巴马就业扶持
        </div>
      </div>
      <!-- <span class="title">{{ selectedTitle }}</span> -->
      <div class="right" v-show="ifactive == 10">
        <b style="font-size:18px;color:#0d6fad;line-height: 30px"
          >巴马华创始终奉行“源于社会，回报社会”的宗旨，积极投身各项社会公益事业，积极践行企业责任，多年来在资助留守儿童、大病患儿救助、解决巴马就业等公益事业中持续投入，引导员工、客户和公众共同参与社会公益活动，以各种方式回报社会。</b
        >
        <h3>留守儿童，关爱成长</h3>
        <p>
          广西巴马区域，一些父母为了生计背井离乡，很多儿童从小缺乏父母关爱、呵护、陪伴。巴马华创了解到这一情况，积极组织”关爱留守儿童呵护健康成长”的志愿服务活动，并且引导全社会的力量关心关爱留守儿童，让他们在健康、快乐的环境中茁壮成长。
        </p>
        <div class="childrenImg">
          <img src="../assets/42.jpg" alt="" />
          <img src="../assets/43.jpg" alt="" />
        </div>
      </div>
      <div class="right" v-show="ifactive == 11">
        <b style="font-size:18px;color:#0d6fad;line-height: 30px"
          >巴马华创始终奉行“源于社会，回报社会”的宗旨，积极投身各项社会公益事业，积极践行企业责任，多年来在资助留守儿童、大病患儿救助、解决巴马就业等公益事业中持续投入，引导员工、客户和公众共同参与社会公益活动，以各种方式回报社会。</b
        >
        <h3>大病救助，奉献爱心</h3>
        <p>
          巴马华创定期与公益机构联合举办关爱大病患儿系列公益活动，希望通过企业的力量可以为一些大病患儿带来快乐，缓解孩子和孩子家庭在治疗期间的精神压力，丰富住院期间的生活。更是为了给他们加油打气，让他们充满力量对抗病魔，可以尽早恢复健康。同时，巴马华创号召全体员工参与公益活动，传播企业正能量。一个人的力量是有限，一群人的力量是无限的。
        </p>
        <div class="childrenImg1">
          <img src="../assets/45.jpg" alt="" />
          <img src="../assets/46.jpg" alt="" />
          <img src="../assets/44.jpg" alt="" />
        </div>
      </div>
      <div class="right" v-show="ifactive == 12">
        <b style="font-size:18px;color:#0d6fad;line-height: 30px"
          >巴马华创始终奉行“源于社会，回报社会”的宗旨，积极投身各项社会公益事业，积极践行企业责任，多年来在资助留守儿童、大病患儿救助、解决巴马就业等公益事业中持续投入，引导员工、客户和公众共同参与社会公益活动，以各种方式回报社会。</b
        >
        <h3>巴马就业 ，经济帮扶</h3>
        <p>
          在巴马区域，全力开展基层惠民帮扶工作，提供各类就业岗位，增加当地经济收入，巴马华创定期到当地组织现场面试、并且简易面试流程，只要满足各项条件、体检指标，并办好各项手续，即可安排入职。
        </p>
        <b style="font-size:18px;color:#c61c25"
          >我们的服务宗旨是：让巴马人民家门口就业</b
        >
        <div class="childrenImg">
          <img src="../assets/47.jpg" alt="" />
          <img src="../assets/48.jpg" alt="" />
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
      ifSelected: 5,
      ifactive: 10,
      selectedTitle: "关爱留守儿童",
      titles: ["关爱留守儿童", "大病患儿救助", "巴马就业扶持"],
      isFixed: false
    };
  },
  components: {
    VFooter
  },
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
  // },
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
      requestAnimationFrame(() => {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // scrollTop > offsetTop ? this.isFixed = true : this.isFixed = false;
        this.isFixed = scrollTop >= this.offsetTop;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.enterprise {
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
    height: 600px;
    margin: 0 auto;
    text-align: left;
    margin-top: 50px;
    position: relative;
    .left {
      width: 170px;
      background-color: #eee;
      .menu-item {
        height: 78px;
        width: 100%;
        line-height: 70px;
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
      width: 800px;
      height: 500px;
      // background-color: red;
      right: 0;
      top: 0;
      h3 {
        padding-top: 30px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
        padding-bottom: 20px;
      }
      .childrenImg {
        display: flex;
        img {
          flex: 1;
          display: block;
          width: 230px;
          height: 200px;
          padding: 15px 15px;
        }
      }
      .childrenImg1 {
        display: flex;
        img {
          flex: 1;
          display: block;
          width: 260px;
          height: 180px;
          padding: 5px;
        }
      }
    }
  }
}
</style>
