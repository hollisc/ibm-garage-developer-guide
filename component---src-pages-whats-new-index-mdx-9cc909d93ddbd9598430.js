(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),p=a.n(c),m=a("QH2O"),u=a.n(m),g=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(g.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===r,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},d=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,i=n.baseUrl,l=n.subDirectory,b=i+"/edit/"+n.branch+l+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+d.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:d.link,href:b},"Edit this page on GitHub"))):null},O=a("dI71"),v=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),i=n===r,b=new RegExp(r+"/?(#.*)?$"),s=a.replace(b,n);return Object(g.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(g.b)(o.Link,{className:v.link,to:""+s},e))}));return Object(g.b)("div",{className:v.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:v.list},n))))))},t}(n.a.Component),f=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,i=t.frontmatter,c=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,u=c.tabs,d=c.title,O=c.theme,v=c.description,I=c.keywords,y=Object(k.a)().interiorTheme,x=Object(o.useStaticQuery)("223705900").site.pathPrefix,w=x?r.pathname.replace(x,""):r.pathname,T=u?w.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",M=O||y;return Object(g.b)(s.a,{tabs:u,homepage:!1,theme:M,pageTitle:d,pageDescription:v,pageKeywords:I,titleType:m},Object(g.b)(h,{title:n?Object(g.b)(n,null):d,label:"label",tabs:u,theme:M}),u&&Object(g.b)(N,{slug:w,tabs:u,currentTab:T}),Object(g.b)(f.a,{padded:!0},a,Object(g.b)(j,{relativePagePath:p})),Object(g.b)(b.a,null))}},dGNc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("XbGe"),o=a("T0C+"),b=(a("qKvR"),{}),s={_frontmatter:b},c=l.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(c,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Jan 28, 2021"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://cloudnativetoolkit.dev/workshop"},"Cloud Native Toolkit Workshop")," released. The workshop in a box environment is easy and quick to setup with hands on labs including videos.\nCheck them out at ",Object(i.b)("a",{parentName:"p",href:"https://cloudnativetoolkit.dev/workshop"},"cloudnativetoolkit.dev/workshop"),". More hands on labs for the workshop coming soon."),Object(i.b)("h2",null,"Jan 6, 2021"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/getting-started/cli"},"CLI")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.11.1"},"v1.11.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.11.0"},"v1.11.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.10.2"},"v1.10.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.10.1"},"v1.10.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.10.0"},"v1.10.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.9.0"},"v1.9.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.8.1"},"v1.8.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.8.0"},"v1.8.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.7.1"},"v1.7.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.7.0"},"v1.7.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.6.0"},"v1.6.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.5.0"},"v1.5.0")),Object(i.b)("p",null,"Many usability changes, particularly for the ",Object(i.b)("inlineCode",{parentName:"p"},"pipeline")," command:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reduces required permissions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"At the start of every command that needs access to the kube api, the cli checks that a connection is available.\nPreviously it did that by trying to list all the pods in the cluster (e.g. the equivalent of ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl get pods -A"),").\nUnfortunately, that command needs a great deal of access to succeed. The check was changed to run a command that requires\nmuch less permission."),Object(i.b)("li",{parentName:"ul"},"Before creating the webhook triggers, the pipeline command would read the Tekton version number from annotations on the\noperator deployment in the ",Object(i.b)("inlineCode",{parentName:"li"},"openshift-operators")," namespace. This check required a great deal of permissions to be able\nto read the deployment in that namespace. Instead, the ",Object(i.b)("inlineCode",{parentName:"li"},"pipeline")," command has been changed to resort to a brute force\ncheck - it assumes v0.6.0 and if it fails tries again with v0.4.0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Usability updates for ",Object(i.b)("inlineCode",{parentName:"strong"},"pipeline")," command")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allows the repo url to be passed in so it is not necessary to clone the repository first"),Object(i.b)("li",{parentName:"ul"},"Creates a single event listener per namespace/project instead of a new event listener for each repo"),Object(i.b)("li",{parentName:"ul"},"Detects the runtime of the repository and filters the tekton pipelines based on the runtime"),Object(i.b)("li",{parentName:"ul"},"Reads params from tekton pipeline and prompts for values"),Object(i.b)("li",{parentName:"ul"},"The input arguments have been cleaned up to remove conflicts and to use values that make more sense for the\ninput parameters.")),Object(i.b)("h2",null,"Dec 11, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/admin/terraform"},"IasC (IZero and Terraform modules)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.5.0"},"v2.5.0")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updates ibm-container-platform module to v1.18.3 to provision ocp 4.5 clusters properly"),Object(i.b)("li",{parentName:"ul"},"Adds option of storage class for Artifactory"),Object(i.b)("li",{parentName:"ul"},"Updates to point releases of terraform modules with updated workflows to generate module catalogs",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"argocd v2.10.1"),Object(i.b)("li",{parentName:"ul"},"artifactory v1.10.0"),Object(i.b)("li",{parentName:"ul"},"dashboard v1.10.4"),Object(i.b)("li",{parentName:"ul"},"ibm-image-registry v1.2.3"),Object(i.b)("li",{parentName:"ul"},"ocp-image-registry v1.2.2"),Object(i.b)("li",{parentName:"ul"},"k8s-image-registry v1.1.5"),Object(i.b)("li",{parentName:"ul"},"k8s-source-control v1.2.1"),Object(i.b)("li",{parentName:"ul"},"jenkins v1.4.3"),Object(i.b)("li",{parentName:"ul"},"pactbroker v1.4.2"),Object(i.b)("li",{parentName:"ul"},"sonarqube v1.9.2"),Object(i.b)("li",{parentName:"ul"},"swaggereditor v1.4.1"),Object(i.b)("li",{parentName:"ul"},"tekton v2.0.2"),Object(i.b)("li",{parentName:"ul"},"tekton-resources v2.2.0"),Object(i.b)("li",{parentName:"ul"},"ibm-logdna v2.4.3"),Object(i.b)("li",{parentName:"ul"},"ibm-sysdig v2.3.3")))),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/getting-started/cli"},"CLI")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.4.2"},"v1.4.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.4.1"},"v1.4.1")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prints next steps to the console after calling the ",Object(i.b)("inlineCode",{parentName:"p"},"pipeline")," command"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"Pipeline run started: memcached-operator-catalog-1762ff0a6d7\n\nNext steps:\n  Tekton cli:\n    View PipelineRun info - tkn pr describe memcached-operator-catalog-1762ff0a6d7\n    View PipelineRun logs - tkn pr logs memcached-operator-catalog-1762ff0a6d7\n  OpenShift console:\n    View PipelineRun - https://console-openshift-console.garage-dev-ocp45-vpc-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud/k8s/ns/operator-dev/tekton.dev~v1beta1~PipelineRun/memcached-operator-catalog-1762ff0a6d7\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Registers the ",Object(i.b)("inlineCode",{parentName:"p"},"gitops")," command as a plugin to kubectl and oc clis"))),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/tools/tekton"},"Tekton tasks")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.3"},"v2.2.3"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.2"},"v2.2.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.1"},"v2.2.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.0"},"v2.2.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.27"},"v2.1.27")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updates tasks to use images hosted in quay.io instead of docker.io to avoid rate limiting issue"),Object(i.b)("li",{parentName:"ul"},"Adds workflow to mirror required images from docker.io to quay.io on a nightly schedule"),Object(i.b)("li",{parentName:"ul"},"Adds pipelines for operator and operator catalog builds")),Object(i.b)("h2",null,"Nov 20, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/getting-started/cli"},"CLI")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.4.0"},"v1.4.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.3.0"},"v1.3.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.2.2"},"v1.2.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.2.2"},"v1.2.1")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Refactors Git server interaction logic to make more extensible"),Object(i.b)("li",{parentName:"ul"},"Adds support to ",Object(i.b)("inlineCode",{parentName:"li"},"pipeline")," command for Gogs git server running in cluster"),Object(i.b)("li",{parentName:"ul"},"Adds support to ",Object(i.b)("inlineCode",{parentName:"li"},"pipeline")," command for Bitbucket along with existing support for GitHub, GitHub Enterprise, and GitLab")),Object(i.b)("h2",null,"Nov 13, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/admin/terraform"},"IasC (IZero and Terraform modules)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.4.0"},"v2.4.0")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adds image-registry and source-control modules"),Object(i.b)("li",{parentName:"ul"},"Updates numbering for generated tiles"),Object(i.b)("li",{parentName:"ul"},"Updates default settings when installing from iZero"),Object(i.b)("li",{parentName:"ul"},"Updates underlying module versions",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ibm-container-platform v1.18.0"),Object(i.b)("li",{parentName:"ul"},"artifactory v1.9.2"),Object(i.b)("li",{parentName:"ul"},"dashboard v1.10.0"),Object(i.b)("li",{parentName:"ul"},"ibm-image-registry v1.2.0"),Object(i.b)("li",{parentName:"ul"},"ocp-image-registry v1.2.0"),Object(i.b)("li",{parentName:"ul"},"tools-tekton-resources v2.1.9"),Object(i.b)("li",{parentName:"ul"},"k8s-source-control v1.2.0"),Object(i.b)("li",{parentName:"ul"},"tools-swagger-editor v1.4.0")))),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/tools/tekton"},"Tekton tasks")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.26"},"v2.1.26"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.25"},"v2.1.25"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.24"},"v2.1.24"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.23"},"v2.1.23"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.22"},"v2.1.24"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.21"},"v2.1.21"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.20"},"v2.1.20")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updates tekton tasks to support Gogs git server running in cluster"),Object(i.b)("li",{parentName:"ul"},"Fixes setup task to handle different characters in git url"),Object(i.b)("li",{parentName:"ul"},"Updates the task order in the pipelines to release the helm chart after the scan"),Object(i.b)("li",{parentName:"ul"},"Defaults to using the internal OCP registry if none is defined")),Object(i.b)("h2",null,"Nov 6, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/admin/terraform"},"IasC (IZero and Terraform modules)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.9"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.8"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.7"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.6"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.5"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.4"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.3"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.3.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.3.9"},"v2.2.2")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prints the elapsed time for the Toolkit installation process"),Object(i.b)("li",{parentName:"ul"},"Updates tile definition to include README.md in long description and update input parameters"),Object(i.b)("li",{parentName:"ul"},"Updates module versions",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ibm-container-platform v1.18.0"),Object(i.b)("li",{parentName:"ul"},"ibm-object-storage v2.0.1")))),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/getting-started/cli"},"CLI")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.2.0"},"v1.2.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.1.0"},"v1.1.0")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simplifies the logic used to determine cluster type by using intrinsic information within the cluster. This expands the number of commands that can be run against a cluster that doesn’t have the toolkit installed"),Object(i.b)("li",{parentName:"ul"},"Updates the git secret logic to support older versions of the git cli (which allows the CLI to be run in the IBM OpenLab environment)")),Object(i.b)("h2",null,"Oct 30, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/admin/terraform"},"IasC (IZero and Terraform modules)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.2.1"},"v2.2.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.2.0"},"v2.2.0")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adds quick install option with Terraform job running within the cluster"),Object(i.b)("li",{parentName:"ul"},"Updates Tekton Resources module to v2.1.8"),Object(i.b)("li",{parentName:"ul"},"Update terraform modules to latest",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"dashboard v1.9.0"),Object(i.b)("li",{parentName:"ul"},"ocp-cluster v2.3.5"),Object(i.b)("li",{parentName:"ul"},"pactbroker v1.4.0")))),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/getting-started/cli"},"CLI")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.0.3"},"v1.0.3"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.0.2"},"v1.0.2")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixes bug that causes the ",Object(i.b)("inlineCode",{parentName:"li"},"endpoint")," command to fail due to a missing import"),Object(i.b)("li",{parentName:"ul"},"Fixes bug with the ",Object(i.b)("inlineCode",{parentName:"li"},"credentials")," command that caused the internal urls to be displayed instead of the external ones")),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/tools/tekton"},"Tekton tasks")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.19"},"v2.1.19"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.18"},"v2.1.18"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.17"},"v2.1.17"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.16"},"v2.1.16"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.15"},"v2.1.15"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.14"},"v2.1.14"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.13"},"v2.1.13"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.12"},"v2.1.12"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.11"},"v2.1.11"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.10"},"v2.1.10"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.9"},"v2.1.9"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.8"},"v2.1.8"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.7"},"v2.1.7"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.6"},"v2.1.6"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.5"},"v2.1.5"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.4"},"v2.1.4"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.3"},"v2.1.3")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixes bug in deploy task when the Git hash has an “e” in it (tries to convert to an exponential number)"),Object(i.b)("li",{parentName:"ul"},"Combines Trivy and IBM VA scan into one task"),Object(i.b)("li",{parentName:"ul"},"Uses internal endpoints for tools hosted within the cluster (like artifactory and sonarqube)"),Object(i.b)("li",{parentName:"ul"},"Updates from helm v2 to v3 for the pipeline logic"),Object(i.b)("li",{parentName:"ul"},"Fix the health url check logic"),Object(i.b)("li",{parentName:"ul"},"Uses registry-access to get image registry information instead of ibmcloud-config"),Object(i.b)("li",{parentName:"ul"},"Adds logic to wait for Vulnerability Advisor to complete before testing the result")),Object(i.b)("h2",null,"Sept 25, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/tools/tekton"},"Tekton tasks")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.2"},"v2.1.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.1"},"v2.1.1"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.0"},"v2.1.0"),","),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Introduces image vulnerability scan with Aquasec Trivy"),Object(i.b)("li",{parentName:"ul"},"Fixes trivy scan logic to check for PERFORM_SCAN flag in setup and execute steps")),Object(i.b)("h2",null,"Sept 11, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/admin/terraform"},"IasC (IZero and Terraform modules)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.1.0"},"v2.1.0"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.0.2"},"v2.0.2"),",\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.0.1"},"v2.0.1")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Introduced Key Protect ArgoCD plugin in argocd module to v2.9.0 to generate kubernetes secrets from key material in Key Protect"),Object(i.b)("li",{parentName:"ul"},"Updates namespace module to v2.6.0 to remove use of previously deprecated, now removed ",Object(i.b)("inlineCode",{parentName:"li"},"--export")," flag")),Object(i.b)("h2",null,"Aug 25, 2020"),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/admin/terraform"},"IasC (IZero and Terraform modules)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-iteration-zero/releases/tag/v2.0.0"},"v2.0.0")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updates Tekton module and resources to support the Red Hat Tekton operator and related versions"),Object(i.b)("li",{parentName:"ul"},"Simplifies the process to install the ",Object(i.b)(o.a,{name:"longName",mdxType:"Globals"})," on a ",Object(i.b)(o.a,{name:"ocp",mdxType:"Globals"})," provisioned anywhere"),Object(i.b)("li",{parentName:"ul"},"Provide Private Catalog tile for install with Schematics"),Object(i.b)("li",{parentName:"ul"},"Improves the handling of LogDNA and Sysdig in the cluster"),Object(i.b)("li",{parentName:"ul"},"Automates the post-install configuration steps for Artifactory"),Object(i.b)("li",{parentName:"ul"},"Automates the post-install configuration steps for SonarQube")),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/getting-started/cli"},"CLI")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/ibm-garage-cloud-cli/releases/tag/1.0.1"},"v1.0.1")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updates tekton pipeline handling to create the webhook"),Object(i.b)("li",{parentName:"ul"},"Adds ",Object(i.b)("inlineCode",{parentName:"li"},"git"),",",Object(i.b)("inlineCode",{parentName:"li"},"gitops")," and ",Object(i.b)("inlineCode",{parentName:"li"},"console")," commands")),Object(i.b)("h3",null,Object(i.b)("a",{parentName:"h3",href:"/tools/tekton"},"Tekton tasks")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.0.3"},"v2.0.3")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Refactors tasks and pipelines to support v1beta1 schema and remove dependency on PipelineResources"),Object(i.b)("li",{parentName:"ul"},"Streamlines CI process in pipelines to be more modular and reusable"),Object(i.b)("li",{parentName:"ul"},"Tasks for Vulnerability scanning with IBM Image Registry")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-whats-new-index-mdx-9cc909d93ddbd9598430.js.map