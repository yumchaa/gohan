<template>
　<div class="wrapper">
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
      <cuisins v-bind:results="results"></cuisins>
    </div>
　</div>
</template>

<style scoped lang="stylus">
.wrapper {
  justify-content: center;
  align-items: center;
}

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
import Cuisins from './cuisins.vue'

module.exports = {
  components: { WxcButton, Cuisins },
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
    },
    results: [
      {
        name: '料理1',
        image:
          'https://gw.alicdn.com/tfs/TB1788ygMMPMeJjy1XdXXasrXXa-1919-1520.jpg'
      },
      {
        name: '料理2',
        image:
          'http://img.alicdn.com/imgextra/i4/283601870/TB2SapQXBjkJKJjSspfXXc2tXXa_!!283601870-0-beehive-scenes.jpg'
      },
      {
        name: '料理3',
        image:
          'https://gw.alicdn.com/tfs/TB1788ygMMPMeJjy1XdXXasrXXa-1919-1520.jpg'
      },
      {
        name: '料理4',
        image:
          'http://img.alicdn.com/imgextra/i4/283601870/TB2SapQXBjkJKJjSspfXXc2tXXa_!!283601870-0-beehive-scenes.jpg'
      },
      {
        name: '料理5',
        image:
          'https://gw.alicdn.com/tfs/TB1788ygMMPMeJjy1XdXXasrXXa-1919-1520.jpg'
      },
      {
        name: '料理6',
        image:
          'http://img.alicdn.com/imgextra/i4/283601870/TB2SapQXBjkJKJjSspfXXc2tXXa_!!283601870-0-beehive-scenes.jpg'
      },
      {
        name: '料理7',
        image:
          'https://gw.alicdn.com/tfs/TB1788ygMMPMeJjy1XdXXasrXXa-1919-1520.jpg'
      },
      {
        name: '料理8',
        image:
          'http://img.alicdn.com/imgextra/i4/283601870/TB2SapQXBjkJKJjSspfXXc2tXXa_!!283601870-0-beehive-scenes.jpg'
      },
      {
        name: '料理9',
        image:
          'https://gw.alicdn.com/tfs/TB1788ygMMPMeJjy1XdXXasrXXa-1919-1520.jpg'
      },
      {
        name: '料理10',
        image:
          'http://img.alicdn.com/imgextra/i4/283601870/TB2SapQXBjkJKJjSspfXXc2tXXa_!!283601870-0-beehive-scenes.jpg'
      }
    ]
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