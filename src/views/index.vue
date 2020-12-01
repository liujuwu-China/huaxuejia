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
      <van-grid  :border="false" :column-num="5">
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
    <div>
      <h2>推广企业</h2>
      
    </div>
      <Foot></Foot>
    </div>
  </div>
</template>
<style scoped>
.all{
  background-color: #F0EFF4;
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
 ::v-deep .van-grid-item__content{
     padding: 6px 8px;
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