(self["webpackChunkplane_crash"]=self["webpackChunkplane_crash"]||[]).push([[902],{6516:(t,e,a)=>{"use strict";a.d(e,{Z:()=>D});var s=a(6304),n=a(3212),o=a(3673),l=a(1959);const i=(0,l.qj)({Z:1e4,Y:5e5,X:0,beta:0,angle:0,startHeight:1e4,startDistance:5e5,flightTime:30,velocityXY:300}),c=i;function r(){return{getZ:(0,o.Fl)((()=>c.Z)),getY:(0,o.Fl)((()=>c.Y)),getX:(0,o.Fl)((()=>c.X)),getVelocityXY:(0,o.Fl)((()=>c.velocityXY)),getMinZDot:(0,o.Fl)((()=>(0,n.xs)(c.startHeight,c.velocityXY,c.startDistance))),getBeta:(0,o.Fl)((()=>c.beta)),getAngle:(0,o.Fl)((()=>c.angle)),getFlightTime:(0,o.Fl)((()=>c.flightTime)),getStartHeight:(0,o.Fl)((()=>c.startHeight)),getStartDistance:(0,o.Fl)((()=>c.startDistance))}}function m(){function t(t){c.Z=Math.round(10*t)/10}function e(t){c.Y=Math.round(10*t)/10}function a(t){c.X=Math.round(10*t)/10}function s(t){c.beta=t}function n(t){c.velocityXY=t}function o(t){c.startDistance=t}function l(t){c.startHeight=t}function i(t){c.angle=t}function r(t){c.flightTime=t}return{commitSetZ:t,commitSetY:e,commitSetX:a,commitSetBeta:s,commitSetAngle:i,commitSetVelocityXY:n,commitSetStartDistance:o,commitSetStartHeight:l,commitSetFlightTime:r}}let u=null;const g=1e3,{getDropFactor:h,getDeflection:d}=(0,s.Z)(),{getMinZDot:p,getX:v,getY:f,getZ:x,getVelocityXY:Z,getBeta:w}=r(),{commitSetZ:y,commitSetAngle:F,commitSetBeta:W,commitSetX:b,commitSetY:z}=m();function q(){function t(){console.log("start"),u=setInterval(S,g)}function e(){console.log("stop"),u&&clearInterval(u)}function a(){c.X=0,c.Y=c.startDistance,c.Z=c.startHeight,c.angle=0,c.beta=0,c.velocityXY=300}return{startSimulation:t,stopSimulation:e,resetState:a}}function S(){const t=(0,n.hQ)(p.value,h.value),e=x.value-t*(g/1e3),a=d.value*(Z.value*(g/1e3))/2,s=Math.sqrt(Math.pow(Z.value*(g/1e3),2)-Math.pow(a,2)),o=Math.atan2(s,a),l=-w.value/180*Math.PI,i=Math.cos(l)*a-Math.sin(l)*s,c=Math.sin(l)*a+Math.cos(l)*s,r=90-180*o/Math.PI,m=v.value+i,u=f.value-c,q=w.value+r,S=90*d.value;console.log("test rots",a,s,o,l),console.log("test deltas",i,c,r),console.log("test next",m,u,q),b(m),z(u),y(e),W(q),F(S)}const M=()=>Object.assign(Object.assign(Object.assign({},q()),r()),m()),D=M},3212:(t,e,a)=>{"use strict";a.d(e,{xs:()=>s,$H:()=>n,hQ:()=>o,u9:()=>l});const s=(t,e,a)=>t*e/(2*a),n=t=>o(t,0),o=(t,e)=>t*(2-e),l=(t,e)=>Math.round(Math.sqrt(t*t+e*e)/1e3*10)/10},5643:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var s=a(3673),n=a(1959);function o(t){return"string"===typeof t?t:`${t}px`}function l(t){let e="screen and ";return Array.isArray(t)?(e+=`(min-width: ${o(t[0])})`,2===t.length&&(e+=` and (max-width: ${o(t[1])})`),e):"number"===typeof t||"number"===typeof Number.parseInt(t)?(e+=`(max-width: ${o(t)})`,e):String(t).replace(/^@?media/i,"").trim()}function i(t,e,a){if(!t[e])throw new Error(`Event of type '${e}' is not available for registration`);-1===t[e].indexOf(a)&&t[e].push(a)}function c(t,e,a){if(!t[e])throw new Error(`Event of type '${e}' is not available for unregistration`);if(void 0===a)t[e]=[];else{const s=t[e].indexOf(a);-1!==s&&t[e].splice(s,1)}}function r(t,e){t.forEach((t=>t(e)))}function m(t,e,a){const n=window.matchMedia(l(e)),o={enter:[],leave:[]};a[t]={matches:n.matches,on(t,e){i(o,t,e)},off(t,e){c(o,t,e)}};const m=e=>{a[t].matches=e.matches,r(e.matches?o.enter:o.leave,n)};n.addListener(m),(0,s.Jd)((()=>{n.removeListener(m)}))}function u(t){const e=(0,n.qj)({});return Object.keys(t).forEach((a=>{m(a,t[a],e)})),e}},7902:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>ct});var s=a(3673);function n(t,e,a,n,o,l){const i=(0,s.up)("cockpit"),c=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(c,{class:"row1 justify-evenly1"},{default:(0,s.w5)((()=>[(0,s.Wm)(i)])),_:1})}const o=(0,s.HX)("data-v-650b1e83");(0,s.dD)("data-v-650b1e83");const l={class:"row items-center no-wrap"},i={class:"row items-center no-wrap"};(0,s.Cn)();const c=o(((t,e,a,n,c,r)=>{const m=(0,s.up)("flight-height"),u=(0,s.up)("flight-angle"),g=(0,s.up)("flight-direction"),h=(0,s.up)("flight-velocity"),d=(0,s.up)("flight-drop-velocity"),p=(0,s.up)("q-icon"),v=(0,s.up)("q-btn-toggle"),f=(0,s.up)("q-toolbar-title"),x=(0,s.up)("q-toolbar"),Z=(0,s.up)("q-footer");return(0,s.wg)(),(0,s.j4)(s.HY,null,[(0,s.Wm)("div",{class:["container",t.mq.xs.matches||t.mq.sm.matches?"q-pa-sm":"q-pa-lg"]},[(0,s.Wm)(m,{class:"height"}),(0,s.Wm)(u,{class:"angle"}),(0,s.Wm)(g,{class:"direction"}),(0,s.Wm)(h,{class:"velocity"}),(0,s.Wm)(d,{class:"drop-velocity"})],2),(0,s.Wm)(Z,{elevated:"",class:"bg-grey-8 text-white"},{default:o((()=>[(0,s.Wm)(x,null,{default:o((()=>[(0,s.Wm)(f,{class:"text-center"},{default:o((()=>[(0,s.Wm)(v,{modelValue:t.simStart,"onUpdate:modelValue":[e[1]||(e[1]=e=>t.simStart=e),e[2]||(e[2]=e=>t.handleSimulation())],push:"",rounded:"",glossy:"","toggle-color":"purple",options:[{value:"stop",slot:"stop"},{value:"play",slot:"play"}]},{stop:o((()=>[(0,s.Wm)("div",l,[(0,s.Wm)(p,{right:"",name:"stop"})])])),play:o((()=>[(0,s.Wm)("div",i,[(0,s.Wm)(p,{right:"",name:"play_arrow"})])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],64)}));var r=a(1959),m=a(2323);const u=(0,s.HX)("data-v-1f322c1c");(0,s.dD)("data-v-1f322c1c");const g={class:"row items-center"},h={class:"",style:{position:"absolute"}};(0,s.Cn)();const d=u(((t,e,a,n,o,l)=>{const i=(0,s.up)("q-img"),c=(0,s.up)("q-circular-progress");return(0,s.wg)(),(0,s.j4)("div",g,[(0,s.Wm)("div",{class:["col-12",t.heightClass]},[(0,s.Wm)(c,{"show-value":"",class:"text-white",value:t.getZ,size:t.size+"px",max:t.startHeight,color:"myOrange","font-size":t.size/10+"px"},{default:u((()=>[(0,s.Wm)(i,{width:t.size-30+"px",src:"cockpit/hoehe.png"},null,8,["width"]),(0,s.Wm)("div",h,(0,m.zw)(t.ZGreaterZero)+" m ",1)])),_:1},8,["value","size","max","font-size"])],2)])}));var p=a(6516),v=a(6304),f=a(5643),x=a(9582),Z=function(t,e,a,s){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function l(t){try{c(s.next(t))}catch(e){o(e)}}function i(t){try{c(s["throw"](t))}catch(e){o(e)}}function c(t){t.done?a(t.value):n(t.value).then(l,i)}c((s=s.apply(t,e||[])).next())}))};const w=(0,s.aZ)({name:"FlightHeight",setup(){const t=(0,f.Z)({xs:[0,400],sm:[401,700],md:[701,1e3],lg:[1001,1500],xl:[1501]}),e=(0,x.tv)(),{getZ:a,getMinZDot:n,stopSimulation:o}=(0,p.Z)(),{getDropFactor:l}=(0,v.Z)(),i=(0,r.iH)(a.value),c=(0,s.Fl)((()=>Math.round(n.value*(2-l.value)*10)/10)),m=(0,s.Fl)((()=>t.xs.matches?100:t.sm.matches?130:t.md.matches?200:t.lg.matches?280:300)),u=(0,s.Fl)((()=>t.xs.matches?"height-xs":t.sm.matches?"height-sm":t.md.matches?"height-md":t.lg.matches?"height-lg":"height-xl")),g=(0,s.Fl)((()=>t.xs.matches?"15pt":t.sm.matches?"17pt":t.md.matches?"20pt":"24pt"));(0,s.YP)(a,(t=>Z(this,void 0,void 0,(function*(){t<=0&&(o(),yield e.push({name:"Loose"}))}))));const h=(0,s.Fl)((()=>a.value<0?0:a.value));return{getZ:a,ZGreaterZero:h,startHeight:i,curVelocityY:c,size:m,fontSize:g,mq:t,heightClass:u}}});var y=a(7086),F=a(4027),W=a(7518),b=a.n(W);w.render=d,w.__scopeId="data-v-1f322c1c";const z=w;b()(w,"components",{QCircularProgress:y.Z,QImg:F.Z});const q=(0,s.HX)("data-v-5f14be02");(0,s.dD)("data-v-5f14be02");const S={class:"row items-center"},M={style:{position:"absolute"}};(0,s.Cn)();const D=q(((t,e,a,n,o,l)=>{const i=(0,s.up)("q-img"),c=(0,s.up)("q-avatar");return(0,s.wg)(),(0,s.j4)("div",S,[(0,s.Wm)("div",{class:["col-12",t.angleClass]},[(0,s.Wm)(c,{size:t.size+"px",color:"transparent","text-color":"white"},{default:q((()=>[(0,s.Wm)("div",M,[(0,s.Wm)(i,{width:t.size+"px",src:"cockpit/neigung.png"},null,8,["width"])]),(0,s.Wm)("div",{class:"target bg-transparent q-pa-none",style:`transform: rotate(${t.getAngle}deg)`},[(0,s.Wm)(i,{class:"",width:t.size/1.5+"px",src:"angle.png"},null,8,["width"])],4)])),_:1},8,["size"])],2)])})),H=(0,s.aZ)({name:"FlightAngle",setup(){const t=(0,f.Z)({xs:[0,400],sm:[401,700],md:[701,1e3],lg:[1001,1500],xl:[1501]}),e=(0,s.Fl)((()=>t.xs.matches?100:t.sm.matches?130:t.md.matches?200:t.lg.matches?280:300)),a=(0,s.Fl)((()=>t.xs.matches?"angle-xs":t.sm.matches?"angle-sm":t.md.matches?"angle-md":t.lg.matches?"angle-lg":"angle-xl")),{getAngle:n}=(0,p.Z)();return{getAngle:n,angleClass:a,size:e,mq:t}}});var _=a(5096);H.render=D,H.__scopeId="data-v-5f14be02";const X=H;b()(H,"components",{QAvatar:_.Z,QImg:F.Z});const Y=(0,s.HX)("data-v-40e6ae41");(0,s.dD)("data-v-40e6ae41");const C={style:{display:"flex","align-items":"center","justify-content":"center"},class:""},Q={style:{position:"absolute"}};(0,s.Cn)();const V=Y(((t,e,a,n,o,l)=>{const i=(0,s.up)("q-img"),c=(0,s.up)("q-tooltip"),r=(0,s.up)("q-icon"),u=(0,s.up)("q-avatar");return(0,s.wg)(),(0,s.j4)("div",C,[(0,s.Wm)("div",{style:"transform: rotate("+t.getBeta+"deg)"},[(0,s.Wm)(u,{size:t.size+"px","font-size":"0px",color:"transparent"},{default:Y((()=>[(0,s.Wm)("div",Q,[(0,s.Wm)(i,{class:"radar",width:t.size+"px",src:"radar3.png"},null,8,["width"])]),(0,s.Wm)("div",{class:"target bg-transparent q-pa-none",style:`transform: rotate(${-t.getBeta}deg) translate(${t.radarX}px,${t.radarY}px)`},[(0,s.Wm)(r,{name:"adjust",size:"30px",color:"white"},{default:Y((()=>[(0,s.Wm)(c,{"no-parent-event":"",modelValue:t.tooltip,"onUpdate:modelValue":e[1]||(e[1]=e=>t.tooltip=e)},{default:Y((()=>[(0,s.Uk)((0,m.zw)(t.curDistance)+" km",1)])),_:1},8,["modelValue"])])),_:1})],4),(0,s.Wm)("div",{class:"target bg-transparent q-pa-none",style:`transform: rotate(${-t.getBeta}deg) translate(0px,0px)`},[(0,s.Wm)("div",{style:`transform: rotate(${t.getBeta}deg)`},[(0,s.Wm)(r,{color:"white",name:"flight",size:"40px"})],4)],4)])),_:1},8,["size"])],4)])}));var I=a(3212);const j=(0,s.aZ)({name:"FlightDirection",setup(){const t=(0,f.Z)({xs:[0,400],sm:[401,700],md:[701,1e3],lg:[1001,1500],xl:[1501]}),{getBeta:e,getX:a,getY:n,getStartDistance:o}=(0,p.Z)(),l=(0,s.Fl)((()=>t.xs.matches||t.sm.matches?250:t.md.matches?280:(t.lg.matches,400))),i=(0,s.Fl)((()=>Math.round(10*(0,I.u9)(a.value,n.value))/10)),c=(0,s.Fl)((()=>{const t=1e3*(0,I.u9)(a.value,n.value),e=o.value,s=t/e>1?1:t/e;return-Math.sin(Math.atan2(a.value,n.value))*(l.value/2)*Math.sqrt(s)})),m=(0,s.Fl)((()=>{const t=1e3*(0,I.u9)(a.value,n.value),e=o.value,s=t/e>1?1:t/e;return-Math.cos(Math.atan2(a.value,n.value))*(l.value/2)*Math.sqrt(s)}));return{getBeta:e,size:l,radarX:c,radarY:m,mq:t,curDistance:i,tooltip:(0,r.iH)(!0)}}});var A=a(4554),k=a(7346);j.render=V,j.__scopeId="data-v-40e6ae41";const $=j;b()(j,"components",{QAvatar:_.Z,QImg:F.Z,QIcon:A.Z,QTooltip:k.Z});const B=(0,s.HX)("data-v-462d1676");(0,s.dD)("data-v-462d1676");const T={class:"row items-center"},P={style:{position:"absolute"}};(0,s.Cn)();const O=B(((t,e,a,n,o,l)=>{const i=(0,s.up)("q-img"),c=(0,s.up)("q-avatar");return(0,s.wg)(),(0,s.j4)("div",T,[(0,s.Wm)("div",{class:["col-12",t.veloClass]},[(0,s.Wm)(c,{size:t.size+"px",color:"transparent","text-color":"white"},{default:B((()=>[(0,s.Wm)("div",P,[(0,s.Wm)(i,{width:t.size+"px",src:"cockpit/velo.png"},null,8,["width"])])])),_:1},8,["size"])],2)])})),E=(0,s.aZ)({name:"FlightVelocity",setup(){const t=(0,f.Z)({xs:[0,400],sm:[401,700],md:[701,1e3],lg:[1001,1500],xl:[1501]}),e=(0,s.Fl)((()=>t.xs.matches?100:t.sm.matches?130:t.md.matches?200:t.lg.matches?280:300)),a=(0,s.Fl)((()=>t.xs.matches?"velo-xs":t.sm.matches?"velo-sm":t.md.matches?"velo-md":t.lg.matches?"velo-lg":"velo-xl")),{getAngle:n}=(0,p.Z)();return{veloClass:a,getAngle:n,size:e,mq:t}}});E.render=O,E.__scopeId="data-v-462d1676";const L=E;b()(E,"components",{QAvatar:_.Z,QImg:F.Z});const G=(0,s.HX)("data-v-b9762f3c");(0,s.dD)("data-v-b9762f3c");const U={class:"row items-center"};(0,s.Cn)();const J=G(((t,e,a,n,o,l)=>{const i=(0,s.up)("q-img"),c=(0,s.up)("q-avatar");return(0,s.wg)(),(0,s.j4)("div",U,[(0,s.Wm)("div",{class:["col-12",t.dropVeloClass]},[(0,s.Wm)(c,{size:t.size+"px",color:"transparent","text-color":"white"},{default:G((()=>[(0,s.Wm)(i,{width:t.size+"px",src:"cockpit/fallVelo.png"},null,8,["width"]),(0,s.Wm)("div",{class:t.colorClass,style:`font-size: ${t.size/10}px; position: absolute;`},(0,m.zw)(t.curVelocityY)+" m/s ",7)])),_:1},8,["size"])],2)])}));var N=function(t,e,a,s){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function l(t){try{c(s.next(t))}catch(e){o(e)}}function i(t){try{c(s["throw"](t))}catch(e){o(e)}}function c(t){t.done?a(t.value):n(t.value).then(l,i)}c((s=s.apply(t,e||[])).next())}))};const K=(0,s.aZ)({name:"FlightDropVelocity",setup(){const t=(0,f.Z)({xs:[0,400],sm:[401,700],md:[701,1e3],lg:[1001,1500],xl:[1501]}),e=(0,x.tv)(),{getZ:a,getMinZDot:n,stopSimulation:o}=(0,p.Z)(),{getDropFactor:l}=(0,v.Z)(),i=(0,r.iH)(a.value),c=(0,I.$H)(n.value),m=(0,s.Fl)((()=>Math.round(n.value*(2-l.value)*10)/10)),u=(0,s.Fl)((()=>{const t=(m.value-n.value)/(c-n.value);return"text-deep-orange-"+Math.ceil(10*t).toString()})),g=(0,s.Fl)((()=>t.xs.matches?100:t.sm.matches?130:t.md.matches?200:t.lg.matches?280:300)),h=(0,s.Fl)((()=>t.xs.matches?"drop-velo-xs":t.sm.matches?"drop-velo-sm":t.md.matches?"drop-velo-md":t.lg.matches?"drop-velo-lg":"drop-velo-xl"));(0,s.YP)(a,(t=>N(this,void 0,void 0,(function*(){t<=0&&(o(),yield e.push({name:"Loose"}))}))));const d=(0,s.Fl)((()=>a.value<0?0:a.value));return{dropVeloClass:h,colorClass:u,getZ:a,ZGreaterZero:d,startHeight:i,curVelocityY:m,size:g,mq:t,maxVeloZ:c,getMinZDot:n}}});K.render=J,K.__scopeId="data-v-b9762f3c";const R=K;b()(K,"components",{QAvatar:_.Z,QImg:F.Z});const tt=(0,s.aZ)({name:"Cockpit",components:{FlightHeight:z,FlightAngle:X,FlightDirection:$,FlightVelocity:L,FlightDropVelocity:R},setup(){const t=(0,f.Z)({xs:[0,400],sm:[401,700]}),e=(0,x.tv)(),{getX:a,getY:n,getZ:o,startSimulation:l,stopSimulation:i}=(0,p.Z)(),c=(0,r.iH)("stop"),m=(0,r.iH)(o.value);function u(){"play"===c.value?l():"stop"===c.value&&i()}return(0,s.m0)((()=>{1e3*(0,I.u9)(a.value,n.value)<=300&&(i(),e.push({name:"Win"}))})),{curHeight:m,mq:t,simStart:c,handleSimulation:u}}});var et=a(1762),at=a(9570),st=a(3747),nt=a(8761);tt.render=c,tt.__scopeId="data-v-650b1e83";const ot=tt;b()(tt,"components",{QFooter:et.Z,QToolbar:at.Z,QToolbarTitle:st.Z,QBtnToggle:nt.Z,QIcon:A.Z});const lt=(0,s.aZ)({name:"CockpitPage",components:{Cockpit:ot},setup(){return{}}});var it=a(4379);lt.render=n;const ct=lt;b()(lt,"components",{QPage:it.Z})}}]);