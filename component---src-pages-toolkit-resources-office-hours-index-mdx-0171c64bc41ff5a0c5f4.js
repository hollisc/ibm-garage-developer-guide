(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),s=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),u=a.n(l),p=a("QH2O"),d=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},j=a("dI71"),w=a("I8xM"),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0,strict:!0}),r=o===n,c=new RegExp(n+"/?(#.*)?$"),b=a.replace(c,o);return Object(m.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+b},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},o))))))},t}(o.a.Component),v=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,l=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=l.tabs,O=l.title,j=l.theme,w=l.description,T=l.keywords,k=Object(x.a)().interiorTheme,N=Object(s.useStaticQuery)("223705900").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,P=d?y.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"",I=j||k;return Object(m.b)(b.a,{tabs:d,homepage:!1,theme:I,pageTitle:O,pageDescription:w,pageKeywords:T,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):O,label:"label",tabs:d,theme:I}),d&&Object(m.b)(g,{slug:y,tabs:d,currentTab:P}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:u})),Object(m.b)(c.a,null))}},kgwA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,o=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("XbGe"),c=(a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:c},u=s.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"Office Hour meetings by the Garage Practitioner Activation Team")),Object(i.b)("p",null,"Office Hours materials can be downloaded from the ",Object(i.b)("a",{parentName:"p",href:"https://ibm.box.com/v/Office-Hours"},"Office Hours")," folder in Box."),Object(i.b)("p",null,"The channel for the recorded presentations is ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCCv359rg3CxVGFttCp0Tzvg"},"IBM Garage Cloud-Native Toolkit"),"."),Object(i.b)("h2",null,"April 30, 2020: Git 201"),Object(i.b)("p",null,"An overview of somewhat advanced scenarios for using Git and GitHub that we’re likely to run into."),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BdbnOR-0qeg"},"Office Hours - Git 201")," (1:02 hrs)"),Object(i.b)("h2",null,"April 16, 2020: Iteration Zero"),Object(i.b)("p",null,"An overview of how the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero"},"Iteration Zero")," scripts work."),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=HKX6APL3Uf8"},"Office Hours - Iteration Zero")," (1:13 hrs)"),Object(i.b)("h2",null,"April 2, 2020: Resource Access Management"),Object(i.b)("p",null,"Using Identity Access Management (IAM) to control access to resources"),Object(i.b)("p",null,"Downloads are available in the ",Object(i.b)("inlineCode",{parentName:"p"},"Resource Access Management")," folder."),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=eayMGvkLZmI"},"Office Hours - Access Control")," (1 hr)"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/toolkit-resources/resource-mgmt"},"Resource Access Management")," is an article that describes the content and includes the recording."),Object(i.b)("p",null,"Quotes from some satisfied listeners:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"“The IAM system is dauntingly complex. Thanks for this presentation and these scripts — they’re a really helpful starting point.”"),Object(i.b)("li",{parentName:"ul"},"“This video will be a great asset to put on YouTube and the toolkit site for all those Admin and SREs creating the clusters and setting up the environment for a project.”"),Object(i.b)("li",{parentName:"ul"},"“This is the first time I have seen a screen cast showing how IAM works, and how to get it configure and test it with demo users.”")),Object(i.b)("h2",null,"March 26, 2020: Terraform"),Object(i.b)("p",null,"An overview of Terraform and the components used in the Toolkit."),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=WL2cOL3vNBg"},"Office Hours - Terraform")," (1.5 hrs)"),Object(i.b)("h2",null,"IBM Garage Cloud Native Toolkit"),Object(i.b)("p",null,"An introduction to the IBM Garage Cloud Native Toolkit, the problems it solves and a demonstration of using it."),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=LcWboN1T7Zk"},"IBM Garage Cloud Native Toolkit")," (30 min)"),Object(i.b)("h2",null,"Tekton concepts"),Object(i.b)("p",null,"What is Tekton and how is it used for continious integration?"),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2TWocBgwt8k"},"Tekton 101")," (7 min)"),Object(i.b)("h2",null,"DevOps concepts"),Object(i.b)("p",null,"Learn about the purpose of a continuous delivery pipeline, the sorts of steps one typically performs, and the softs of tools used to implement those steps."),Object(i.b)("p",null,"Presentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GOPWObjFTsI"},"Overview of DevOps concepts with Red Hat OpenShift")," (20 min)"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-toolkit-resources-office-hours-index-mdx-0171c64bc41ff5a0c5f4.js.map