<template>
  <div class="all">
    <div>
      <Header></Header>
      <van-row class="search">
        <van-col span="6">
          <img class="serachimg" width="60" height="30" src="../assets/img1/1.png" />
        </van-col>
        <van-col span="18">
          <van-search
            class="search1"
            v-model="value"
            shape="round"
            background="#196bb7"
            placeholder="请输入搜索关键词"
          />
        </van-col>
      </van-row>
      <div class="run1">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img width="100%" src="../assets/img1/lun1.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img width="100%" src="../assets/img1/lun2.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img width="100%" src="../assets/img1/lun3.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img width="100%" src="../assets/img1/lun4.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img width="100%" src="../assets/img1/lun5.png" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div>
        <van-grid :border="false" :column-num="5">
          <van-grid-item>
            <img src="../assets/img1/2.png" width="60%" height="60%" alt />
            <a>产品</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/3.png" width="60%" height="60%" alt />
            <a>求购</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/4.png" width="60%" height="60%" alt />
            <a>百科</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/5.png" width="60%" height="60%" alt />
            <a>推广</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/7.png" width="60%" height="60%" alt />
            <a>商家</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/6.png" width="60%" height="60%" alt />
            <a>名片</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/8.png" width="60%" height="60%" alt />
            <a>活动</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/9.png" width="60%" height="60%" alt />
            <a>咨询</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/10.png" width="60%" height="60%" alt />
            <a>找工作</a>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/img1/16.png" width="60%" height="60%" alt />
            <a>简历</a>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="cen">
        <h3>推广企业</h3>
        <div class="xiagun">
          <div class="xiagun-ron">
            <img src="../assets/img1/17.png" alt />
            <img src="../assets/img1/18.png" alt />
            <img src="../assets/img1/19.png" alt />
            <img src="../assets/img1/17.png" alt />
            <img src="../assets/img1/18.png" alt />
            <img src="../assets/img1/19.png" alt />
          </div>
        </div>
      </div>
      <div class="cen2">
        <h3>热门资讯</h3>
        <div class="cen3">
          <ul>
            <li>
              <div class="cen3-left">
                <strong>重现化学之美|中国学者拍摄化学大片，惊艳全球!</strong>
                <p><span>重现化学·2020-11-30</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/20.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/21.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/22.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/23.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/24.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/25.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/26.png" width="100%" alt="">
              </div>
            </li>
            <li>
              <div class="cen3-left">
                <strong>精细化工龙头企业价值分析一新和成</strong>
                <p><span>赵辰看周期·2020-04-06</span></p>
              </div>
              <div class="cen3-right">
                  <img src="../assets/img1/27.png" width="100%" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>
<style scoped>
.all {
  background-color: #f0eff4;
  height: 1750px;
}
.search {
  background-color: #196bb7;
  height: 80px;
  line-height: 67px;
}
.serachimg {
  margin: 22px 0 0 20px;
}
.search1 {
  margin-top: 10px;
}
.lun1 {
  width: 100%;
}
.my-swipe {
  width: 100%;
}
::v-deep .van-grid-item__content {
  padding: 6px 8px;
}
.cen {
  background: #fff;
  margin: 10px 0;
}
.cen h3{
  padding: 10px ;
}
.xiagun {
  width: 100%;
}
.xiagun-ron {
  position: relative;
  overflow-x: scroll;
  word-break: break-all;
}
.xiagun-ron img {
  width: 130px;
}
.xiagun-ron img:nth-of-type(1) {
  padding-bottom: 10px;
}
.xiagun-ron img:nth-of-type(2) {
  position: absolute;
  left: 150px;
}
.xiagun-ron img:nth-of-type(3) {
  position: absolute;
  left: 300px;
}
.xiagun-ron img:nth-of-type(4) {
  position: absolute;
  left: 450px;
}
.xiagun-ron img:nth-of-type(5) {
  position: absolute;
  left: 600px;
}
.xiagun-ron img:nth-of-type(6) {
  position: absolute;
  left: 750px;
}
.cen2{
    margin-top:10px;
    background-color: #fff; 
}
.cen2 h3{
  padding: 10px;
}
.cen3{
  background-color: #fff; 
}
.cen3 ul li{
  list-style: none;
}
.cen3-left{ 
  float: left;
  width: 60%;
  height: 100px;
  background-color: #fff;
  padding: 10px 0;
}
.cen3-left>strong{
  font-size: 16px
}
.cen3-left>p{
  margin-top: 40px;
  color: #999999;
}
.cen3-right{
  padding: 10px 0;
  float: right;
  width: 40%;
  height: 100px;
  background-color: #fff; 
}
</style>
<script>
import Header from "../components/Header.vue";
import Foot from "../components/Foot.vue";
export default {
  components: {
    Header,
    Foot
  },
  data() {
    return {};
  }
};
</script>