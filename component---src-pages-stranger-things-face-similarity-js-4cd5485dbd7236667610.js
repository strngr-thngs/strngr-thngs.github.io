(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7pJ2":function(e,t,a){e.exports=a.p+"static/avatar-ff96942a9ee6111f2a6424c615bd0222.jpg"},EOwY:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.valueStart,a=e.valueEnd,r=e.children,l=n.a.useState(t),i=l[0],o=l[1];return n.a.useEffect((function(){o(a)}),[a]),r(i)}},"Jwi+":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("JHok"),a("4DPX"),a("sc67"),a("E5k/"),a("pS08"),a("LagC");var r=a("q1tI"),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};var l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function i(e){var t=e.className,a=e.counterClockwise,n=e.dashRatio,l=e.pathRadius,i=e.strokeWidth,s=e.style;return Object(r.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:l,dashRatio:n,counterClockwise:a})),d:o({pathRadius:l,counterClockwise:a}),strokeWidth:i,fillOpacity:0})}function o(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,l=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-l:l)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,n=e.classes,l=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return Object(r.createElement)("svg",{className:n.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(r.createElement)("circle",{className:n.background,style:o.background,cx:50,cy:50,r:50}):null,Object(r.createElement)(i,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),Object(r.createElement)(i,{className:n.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:c,style:o.path}),s?Object(r.createElement)("text",{className:n.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function u(e){e.children;var t=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a}(e,["children"]);return Object(r.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren"},Object(r.createElement)("div",{style:{position:"relative",width:"100%",height:"100%"}},Object(r.createElement)(s,l({},t)),e.children?Object(r.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}},K4h9:function(e,t,a){"use strict";a.r(t);a("6kNP"),a("8npG"),a("pJf4");var r=a("o0o1"),n=a.n(r),l=(a("E5k/"),a("ls82"),a("zGcK"),a("gu/5"),a("q1tI")),i=a.n(l),o=a("Wbzz"),c=a("tBDR"),s=a("Bl7J"),u=a("vrFN"),m=a("tRbT"),d=a("csfp"),h=a("469l"),p=a("ofer"),f=a("eD//"),g=a("tVbE"),E=a("Z3vd"),b=a("kfFl"),v=a("yv+Y"),y=a("EQI2"),w=a("++HY"),k=a("+JwS"),x=a("fCSD"),O=a("LnxZ"),P=a("HXb3"),C=a("Nm0s"),j=a("Jwi+"),N=a("EOwY"),S=(a("lIpO"),a("MwyX"),a("WmmS")),R=a("pJcm"),W=a.n(R),z=a("ULs5"),D=a.n(z),M=a("7pJ2"),T=a.n(M);function F(e,t,a,r,n,l,i){try{var o=e[l](i),c=o.value}catch(s){return void a(s)}o.done?t(c):Promise.resolve(c).then(r,n)}var I=["eleven","mike","will","dustin","lucas","max","nancy","jonathan","steve","joyce","jim"],J=S.filter((function(e){return I.includes(e.id)?e:null}));J=J.sort((function(e,t){return I.indexOf(e.id)-I.indexOf(t.id)}));var L=function(){var e,t=(e=n.a.mark((function e(t,a,r,l,i,o){var c,s,u,m,d,h;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o("Please wait ...",{variant:"info"}),r(!0),void 0===typeof window){e.next=28;break}return a(!1),(c=new FormData).append("file",t),s=window.fsAPI,e.prev=7,e.next=10,fetch(s,{method:"POST",credentials:"same-origin",body:c});case 10:return u=e.sent,e.next=13,u.json();case 13:m=e.sent,d=m.message,h=m.result,200===m.status.code?(h.result=(h.result||[]).map((function(e,t){return Object.assign({similarity:Math.round(1e4*e)/100},J[t])})).sort((function(e,t){return t.similarity-e.similarity})),l(h),i((function(e){return e>4?e:e+1})),o("Processed Successfully",{variant:"success"})):(d||[]).forEach((function(e){o(e,{variant:"error"})})),r(!1),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(7),console.error(e.t0),r(!1),o("Something went wrong!",{variant:"error"}),o("Try again later",{variant:"default"});case 25:return e.prev=25,e.abrupt("return");case 28:o("No API FOUND!",{variant:"error"});case 29:case"end":return e.stop()}}),e,null,[[7,19,25,28]])})),function(){var t=this,a=arguments;return new Promise((function(r,n){var l=e.apply(t,a);function i(e){F(l,r,n,i,o,"next",e)}function o(e){F(l,r,n,i,o,"throw",e)}i(void 0)}))});return function(e,a,r,n,l,i){return t.apply(this,arguments)}}(),Y=function(){var e=Object(l.useState)([]),t=e[0],a=e[1],r=Object(l.useState)(!1),n=r[0],o=r[1],s=Object(l.useState)(!1),u=s[0],S=s[1],R=Object(l.useState)(null),z=R[0],M=R[1],F=Object(l.useState)(0),I=F[0],Y=F[1],_=Object(P.useSnackbar)().enqueueSnackbar,G="undefined"!=typeof window?window.mediaURL:"",B=z||{},V=B.image_path,q=B.result;return i.a.createElement("div",{id:"FaceSimilarity"},i.a.createElement("div",{className:"head"},i.a.createElement("img",{src:W.a,alt:"stranger things face similarity"}),i.a.createElement("h1",null,"Check out the ",i.a.createElement("b",null,"face-similarity")," matching process and find out who do you look like")),i.a.createElement("div",null,i.a.createElement("h2",null,"You'll be matched with one of these characters:"),i.a.createElement(m.a,{container:!0,component:"ul",spacing:1},J.map((function(e){return i.a.createElement(m.a,{key:e.row,item:!0,component:"li",xs:4,sm:3,md:2,lg:1,xl:1},i.a.createElement(d.a,{title:e.name,arrow:!0,placement:"top"},i.a.createElement(h.a,{style:{width:100,height:100,boxShadow:"0 0 6px #6b6b6b"}},i.a.createElement(c.a,{name:e.avatar,style:{width:"100%",height:"100%"}}))))}))),i.a.createElement("div",null,i.a.createElement("b",null,"Your Face Identity is similar to")," ... !"),i.a.createElement("div",null,i.a.createElement("b",null,"Guess Who? Just do the process to make sure!"))),i.a.createElement("br",null),i.a.createElement("h3",{className:"ai-ml"},i.a.createElement(x.a,null)," Powered By Artificial Intelligence & Machine Learning"),!u&&!z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"help"},i.a.createElement(m.a,{container:!0,spacing:4},i.a.createElement(m.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},i.a.createElement("img",{className:"gif",src:D.a,alt:"avatar"})),i.a.createElement(m.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},i.a.createElement("img",{className:"gif",src:T.a,alt:"avatar"})))),i.a.createElement("div",{className:"tips"},i.a.createElement(p.a,{variant:"h4",component:"h3"},"Tips:"),i.a.createElement(f.a,null,i.a.createElement(g.a,null,"Your photo should ",i.a.createElement("u",null,"not")," have much background ",i.a.createElement("b",null,"textures")),i.a.createElement(g.a,null,"The dimension of your photo is better to be ",i.a.createElement("u",null,"more than")," ",i.a.createElement("b",null,"200x200")),i.a.createElement(g.a,null,"Your photo ",i.a.createElement("u",null,"doesn't need")," to be cropped to contain just the ",i.a.createElement("b",null,"face"),". The process will recognise the face!"),i.a.createElement(g.a,null,"Your photo should contain ",i.a.createElement("b",null,"one face")," because the process will consider the first face that is recognised!"))),i.a.createElement("div",{className:"dropzone-wrapper"},i.a.createElement(O.a,{dropzoneText:"Drag and drop an image here or click",filesLimit:1,maxFileSize:1e6,dropzoneClass:"dropzone",dropzoneParagraphClass:"text",previewGridClasses:{container:"container",item:"item",image:"image"},acceptedFiles:["image/*"],onChange:function(e){return a(e)}})),i.a.createElement(E.a,{fullWidth:!0,size:"large",color:"secondary",variant:"contained",onClick:function(){return function(e,t,a,r,n){if(e[0])return t>3?(n("You've tried more than 3 times",{variant:"warning"}),n("Come back just a few seconds later",{variant:"default"}),void(4===t&&setTimeout((function(){r(0)}),1e4))):void a(!0);n("No files selected!",{variant:"error"})}(t,I,o,Y,_)}},"Run Process")),u&&i.a.createElement("div",{className:"loading"},i.a.createElement(C.ClockLoader,{color:"#C11B1F",size:250,loading:!0}),i.a.createElement("div",{className:"running"},i.a.createElement(C.MoonLoader,{size:20}),i.a.createElement("h3",null,"Running On Server"),i.a.createElement(C.MoonLoader,{size:20})),i.a.createElement(p.a,{variant:"h6"},"Please Wait"),i.a.createElement(p.a,{variant:"subtitle1"},"It might take a minute or two")),!u&&z&&i.a.createElement("div",{className:"result"},i.a.createElement(E.a,{fullWidth:!0,color:"secondary",variant:"outlined",onClick:function(){return M(null)}},"Try Another One"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(p.a,{variant:"subtitle1"},"Make sure the ",i.a.createElement("b",null,"red square")," is around your intended face (in the left image)"),i.a.createElement(p.a,{variant:"subtitle2"},"Otherwise, you must use a better photo so that our agent could detect the face"),i.a.createElement("br",null),i.a.createElement(m.a,{container:!0,spacing:8},i.a.createElement(m.a,{item:!0,xs:12,sm:12,md:4,lg:5},i.a.createElement("img",{src:G+"/"+V,alt:"detected"})),i.a.createElement(m.a,{item:!0,xs:12,sm:12,md:8,lg:7},i.a.createElement("div",{className:"first"},i.a.createElement(N.a,{valueStart:0,valueEnd:q[0].similarity},(function(e){return i.a.createElement(j.a,{className:"result-circle",strokeWidth:4,background:!0,backgroundPadding:2,value:e,maxValue:100},i.a.createElement(d.a,{title:q[0].name,arrow:!0,placement:"top"},i.a.createElement(h.a,{className:"avatar"},i.a.createElement(c.a,{name:q[0].avatar,style:{width:"100%",height:"100%"}}))))})),i.a.createElement(p.a,{variant:"h4"},Math.round(q[0].similarity),"%")),i.a.createElement("div",{className:"others"},i.a.createElement(m.a,{container:!0,spacing:2,justify:"center"},q.slice(1).map((function(e){return i.a.createElement(m.a,{key:e.name,item:!0,xs:6,sm:6,md:3},i.a.createElement(N.a,{valueStart:0,valueEnd:e.similarity},(function(t){return i.a.createElement(j.a,{className:"result-circle",strokeWidth:4,background:!0,backgroundPadding:2,value:t,maxValue:100},i.a.createElement(d.a,{title:e.name,arrow:!0,placement:"top"},i.a.createElement(h.a,{className:"avatar"},i.a.createElement(c.a,{name:e.avatar,style:{width:"100%",height:"100%"}}))))})),i.a.createElement(p.a,{variant:"h5"},Math.round(e.similarity),"%"))}))))))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(b.a,{open:n,onClose:function(){return o(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"md",fullWidth:!0},i.a.createElement(v.a,{id:"alert-dialog-title"},"Run the Face Similarity process?"),i.a.createElement(y.a,null,i.a.createElement(w.a,{id:"alert-dialog-description"},"You are about to upload your photo to get the face matching results.",i.a.createElement("br",null),"The photo will be collected ",i.a.createElement("b",null,"safely")," on our servers in order to be utilized in the future machine learning datasets. This will be used only for educational or progressing purposes. (just the face part)",i.a.createElement("br",null),"The resulting photo will be deleted within 24 hours from our servers.",i.a.createElement("br",null),i.a.createElement("b",null,"Do you agree with these terms?"),i.a.createElement("br",null),i.a.createElement("br",null),"(to continue, you need to agree!)")),i.a.createElement(k.a,null,i.a.createElement(E.a,{onClick:function(){return o(!1)},color:"primary"},"No"),i.a.createElement(E.a,{onClick:function(){return L(t[0],o,S,M,Y,_)},color:"secondary"},"Yes, Of Course"))))};t.default=function(){return i.a.createElement(s.a,{navNumber:3},i.a.createElement(u.a,{title:"Find Which Characters You Do Look Like The Most - Face Similarity",description:"Do you wanna know which stranger things character you look like the most? upload your photo contains a face, then get the similarity result."}),i.a.createElement(Y,null),i.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},MwyX:function(e,t,a){},ULs5:function(e,t,a){e.exports=a.p+"static/avatar-6a14f67ceb652fb23669ddf7a92145c2.gif"},lIpO:function(e,t,a){},pJcm:function(e,t,a){e.exports=a.p+"static/face-recognition-17c19e23da7b95fa33edfcfd5870bde7.gif"}}]);
//# sourceMappingURL=component---src-pages-stranger-things-face-similarity-js-4cd5485dbd7236667610.js.map