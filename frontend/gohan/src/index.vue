<template>
　<div>
    <text class="question">{{ question }}</text>
    <div class="answerBtnGrp">
      <wxc-button
        text="はい"
        :btnStyle="answerBtnStyle"
        :textStyle="answerTextStyle"
        @wxcButtonClicked="answerClicked(true)">
      </wxc-button>
      <wxc-button
        text="いいえ"
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
    node: 1,
    question: '',
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
      .get('http://gohan-backend.herokuapp.com/api/cuisines')
      .then(res => {
        this.question = res.data.selection.feature
        this.results = res.data.now_candidates
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    answerClicked(selected) {
      axios
        .get(
          `http://gohan-backend.herokuapp.com/api/cuisines?node=${this
            .node}&answer=${selected}`
        )
        .then(res => {
          this.node = res.data.node
          this.question = res.data.selection.feature
          this.results = res.data.now_candidates
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>