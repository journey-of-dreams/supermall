<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :isChecked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <button class="account" @click="accountClick">结算{{`(${checkLength})`}}</button>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    data() {
      return {

      }
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter((item) => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.$store.state.cartList.some(item => !item.checked)) {
          return false
        } else if (this.$store.state.cartList.length === 0) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          return this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          return this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      accountClick() {
        if (this.$store.state.cartList.length === 0) {
          this.$toast.show('您的购物车还没有任何商品，快去购物吧！')
        } else if (this.$store.state.cartList.every(item => !item.checked)) {
          this.$toast.show('请选择购买的商品')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;

  }

  .check-content {
    /* margin-left: 5px; */
    display: flex;
    align-items: center;
  }

  .check-button {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }

  .price {
    /* background-color: red; */
    margin-left: 85px;
  }

  .account {
    padding: 7px;
    border-radius: 15px;
    margin-left: 15px;
    width: 75px;
    border: none;
    color: #fff;
    background-color: rgb(255, 128, 0);
  }
</style>
