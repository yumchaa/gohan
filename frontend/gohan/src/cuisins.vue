<template>
  <div class="content">
    <text class="content-title">料理一覧</text>
    <scroller class="scroller">
      <div class="list">
        <div style="width:400" v-for="item in results" :key="item.name">
          <text :style="{ width }" @load="resize">{{item.name}}</text>
          <image :style="{ width, height }" @load="resize" :src="item.image" />
        </div>
      </div>
    </scroller>
  </div>
</template>

<style scoped lang="stylus">
.content {
  width: 800;
  text-align: center;
}

.scroller {
  height: 900;
}

.content-title {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 100px;
}

.list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

<script>
import { WxcButton, WxcPopup } from 'weex-ui'
module.exports = {
  components: { WxcButton, WxcPopup },
  props: ['results'],
  data: () => ({
    loading: true,
    width: 1,
    height: 1
  }),
  methods: {
    resize(event) {
      if (event.success) {
        this.loading = false
        const ratio = event.size.naturalHeight / event.size.naturalWidth
        this.width = Math.min(event.size.naturalWidth, 800) / 2
        this.height = Math.min(this.width * ratio, 1200)
      }
    }
  }
}
</script>