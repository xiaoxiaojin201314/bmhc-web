<template>
  <div class="footer">
    <div class="footer-content">
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
    </div>
    <div class="footer-line"></div>
    <div class="footer-right">
      粤ICP备18072319号-1 Copyright2018 深圳市巴马华创信息咨询有限公司 Powered
      by vanchee
    </div>
  </div>
</template>
<script>
export default {
  name: "VFooter"
};
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
.footer {
  width: 100%;
  height: 357px;
  background: #f6f6f6;
  .footer-content {
    width: 1045px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  a:-webkit-any-link {
    color: #fff;
  }
  .footer-item {
    color: #fff;
    margin-left: 50px;
    display: flex;
    b {
      width: 100%;
      height: 20px;
      padding-top: 200px;
      color: black;
      font-size: 20px;
      font-family: YYZT;
      opacity: 0.6;
    }
    .map {
      width: 240px;
      height: 220px;
      margin: 30px 50px 30px 0;
      background: url("../assets/022.png") center center no-repeat;
      background-size: 240px 220px;
      position: relative;
      cursor: pointer;
    }
    .spark {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #f39800;
      display: inline-block;
      position: absolute;
      &:before {
        display: flex;
        width: 10px;
        height: 10px;
        content: "";
        display: inline-block;
        background: #f39800;
        opacity: 0.4;
        position: absolute;
        top: -2.5px;
        left: -2.5px;
        border-radius: 100%;
        animation: a_dot_grab 2s infinite;
      }
      &:nth-of-type(1) {
        // display: flex;
        // bottom: 300px;
        right: 160px;
        top: 115px;
        animation: mySpark1 2s infinite;
      }
      &:nth-of-type(2) {
        // display: flex;
        // bottom: 310px;
        // right: 600px;
        top: 150px;
        right: 130px;
        animation: mySpark2 2s infinite;
      }
      &:nth-of-type(3) {
        // display: flex;
        // bottom: 280px;
        // right: 680px;
        top: 80px;
        right: 200px;
        animation: mySpark3 2s infinite;
      }
      &:nth-of-type(4) {
        // display: flex;
        // bottom: 260px;
        // right: 620px;
        top: 100px;
        right: 190px;
        animation: mySpark1 2s infinite 0.4s;
      }
      &:nth-of-type(5) {
        // display: flex;
        // bottom: 340px;
        // right: 670px;
        top: 130px;
        right: 210px;
        animation: mySpark3 2s infinite;
      }
      &:nth-of-type(6) {
        // display: flex;
        // bottom: 310px;
        // right: 690px;
        top: 100px;
        right: 90px;
        animation: mySpark1 2s infinite;
      }
    }
  }
  .footer-line {
    width: 1000px;
    height: 2px;
    margin: 0 auto;
    background: #d5d5d5;
    opacity: 0.5;
  }
  .footer-right {
    width: 100%;
    margin-top: 22px;
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    color: #9fa0a0;
    opacity: 0.5;
  }
  @keyframes myShow {
    from {
      height: 31px;
    }
    to {
      height: 100px;
    }
  }

  @keyframes a_dot_grab {
    0% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
    to {
      transform: scale(1.15);
      opacity: 0;
    }
  }

  @keyframes mySpark1 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes mySpark2 {
    0% {
      opacity: 0.8;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes mySpark3 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
