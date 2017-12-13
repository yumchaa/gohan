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
    <div>
      <cuisins :results="results"></cuisins>
    </div>
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
import axios from 'weex-axios'
import { WxcButton } from 'weex-ui'
import Cuisins from './cuisins.vue'

module.exports = {
  components: { WxcButton, Cuisins },
  data: () => ({
    question: '',
    answerFirst: '',
    answerSecond: '',
    results: [],
    answerTextStyle: {
      color: 'white',
      height: '150px',
      lineHeight: '150px'
    },
    answerBtnStyle: {
      width: '300px',
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
        this.results = res.data.results
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