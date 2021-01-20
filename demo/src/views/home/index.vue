<template>
  <div class="home-container">
      <!-- 头部导航 -->
      <van-nav-bar title="购物商城"/>
      <!-- 搜索框 -->
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <!-- 轮播 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <!-- 秒杀 -->
      <van-grid :gutter="50">
      <van-grid-item v-for="value in 4" :key="value" text="文字" />
      </van-grid>
      <!-- 商品 -->
      <van-card
        num="2"
         price="2.00"
         desc="描述信息"
         title="商品标题"
         thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
         </template>
         <template #footer>
             <van-button size="mini">按钮</van-button>
             <van-button size="mini">按钮</van-button>
        </template>
    </van-card>
    <van-card
        num="2"
         price="2.00"
         desc="描述信息"
         title="商品标题"
         thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
         </template>
         <template #footer>
             <van-button size="mini">按钮</van-button>
             <van-button size="mini">按钮</van-button>
        </template>
    </van-card>
    <van-card
        num="2"
         price="2.00"
         desc="描述信息"
         title="商品标题"
         thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
         </template>
         <template #footer>
             <van-button size="mini">按钮</van-button>
             <van-button size="mini">按钮</van-button>
        </template>
    </van-card>
  </div>
</template>

<script>
export default {
name:'HomeIndex'
}
</script>

<style lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: pink;
  }
  .van-nav-bar{
      background-color: pink;
  }
</style>