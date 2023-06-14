"use strict";(self.webpackChunkprivacy_sandcastle=self.webpackChunkprivacy_sandcastle||[]).push([[498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),s=r(6010),i=r(2466),o=r(6550),l=r(1980),d=r(7392),c=r(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:r,groupId:a}),[u,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=l??u;return h({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var v=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:r,selectedValue:o,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=d[r].value;a!==o&&(u(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},d.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},n.createElement(f,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},7661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),s=r(4866),i=r(5162);const o={title:"Retargeting / Remarketing",sidebar_position:6,more_data:[{apis:["Protected Audience API"]},{parties:["Publisher","SSP","Advertiser","DSP"]}]},l="Retargeting / Remarketing",d={unversionedId:"demos/retargeting-remarketing",id:"demos/retargeting-remarketing",title:"Retargeting / Remarketing",description:"Overview",source:"@site/docs/demos/retargeting-remarketing.md",sourceDirName:"demos",slug:"/demos/retargeting-remarketing",permalink:"/docs/demos/retargeting-remarketing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/demos/retargeting-remarketing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Retargeting / Remarketing",sidebar_position:6,more_data:[{apis:["Protected Audience API"]},{parties:["Publisher","SSP","Advertiser","DSP"]}]},sidebar:"docsSidebar",previous:{title:"Index",permalink:"/docs/demos/"},next:{title:"Single-touch conversion Attribution",permalink:"/docs/demos/single-touch-conversion-attribution"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Description",id:"description",level:3},{value:"Privacy Sandbox APIs",id:"privacy-sandbox-apis",level:3},{value:"Related parties",id:"related-parties",level:3},{value:"Scope",id:"scope",level:2},{value:"Goals",id:"goals",level:3},{value:"Assumptions",id:"assumptions",level:3},{value:"Key Exclusions",id:"key-exclusions",level:3},{value:"System Design",id:"system-design",level:3},{value:"Protected Audience Flow",id:"protected-audience-flow",level:4},{value:"User Journey #1",id:"user-journey-1",level:4},{value:"Demo",id:"demo",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"User Journey #1",id:"user-journey-1-1",level:3},{value:"Implementation details",id:"implementation-details",level:3},{value:"In (2) How is the user added to an Interest Group based on his browsing behavior ?",id:"in-2-how-is-the-user-added-to-an-interest-group-based-on-his-browsing-behavior-",level:4},{value:"In (4) how do we serve an ad relevant to the user\u2019s interest ?",id:"in-4-how-do-we-serve-an-ad-relevant-to-the-users-interest-",level:4},{value:"Related API documentation",id:"related-api-documentation",level:3}],p={toc:u},h="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"retargeting--remarketing"},"Retargeting / Remarketing"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"overview",label:"Overview",default:!0,mdxType:"TabItem"},(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"Remarketing is a type of online advertising that allows you to show ads to people who have already visited your website. You can create custom audiences based on different criteria, such as pages visited or products added to the cart. Remarketing can help you increase brand awareness, drive traffic back to your website, and boost sales."),(0,n.kt)("h3",{id:"privacy-sandbox-apis"},"Privacy Sandbox APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.chrome.com/en/docs/privacy-sandbox/fledge/"},"Protected Audience API"))),(0,n.kt)("h3",{id:"related-parties"},"Related parties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Publisher"),(0,n.kt)("li",{parentName:"ul"},"SSP"),(0,n.kt)("li",{parentName:"ul"},"Advertiser"),(0,n.kt)("li",{parentName:"ul"},"DSP"))),(0,n.kt)(i.Z,{value:"scope",label:"Scope",mdxType:"TabItem"},(0,n.kt)("h2",{id:"scope"},"Scope"),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("p",null,"In this demo, we assume an advertiser would like to drive traffic back to their website. Remarketing can help an advertiser to get people who have already visited their website to come back for more or to complete a purchase. This can be done by showing them ads about the product they have previously looked at, on other websites."),(0,n.kt)("h3",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"This use case assumes the advertiser (shop site) can bid on the publisher (news site) inventory through an agreement between their respective DSP and SSP platforms."),(0,n.kt)("h3",{id:"key-exclusions"},"Key Exclusions"),(0,n.kt)("p",null,"The demo does not integrate existing auction mechanisms (prebid or header bidding\u2026). it is only scoped to on-device auction with Protected Audience API.\nThe ad selection is very straightforward (only 1 bidder).\nThe bidding logic does not include real-time signals from Key/Value service."),(0,n.kt)("h3",{id:"system-design"},"System Design"),(0,n.kt)("p",null,"Using Protected Audience API, the user visits a shopping site, and gets added to an interest group. Later the same user visits a news site. There the browser runs an on-device Auction, bidding logic will select the winning interest group, and relevant ads will be dynamically rendered on the publisher page."),(0,n.kt)("h4",{id:"protected-audience-flow"},"Protected Audience Flow"),(0,n.kt)("p",null,"Below is a general introduction of Remarketing using Privacy Sandbox Protected Audience API. For further information see ",(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/privacy-sandbox/fledge/"},"Protected Audience API - Chrome Developers"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Protected Audience Flow",src:r(9085).Z,width:"2834",height:"1360"})),(0,n.kt)("h4",{id:"user-journey-1"},"User Journey #1"),(0,n.kt)("mermaid",{value:"sequenceDiagram\nTitle: Retargeting / Remarketing - User Journey 1\n\nparticipant Browser\nparticipant Publisher\nparticipant SSP\nparticipant Advertiser\nparticipant DSP\n\nBrowser->>Advertiser:visits a shop site and reviews products\nAdvertiser--\x3e>Browser:return DSP tags\nBrowser->>DSP:browser loads scripts from DSP\nDSP--\x3e>Browser:returns interest group configuration\n\nBrowser--\x3e>Browser:navigator.joinAdInterestGroup(...)\n\nBrowser-)Publisher:visits a news  site\nPublisher--\x3e>Browser:return SSP tags\nBrowser->>SSP:browser loads scripts from SSP\nSSP--\x3e>Browser:returns auction configuration\n\nBrowser-)Browser:navigator.runAdAuction(auctionConfig)\n\nnote right of Browser:each interest group's bidding function will run\nBrowser-)Browser:generateBid(...)\n\nnote right of Browser:for each candidate ad in the auction\nBrowser-)Browser:scoreAd(...)\n\nnote right of Browser:Winning ad is displayed in a fenced-frame\nBrowser->>SSP:Request ad creative\nSSP--\x3e>Browser:Return ad creative\n\nNote right of Browser:Scenario 1 stops here\n"})),(0,n.kt)(i.Z,{value:"demo",label:"Demo",mdxType:"TabItem"},(0,n.kt)("h2",{id:"demo"},"Demo"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrome > v107"),(0,n.kt)("li",{parentName:"ul"},"Enable Privacy Sandbox APIs"),(0,n.kt)("li",{parentName:"ul"},"Clear your browsing history before you run one of the demo scenario below")),(0,n.kt)("h3",{id:"user-journey-1-1"},"User Journey #1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://privacy-sandcastle-shop.dev/"},"Navigate to shop site")," (advertiser)"),(0,n.kt)("li",{parentName:"ol"},"Click on a \u201cshoe\u201d product item on the shop site.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The shop (advertiser) would assume the user is interested in this type of product, so they would leverage Protected Audience API and ask the browser to join an ad interest group for this product or this specific product category."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://privacy-sandcastle-news.dev/"},"Navigate to the news site")," (publisher)"),(0,n.kt)("li",{parentName:"ol"},"Observe the ad served on the news site",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you previously browsed the \u201cshoe\u201d product on the shop site, you will be shown an ad for the same product."),(0,n.kt)("li",{parentName:"ul"},"When the page was loaded, Protected Audience API allowed the SSP to run an ad auction on the publisher site."),(0,n.kt)("li",{parentName:"ul"},"The winning advertiser of this ad auction gets their ad creative to be displayed on the publisher site. In this case you have cleared the browser history and only browsed 1 advertiser site page so you are only seeing 1 ad creative from the same advertiser.")))),(0,n.kt)("h3",{id:"implementation-details"},"Implementation details"),(0,n.kt)("h4",{id:"in-2-how-is-the-user-added-to-an-interest-group-based-on-his-browsing-behavior-"},"In (2) How is the user added to an Interest Group based on his browsing behavior ?"),(0,n.kt)("p",null,"The shop product page ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/1d55a6d540b3b1949a36337dfe5e5221454d311b/services/shop/app/items/%5Bid%5D/page.tsx#LL58C13-L58C13"},"includes dsp-tag.js "),"from the DSP service. This is a third-party tag from the DSP service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  src="https://privacy-sandcastle-prod-dsp.web.app/dsp-tag.js"\n  class="dsp_tag"\n  data-advertiser="privacy-sandcastle-prod-shop.web.app"\n  data-id="1f45e"\n  data-nscript="afterInteractive"\n><\/script>\n')),(0,n.kt)("p",null,"This ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/main/services/dsp/src/public/dsp-tag.js"},"dsp-tags.js")," dynamically embeds an iframe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  width="1"\n  height="1"\n  src="https://privacy-sandcastle-prod-dsp.web.app/join-ad-interest-group.html?advertiser=privacy-sandcastle-prod-shop.web.app&amp;id=1f45e"\n  allow="join-ad-interest-group"\n></iframe>\n')),(0,n.kt)("p",null,"The iframe calls a third-party script ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/main/services/dsp/src/public/js/join-ad-interest-group.js"},"join-ad-interest-group.js")," to join interest group using Protected Audience API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/JackJey/privacy-sandcastle/blob/main/services/dsp/src/public/js/join-ad-interest-group.js"',title:'"https://github.com/JackJey/privacy-sandcastle/blob/main/services/dsp/src/public/js/join-ad-interest-group.js"'},'document.addEventListener("DOMContentLoaded", async (e) => {\n  // Protected Audience\n  const url = new URL(location.href)\n  const advertiser = url.searchParams.get("advertiser")\n  const id = url.searchParams.get("id")\n  const interestGroup = await getInterestGroup(advertiser, id)\n  const kSecsPerDay = 3600 * 24 * 30\n\n  // Join user into an interest group\n  await navigator.joinAdInterestGroup(interestGroup, kSecsPerDay)\n})\n')),(0,n.kt)("p",null,"This code sets up the interest groups options. Those options are fetched dynamically from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/1d55a6d540b3b1949a36337dfe5e5221454d311b/services/dsp/src/index.ts#L50"},"interest-group.json"),".\nFinally the code requests the browser to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/1d55a6d540b3b1949a36337dfe5e5221454d311b/services/dsp/src/public/js/join-ad-interest-group.js#L37"},"join the interest group")),(0,n.kt)("h4",{id:"in-4-how-do-we-serve-an-ad-relevant-to-the-users-interest-"},"In (4) how do we serve an ad relevant to the user\u2019s interest ?"),(0,n.kt)("p",null,"The news page ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/1d55a6d540b3b1949a36337dfe5e5221454d311b/services/news/src/views/index.ejs#L29"},"includes ad-tag.js "),"from the SSP service. This is a third-party tag from the SSP service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script defer="" class="ssp_tag" src="https://privacy-sandcastle-prod-ssp.web.app/ad-tag.js"><\/script>\n')),(0,n.kt)("p",null,"This ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/main/services/ssp/src/public/ad-tag.js"},"ssp-tags.js")," dynamically embeds an iframe."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  width="300"\n  height="250"\n  src="https://privacy-sandcastle-prod-ssp.web.app/ad-tag.html"\n  scrolling="no"\n  style="border: none"\n  allow="attribution-reporting; run-ad-auction"\n></iframe>\n')),(0,n.kt)("p",null,"The iframe calls a third-party script ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/main/services/ssp/src/public/js/run-ad-auction.js"},"run-ad-auction.js")," to run an ondevice ad auction using Protected Audience API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u201dhttps://github.com/JackJey/privacy-sandcastle/blob/main/services/ssp/src/public/js/run-ad-auction.js\u201d",title:"\u201dhttps://github.com/JackJey/privacy-sandcastle/blob/main/services/ssp/src/public/js/run-ad-auction.js\u201d"},'document.addEventListener("DOMContentLoaded", async (e) => {\n  const auctionConfig = await getAuctionConfig()\n\n  // Running Ad Auction\n  const adAuctionResult = await navigator.runAdAuction(auctionConfig)\n\n  // Display selected Ads\n  const $fencedframe = document.createElement("fencedframe")\n  $fencedframe.src = adAuctionResult\n  $fencedframe.setAttribute("mode", "opaque-ads")\n  $fencedframe.setAttribute("scrolling", "no")\n  $fencedframe.width = 300\n  $fencedframe.height = 250\n  document.body.appendChild($fencedframe)\n})\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"runAdAuction")," code is executed by the browser and will decide which ad will be served to the user.\nThe result of the auction is displayed within a Fenced Frame by specifying the urn to the ad creative. Developers would traditionally use https urls however Protected Audience API is hiding the creative url from the parent page by using a unique urn that is only recognized by the browser and mapped to a real url where the creative is fetched. This is a privacy protected mechanism to not reveal the user's interest to the parent page and the ssp."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <fencedframe src="urn:uuid:f20265ee-fcd4-4e79-8e70-61756b6c0ea9" mode="opaque-ads" scrolling="no" width="300" height="250"></fencedframe>\n</body>\n')),(0,n.kt)("p",null,"note that Fenced Frame attribute ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," must be set to \u201copaque-ads\u201d to display ads using urn.\nFenced Frame size (width and height) only allow pre-defined values, please refer to the allow-list from the documentation.\nThe request to the ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," urn",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JackJey/privacy-sandcastle/blob/1d55a6d540b3b1949a36337dfe5e5221454d311b/services/ssp/src/index.js#LL87C1-L87C1"}," returns the ad creative")," to be displayed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<a\n  width="300"\n  height="250"\n  target="_blank"\n  attributionsrc=""\n  href="https://privacy-sandcastle-prod-ssp.web.app/move?advertiser=privacy-sandcastle-prod-shop.web.app&amp;id=1f45e"\n>\n  <img\n    width="294"\n    height="245"\n    loading="lazy"\n    attributionsrc=""\n    src="https://privacy-sandcastle-prod-ssp.web.app/creative?advertiser=privacy-sandcastle-prod-shop.web.app&amp;id=1f45e"\n  />\n</a>\n')),(0,n.kt)("p",null,"This code contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"img")," tag with ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," attribute specifying the product the user might be interested in and a link to the product."),(0,n.kt)("h3",{id:"related-api-documentation"},"Related API documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/privacy-sandbox/fledge/"},"Protected Audience API - Chrome Developers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/privacy-sandbox/fledge-api/"},"Protected Audience API: developer guide"))))))}m.isMDXComponent=!0},9085:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/retargeting-remarketing-flow-83bee1aee08c289304d42774a261fb23.png"}}]);