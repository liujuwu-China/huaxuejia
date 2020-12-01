<template>
  <div>

      <div>
          <van-grid class="fixe" :column-num="5" >
  <router-link to=""><van-grid-item icon="wap-home-o" text="首页"/></router-link>
  <van-grid-item icon="search" text="百科" />
  <van-grid-item icon="shop-o" text="商家" />
  <van-grid-item icon="newspaper-o" text="资讯" />
  <van-grid-item icon="user-circle-o" text="我的" />
</van-grid>
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