"use strict";(self["webpackChunkdoctor_bot"]=self["webpackChunkdoctor_bot"]||[]).push([[790],{653:function(A,B,g){var C=g(4373),Q=g(5818);const e=C.A.create({baseURL:Q.A.apiBaseUrl});B.A=e},7790:function(A,B,g){g.r(B),g.d(B,{default:function(){return O}});var C=g(6768),Q=g(4232),e=g(5130);const E=A=>((0,C.Qi)("data-v-07a6ddc1"),A=A(),(0,C.jt)(),A),I={class:"account-manage-container"},o=E((()=>(0,C.Lk)("h1",null,"Account Settings",-1))),s={key:0,class:"loading"},a=["src"],w={key:0,class:"error-message"},i={class:"form-group"},h=E((()=>(0,C.Lk)("label",{for:"email"},"Email:",-1))),c={class:"form-group"},D=E((()=>(0,C.Lk)("label",{for:"username"},"Username:",-1))),l={class:"form-group"},t=E((()=>(0,C.Lk)("label",{for:"license"},"Doctor License Number:",-1))),r={class:"button-group"},n=["disabled"];function u(A,B,E,u,G,F){return(0,C.uX)(),(0,C.CE)("div",I,[o,u.isLoading?((0,C.uX)(),(0,C.CE)("div",s,[(0,C.Lk)("img",{src:g(1833),alt:"Loading"},null,8,a)])):((0,C.uX)(),(0,C.CE)(C.FK,{key:1},[u.errorMessage?((0,C.uX)(),(0,C.CE)("div",w,(0,Q.v_)(u.errorMessage),1)):(0,C.Q3)("",!0),(0,C.Lk)("div",i,[h,(0,C.bo)((0,C.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":B[0]||(B[0]=A=>u.email=A),disabled:""},null,512),[[e.Jo,u.email]])]),(0,C.Lk)("div",c,[D,(0,C.bo)((0,C.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":B[1]||(B[1]=A=>u.userName=A),disabled:""},null,512),[[e.Jo,u.userName]])]),(0,C.Lk)("div",l,[t,(0,C.bo)((0,C.Lk)("input",{type:"text",id:"license","onUpdate:modelValue":B[2]||(B[2]=A=>u.licenseNumber=A),placeholder:"Enter your license number"},null,512),[[e.Jo,u.licenseNumber]])]),(0,C.Lk)("div",r,[(0,C.Lk)("button",{onClick:B[3]||(B[3]=(...A)=>u.saveChanges&&u.saveChanges(...A)),class:"primary-button",disabled:u.isSaving},(0,Q.v_)(u.isSaving?"Saving...":"Save Changes"),9,n),u.licenseNumber?((0,C.uX)(),(0,C.CE)("button",{key:0,onClick:B[4]||(B[4]=(...A)=>u.goToChatbot&&u.goToChatbot(...A)),class:"secondary-button"},"Back to Chatbot")):(0,C.Q3)("",!0),(0,C.Lk)("button",{onClick:B[5]||(B[5]=(...A)=>u.logout&&u.logout(...A)),class:"logout-button"},"Logout")])],64))])}g(4114);var G=g(144),F=g(1387),k=g(1394),M=g(5860),H=g(653),d={setup(){const A=(0,F.rd)(),B=(0,G.KR)(""),g=(0,G.KR)(""),Q=(0,G.KR)(""),e=(0,G.KR)(""),E=(0,G.KR)(!1),I=(0,G.KR)(!0);(0,C.sV)((()=>{(0,M.hg)(k.j,(async C=>{if(C){B.value=C.email,g.value=C.displayName||"N/A";try{const A=await H.A.get("/api/check-license",{params:{email:C.email}});Q.value=A.data.license_number||""}catch(E){console.error("Error fetching license number:",E),e.value="Failed to fetch license information. Please try again later."}finally{I.value=!1}}else A.push("/login")}))}));const o=async()=>{e.value="",E.value=!0;try{await H.A.post("/api/regist_user_info",{email:B.value,user_name:g.value,license_number:Q.value}),alert("변경사항을 저장했습니다."),A.push("/account-settings")}catch(C){console.error("Error saving user information:",C),e.value="Failed to save changes. Please try again later."}finally{E.value=!1}},s=()=>{A.push("/chatbot")},a=async()=>{try{await(0,M.CI)(k.j),A.push("/login")}catch(B){console.error("Error signing out:",B),e.value="Failed to log out. Please try again."}};return{email:B,userName:g,licenseNumber:Q,errorMessage:e,isSaving:E,isLoading:I,saveChanges:o,goToChatbot:s,logout:a}}},R=g(1241);const Y=(0,R.A)(d,[["render",u],["__scopeId","data-v-07a6ddc1"]]);var O=Y},1833:function(A){A.exports="data:image/gif;base64,R0lGODlhGAAYAPcBAAAAAAD/AAEBAQICAgMDAwQEBAgICAoKCgsLCwwMDBAQEBISEhUVFR4eHiEhISIiIiMjIyUlJSgoKCkpKSsrKzExMTg4ODw8PENDQ0REREdHR1FRUVNTU2FhYXR0dHl5eXp6eoCAgIGBgYiIiJOTk5SUlJ2dnaysrK+vr7CwsLq6ur+/v8DAwMLCwsrKytDQ0NHR0dXV1dbW1t3d3eHh4ePj4+Tk5Ojo6Orq6vX19ff39/z8/P7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAABACwAAAAAGAAYAIcAAAAA/wABAQECAgIDAwMEBAQICAgKCgoLCwsMDAwQEBASEhIVFRUeHh4hISEiIiIjIyMlJSUoKCgpKSkrKysxMTE4ODg8PDxDQ0NERERHR0dRUVFTU1NhYWF0dHR5eXl6enqAgICBgYGIiIiTk5OUlJSdnZ2srKyvr6+wsLC6urq/v7/AwMDCwsLKysrQ0NDR0dHV1dXW1tbd3d3h4eHj4+Pk5OTo6Ojq6ur19fX39/f8/Pz+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8IuAB39BBIcKDBgggNGuSxsKFAhg8XJpx4sKLAHhAxOtQYsSPFjxZ7bMxIciTIkwpLduTIEiJKlD1ydDBgoEMOhjJp2sQ5s+bNHR0ADABAoMPAoEOLHhVK1GgPAwAACABgQCBUqVStRp1adccBokILDPxKIOxYsAPE9ugwNWoHhmyjAni7tu1cHjt0dDhQwOZAvXz95t3bN4dIlS1HDnwZsqDilYjxNp6cMDHkx4xBPrbcMvNkzpEdBgQAIfkEBQQAAQAsEQAIAAYABwAACCgAA+h40YJH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"}}]);
//# sourceMappingURL=790.72cebfb7.js.map