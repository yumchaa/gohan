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
  margin-top: 100px;
}

.answerBtnGrp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

<script>
import axios from 'axios'
import { WxcButton } from 'weex-ui'

module.exports = {
  components: { WxcButton },
  data: () => ({
    question: '',
    answerFirst: '',
    answerSecond: '',
    answerTextStyle: {
      color: 'white'
    },
    answerBtnStyle: {
      width: '300%',
      backgroundColor: 'green'
    }
  }),
  created: function() {
    axios
      .get('http://localhost:3000/api')
      .then(res => {
        this.question = res.data.question
        this.answerFirst = res.data.answerFirst
        this.answerSecond = res.data.answerSecond
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    answerClicked(selected) {
      console.log(selected)
    }
  }
}
</script>