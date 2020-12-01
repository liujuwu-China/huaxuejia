<template>
  <div>

      <div>
        <van-tabbar class="fixe" v-model="active">
  <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">百科</van-tabbar-item>
  <van-tabbar-item name="friends" icon="shop-o">商家</van-tabbar-item>
  <van-tabbar-item name="setting" icon="newspaper-o">资讯</van-tabbar-item>
  <van-tabbar-item name="setting" icon="user-circle-o">资讯</van-tabbar-item>
</van-tabbar>
          
      </div>
  </div>
</template>
<style scoped>
.fixe {
  width: 100%;
  position: fixed;
  bottom: 0;
  border: 1px solid #F1F1F1;
  color: #777879;
  height: 10%;
}

</style>
<script>
export default {
  data() {
    return {
      active: 'home',
    };
  },
};
</script>