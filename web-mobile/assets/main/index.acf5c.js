window.__require=function t(e,o,i){function n(c,s){if(!o[c]){if(!e[c]){var u=c.split("/");if(u=u[u.length-1],!e[u]){var l="function"==typeof __require&&__require;if(!s&&l)return l(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+c+"'")}c=u}var a=o[c]={exports:{}};e[c][0].call(a.exports,function(t){return n(e[c][1][t]||t)},a,a.exports,t,e,o,i)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,u=c.property,l=window.mgtv,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scrollViewCount=null,e.labeItem=null,e.sayButton=null,e.tips=null,e.scrollView=null,e.id=1,e.scrollViewCountheight=0,e.userId=null,e.token="112233445566",e.isJoinIn=!1,e.micMutState=!0,e.earMutState=!1,e}return n(e,t),e.prototype.start=function(){this.sayButton.on(cc.Node.EventType.TOUCH_START,this.touchStart,this),this.sayButton.on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this),this.sayButton.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this),this.userId=this.generateUUID()},e.prototype.update=function(){this.isJoinIn?this.tips.string="\u5df2\u8fde\u63a5\u8bed\u97f3\u623f":this.tips.string="\u672a\u8fde\u63a5\u8bed\u97f3\u623f"},e.prototype.touchStart=function(){this.isJoinIn?this.apiChangeVoiceStatus(!1,!1):this.createItem(this.id+"\u8bf7\u5148\u52a0\u5165\u8bed\u97f3\u623f")},e.prototype.touchEnd=function(){this.isJoinIn&&this.apiChangeVoiceStatus(!0,!1)},e.prototype.joinButtonOnClick=function(){if(l){var t=this;this.joinMgtvVoice(function(){t.createItem(t.id+"\u52a0\u5165\u6210\u529f"),t.isJoinIn=!0},function(e){t.createItem(t.id+"\u52a0\u5165s\u5931\u8d25"+e)})}else this.createItem(this.id+"\u6ca1\u6709mgtv\u53d8\u91cf")},e.prototype.joinMgtvVoice=function(t,e){this.userId?l.joinVoIPChat({roomType:"voice",token:this.token,userId:this.userId,groupId:1,IMGTVVoiceMuteConfig:{muteMicrophone:this.micMutState,muteEarphone:this.earMutState},success:function(e){console.log("res>>>>>",e),t&&t(e)},complete:function(t){console.log("resComplete>>>",t)},fail:function(t){e(t)}}):this.createItem(this.id+"\u8bf7\u767b\u5f55\u6210\u529f\u540e\u91cd\u8bd5")},e.prototype.exitButtonOnClick=function(){if(l){var t=this;t.apiExitRoom(function(){t.createItem(t.id+"\u9000\u51fa\u6210\u529f"),t.isJoinIn=!1},function(){t.createItem(t.id+"\u9000\u51fa\u5931\u8d25")})}else this.createItem(this.id+"\u6ca1\u6709mgtv\u53d8\u91cf")},e.isInMgtvApp=function(){return/imgo/i.test(window.navigator.userAgent)},e.prototype.createItem=function(t){var e=cc.instantiate(this.labeItem);return e.active=!0,e.getComponent(cc.Label).string=t,this.id++,this.scrollViewCount.addChild(e),this.scrollViewCountheight+=e.height,this.scrollViewCountheight>this.scrollViewCount.height&&(this.scrollViewCount.height=this.scrollViewCountheight,this.scrollView.scrollToBottom()),e},e.prototype.generateUUID=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?o:3&o|8).toString(16)})},e.prototype.apiChangeVoiceStatus=function(t,e,o,i){l?(this.micMutState=t,this.earMutState=e,l.updateVoIPChatMuteConfig({IMGTVVoiceMuteConfig:{muteMicrophone:this.micMutState,muteEarphone:this.earMutState},success:function(t){console.log("res>>>>>",t),o&&o()},complete:function(t){console.log("resComplete>>>",t)},fail:function(t){console.log("err>>>>",t),i&&i(t)}})):this.createItem(this.id+"\u6ca1\u6709mgtv\u53d8\u91cf")},e.prototype.apiExitRoom=function(t,e){l?l.exitVoIPChat({success:function(e){console.log("res>>>>>",e),t&&t()},complete:function(t){console.log("resComplete>>>",t)},fail:function(t){console.log("err>>>>",t),e&&e(t)}}):this.createItem(this.id+"\u6ca1\u6709mgtv\u53d8\u91cf")},e.prototype.earButtonOnClick=function(){var t=!this.earMutState;this.isJoinIn?this.apiChangeVoiceStatus(!0,t):this.createItem(this.id+"\u8bf7\u5148\u52a0\u5165\u8bed\u97f3\u623f")},r([u(cc.Node)],e.prototype,"scrollViewCount",void 0),r([u(cc.Node)],e.prototype,"labeItem",void 0),r([u(cc.Node)],e.prototype,"sayButton",void 0),r([u(cc.Label)],e.prototype,"tips",void 0),r([u(cc.ScrollView)],e.prototype,"scrollView",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(t,e){"use strict";cc._RF.push(e,"9368euWuqJEk6CMbEzabIfp","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["Helloworld","use_v2.1-2.2.1_cc.Toggle_event"]);