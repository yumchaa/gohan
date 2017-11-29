<template>
  <div>
    <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked">
    </wxc-button>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
               <text class="freestyle">aaaaaaaaaaaaaaaaa</text>
    </wxc-popup>
  </div>
  <!-- <div>
    <text class="freestyle">{{question}}</text>
    <scroller class="scroller" scroll-direction="horizontal">
      <div class="panel" v-for="char in lists" :key="char" @click="change">
        <text class="text">{{char}}</text>
      </div>
    </scroller>
    <div class="wrapper" @click="update">
      <image :src="logoUrl" class="logo"></image>
      <text class="title">Hello {{target}}</text>
      <text class="desc">Now, let's use vue to build your weex app.</text>
    </div>
  </div> -->
</template>

<style>
.wrapper {
  align-items: center;
  margin-top: 120px;
}
.title {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 48px;
}
.logo {
  width: 360px;
  height: 156px;
}
.desc {
  padding-top: 20px;
  color: #888;
  font-size: 24px;
}
.scroller {
  height: 800px;
  flex-direction: row;
}
.panel {
  width: 400px;
  height: 700px;
  margin: 50px;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.4);
  justify-content: center;
}
.text {
  font-size: 200px;
  text-align: center;
  color: #41b883;
}
</style>

<script>
import { WxcButton, WxcPopup } from 'weex-ui'
// or
// import WxcButton from 'weex-ui/packages/wxc-button';
// import WxcPopup from 'weex-ui/packages/wxc-popup';
module.exports = {
  components: { WxcButton, WxcPopup },
  data: () => ({
    isShow: false
  }),
  methods: {
    buttonClicked() {
      this.isShow = true
    },
    overlayClicked() {
      this.isShow = false
    }
  }
}
// export default {
//   data: {
//     logoUrl:
//       'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
//     target: 'World',
//     question: 'Q1 色は？',
//     lists: ['A', 'B', 'C', 'D', 'E', 'F']
//   },
//   methods: {
//     update: function(e) {
//       this.target = 'Weex'
//       console.log('target:', this.target)
//     },
//     change: function(e) {
//       this.question = 'Q2 ジャンルは？'
//       this.lists = ['1', '2', '3', '4', '5', '6']
//     }
//   }
// }
</script>