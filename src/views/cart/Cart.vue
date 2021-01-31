<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll3">
        <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {
    mapGetters
  } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed: {
      // mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性中
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })
    },
    activated() {
      this.$refs.scroll3.refresh()
      console.log(this.$refs.scroll3.scroll.scrollerHeight)
    },
    methods: {

    }
  }
</script>

<style scoped>
  .nav-bar {
    background: var(--color-tint);
    color: #FFFFFF;
  }

  .cart {
    height: 100vh;
  }

  .content {
    overflow: hidden;
    height: calc(100% - 44px - 49px - 49px);
    width: 100%;
  }
</style>
