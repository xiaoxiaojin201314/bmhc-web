<template>
  <div class="news">
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
      <img src="../assets/26.jpg" alt />
    </div>
    <div class="menu">
      <div
        class="menu-item"
        :class="{ selected: ifShow == 0 }"
        @click="handleMenuClick(0)"
      >
        行业资讯
      </div>
      <div
        class="menu-item"
        :class="{ selected: ifShow == 1 }"
        @click="handleMenuClick(1)"
      >
        巴马动态
      </div>
      <div
        class="content-item"
        v-show="ifShow == 0"
        v-for="(item, index) in lists"
        :key="index"
      >
        <img :src="item.PICTURE" />
        <div class="right">
          <h3>{{ item.TITLE }}</h3>
          <span>发布时间：{{ item.CREATEDATE }}</span>
          <!-- <p v-html="item.CONTENT"></p> -->
          <div class="box" v-html="item.CONTENT"></div>
          <p class="gd" @click="goDetail(item.CONTENT)">
            查看更多>>
          </p>
          <!-- <el-button type="text" @click="handleShow(index)"
            >查看更多>></el-button
          > -->
        </div>
      </div>
      <div
        class="content-item"
        id="item2"
        v-show="ifShow == 1"
        v-for="(item, index) in bmList"
        :key="index + 'item2'"
      >
        <img :src="item.PICTURE" />
        <div class="right">
          <h3>{{ item.TITLE }}</h3>
          <span>发布时间：{{ item.CREATEDATE }}</span>
          <div class="box" v-html="item.CONTENT"></div>
          <p class="gd" @click="goDetail(item.CONTENT)">查看更多>></p>
          <!-- <p class="gd" @click="goDetail(item)">查看更多>></p> -->
          <!-- <el-button type="text" @click="handleShow1(index)"
            >查看更多>></el-button
          > -->
        </div>
      </div>
      <el-pagination
        class="box1"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="index"
        :page-sizes="[2, 4, 5, 10]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <VFooter></VFooter>
    <!-- <el-dialog 
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <span v-html="contentDetail"></span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible1"
      width="50%"
      :before-close="handleClose1"
    >
      <span v-html="contentDetail1"></span>
    </el-dialog> -->
  </div>
</template>

<script>
import VFooter from "../components/VFooter.vue";
export default {
  data() {
    return {
      ifSelected: 2,
      ifShow: 0,
      selectedTitle: "行业资讯",
      titles: ["行业资讯", "巴马动态"],
      lists: [],
      bmList: [],
      // 页码
      index: 1,
      // 页容量
      size: 10,
      // 总条数
      total: 0,
      isFixed: false
      // dialogVisible: false,
      // contentDetail: "",
      // dialogVisible1: false,
      // contentDetail1: ""
    };
  },
  created() {
    this.getNews();
    this.getBm();
  },
  mounted() {
    this.offsetTop = document.querySelector(".head").offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getNews() {
      this.$axios({
        // url: "http://10.31.1.145:7777/api/view/GetArticleList",
        url: "/api/view/GetArticleList",
        method: "POST",
        data: {
          offset: this.index,
          limit: this.size,
          parameterid: "{6224228C-D2D6-4507-B79D-9769E236D547}",
          SortOrder: "asc"
        }
      }).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.lists = res.data.Result;
          // console.log(this.lists);
          this.total = res.data.Total;
          // this.CONTENT = res.data.Result.forEach(item => {
          //   console.log(item.CONTENT);
          // });
        } else {
          this.$message.error(res.statusText);
        }
      });
    },
    getBm() {
      this.$axios({
        // url: "http://10.31.1.145:7777/api/view/GetArticleList",
        url: "/api/view/GetArticleList",
        method: "POST",
        data: {
          offset: this.index,
          limit: this.size,
          parameterid: "{72045042-F4EA-44C5-9703-88779CF530F8}",
          SortOrder: "asc"
        }
      }).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.bmList = res.data.Result;
          this.total = res.data.Total;
        } else {
          this.$message.error(res.statusText);
        }
      });
    },
    goDetail(val) {
      window.localStorage.setItem("data", val);
      this.$router.push({ path: "/detail" });
      // console.log(val);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop >= this.offsetTop;
    },
    // goDetail(val) {
    //   window.localStorage.setItem("data", JSON.stringify(val));
    //   this.$router.push({ path: "/detail" });
    //   console.log(val);
    // },
    handleMenuClick(index) {
      this.ifShow = index;
      this.selectedTitle = this.titles[index];
    },
    // 页容量改变
    handleSizeChange(val) {
      window.console.log(`每页 ${val} 条`);
      // 返回第一页
      // this.index = 1;
      // 设置新的页容量
      this.size = val;
      // 重新获取数据
      this.getNews();
      this.getBm();
    },
    // 页码改变
    handleCurrentChange(val) {
      window.console.log(`当前页: ${val}`);
      // 保存页码
      this.index = val;
      // 重新调用即可
      this.getNews();
      this.getBm();
    }
    // handleShow(index) {
    //   this.dialogVisible = true;
    //   this.contentDetail = this.lists[index].CONTENT;
    //   console.log(this.contentDetail);
    // },
    // handleClose() {
    //   this.dialogVisible = false;
    //   this.contentDetail = "";
    // },
    // handleShow1(index) {
    //   this.dialogVisible1 = true;
    //   this.contentDetail1 = this.bmList[index].CONTENT;
    //   console.log(this.contentDetail);
    // },
    // handleClose1() {
    //   this.dialogVisible1 = false;
    //   this.contentDetail1 = "";
    // }
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
.news {
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
    display: block;
    margin: 0 auto;
    width: 1200px;
    margin-bottom: 30px;
    // height: 700px;
    // background-color: pink;
    .menu-item {
      display: inline-block;
      width: 260px;
      height: 50px;
      margin-top: 60px;
      border: 1px solid #ccc;
      line-height: 44px;
      font-size: 20px;
      cursor: pointer;
    }
    .menu-item:last-child {
      border-left-style: none;
    }
    .selected {
      background: #00a0e9;
      color: #fff;
      border: 1px solid #00a0e9;
    }
    .content-item {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      img {
        display: block;
        width: 300px;
        height: 200px;
        margin-top: 25px;
        // background-color: pink;
      }
      .right {
        width: 860px;
        height: 250px;
        // background-color: pink;
        text-align: left;
        span {
          display: block;
          color: #cccccc;
          font-size: 18px;
          margin-top: 10px;
        }
        .box {
          width: 850px;
          height: 180px;
          font-size: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          margin-top: 5px;
          // margin-bottom: 30px;
          // word-break: break-all;
          // overflow: hidden;
        }
        .gd {
          display: block;
          // width: 100%;
          float: right;
          text-align: right;
          color: #0d6fad;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
    .box1 {
      padding: 80px 5px 10px;
    }
  }
}
</style>
