import{m as u,B as h,G as d,P as p,W as _,R as f,j as v,n as S}from"./index-2d058d3f.js";import{l as y,m as g,p as w}from"./vuetify-52f40ce5.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-9bc570b0.js";var T=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(r,e,i,t)=>{for(var s=t>1?void 0:t?b(e,i):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(t?n(e,i,s):n(s))||s);return t&&s&&T(e,i,s),s};let a=class extends u(h,d){constructor(){super(...arguments),this.pc=null,this.useStun=!1,this.remote_pc_id=null,this.aspectRatio=null,this.status="connecting",this.restartTimer=null}get url(){var e;return this.convertUrl((e=this.camSettings)==null?void 0:e.stream_url,this.printerUrl)}get webcamStyle(){var i,t,s;const e={transform:this.generateTransform((i=this.camSettings.flip_horizontal)!=null?i:!1,(t=this.camSettings.flip_vertical)!=null?t:!1,(s=this.camSettings.rotation)!=null?s:0),aspectRatio:1.7777777777777777};return this.aspectRatio&&(e.aspectRatio=this.aspectRatio),e}startStream(){const e=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,i=this.useStun?[{urls:["stun:stun.l.google.com:19302"]}]:null;fetch(this.url,{body:JSON.stringify({type:"request",iceServers:i}),headers:{"Content-Type":"application/json"},method:"POST"}).then(t=>t.json()).then(t=>{var o;let s={sdpSemantics:"unified-plan"};return t.iceServers&&(s.iceServers=t.iceServers),this.pc=new RTCPeerConnection(s),this.pc.addTransceiver("video",{direction:"recvonly"}),this.pc.addEventListener("track",n=>{n.track.kind=="video"&&this.$refs.stream&&(this.$refs.stream.srcObject=n.streams[0])},!1),this.pc.addEventListener("connectionstatechange",()=>{var n,l;this.status=((l=(n=this.pc)==null?void 0:n.connectionState)!=null?l:"").toString(),this.restartTimer&&window.clearTimeout(this.restartTimer),["failed","disconnected"].includes(this.status)&&(this.restartTimer=window.setTimeout(()=>{this.restartStream()},5e3))}),this.pc.addEventListener("icecandidate",n=>{if(n.candidate)return fetch(this.url,{body:JSON.stringify({type:"remote_candidate",id:this.remote_pc_id,candidates:[n.candidate]}),headers:{"Content-Type":"application/json"},method:"POST"}).catch(function(l){window.console.error(l)})}),this.remote_pc_id=t.id,(o=this.pc)==null?void 0:o.setRemoteDescription(t)}).then(()=>{var t;return(t=this.pc)==null?void 0:t.createAnswer()}).then(t=>{var s;return(s=this.pc)==null?void 0:s.setLocalDescription(t)}).then(()=>{var s;const t=(s=this.pc)==null?void 0:s.localDescription;return fetch(this.url,{body:JSON.stringify({type:t==null?void 0:t.type,id:this.remote_pc_id,sdp:t==null?void 0:t.sdp}),headers:{"Content-Type":"application/json"},method:"POST"})}).then(t=>(e&&(this.status="connected"),t.json())).catch(t=>{window.console.error(t),this.restartTimer&&window.clearTimeout(this.restartTimer),this.restartTimer=window.setTimeout(()=>{this.restartStream()},5e3)})}mounted(){this.startStream()}beforeDestroy(){var e;(e=this.pc)==null||e.close(),this.restartTimer&&window.clearTimeout(this.restartTimer)}restartStream(){var e;(e=this.pc)==null||e.close(),setTimeout(async()=>{this.startStream()},500)}async changedUrl(){this.restartStream()}};c([p({required:!0})],a.prototype,"camSettings",2);c([p({default:null})],a.prototype,"printerUrl",2);c([f()],a.prototype,"stream",2);c([_("url")],a.prototype,"changedUrl",1);a=c([v],a);var C=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("div",[i("video",{directives:[{name:"show",rawName:"v-show",value:r.status==="connected",expression:"status === 'connected'"}],ref:"stream",staticClass:"webcamStream",style:r.webcamStyle,attrs:{autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}}),r.status!=="connected"?i(y,[i(g,{staticClass:"_webcam_webrtc_output text-center d-flex flex-column justify-center align-center"},[r.status==="connecting"?i(w,{staticClass:"mb-3",attrs:{indeterminate:"",color:"primary"}}):r._e(),i("span",{staticClass:"mt-3"},[r._v(r._s(r.status))])],1)],1):r._e()],1)},x=[];const m={};var O=S(a,C,x,!1,j,"a89db62a",null,null);function j(r){for(let e in m)this[e]=m[e]}const U=function(){return O.exports}();export{U as default};
