"use strict";(self["webpackChunkdoctor_bot"]=self["webpackChunkdoctor_bot"]||[]).push([[294],{653:function(e,n,t){var s=t(4373),o=t(5818);const a=s.A.create({baseURL:o.A.apiBaseUrl});n.A=a},1294:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var s=t(6768);const o=e=>((0,s.Qi)("data-v-0be15e4e"),e=e(),(0,s.jt)(),e),a={class:"loginpage"},i={class:"login-container"},c=o((()=>(0,s.Lk)("div",{class:"header-title"},[(0,s.Lk)("h1",null,"의상현 DoctorChat")],-1))),r=o((()=>(0,s.Lk)("div",{class:"sub-title"},"Welcome Back",-1))),l=o((()=>(0,s.Lk)("div",{class:"desc"},"Create an account a start messaging now!",-1))),u=o((()=>(0,s.Lk)("div",{class:"space-before-button"},null,-1))),g=["src"],p={class:"signup-desc"},d=o((()=>(0,s.Lk)("footer",{class:"footer"},[(0,s.Lk)("div",null,"DoctorChatbot V1.")],-1)));function h(e,n,o,h,k,v){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",a,[(0,s.Lk)("div",i,[c,r,l,u,(0,s.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>h.signInWithGoogle&&h.signInWithGoogle(...e))},[(0,s.Lk)("img",{src:t(3697),alt:"google-logo"},null,8,g),(0,s.eW)("Sign In with Google")]),(0,s.Lk)("div",p,[(0,s.eW)("Don’t have an account? "),(0,s.Lk)("span",{onClick:n[1]||(n[1]=(...e)=>h.goToSignUp&&h.goToSignUp(...e)),class:"sign-up-text"},"Sign Up")])])]),d],64)}t(4114);var k=t(1387),v=t(5860),m=t(1394),b=t(144),f=t(653),L={setup(){const e=(0,k.rd)(),n=(0,b.KR)(!1);(0,s.sV)((()=>{const t=(0,v.hg)(m.j,(async t=>{if(t){n.value=!0;try{const n=await f.A.get("/api/check-userinfo",{params:{email:t.email}});n.data.user||await f.A.post("/api/regist_user_info",{email:t.email,user_name:t.displayName,license_number:""});const s=await f.A.get("/api/check-license",{params:{email:t.email}});s.data.license_number?e.push("/chatbot"):e.push("/account-settings")}catch(s){console.error("Error during login process:",s),e.push("/account-settings")}}else n.value=!1}));return()=>t()}));const t=async()=>{const e=new v.HF;try{await(0,v.df)(m.j,e)}catch(n){console.error("Error during sign in:",n)}},o=()=>{e.push("/signup")};return{signInWithGoogle:t,goToSignUp:o,isAuthenticated:n}}},w=t(1241);const _=(0,w.A)(L,[["render",h],["__scopeId","data-v-0be15e4e"]]);var A=_},3697:function(e,n,t){e.exports=t.p+"img/google-logo.5369256a.svg"}}]);
//# sourceMappingURL=294.ee21fb94.js.map