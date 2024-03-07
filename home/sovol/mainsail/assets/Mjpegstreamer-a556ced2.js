import{m as y,B as w,G as C,P as d,W as R,j as P,n as x}from"./index-2d058d3f.js";import"./vuetify-52f40ce5.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-9bc570b0.js";var F=Object.defineProperty,V=Object.getOwnPropertyDescriptor,m=(s,t,e,a)=>{for(var i=a>1?void 0:a?V(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(a?n(t,e,i):n(i))||i);return a&&i&&F(t,e,i),i};const j="content-length",L="image/jpeg";let h=class extends y(w,C){constructor(){super(...arguments),this.currentFPS=0,this.streamState=!1,this.aspectRatio=null,this.timerFPS=null,this.timerRestart=null,this.stream=null,this.controller=null,this.isVisibleViewport=!1,this.isVisibleDocument=!0}get url(){var t;return this.convertUrl((t=this.camSettings)==null?void 0:t.stream_url,this.printerUrl)}get webcamStyle(){var e,a,i;const t={transform:this.generateTransform((e=this.camSettings.flip_horizontal)!=null?e:!1,(a=this.camSettings.flip_vertical)!=null?a:!1,(i=this.camSettings.rotation)!=null?i:0),aspectRatio:1.7777777777777777,maxHeight:window.innerHeight-155+"px",maxWidth:"auto"};return this.aspectRatio&&(t.aspectRatio=this.aspectRatio,t.maxWidth=(window.innerHeight-155)*this.aspectRatio+"px"),t}get fpsOutput(){return this.currentFPS<10?"0"+this.currentFPS.toString():this.currentFPS}get showFpsCounter(){var t,e;return this.showFps?!((e=(t=this.camSettings.extra_data)==null?void 0:t.hideFps)!=null&&e):!1}startStream(){if(this.streamState)return;this.streamState=!0;const t=new Uint8Array(2);t[0]=255,t[1]=216;function e(i){let r=-1;return i.split("\n").forEach(n=>{const o=n.split(":");o[0].toLowerCase()===j&&(r=o[1])}),r}this.controller=new AbortController;const{signal:a}=this.controller;fetch(this.url,{signal:a,mode:"cors"}).then(i=>i.body).then(i=>{const r=i==null?void 0:i.getReader();let n="",o=-1,p=null,f=0;const u=this.$refs.image;let g=0;this.timerFPS=setInterval(()=>{this.currentFPS=g,g=0},1e3),this.timerRestart=setInterval(()=>{this.restartStream()},6e4),this.stream=new ReadableStream({start(S){const v=()=>r==null?void 0:r.read().then(({done:_,value:l})=>{if(_){window.console.log("done"),S.close();return}if(S.enqueue(l),l)for(let c=0;c<l.length;c++)l[c]===t[0]&&l[c+1]===t[1]&&(o=e(n),p=new Uint8Array(new ArrayBuffer(o))),o<=0?n+=String.fromCharCode(l[c]):f<o?p[f++]=l[c]:(u&&(u.src=URL.createObjectURL(new Blob([p],{type:L})),u.onload=()=>URL.revokeObjectURL(u.src)),g++,o=0,f=0,n="");return v()});return v()}})})}mounted(){document.addEventListener("visibilitychange",this.documentVisibilityChanged),this.startStream()}beforeDestroy(){document.removeEventListener("visibilitychange",this.documentVisibilityChanged),this.stopStream()}stopStream(){var t,e;this.streamState=!1,URL.revokeObjectURL(this.url),this.timerFPS&&clearTimeout(this.timerFPS),this.timerRestart&&clearTimeout(this.timerRestart),(t=this.controller)==null||t.abort(),(e=this.stream)==null||e.cancel()}async restartStream(){this.stopStream(),this.startStream()}urlChanged(){this.aspectRatio=null,this.restartStream()}documentVisibilityChanged(){const t=document.visibilityState;this.isVisibleDocument=t==="visible",this.isVisibleDocument||this.stopStream(),this.visibilityChanged()}viewportVisibilityChanged(t){this.isVisibleViewport=t,this.visibilityChanged()}visibilityChanged(){if(this.isVisibleViewport&&this.isVisibleDocument){this.startStream();return}this.stopStream()}onload(){this.aspectRatio===null&&this.$refs.image&&(this.aspectRatio=this.$refs.image.naturalWidth/this.$refs.image.naturalHeight)}};m([d({required:!0})],h.prototype,"camSettings",2);m([d({default:null})],h.prototype,"printerUrl",2);m([d({default:!0})],h.prototype,"showFps",2);m([R("url")],h.prototype,"urlChanged",1);h=m([P],h);var O=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"d-flex justify-center",staticStyle:{position:"relative"}},[e("img",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:s.viewportVisibilityChanged,expression:"viewportVisibilityChanged"}],ref:"image",staticClass:"webcamImage",style:s.webcamStyle,on:{load:s.onload}}),s.showFpsCounter?e("span",{staticClass:"webcamFpsOutput"},[s._v(s._s(s.$t("Panels.WebcamPanel.FPS"))+": "+s._s(s.fpsOutput))]):s._e()])},U=[];const b={};var E=x(h,O,U,!1,D,"743a5e41",null,null);function D(s){for(let t in b)this[t]=b[t]}const H=function(){return E.exports}();export{H as default};
