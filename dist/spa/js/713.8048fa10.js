(self["webpackChunkplane_crash"]=self["webpackChunkplane_crash"]||[]).push([[713],{6516:(t,e,n)=>{"use strict";n.d(e,{Z:()=>C});var o=n(6304),a=n(3673),l=n(1959);const c=(0,l.qj)({Z:1e4,Y:5e5,X:0,velocityXY:300,minZDot:0,beta:0,angle:0}),i=c;function u(){return{getZ:(0,a.Fl)((()=>i.Z)),getY:(0,a.Fl)((()=>i.Y)),getX:(0,a.Fl)((()=>i.X)),getVelocityXY:(0,a.Fl)((()=>i.velocityXY)),getMinZDot:(0,a.Fl)((()=>i.minZDot)),getBeta:(0,a.Fl)((()=>i.beta)),getAngle:(0,a.Fl)((()=>i.angle))}}function s(){function t(t){i.Z=Math.round(10*t)/10}function e(t){i.Y=Math.round(10*t)/10}function n(t){i.X=Math.round(10*t)/10}function o(t){i.beta=t}function a(t){i.velocityXY=t}function l(t){i.minZDot=t}function c(t){i.angle=t}return{commitSetZ:t,commitSetY:e,commitSetX:n,commitSetBeta:o,commitSetAngle:c,commitSetVelocityXY:a,commitSetMinZDot:l}}var m=n(3212);let r=null;const d=1e3,{getDropFactor:g,getDeflection:p}=(0,o.Z)(),{getMinZDot:f,getX:h,getY:v,getZ:Z,getVelocityXY:b,getBeta:S}=u(),{commitSetZ:M,commitSetAngle:w,commitSetBeta:y,commitSetX:Y,commitSetY:X}=s();function k(){function t(){console.log("start"),r=setInterval(q,d)}function e(){console.log("stop"),r&&clearInterval(r)}function n(){i.X=0,i.Y=5e5,i.Z=1e4,i.angle=0,i.beta=0,i.minZDot=0,i.velocityXY=300}return{startSimulation:t,stopSimulation:e,resetState:n}}function q(){const t=(0,m.hQ)(f.value,g.value),e=Z.value-t*(d/1e3),n=p.value*(b.value*(d/1e3))/2,o=Math.sqrt(Math.pow(b.value*(d/1e3),2)-Math.pow(n,2)),a=Math.atan2(o,n),l=-S.value/180*Math.PI,c=Math.cos(l)*n-Math.sin(l)*o,i=Math.sin(l)*n+Math.cos(l)*o,u=90-180*a/Math.PI,s=h.value+c,r=v.value-i,k=S.value+u,q=90*p.value;console.log("test rots",n,o,a,l),console.log("test deltas",c,i,u),console.log("test next",s,r,k),Y(s),X(r),M(e),y(k),w(q)}const D=()=>Object.assign(Object.assign(Object.assign({},k()),u()),s()),C=D},3212:(t,e,n)=>{"use strict";n.d(e,{xs:()=>o,hQ:()=>a,u9:()=>l});const o=(t,e,n)=>t*e/n,a=(t,e)=>t*(2-e),l=(t,e)=>Math.round(Math.sqrt(t*t+e*e)/1e3*10)/10},5713:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>Y});var o=n(3673);const a={class:"col-md-6 col-12 q-pa-sm"},l=(0,o.Uk)("m"),c=(0,o.Uk)("km");function i(t,e,n,i,u,s){const m=(0,o.up)("q-input"),r=(0,o.up)("q-card-section"),d=(0,o.up)("q-separator"),g=(0,o.up)("q-btn"),p=(0,o.up)("q-card-actions"),f=(0,o.up)("q-form"),h=(0,o.up)("q-card"),v=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(v,{class:"row items-center justify-evenly"},{default:(0,o.w5)((()=>[(0,o.Wm)("div",a,[(0,o.Wm)(h,{class:"my-card bg-secondary text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{onSubmit:e[3]||(e[3]=e=>t.handleGotoCockpit())},{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{outlined:"","bg-color":"white",class:"q-pb-lg",modelValue:t.height,"onUpdate:modelValue":e[1]||(e[1]=e=>t.height=e),modelModifiers:{number:!0},type:"number",label:"Höhe"},{append:(0,o.w5)((()=>[l])),_:1},8,["modelValue"]),(0,o.Wm)(m,{"bg-color":"white",filled:"",modelValue:t.distance,"onUpdate:modelValue":e[2]||(e[2]=e=>t.distance=e),modelModifiers:{number:!0},type:"number",label:"Distanz"},{append:(0,o.w5)((()=>[c])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(d,{dark:""}),(0,o.Wm)(p,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"full-width",flat:"",type:"submit",label:"Zum Cockpit"})])),_:1})])),_:1})])),_:1})])])),_:1})}var u=n(1959),s=n(9582),m=n(6516),r=n(3212),d=function(t,e,n,o){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,l){function c(t){try{u(o.next(t))}catch(e){l(e)}}function i(t){try{u(o["throw"](t))}catch(e){l(e)}}function u(t){t.done?n(t.value):a(t.value).then(c,i)}u((o=o.apply(t,e||[])).next())}))};const g=(0,o.aZ)({name:"InitCockpitPage",components:{},setup(){const t=(0,s.tv)(),{commitSetZ:e,commitSetY:n,commitSetX:o,commitSetMinZDot:a,getZ:l,getY:c,getVelocityXY:i}=(0,m.Z)(),g=(0,u.iH)(l.value),p=(0,u.iH)(c.value);function f(){return d(this,void 0,void 0,(function*(){e(1e4),n(p.value),o(0),a((0,r.xs)(g.value,i.value,p.value)),yield t.push({name:"Cockpit"})}))}return{height:g,distance:p,handleGotoCockpit:f}}});var p=n(4379),f=n(151),h=n(8689),v=n(5589),Z=n(1206),b=n(5869),S=n(9367),M=n(3410),w=n(7518),y=n.n(w);g.render=i;const Y=g;y()(g,"components",{QPage:p.Z,QCard:f.Z,QForm:h.Z,QCardSection:v.Z,QInput:Z.Z,QSeparator:b.Z,QCardActions:S.Z,QBtn:M.Z})}}]);