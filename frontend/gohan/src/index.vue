<template>
　<div>
    <text class="question">{{ question }}</text>
    <div class="answerBtnGrp">
      <wxc-button
        :text="answerFirst"
        :btnStyle="answerBtnStyle"
        :textStyle="answerTextStyle"
        @wxcButtonClicked="answerClicked(true)">
      </wxc-button>
      <wxc-button
        :text="answerSecond"
        :btnStyle="answerBtnStyle"
        :textStyle="answerTextStyle"
        @wxcButtonClicked="answerClicked(false)">
      </wxc-button>
    </div>
    <!-- <index1 :props=props></index1> -->
　</div>
</template>

<style scoped lang="stylus">
.question {
  text-align: center;
  margin-bottom: 20px;
}

.answerBtnGrp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

<script>
import { WxcButton } from 'weex-ui'

module.exports = {
  components: { WxcButton },
  data: () => ({
    question: 'Q ジャンルは？',
    answerFirst: '和風にする',
    answerSecond: '和風以外にする',
    answerTextStyle: {
      color: 'white'
    },
    answerBtnStyle: {
      width: '300%',
      backgroundColor: 'green'
    }
  }),
  methods: {
    answerClicked(selected) {
      console.log(selected)
    }
  }
}
</script>