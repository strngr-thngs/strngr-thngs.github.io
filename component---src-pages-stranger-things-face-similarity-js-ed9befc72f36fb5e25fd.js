(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7pJ2":function(e,t,a){e.exports=a.p+"static/avatar-d34a149f072ac067bcdfc2a2207cd2ad.jpg"},EOwY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.valueStart,a=e.valueEnd,n=e.children,i=r.a.useState(t),l=i[0],o=i[1];return r.a.useEffect((function(){o(a)}),[a]),n(l)}},"Jwi+":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("JHok"),a("4DPX"),a("sc67"),a("E5k/"),a("pS08"),a("LagC");var n=a("q1tI"),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e){var t=e.className,a=e.counterClockwise,r=e.dashRatio,i=e.pathRadius,l=e.strokeWidth,s=e.style;return Object(n.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:i,dashRatio:r,counterClockwise:a})),d:o({pathRadius:i,counterClockwise:a}),strokeWidth:l,fillOpacity:0})}function o(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,a=e.dashRatio,n=e.pathRadius,r=2*Math.PI*n,i=(1-a)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,a),n)-a)/(n-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,r=e.classes,i=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return Object(n.createElement)("svg",{className:r.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(n.createElement)("circle",{className:r.background,style:o.background,cx:50,cy:50,r:50}):null,Object(n.createElement)(l,{className:r.trail,counterClockwise:i,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),Object(n.createElement)(l,{className:r.path,counterClockwise:i,dashRatio:m*t,pathRadius:u,strokeWidth:c,style:o.path}),s?Object(n.createElement)("text",{className:r.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function u(e){e.children;var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a}(e,["children"]);return Object(n.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren"},Object(n.createElement)("div",{style:{position:"relative",width:"100%",height:"100%"}},Object(n.createElement)(s,i({},t)),e.children?Object(n.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}},K4h9:function(e,t,a){"use strict";a.r(t);a("6kNP"),a("8npG"),a("pJf4");var n=a("o0o1"),r=a.n(n),i=(a("E5k/"),a("ls82"),a("zGcK"),a("gu/5"),a("q1tI")),l=a.n(i),o=a("Wbzz"),c=a("tBDR"),s=a("Bl7J"),u=a("vrFN"),m=a("tRbT"),d=a("csfp"),h=a("469l"),p=a("ofer"),f=a("eD//"),g=a("tVbE"),v=a("Z3vd"),E=a("kfFl"),b=a("yv+Y"),y=a("EQI2"),w=a("++HY"),k=a("+JwS"),x=a("fCSD"),O=a("LnxZ"),P=a("HXb3"),C=a("Nm0s"),j=a("Jwi+"),N=a("EOwY"),S=a("Gw6x"),R=(a("lIpO"),a("MwyX"),a("WmmS")),W=a("pJcm"),T=a.n(W),M=a("ULs5"),I=a.n(M),z=a("7pJ2"),D=a.n(z);function J(e,t,a,n,r,i,l){try{var o=e[i](l),c=o.value}catch(s){return void a(s)}o.done?t(c):Promise.resolve(c).then(n,r)}var L=["eleven","mike","will","dustin","lucas","max","nancy","jonathan","steve","joyce","jim"],F=R.filter((function(e){return L.includes(e.id)?e:null}));F=F.sort((function(e,t){return L.indexOf(e.id)-L.indexOf(t.id)}));var Y=function(){var e,t=(e=r.a.mark((function e(t,a,n,i,l,o){var c,s,u,m,d,h,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o("Please wait ...",{variant:"info"}),n(!0),c=setInterval((function(){var e=document.getElementById("loading");e&&(clearInterval(c),window.scrollTo(0,e.offsetTop))}),10),void 0===typeof window){e.next=29;break}return a(!1),(s=new FormData).append("file",t),u=window.fsAPI,e.prev=8,e.next=11,fetch(u,{method:"POST",credentials:"same-origin",body:s});case 11:return m=e.sent,e.next=14,m.json();case 14:d=e.sent,h=d.message,p=d.result,200===d.status.code?(p.result=(p.result||[]).map((function(e,t){return Object.assign({similarity:Math.round(1e4*e)/100},F[t])})).sort((function(e,t){return t.similarity-e.similarity})),i(p),l((function(e){return e>4?e:e+1})),o("Processed Successfully",{variant:"success"})):(h||[]).forEach((function(e){o(e,{variant:"error"})})),n(!1),e.next=26;break;case 20:e.prev=20,e.t0=e.catch(8),console.error(e.t0),n(!1),o("Something went wrong!",{variant:"error"}),o("Try again later",{variant:"default"});case 26:return e.prev=26,e.abrupt("return");case 29:o("No API FOUND!",{variant:"error"});case 30:case"end":return e.stop()}}),e,null,[[8,20,26,29]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function l(e){J(i,n,r,l,o,"next",e)}function o(e){J(i,n,r,l,o,"throw",e)}l(void 0)}))});return function(e,a,n,r,i,l){return t.apply(this,arguments)}}(),G=function(){var e=Object(i.useState)([]),t=e[0],a=e[1],n=Object(i.useState)(!1),r=n[0],o=n[1],s=Object(i.useState)(!1),u=s[0],S=s[1],R=Object(i.useState)(null),W=R[0],M=R[1],z=Object(i.useState)(0),J=z[0],L=z[1],G=Object(P.useSnackbar)().enqueueSnackbar,_="undefined"!=typeof window?window.mediaURL:"",B=W||{},A=B.image_path,V=B.result;return l.a.createElement("div",{id:"FaceSimilarity"},l.a.createElement("div",{className:"head"},l.a.createElement("img",{src:T.a,alt:"stranger things face similarity"}),l.a.createElement("h1",null,"Check out the ",l.a.createElement("b",null,"face-similarity")," matching process and find out who you look like")),l.a.createElement("div",null,l.a.createElement("h2",null,"You'll be matched with one of these characters:"),l.a.createElement(m.a,{container:!0,component:"ul",spacing:1},F.map((function(e){return l.a.createElement(m.a,{key:e.row,item:!0,component:"li",xs:4,sm:3,md:2,lg:1,xl:1},l.a.createElement(d.a,{title:e.name,arrow:!0,placement:"top"},l.a.createElement(h.a,{style:{width:100,height:100,boxShadow:"0 0 6px #6b6b6b"}},l.a.createElement(c.a,{name:e.avatar,style:{width:"100%",height:"100%"}}))))}))),l.a.createElement("div",null,l.a.createElement("b",null,"Your Face Identity is similar to")," ... !"),l.a.createElement("div",null,l.a.createElement("b",null,"Guess Who? Just do the process to make sure!"))),l.a.createElement("br",null),l.a.createElement("h3",{className:"ai-ml"},l.a.createElement(x.a,null)," Powered By Artificial Intelligence & Machine Learning"),!u&&!W&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"help"},l.a.createElement(m.a,{container:!0,spacing:4},l.a.createElement(m.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},l.a.createElement("img",{className:"gif",src:I.a,alt:"avatar"})),l.a.createElement(m.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},l.a.createElement("img",{className:"gif",src:D.a,alt:"avatar"})))),l.a.createElement("div",{className:"tips"},l.a.createElement(p.a,{variant:"h4",component:"h3"},"Tips:"),l.a.createElement(f.a,null,l.a.createElement(g.a,null,"Your photo should ",l.a.createElement("u",null,"not")," have much background ",l.a.createElement("b",null,"textures")),l.a.createElement(g.a,null,"The dimension of your photo is better to be ",l.a.createElement("u",null,"more than")," ",l.a.createElement("b",null,"200x200")),l.a.createElement(g.a,null,"Your photo ",l.a.createElement("u",null,"doesn't need")," to be cropped to contain just the ",l.a.createElement("b",null,"face"),". The process will recognise the face!"),l.a.createElement(g.a,null,"Your photo should contain ",l.a.createElement("b",null,"one face")," because the process will consider the first face that is recognised!"))),l.a.createElement("div",{className:"dropzone-wrapper"},l.a.createElement(O.a,{dropzoneText:"Drag and drop an image here or click",filesLimit:1,maxFileSize:1e6,dropzoneClass:"dropzone",dropzoneParagraphClass:"text",previewGridClasses:{container:"container",item:"item",image:"image"},acceptedFiles:["image/*"],onChange:function(e){return a(e)}})),l.a.createElement(v.a,{fullWidth:!0,size:"large",color:"secondary",variant:"contained",onClick:function(){return function(e,t,a,n,r){if(e[0])return t>3?(r("You've tried more than 3 times",{variant:"warning"}),r("Come back just a few seconds later",{variant:"default"}),void(4===t&&setTimeout((function(){n(0)}),1e4))):void a(!0);r("No files selected!",{variant:"error"})}(t,J,o,L,G)}},"Run Process")),u&&l.a.createElement("div",{id:"loading",className:"loading"},l.a.createElement(C.ClockLoader,{color:"#C11B1F",size:250,loading:!0}),l.a.createElement("div",{className:"running"},l.a.createElement(C.MoonLoader,{size:20}),l.a.createElement("h3",{style:{textAlign:"center"}},"Running On Server"),l.a.createElement(C.MoonLoader,{size:20})),l.a.createElement(p.a,{variant:"h6"},"Please Wait"),l.a.createElement(p.a,{variant:"subtitle1"},"It might take a minute or two")),!u&&W&&l.a.createElement("div",{className:"result"},l.a.createElement(v.a,{fullWidth:!0,color:"secondary",variant:"outlined",onClick:function(){return M(null)}},"Try Another One"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{variant:"subtitle1"},"Make sure the ",l.a.createElement("b",null,"red square")," is around your intended face (in the left image)"),l.a.createElement(p.a,{variant:"subtitle2"},"Otherwise, you must use a better photo so that our agent could detect the face"),l.a.createElement("br",null),l.a.createElement(m.a,{container:!0,spacing:2},l.a.createElement(m.a,{item:!0,xs:12,sm:12,md:4,lg:5},l.a.createElement("img",{src:_+"/"+A,alt:"detected"})),l.a.createElement(m.a,{item:!0,xs:12,sm:12,md:8,lg:7},l.a.createElement("div",{className:"first"},l.a.createElement(N.a,{valueStart:0,valueEnd:V[0].similarity},(function(e){return l.a.createElement(j.a,{className:"result-circle",strokeWidth:4,background:!0,backgroundPadding:2,value:e,maxValue:100},l.a.createElement(d.a,{title:V[0].name,arrow:!0,placement:"top"},l.a.createElement(h.a,{className:"avatar"},l.a.createElement(c.a,{name:V[0].avatar,style:{width:"100%",height:"100%"}}))))})),l.a.createElement(p.a,{variant:"h4"},Math.round(V[0].similarity),"%")),l.a.createElement("div",{className:"others"},l.a.createElement(m.a,{container:!0,spacing:2,justify:"center"},V.slice(1).map((function(e){return l.a.createElement(m.a,{key:e.name,item:!0,xs:6,sm:6,md:3},l.a.createElement(N.a,{valueStart:0,valueEnd:e.similarity},(function(t){return l.a.createElement(j.a,{className:"result-circle",strokeWidth:4,background:!0,backgroundPadding:2,value:t,maxValue:100},l.a.createElement(d.a,{title:e.name,arrow:!0,placement:"top"},l.a.createElement(h.a,{className:"avatar"},l.a.createElement(c.a,{name:e.avatar,style:{width:"100%",height:"100%"}}))))})),l.a.createElement(p.a,{variant:"h5"},Math.round(e.similarity),"%"))}))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{open:r,onClose:function(){return o(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"md",fullWidth:!0},l.a.createElement(b.a,{id:"alert-dialog-title"},"Run the Face Similarity process?"),l.a.createElement(y.a,null,l.a.createElement(w.a,{id:"alert-dialog-description"},"You are about to upload your photo to get the face matching results.",l.a.createElement("br",null),"The photo will be collected ",l.a.createElement("b",null,"safely")," on our servers in order to be utilized in the future machine learning datasets. This will be used only for educational or progressing purposes. (just the face part)",l.a.createElement("br",null),"The resulting photo will be deleted within 24 hours from our servers.",l.a.createElement("br",null),l.a.createElement("b",null,"Do you agree with these terms?"),l.a.createElement("br",null),l.a.createElement("br",null),"(to continue, you need to agree!)")),l.a.createElement(k.a,null,l.a.createElement(v.a,{onClick:function(){return o(!1)},color:"primary"},"No"),l.a.createElement(v.a,{onClick:function(){return Y(t[0],o,S,M,L,G)},color:"secondary"},"Yes, Of Course"))))},_=["stranger things stuffs","stranger things","nerdy face similarity","face similarity checking","ST","Eleven","Mike","Will","Dustin","Lucas","Mad Max","Nancy","Jonathan","Steve","Joyce","Jim Hopper"],B="<ul>\n    <li>To have some fun</li>\n    <li>To make some learnings -- our learning, not machine learning :)</li>\n    <li>To know which character our face is matched the most with</li>\n  </ul>",A='<ul>\n    <li>Maching learning approach (Convolutional Nueral Network)</li>\n  </ul>\n  <hr />\n  <div>Stages:</div>\n  <br />\n  <ul>\n  <li>Gather dataset (11 classes)</li>\n  <li>Write feature obtainer function (HOG + LBP + GB)</li>\n  <li>Find the best network architecture</li>\n  <li>Train Data</li>\n  <li>Achieve model</li>\n  </ul>\n  <hr />\n  <div>\n    You can find slim version of the dataset I\'ve gathered in kaggle: <a href="https://www.kaggle.com/alirezakay/stranger-things-faces-dataset-grayscale">dataset</a>\n  </div>\n  <br />\n  <div>\n  <iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/pr9beE9msWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n  </div>\n  ',V="<div>\n    ~ 78 percent\n  </div>",q="<div>v0.1.8</div>";t.default=function(){return l.a.createElement(s.a,{navNumber:3},l.a.createElement(u.a,{title:"Find Which Characters You Do Look Like The Most - Face Similarity",description:"Do you wanna know which stranger things character you look like the most? upload your photo contains a face, then get the similarity result instantly.",keywords:_.join(",")}),l.a.createElement(G,null),l.a.createElement("div",null,l.a.createElement(S.a,{why:B,method:A,accuracy:V,version:q})),l.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},MwyX:function(e,t,a){},ULs5:function(e,t,a){e.exports=a.p+"static/avatar-6a14f67ceb652fb23669ddf7a92145c2.gif"},lIpO:function(e,t,a){},pJcm:function(e,t,a){e.exports=a.p+"static/face-recognition-17c19e23da7b95fa33edfcfd5870bde7.gif"}}]);
//# sourceMappingURL=component---src-pages-stranger-things-face-similarity-js-ed9befc72f36fb5e25fd.js.map