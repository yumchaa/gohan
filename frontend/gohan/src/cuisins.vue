<template>
  <div class="content">
    <text class="content-title">料理一覧</text>
    <scroller class="scroller">
      <div class="list">
        <div style="width: 300px" v-for="item in results" :key="item.name">
          <text :style="{ width }" @load="resize">{{item.name}}</text>
          <image :style="{ width, height }" @load="resize" :src="item.image" />
        </div>
      </div>
    </scroller>
  </div>
</template>

<style scoped lang="stylus">
.content {
  text-align: center;
}

.scroller {
  height: 900px;
}

.content-title {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 100px;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>

<script>
module.exports = {
  props: {
    results: {
      type: Array,
      required: true
    }
  },
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
        this.width = Math.min(event.size.naturalWidth, 600) / 2
        this.height = Math.min(this.width * ratio, 1000)
      }
    }
  }
}
</script>