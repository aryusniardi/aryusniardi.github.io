(this.webpackJsonpportfolio_=this.webpackJsonpportfolio_||[]).push([[0],{26:function(e,a,t){e.exports=t(40)},31:function(e,a,t){},32:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),i=(t(31),t(2)),o=(t(32),t(6)),s=t(7),m=t(9),u=t(8),b=t(15),d=t(12),E=t(11),p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={nama:"Arief Rahman Y"},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"intro"},r.a.createElement("div",{className:"intro-background"},r.a.createElement("img",{src:"/aryusniardi.github.io/assets/img/Arief.png"})),r.a.createElement("div",{className:"intro-content"},r.a.createElement("h1",{className:"content-name"},this.state.nama),r.a.createElement(b.b,{className:"content-button",to:"/main"},r.a.createElement("span",null,"More about me",r.a.createElement(d.a,{icon:E.a})))))}}]),t}(n.Component),h=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={nama:"Arief Rahman Yusniardi",umur:"24 years old",hobi:[{hobby:"Programing",icon:E.d},{hobby:"Listen Music",icon:E.e},{hobby:"Design",icon:E.b},{hobby:"Playing Video Games",icon:E.c}]},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("div",{className:"about-description"},r.a.createElement("p",null,r.a.createElement("i",null,r.a.createElement("b",{className:"color-primary"},'"')),"Hello, my name is ",r.a.createElement("b",null,this.state.nama),". I was ",this.state.umur,". i have a diverse skill, ranging from ",r.a.createElement("i",null,r.a.createElement("b",null,"Design"),", ",r.a.createElement("b",null,"HTML"),", ",r.a.createElement("b",null,"CSS"),", ",r.a.createElement("b",null,"JavaScript (ReactJS, VueJS)")),", all the way to ",r.a.createElement("i",null,r.a.createElement("b",null,"PHP")),".",r.a.createElement("i",null,r.a.createElement("b",{className:"color-primary"},'"'))))))}}]),t}(n.Component),v=t(25),g=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.activeTab,t=e.handleTab,n=e.tabs;return r.a.createElement("div",{className:"tab-manager"},n.map((function(e){var n=e.label,c=e.value;return r.a.createElement("div",{className:"tab ".concat(c===a?"selected-tab":""),onClick:function(){t(c)}},n)})))}}]),t}(n.Component),f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={educations:[{id:1,year:"2017",education:"Paket C"},{id:2,year:"2017 - Now",education:"Politeknik TEDC Bandung",degree:"Diploma - IV",description:"Informatics Engineer"}]},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"education"},this.state.educations.map((function(e){return r.a.createElement("div",{className:e.id%2===0?"container left":"container right"},r.a.createElement("div",{className:"education-content"},r.a.createElement("h2",null,e.year," (",r.a.createElement("b",null,e.education),")"),r.a.createElement("p",null,e.degree),r.a.createElement("p",null,r.a.createElement("b",null,e.description))))})))}}]),t}(n.Component),y=t(13),j=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={projects:[{image:"2.png",title:"Revelry",skill:["HTML","CSS","Bootstrap","PHP"],story:"Last Project from Web Programing lecture on campus, creating e-commerce system using PHP framework CodeIgniter",url:"https://github.com/aryusniardi/UAS---Web_Programing"},{image:"1.png",title:"Netflix interface clone using React.JS",skill:["HTML","SASS","React.JS"],story:"I learn to use react and trying to cloning Netflix interface using React.JS",url:"https://github.com/aryusniardi/movie-app-react"},{image:"3.png",title:"Kedai Fesyen",skill:["Laravel","SASS","Vue.JS"],story:"Last Project from Web Technology 2.0 lecture on campus, creating e-commerce system using PHP framework Laravel and Vue.JS",url:"https://github.com/aryusniardi/kedai_fesyen_app"}]},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"project"},r.a.createElement("h1",null,"What i've build",r.a.createElement(d.a,{icon:E.f})),this.state.projects.map((function(e){return r.a.createElement("div",{className:"project-content"},r.a.createElement("div",{className:"content-image"},r.a.createElement("img",{src:"/aryusniardi.github.io/assets/img/"+e.image,alt:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.story),e.skill.map((function(e){return r.a.createElement("h3",null,e)})),r.a.createElement("div",{className:"content-url"},r.a.createElement("a",{className:"content-button",href:e.url},r.a.createElement(d.a,{icon:y.b}),"Source Code"))))})))}}]),t}(n.Component),N=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={socialMedia:[{url:"https://www.facebook.com/profile.php?id=100010638164254",icon:y.a},{url:"https://twitter.com/endorse_pc/",icon:y.e},{url:"https://www.instagram.com/aryusniardi/",icon:y.c},{url:"https://www.linkedin.com/in/arief-rahman-y-7950b3151/",icon:y.d},{url:"https://github.com/aryusniardi/",icon:y.b}]},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"contact-card"},r.a.createElement("div",{className:"contact-image"},r.a.createElement("img",{src:"/aryusniardi.github.io/assets/img/Arief.png",alt:"contact"})),r.a.createElement("ul",{className:"social-icons"},this.state.socialMedia.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement(d.a,{icon:e.icon})))}))),r.a.createElement("div",{className:"contact-details"},r.a.createElement("h2",null,"Arief Rahman Y",r.a.createElement("br",null),r.a.createElement("span",{className:"job-title"},"Student")))))}}]),t}(n.Component),O=[{label:"About Me",value:1},{label:"Education",value:2},{label:"Projects",value:3},{label:"Contact Me",value:4}];function k(e){var a,t=Object(n.useState)(1),c=Object(v.a)(t,2),l=c[0],i=c[1];return 1===l?a=r.a.createElement(h,null):2===l?a=r.a.createElement(f,null):3===l?a=r.a.createElement(j,null):4===l&&(a=r.a.createElement(N,null)),r.a.createElement("div",null,r.a.createElement(g,{tabs:O,activeTab:l,handleTab:i}),r.a.createElement("div",{className:"tab-content"},a))}var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{path:"/main",component:k})))};l.a.render(r.a.createElement(b.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.14d00741.chunk.js.map