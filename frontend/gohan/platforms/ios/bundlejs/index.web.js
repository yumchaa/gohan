// { "framework": "Vue"} 

!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=12)}([function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(e,n){e.exports=function(e,n,t,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var l="function"==typeof a?a.options:a;n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns),o&&(l._scopeId=o);var p;if(r?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=p):t&&(p=t),p){var u=l.functional,c=u?l.render:l.beforeCreate;u?l.render=function(e,n){return p.call(n),c(e,n)}:l.beforeCreate=c?[].concat(c,p):[p]}return{esModule:i,exports:a,options:l}}},function(e,n,t){function o(e){for(var n=0;n<e.length;n++){var t=e[n],o=u[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(i(t.parts[r]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{for(var a=[],r=0;r<t.parts.length;r++)a.push(i(t.parts[r]));u[t.id]={id:t.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function i(e){var n,t,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(f)return A;o.parentNode.removeChild(o)}if(y){var i=h++;o=d||(d=r()),n=a.bind(null,o,i,!1),t=a.bind(null,o,i,!0)}else o=r(),n=s.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}function a(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function s(e,n){var t=n.css,o=n.media,r=n.sourceMap;if(o&&e.setAttribute("media",o),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=t(28),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,f=!1,A=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){f=t;var r=p(e,n);return o(r),function(n){for(var t=[],i=0;i<r.length;i++){var a=r[i],s=u[a.id];s.refs--,t.push(s)}n?(r=p(e,n),o(r)):r=[];for(var i=0;i<t.length;i++){var s=t[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var x=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n,t){function o(e){r||t(24)}var r=!1,i=t(1)(t(7),t(20),o,null,null);i.options.__file="/Users/a14346/Dev/Front-End/gohan/frontend/gohan/src/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(9);n.default={props:{text:{type:String,default:"确认"},type:{type:String,default:"taobao"},disabled:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object},computed:{mrBtnStyle:function(){var e=this.type,n=this.disabled,t=this.btnStyle,i=o({},r.STYLE_MAP[e],t);return n?o({},i,{backgroundColor:"rgba(0, 0, 0, 0.1)",borderWidth:0}):i},mrTextStyle:function(){var e=this.type,n=this.disabled,t=this.textStyle,i=o({},r.TEXT_STYLE_MAP[e],t);return n?o({},i,{color:"#FFFFFF"}):i}},methods:{onClicked:function(e){var n=this.type,t=this.disabled;this.$emit("wxcButtonClicked",{e:e,type:n,disabled:t})}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=weex.requireModule("animation");n.default={props:{show:{type:Boolean,default:!0},hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.6},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")"}},shouldShow:function(){var e=this,n=this.show;return this.hasAnimation&&setTimeout(function(){e.appearOverlay(n)},50),n}},methods:{overlayClicked:function(e){this.canAutoClose?this.appearOverlay(!1):this.$emit("wxcOverlayBodyClicked",{})},appearOverlay:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,r=this.hasAnimation,i=this.timingFunction,a=this.canAutoClose,s=!e&&a;s&&this.$emit("wxcOverlayBodyClicking",{});var l=this.$refs["wxc-overlay"];r&&l?o.transition(l,{styles:{opacity:e?1:0},duration:t,timingFunction:i[e?0:1],delay:0},function(){s&&n.$emit("wxcOverlayBodyClicked",{})}):s&&this.$emit("wxcOverlayBodyClicked",{})}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=t(10),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=weex.requireModule("animation"),l=weex.config.env.platform,p="object"===("undefined"==typeof window?"undefined":r(window))&&"web"===l.toLowerCase();n.default={components:{WxcOverlay:a.default},props:{show:{type:Boolean,default:!1},pos:{type:String,default:"bottom"},popupColor:{type:String,default:"#FFFFFF"},overlayCfg:{type:Object,default:function(){return{hasAnimation:!0,timingFunction:["ease-in","ease-out"],duration:300,opacity:.6}}},height:{type:[Number,String],default:840},standOut:{type:[Number,String],default:0},width:{type:[Number,String],default:750},animation:{type:Object,default:function(){return{timingFunction:"ease-in"}}}},data:function(){return{haveOverlay:!0,isOverShow:!0}},computed:{isNeedShow:function(){var e=this;return setTimeout(function(){e.appearPopup(e.show)},50),this.show},_height:function(){return this.appearPopup(this.show,150),this.height},transformValue:function(){return this.getTransform(this.pos,this.width,this.height,!0)},padStyle:function(){var e=this.pos,n=this.width,t=this.height,r=this.popupColor,i={width:n+"px",backgroundColor:r};return"top"===e&&(i=o({},i,{top:-t+"px",height:t+"px"})),"bottom"===e&&(i=o({},i,{bottom:-t+"px",height:t+"px"})),"left"===e&&(i=o({},i,{left:-n+"px"})),"right"===e&&(i=o({},i,{right:-n+"px"})),i}},methods:{handleTouchEnd:function(e){"Web"===weex.config.env.platform&&e.preventDefault&&e.preventDefault()},hide:function(){this.appearPopup(!1),this.$refs.overlay.appearOverlay(!1)},wxcOverlayBodyClicking:function(){this.isShow&&this.appearPopup(!1)},appearPopup:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.isShow=e;var r=this.$refs["wxc-popup"];r&&s.transition(r,o({styles:{transform:this.getTransform(this.pos,this.width,this.height,!e)},duration:t,delay:0},this.animation),function(){e||n.$emit("wxcPopupOverlayClicked",{pos:n.pos})})},getTransform:function(e,n,t,o){var r="top"===e||"bottom"===e?t:n,i=void 0;switch(p&&(r-=this.standOut),o&&(r=0),e){case"top":i="translateY("+r+"px)";break;case"bottom":i="translateY(-"+r+"px)";break;case"left":i="translateX("+r+"px)";break;case"right":i="translateX(-"+r+"px)"}return i}}}},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(11),i=o(r),a=t(8),s=o(a);e.exports={components:{WxcButton:s.default,WxcPopup:i.default},data:function(){return{isShow:!1}},methods:{buttonClicked:function(){this.isShow=!0},overlayClicked:function(){this.isShow=!1}}}},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(17);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o(r).default}})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.STYLE_MAP={taobao:{backgroundColor:"#FF5000"},fliggy:{backgroundColor:"#FFC900"},normal:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},highlight:{backgroundColor:"#FFFFFF",borderColor:"#EE9900",borderWidth:"1px"}},n.TEXT_STYLE_MAP={taobao:{color:"#FFFFFF"},fliggy:{color:"#3D3D3D"},normal:{color:"#3D3D3D"},highlight:{color:"#EE9900"}}},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(18);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o(r).default}})},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(19);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o(r).default}})},function(e,n,t){"use strict";var o=t(3);o.el="#root",new Vue(o)},function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n.wrapper {\n  align-items: center;\n  margin-top: 120px;\n}\n.title {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 48px;\n}\n.logo {\n  width: 360px;\n  height: 156px;\n}\n.desc {\n  padding-top: 20px;\n  color: #888;\n  font-size: 24px;\n}\n.scroller {\n  height: 800px;\n  flex-direction: row;\n}\n.panel {\n  width: 400px;\n  height: 700px;\n  margin: 50px;\n  border-width: 4px;\n  border-style: solid;\n  border-color: rgb(162, 217, 192);\n  background-color: rgba(162, 217, 192, 0.4);\n  justify-content: center;\n}\n.text {\n  font-size: 200px;\n  text-align: center;\n  color: #41b883;\n}\n","",{version:3,sources:["/Users/a14346/Dev/Front-End/gohan/frontend/gohan/src/index.vue?43a7f938"],names:[],mappings:";AA4BA;EACA,oBAAA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;EACA,cAAA;EACA,oBAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;EACA,iCAAA;EACA,2CAAA;EACA,wBAAA;CACA;AACA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;CACA",file:"index.vue",sourcesContent:["<template>\n  <div>\n    <wxc-button text=\"Open Popup\"\n                @wxcButtonClicked=\"buttonClicked\">\n    </wxc-button>\n    <wxc-popup width=\"500\"\n               pos=\"left\"\n               :show=\"isShow\"\n               @wxcPopupOverlayClicked=\"overlayClicked\">\n               <text class=\"freestyle\">aaaaaaaaaaaaaaaaa</text>\n    </wxc-popup>\n  </div>\n  \x3c!-- <div>\n    <text class=\"freestyle\">{{question}}</text>\n    <scroller class=\"scroller\" scroll-direction=\"horizontal\">\n      <div class=\"panel\" v-for=\"char in lists\" :key=\"char\" @click=\"change\">\n        <text class=\"text\">{{char}}</text>\n      </div>\n    </scroller>\n    <div class=\"wrapper\" @click=\"update\">\n      <image :src=\"logoUrl\" class=\"logo\"></image>\n      <text class=\"title\">Hello {{target}}</text>\n      <text class=\"desc\">Now, let's use vue to build your weex app.</text>\n    </div>\n  </div> --\x3e\n</template>\n\n<style>\n.wrapper {\n  align-items: center;\n  margin-top: 120px;\n}\n.title {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 48px;\n}\n.logo {\n  width: 360px;\n  height: 156px;\n}\n.desc {\n  padding-top: 20px;\n  color: #888;\n  font-size: 24px;\n}\n.scroller {\n  height: 800px;\n  flex-direction: row;\n}\n.panel {\n  width: 400px;\n  height: 700px;\n  margin: 50px;\n  border-width: 4px;\n  border-style: solid;\n  border-color: rgb(162, 217, 192);\n  background-color: rgba(162, 217, 192, 0.4);\n  justify-content: center;\n}\n.text {\n  font-size: 200px;\n  text-align: center;\n  color: #41b883;\n}\n</style>\n\n<script>\nimport { WxcButton, WxcPopup } from 'weex-ui'\n// or\n// import WxcButton from 'weex-ui/packages/wxc-button';\n// import WxcPopup from 'weex-ui/packages/wxc-popup';\nmodule.exports = {\n  components: { WxcButton, WxcPopup },\n  data: () => ({\n    isShow: false\n  }),\n  methods: {\n    buttonClicked() {\n      this.isShow = true\n    },\n    overlayClicked() {\n      this.isShow = false\n    }\n  }\n}\n// export default {\n//   data: {\n//     logoUrl:\n//       'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',\n//     target: 'World',\n//     question: 'Q1 色は？',\n//     lists: ['A', 'B', 'C', 'D', 'E', 'F']\n//   },\n//   methods: {\n//     update: function(e) {\n//       this.target = 'Weex'\n//       console.log('target:', this.target)\n//     },\n//     change: function(e) {\n//       this.question = 'Q2 ジャンルは？'\n//       this.lists = ['1', '2', '3', '4', '5', '6']\n//     }\n//   }\n// }\n<\/script>"],sourceRoot:""}])},function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n.wxc-overlay[data-v-484fa43a] {\n  width: 750px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n","",{version:3,sources:["/Users/a14346/Dev/Front-End/gohan/frontend/gohan/node_modules/weex-ui/packages/wxc-overlay/index.vue?346a33ce"],names:[],mappings:";AAiBA;EACA,aAAA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,SAAA;CACA",file:"index.vue",sourcesContent:["\x3c!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. --\x3e\n\x3c!-- Created by Tw93 on 16/10/25. --\x3e\n\x3c!--A gray overlay mask--\x3e\n\n<template>\n  <div>\n    <div class=\"wxc-overlay\"\n         ref=\"wxc-overlay\"\n         v-if=\"show\"\n         :hack=\"shouldShow\"\n         @click=\"overlayClicked\"\n         :style=\"overlayStyle\">\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .wxc-overlay {\n    width: 750px;\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n  }\n</style>\n\n<script>\n  const animation = weex.requireModule('animation');\n  export default {\n    props: {\n      show: {\n        type: Boolean,\n        default: true\n      },\n      hasAnimation: {\n        type: Boolean,\n        default: true\n      },\n      duration: {\n        type: [Number, String],\n        default: 300\n      },\n      timingFunction: {\n        type: Array,\n        default: () => (['ease-in', 'ease-out'])\n      },\n      opacity: {\n        type: [Number, String],\n        default: 0.6\n      },\n      canAutoClose: {\n        type: Boolean,\n        default: true\n      }\n    },\n    computed: {\n      overlayStyle () {\n        return {\n          opacity: this.hasAnimation ? 0 : 1,\n          backgroundColor: `rgba(0, 0, 0,${this.opacity})`\n        }\n      },\n      shouldShow () {\n        const { show, hasAnimation } = this;\n        hasAnimation && setTimeout(() => {\n          this.appearOverlay(show);\n        }, 50);\n        return show;\n      }\n    },\n    methods: {\n      overlayClicked (e) {\n        this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});\n      },\n      appearOverlay (bool, duration = this.duration) {\n        const { hasAnimation, timingFunction, canAutoClose } = this;\n        const needEmit = !bool && canAutoClose;\n        needEmit && (this.$emit('wxcOverlayBodyClicking', {}));\n        const overlayEl = this.$refs['wxc-overlay'];\n        if (hasAnimation && overlayEl) {\n          animation.transition(overlayEl, {\n            styles: {\n              opacity: bool ? 1 : 0\n            },\n            duration,\n            timingFunction: timingFunction[bool ? 0 : 1],\n            delay: 0\n          }, () => {\n            needEmit && (this.$emit('wxcOverlayBodyClicked', {}));\n          });\n        } else {\n          needEmit && (this.$emit('wxcOverlayBodyClicked', {}));\n        }\n      }\n    }\n  };\n<\/script>\n"],sourceRoot:""}])},function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n.wxc-popup[data-v-549c1554] {\n  position: fixed;\n  width: 750px;\n}\n.top[data-v-549c1554] {\n  left: 0;\n  right: 0;\n}\n.bottom[data-v-549c1554] {\n  left: 0;\n  right: 0;\n}\n.left[data-v-549c1554] {\n  bottom: 0;\n  top: 0;\n}\n.right[data-v-549c1554] {\n  bottom: 0;\n  top: 0;\n}\n\n","",{version:3,sources:["/Users/a14346/Dev/Front-End/gohan/frontend/gohan/node_modules/weex-ui/packages/wxc-popup/index.vue?4bd8e7aa"],names:[],mappings:";AA0BA;EACA,gBAAA;EACA,aAAA;CACA;AAEA;EACA,QAAA;EACA,SAAA;CACA;AAEA;EACA,QAAA;EACA,SAAA;CACA;AAEA;EACA,UAAA;EACA,OAAA;CACA;AAEA;EACA,UAAA;EACA,OAAA;CACA",file:"index.vue",sourcesContent:["\x3c!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. --\x3e\n\x3c!-- Created by Tw93 on 16/10/25. --\x3e\n\x3c!--A popup box with customized contents.--\x3e\n\n<template>\n  <div>\n    <div @touchend=\"handleTouchEnd\">\n      <wxc-overlay :show=\"haveOverlay && isOverShow\"\n                   v-if=\"show\"\n                   ref=\"overlay\"\n                   v-bind=\"overlayCfg\"\n                   @wxcOverlayBodyClicking=\"wxcOverlayBodyClicking\"></wxc-overlay>\n    </div>\n    <div ref=\"wxc-popup\"\n         v-if=\"show\"\n         :height=\"_height\"\n         :hack=\"isNeedShow\"\n         @click=\"()=>{}\"\n         :class=\"['wxc-popup', pos]\"\n         :style=\"padStyle\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .wxc-popup {\n    position: fixed;\n    width: 750px;\n  }\n\n  .top {\n    left: 0;\n    right: 0;\n  }\n\n  .bottom {\n    left: 0;\n    right: 0;\n  }\n\n  .left {\n    bottom: 0;\n    top: 0;\n  }\n\n  .right {\n    bottom: 0;\n    top: 0;\n  }\n\n</style>\n\n<script>\n  const animation = weex.requireModule('animation');\n  const { platform } = weex.config.env;\n  const isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web';\n  import WxcOverlay from '../wxc-overlay';\n\n  export default {\n    components: { WxcOverlay },\n    props: {\n      show: {\n        type: Boolean,\n        default: false\n      },\n      pos: {\n        type: String,\n        default: 'bottom'\n      },\n      popupColor: {\n        type: String,\n        default: '#FFFFFF'\n      },\n      overlayCfg: {\n        type: Object,\n        default: () => ({\n          hasAnimation: true,\n          timingFunction: ['ease-in', 'ease-out'],\n          duration: 300,\n          opacity: 0.6\n        })\n      },\n      height: {\n        type: [Number, String],\n        default: 840\n      },\n      standOut: {\n        type: [Number, String],\n        default: 0\n      },\n      width: {\n        type: [Number, String],\n        default: 750\n      },\n      animation: {\n        type: Object,\n        default: () => ({\n          timingFunction: 'ease-in'\n        })\n      }\n    },\n    data: () => ({\n      haveOverlay: true,\n      isOverShow: true\n    }),\n    computed: {\n      isNeedShow () {\n        setTimeout(() => {\n          this.appearPopup(this.show);\n        }, 50)\n        return this.show;\n      },\n      _height () {\n        this.appearPopup(this.show, 150);\n        return this.height;\n      },\n      transformValue () {\n        return this.getTransform(this.pos, this.width, this.height, true);\n      },\n      padStyle () {\n        const { pos, width, height, popupColor } = this;\n        let style = {\n          width: `${width}px`,\n          backgroundColor: popupColor\n        };\n        pos === 'top' && (style = {\n          ...style,\n          top: `${-height}px`,\n          height: `${height}px`\n        });\n        pos === 'bottom' && (style = {\n          ...style,\n          bottom: `${-height}px`,\n          height: `${height}px`\n        });\n        pos === 'left' && (style = {\n          ...style,\n          left: `${-width}px`\n        });\n        pos === 'right' && (style = {\n          ...style,\n          right: `${-width}px`\n        });\n        return style;\n      }\n    },\n    methods: {\n      handleTouchEnd (e) {\n        // 在支付宝上面有点击穿透问题\n        const { platform } = weex.config.env;\n        platform === 'Web' && e.preventDefault && e.preventDefault();\n      },\n      hide () {\n        this.appearPopup(false);\n        this.$refs.overlay.appearOverlay(false);\n      },\n      wxcOverlayBodyClicking () {\n        this.isShow && this.appearPopup(false);\n      },\n      appearPopup (bool, duration = 300) {\n        this.isShow = bool;\n        const popupEl = this.$refs['wxc-popup'];\n        if (!popupEl) {\n          return;\n        }\n        animation.transition(popupEl, {\n          styles: {\n            transform: this.getTransform(this.pos, this.width, this.height, !bool)\n          },\n          duration,\n          delay: 0,\n          ...this.animation\n        }, () => {\n          if (!bool) {\n            this.$emit('wxcPopupOverlayClicked', { pos: this.pos });\n          }\n        });\n      },\n      getTransform (pos, width, height, bool) {\n        let _size = pos === 'top' || pos === 'bottom' ? height : width;\n        let _transform;\n        if (isWeb) {\n          _size -= this.standOut;\n        }\n        bool && (_size = 0);\n        switch (pos) {\n          case 'top':\n            _transform = `translateY(${_size}px)`;\n            break;\n          case 'bottom':\n            _transform = `translateY(-${_size}px)`;\n            break;\n          case 'left':\n            _transform = `translateX(${_size}px)`;\n            break;\n          case 'right':\n            _transform = `translateX(-${_size}px)`;\n            break;\n        }\n        return _transform;\n      }\n    }\n  }\n<\/script>\n"],sourceRoot:""}])},function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n.wxc-btn[data-v-5ab3451e] {\n  width: 702px;\n  height: 88px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n.btn-text[data-v-5ab3451e] {\n  text-overflow: ellipsis;\n  lines: 1;\n  font-size: 36px;\n  color: #FFFFFF;\n}\n\n","",{version:3,sources:["/Users/a14346/Dev/Front-End/gohan/frontend/gohan/node_modules/weex-ui/packages/wxc-button/index.vue?7bb118c3"],names:[],mappings:";AA8DA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CACA;AAEA;EACA,wBAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;CACA",file:"index.vue",sourcesContent:['\x3c!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. --\x3e\n\x3c!-- Created by Tw93 on 17/07/28. --\x3e\n\n<template>\n  <div class="wxc-btn"\n       :style="mrBtnStyle"\n       @click="onClicked"\n       :accessible="true"\n       :aria-label="text">\n    <text class="btn-text" :style="mrTextStyle">{{text}}</text>\n  </div>\n</template>\n\n<script>\n  import { STYLE_MAP, TEXT_STYLE_MAP } from \'./type\'\n\n  export default {\n    props: {\n      text: {\n        type: String,\n        default: \'确认\'\n      },\n      type: {\n        type: String,\n        default: \'taobao\'\n      },\n      disabled: {\n        type: Boolean,\n        default: false\n      },\n      btnStyle: Object,\n      textStyle: Object\n    },\n    computed: {\n      mrBtnStyle () {\n        const { type, disabled, btnStyle } = this;\n        const mrBtnStyle = {\n          ...STYLE_MAP[type],\n          ...btnStyle\n        };\n        return disabled ? {\n          ...mrBtnStyle,\n          backgroundColor: \'rgba(0, 0, 0, 0.1)\',\n          borderWidth: 0\n        } : mrBtnStyle;\n      },\n      mrTextStyle () {\n        const { type, disabled, textStyle } = this;\n        const mrTextStyle = { ...TEXT_STYLE_MAP[type], ...textStyle };\n        return disabled ? { ...mrTextStyle, color: \'#FFFFFF\' } : mrTextStyle;\n      }\n    },\n    methods: {\n      onClicked (e) {\n        const { type, disabled } = this;\n        this.$emit(\'wxcButtonClicked\', { e, type, disabled })\n      }\n    }\n  }\n<\/script>\n\n<style scoped>\n  .wxc-btn {\n    width: 702px;\n    height: 88px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 12px;\n  }\n\n  .btn-text {\n    text-overflow: ellipsis;\n    lines: 1;\n    font-size: 36px;\n    color: #FFFFFF;\n  }\n\n</style>\n'],sourceRoot:""}])},function(e,n,t){function o(e){r||t(27)}var r=!1,i=t(1)(t(4),t(23),o,"data-v-5ab3451e",null);i.options.__file="/Users/a14346/Dev/Front-End/gohan/frontend/gohan/node_modules/weex-ui/packages/wxc-button/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,n,t){function o(e){r||t(25)}var r=!1,i=t(1)(t(5),t(21),o,"data-v-484fa43a",null);i.options.__file="/Users/a14346/Dev/Front-End/gohan/frontend/gohan/node_modules/weex-ui/packages/wxc-overlay/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,n,t){function o(e){r||t(26)}var r=!1,i=t(1)(t(6),t(22),o,"data-v-549c1554",null);i.options.__file="/Users/a14346/Dev/Front-End/gohan/frontend/gohan/node_modules/weex-ui/packages/wxc-popup/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("wxc-button",{attrs:{text:"Open Popup"},on:{wxcButtonClicked:e.buttonClicked}}),e._v(" "),t("wxc-popup",{attrs:{width:"500",pos:"left",show:e.isShow},on:{wxcPopupOverlayClicked:e.overlayClicked}},[t("text",{staticClass:"freestyle"},[e._v("aaaaaaaaaaaaaaaaa")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.show?t("div",{ref:"wxc-overlay",staticClass:"wxc-overlay",style:e.overlayStyle,attrs:{hack:e.shouldShow},on:{click:e.overlayClicked}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{on:{touchend:e.handleTouchEnd}},[e.show?t("wxc-overlay",e._b({ref:"overlay",attrs:{show:e.haveOverlay&&e.isOverShow},on:{wxcOverlayBodyClicking:e.wxcOverlayBodyClicking}},"wxc-overlay",e.overlayCfg,!1)):e._e()],1),e._v(" "),e.show?t("div",{ref:"wxc-popup",class:["wxc-popup",e.pos],style:e.padStyle,attrs:{height:e._height,hack:e.isNeedShow},on:{click:function(){}}},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wxc-btn",style:e.mrBtnStyle,attrs:{accessible:!0,"aria-label":e.text},on:{click:e.onClicked}},[t("text",{staticClass:"btn-text",style:e.mrTextStyle},[e._v(e._s(e.text))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){var o=t(13);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(2)("46e0ef52",o,!1)},function(e,n,t){var o=t(14);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(2)("7df7db9e",o,!1)},function(e,n,t){var o=t(15);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(2)("032f6966",o,!1)},function(e,n,t){var o=t(16);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(2)("088ddc6c",o,!1)},function(e,n){e.exports=function(e,n){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=i[0],s=i[1],l=i[2],p=i[3],u={id:e+":"+r,css:s,media:l,sourceMap:p};o[a]?o[a].parts.push(u):t.push(o[a]={id:a,parts:[u]})}return t}}]);
//# sourceMappingURL=index.web.js.map