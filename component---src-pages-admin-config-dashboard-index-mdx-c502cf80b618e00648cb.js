(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(g.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,b=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+O.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,o);return Object(g.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(g.b)(l.Link,{className:h.link,to:""+c},e))}));return Object(g.b)("div",{className:h.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:h.list},o))))))},t}(o.a.Component),A=a("MjG9"),C=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,m=s.tabs,O=s.title,f=s.theme,h=s.description,v=s.keywords,k=Object(C.a)().interiorTheme,w=Object(l.useStaticQuery)("2456312558").site.pathPrefix,L=w?n.pathname.replace(w,""):n.pathname,T=m?L.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",x=f||k;return Object(g.b)(c.a,{tabs:m,homepage:!1,theme:x,pageTitle:O,pageDescription:h,pageKeywords:v,titleType:p},Object(g.b)(u,{title:o?Object(g.b)(o,null):O,label:"label",tabs:m,theme:x}),m&&Object(g.b)(y,{slug:L,tabs:m,currentTab:T}),Object(g.b)(A.a,{padded:!0},a,Object(g.b)(N,{relativePagePath:d})),Object(g.b)(j.a,{pageContext:t,location:n,slug:L,tabs:m,currentTab:T}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UUnN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return g}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=a("T0C+"),b=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=c("PageDescription"),d=c("InlineNotification"),p={_frontmatter:b},m=r.a;function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"Customize the Developer Dashboard and the OpenShift console")),Object(i.b)(d,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": An ",Object(i.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(i.b)("a",{parentName:"p",href:"/admin/plan-installation#roles"},"Plan Installation > Roles")," for the overview of the roles involved.")),Object(i.b)("h2",null,"Customizing the Dashboard"),Object(i.b)("p",null,"After the Dashboard has been installed into your development cluster, you can customize it to you team’s needs. You can change the Title, Prefix, and Cloud Console links by adding the following environment variables to your deployment yaml."),Object(i.b)("p",null,"Customize the Dashboard’s title from its default of “IBM Cloud Garage”"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The necessary set of environment variables isn’t defined by default. You need to edit the YAML for the ",Object(i.b)("inlineCode",{parentName:"p"},"developer-dashboard")," deployment in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace to insert this set of variables.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the YAML for the /tools/deployments/developer-dashboard resource. In the ",Object(i.b)("inlineCode",{parentName:"p"},"spec.template.spec.containers")," section, in the resources for the container named ",Object(i.b)("inlineCode",{parentName:"p"},"developer-dashboard"),", add a new ",Object(i.b)("inlineCode",{parentName:"p"},"env")," resource to this container that defines these environment variables:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"          env:\n            - name: DASHBOARD_TITLE\n              value: GSI Labs Sandbox\n            - name: DASHBOARD_PREFIX\n              value: IBM\n            - name: CLOUD_TITLE\n              value: Azure Console\n            - name: CLOUD_URL\n              value: https://azure.microsoft.com/en-us/\n            - name: LINKS_URL\n              value: http://<url>/data/links.json\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Then fill in the values you want to use, such as the name of your team and company")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note"),": The ",Object(i.b)("inlineCode",{parentName:"p"},"CLOUD_TITLE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CLOUD_URL"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"LINKS_URL")," aren’t needed when the platform is IBM Cloud"))),Object(i.b)("p",null,"You can also tailor the list of content that is displayed in the Activation tab and the Starter Kits tab by creating your own version of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/developer-dashboard/blob/master/public/data/links.json"},Object(i.b)("inlineCode",{parentName:"a"},"links.json"))," JSON file and host that somewhere accessible to you cluster’s network."),Object(i.b)("h2",null,"Adding tools"),Object(i.b)("p",null,"You can add additional tools to the ",Object(i.b)("a",{parentName:"p",href:"/getting-started/dashboard"},"Developer Dashboard")," and to the Tools menu on the OpenShift console. The tools in the cluster are added automatically, but the tools outside the cluster must be added manually. You can also add tools for the Cloud Paks that you install in the environment, for CodeReady Workspaces (if you’ve installed that in the environment), etc."),Object(i.b)("h3",null,"Adding tools to the Dashboard"),Object(i.b)("p",null,"Use the ",Object(i.b)("a",{parentName:"p",href:"/getting-started/cli"},"Cloud Native Toolkit CLI")," to add tools to the dashboard."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use this syntax to add a tool:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"igc tool-config --name <name of tool> --url <url of tool>\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"These are tools that every Environment has but that are hosted outside of the cluster. To add these to the Dashboard, run these commands and provide the URLs:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"igc tool-config --name ir --url {url image registry}\nigc tool-config --name logdna --url {url to LogDNA instance}\nigc tool-config --name sysdig --url {url to Sysdig instance}\nigc tool-config --name github --url {url to git org}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If your Environment includes the Cloud Paks with these tools, add them to your Dashboard:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"igc tool-config --name ta --url {url to the Transformation Advisor}\nigc tool-config --name mcm --url {url to IBM CP4MCM}\nigc tool-config --name integration --url {url to CP4I instance}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you’ve ",Object(i.b)("a",{parentName:"p",href:"/admin/install-crw"},"installed CodeReady Workspaces")," in your Environment, add it to your Dashboard:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"igc tool-config --name codeready --url {url to the CRW instance}\n")))),Object(i.b)("p",null,"This table lists the tools that can be displayed."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Tool Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Name Parameter"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Pre-Configured"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GitLab"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"gitlab")),Object(i.b)("td",{parentName:"tr",align:"left"},"IBM Cloud GitLab instance for the region you are using"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Eclipse Che"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"che")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Eclipse Che instance"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Jenkins"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"jenkins")),Object(i.b)("td",{parentName:"tr",align:"left"},"If IKS configured by default"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Pipeline"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"pipeline")),Object(i.b)("td",{parentName:"tr",align:"left"},"If OCP configured by default"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ArgoCD"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"argocd")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to ArgoCD instance in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Artifactory"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"artifactory")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Artifactory instance in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SonarQube"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"sonarqube")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to SonarQube instance in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Pact"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"pact")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Pact Broker instance in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Tekton"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"tekton")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Tekton Dashboard in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Transformation Advisor"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"ta")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Transformation Advisor tool in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Swagger Editor"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"apieditor")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Swagger Editor instance in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"CodeReady Workspaces"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"codeready")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to CodeReady Workspaces instance in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GitHub"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"github")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to teams GitHub organization"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Cloud Pak for Integration"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"integration")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to main console for Cloud Pak for Integration"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Cloud Pak for Multi Cloud Manager"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"mcm")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to main console for Cloud Pak for Multi Cloud Manager"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Cloud Pak for Data"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"data")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to main console for Cloud Pak for Data"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Cloud Pak for Automation"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"automation")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to main console for Cloud Pak for Automation"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Grafana"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"grafana")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Grafana in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Prometheus"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"prometheus")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Prometheus in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"LogDNA"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"logDNA")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to LogDNA service instance"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Sysdig"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Sysdig")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Sysdig service instance"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Image Registry"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"ir")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Image Registry"),Object(i.b)("td",{parentName:"tr",align:"left"},"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Jaeger"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"jaeger")),Object(i.b)("td",{parentName:"tr",align:"left"},"Link to Jaeger in cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")))),Object(i.b)("h3",null,"Adding Tools to the OpenShift Console"),Object(i.b)("p",null,"If the ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," includes an OpenShift cluster, the Environment adds a Tools menu to the OpenShift console. The tools in the cluster are automatically added, but you need to add the tools outside of the cluster to specify their URLs. You can also extend the Tools menu to provide fast links to common tools you the development team will require. These tools links are common across the cluster."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMUlEQVQ4y5WT+04TQRjF9yk0tTd6WewNJAUbjSQmJv7D+6lvAFXBx2hS06S0WiMSoLXQdndnL7Pt7pZePM58UKwYDW7yZWd3Zn57vjNnlUQ4jK1sFoX1dUSjUaTTacTjcRrHYjGqSCSCfD6PUqmE4tYWnr3YwWZpG4lEAqqq0lwul0UqlYKSya0hv7aBlaSKUDiGV6/foNlsolarUVWrVVQqFZydnsB1XYwvLyGvTqdD61qtFj7WP6PxqYVG4xDK5uMnyAngaraASDyJ/YMPmM/ncDgnABV34QcePN/DeDym+dFohOFwSHfXHdJYlvL85Q5KT7dRFOBsYQPv9w/geSNomg7L5DAMA4wxnF/00R9oBJhOpzBNE7qu0/xyKYVHRSTVDBLph7gXimJ3r0wqeoMejtt1MNMWmw1ougPOJWxCLdu2TR+SYMZMustSZLtqJkfQUCSO3fJbzCYT9LUBjs8OYVkODGaAMw7TMKnt2Wwu3ltLQPYLKJXJksD7D6LYE0DH89Du6TjqOksbHOHRCL7vk4e/K7wFXEmt3gDL5Xc4FUq+tLs4Oh+IlsVC0RKzNOiGhsAPqOV/KrwBitiQh0FAi6rfTgTIEkAG5jDwIacD+fGHh39VeA0cB+KUNZHDushfV0BNcNMCdzi4iJGEcn6VgDsBA1Jo4PuFjq+tNrXtCkWUOZG1mfDwv4GUMbHQsq+8soU6CZatyljdzcPrU154aFk2bPGX3PZrEfbF8zLwJxwWK62OoBlWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OCP Console Tools",title:"OCP Console Tools",src:"/static/80ff65e97a3d60af6849ece079b19b5e/3cbba/ocp-console-tools.png",srcSet:["/static/80ff65e97a3d60af6849ece079b19b5e/7fc1e/ocp-console-tools.png 288w","/static/80ff65e97a3d60af6849ece079b19b5e/a5df1/ocp-console-tools.png 576w","/static/80ff65e97a3d60af6849ece079b19b5e/3cbba/ocp-console-tools.png 1152w","/static/80ff65e97a3d60af6849ece079b19b5e/b2f7c/ocp-console-tools.png 1173w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the file called ",Object(i.b)("inlineCode",{parentName:"p"},"tools.yaml")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/scripts")," folder. This file contains the CRDs required to configure the menu items. Add custom links for ",Object(i.b)("inlineCode",{parentName:"p"},"github"),", ",Object(i.b)("inlineCode",{parentName:"p"},"logdna"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"sysdig"),", and save the file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run the ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/scripts/config-console-tools")," script to apply the settings in ",Object(i.b)("inlineCode",{parentName:"p"},"tools.yaml"),". To do so: Make sure you are logged into your cluster from the command line and run the script, specifying your cluster’s ingress subdomain. To find the ingress subdomain, go to the cluster overview page in the IBM Cloud console; it’s something like ",Object(i.b)("inlineCode",{parentName:"p"},"resource-group-NNN-XXX.region.containers.appdomain.cloud"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"./config-console-tools {cluster ingress subdomain}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Optionally, you can extend the list of tools to include links to other tools. For example, here are two links to the Cloud Pak for Multicloud Management and the Cloud Pak for Integration."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"---\napiVersion: console.openshift.io/v1\nkind: ConsoleLink\nmetadata:\n  name: toolkit-mcm\nspec:\n  applicationMenu:\n    imageURL: https://dashboard-tools.#CLUSTER_INGRESS_URL/tools/icon/mcm\n    section: Cloud Native Toolkit\n  href: https://icp-console.gsi-learning-ocp43-7ec5d722a0ab3f463fdc90eeb94dbc70-0000.us-east.containers.appdomain.cloud/\n  location: ApplicationMenu\n  text: Multi Cloud Manager\n---\napiVersion: console.openshift.io/v1\nkind: ConsoleLink\nmetadata:\n  name: toolkit-integration\nspec:\n  applicationMenu:\n    imageURL: https://dashboard-tools.#CLUSTER_INGRESS_URL/tools/icon/integration\n    section: Cloud Native Toolkit\n  href: https://navigator-integration.gsi-ocp311-integration-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.us-east.containers.appdomain.cloud/\n  location: ApplicationMenu\n  text: Integration\n")))),Object(i.b)("h2",null,"Obtaining links to external tools"),Object(i.b)("p",null,"To add external tools to the Dashboard and/or Tools menu, you need to know the links to those tools. Here’s how to find those links."),Object(i.b)("h3",null,"Image registry"),Object(i.b)("p",null,"To get the URL for the image registry:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud console, navigate to Kubernetes > Registry or OpenShift > Registry"),Object(i.b)("li",{parentName:"ul"},"On the Registry page, select the Images tab"),Object(i.b)("li",{parentName:"ul"},"That URL for the Images tab (or any of the Registry tabs) is the one to add to the tools lists")),Object(i.b)("h3",null,"LogDNA dashboard"),Object(i.b)("p",null,"Get the URL for the LogDNA web UI in your environment (as explained in ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-view_logs"},"IBM Log Analysis with LogDNA: Viewing logs"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(i.b)("strong",{parentName:"li"},"Observability")," > ",Object(i.b)("strong",{parentName:"li"},"Logging")),Object(i.b)("li",{parentName:"ul"},"Find the logging instance named after your environment’s cluster, such as ",Object(i.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-logdna"),". To help find it,\nyou can filter by your resource group.\n",Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1026px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVQI1y2N7QqCQBBFff9Hi54hggIzdNXNnY81OI1uPw7cOzDndj5lpDqq1vCCmv2Juyuv9KSfHlgV6v5lSBvjoiybMa7Ke5bIjrnTHcISz0Uk0CbU1kUsxjL35cotXcg2UH1nXj94iCXyIeunwnoKKz/SG5oJwflzTwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"LogDNA Logging Instance",title:"LogDNA Logging Instance",src:"/static/920bfed8a9f8edfb6c874be93adb3784/cb6df/logdna-logging-instance.png",srcSet:["/static/920bfed8a9f8edfb6c874be93adb3784/7fc1e/logdna-logging-instance.png 288w","/static/920bfed8a9f8edfb6c874be93adb3784/a5df1/logdna-logging-instance.png 576w","/static/920bfed8a9f8edfb6c874be93adb3784/cb6df/logdna-logging-instance.png 1026w"],sizes:"(max-width: 1026px) 100vw, 1026px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("li",{parentName:"ul"},"In the logging instance, the URL in the ",Object(i.b)("strong",{parentName:"li"},"View LogDNA")," button is the one to add to the tools lists")),Object(i.b)("h3",null,"Sysdig dashboard"),Object(i.b)("p",null,"Get the URL for the Sysdig web UI for your environment (as explained in ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step4"},"Step 4: Launch the web UI"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(i.b)("strong",{parentName:"li"},"Observability")," > ",Object(i.b)("strong",{parentName:"li"},"Monitoring")),Object(i.b)("li",{parentName:"ul"},"Find the monitoring instance named after your environment’s cluster, such as ",Object(i.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-sysdig"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1025px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.027777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVQI1z3NOw7CMBRE0ex/iyBKlCA7CNvv4+coF5OCYjTSFGeWiEDVMPeZjofONrwHMvfeB35UXnIn2wMNYc3CXoyqQfoY264U6ZznyeITqa3RRBDRC1SbqDml1uvERmFrN9IP7I38rsQ4LnDdhWdqf/AL+Ryaik/57IMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sysdig Monitoring Instance",title:"Sysdig Monitoring Instance",src:"/static/044e438fd2e34b76850d050d863ab0e4/81b7c/sysdig-monitoring-instance.png",srcSet:["/static/044e438fd2e34b76850d050d863ab0e4/7fc1e/sysdig-monitoring-instance.png 288w","/static/044e438fd2e34b76850d050d863ab0e4/a5df1/sysdig-monitoring-instance.png 576w","/static/044e438fd2e34b76850d050d863ab0e4/81b7c/sysdig-monitoring-instance.png 1025w"],sizes:"(max-width: 1025px) 100vw, 1025px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("li",{parentName:"ul"},"In the monitoring instance, the URL in the ",Object(i.b)("strong",{parentName:"li"},"View Sysdig")," button is the one to add to the tools lists")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-config-dashboard-index-mdx-c502cf80b618e00648cb.js.map