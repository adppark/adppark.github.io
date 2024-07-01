(function(){"use strict";var e={4736:function(e,t,s){var n=s(5130),o=s(6768);const r={class:"container mx-auto"};function a(e,t,s,n,a,i){const c=(0,o.g2)("ChatBox");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(c)])}var i=s(4232);const c=e=>((0,o.Qi)("data-v-0246847e"),e=e(),(0,o.jt)(),e),u={class:"chatbox-container"},l={class:"container"},f=c((()=>(0,o.Lk)("h1",null,"의상현 Bot V1",-1))),d={class:"messageBox mt-8",ref:"messageBox"},p={class:"inputContainer"},g=c((()=>(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-6 h-6"},[(0,o.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.75 19.25l14.5-7.25-14.5-7.25v5.5L14 12l-9.25 4.75v2.5z"})],-1))),h=[g];function m(e,t,s,r,a,c){return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("div",l,[f,(0,o.Lk)("div",d,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.messages,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:(0,i.C4)("user"==e.from?"messageFromUser":"messageFromChatGpt")},[(0,o.Lk)("div",{class:(0,i.C4)("user"==e.from?"userMessageWrapper":"chatGptMessageWrapper")},[(0,o.Lk)("div",{class:(0,i.C4)("user"==e.from?"userMessageContent":"chatGptMessageContent")},(0,i.v_)(e.data),3)],2)],2)))),128))],512),(0,o.Lk)("div",p,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.currentMessage=e),onKeyup:t[1]||(t[1]=(0,n.jR)(((...e)=>c.sendMessage&&c.sendMessage(...e)),["enter"])),type:"text",class:"messageInput",placeholder:"Ask me anything..."},null,544),[[n.Jo,a.currentMessage]]),(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>c.sendMessage&&c.sendMessage(...e)),class:"askButton"},h)])])])}s(4114);var v=s(4373),k={name:"ChatBox",data(){return{currentMessage:"",messages:[]}},methods:{async sendMessage(){if(!this.currentMessage.trim())return;this.messages.push({from:"user",data:this.currentMessage});const e={from:"gpt-doctor",data:"..."};this.messages.push(e);const t=this.currentMessage;this.currentMessage="",this.$nextTick((()=>{this.scrollToBottom()}));try{const s=await v.A.post("https://asia-northeast3-profound-keel-395608.cloudfunctions.net/gpt-doctor-v1",{message_user:t,session_id:"test"});this.messages.splice(this.messages.indexOf(e),1,{from:"gpt-doctor",data:s.data.message_asst})}catch(s){this.messages.splice(this.messages.indexOf(e),1,{from:"gpt-doctor",data:"Sorry, there was an error processing your request."})}this.$nextTick((()=>{this.scrollToBottom()}))},scrollToBottom(){const e=this.$refs.messageBox;e.scrollTop=e.scrollHeight}}},b=s(1241);const y=(0,b.A)(k,[["render",m],["__scopeId","data-v-0246847e"]]);var x=y,M={name:"App",components:{ChatBox:x}};const C=(0,b.A)(M,[["render",a]]);var w=C;(0,n.Ef)(w).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,r){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],r=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,o,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],i=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(c)var l=c(s)}for(t&&t(n);u<a.length;u++)r=a[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(l)},n=self["webpackChunkdoctor_bot"]=self["webpackChunkdoctor_bot"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(4736)}));n=s.O(n)})();
//# sourceMappingURL=app.1b1deb0c.js.map