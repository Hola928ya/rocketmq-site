"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(a),p=n,g=d["".concat(o,".").concat(p)]||d[p]||u[p]||l;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<l;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},s="Parameter constraints and suggestions",i={unversionedId:"\u57fa\u7840\u4ecb\u7ecd/03limits",id:"version-5.0/\u57fa\u7840\u4ecb\u7ecd/03limits",title:"Parameter constraints and suggestions",description:"There are many custom parameters and resource names in the Apache RocketMQ system. You are advised to set the system according to the following instructions to avoid application exceptions caused by improper setting of certain parameters.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/01-\u57fa\u7840\u4ecb\u7ecd/03limits.md",sourceDirName:"01-\u57fa\u7840\u4ecb\u7ecd",slug:"/\u57fa\u7840\u4ecb\u7ecd/03limits",permalink:"/en/docs/\u57fa\u7840\u4ecb\u7ecd/03limits",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-\u57fa\u7840\u4ecb\u7ecd/03limits.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Concepts",permalink:"/en/docs/\u57fa\u7840\u4ecb\u7ecd/02concepts"},next:{title:"Quick Start",permalink:"/en/docs/\u5feb\u901f\u5165\u95e8/02quickstart"}},o={},m=[],c={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parameter-constraints-and-suggestions"},"Parameter constraints and suggestions"),(0,n.kt)("p",null,"There are many custom parameters and resource names in the Apache RocketMQ system. You are advised to set the system according to the following instructions to avoid application exceptions caused by improper setting of certain parameters."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Recommended range"),(0,n.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Topic name"),(0,n.kt)("td",{parentName:"tr",align:null},"Characters suggest\uff1aa","~","z A","~","Z 0","~","9 \uff08",(0,n.kt)("em",{parentName:"td"},"\uff09\uff08-\uff09\uff08%\uff09  ",(0,n.kt)("br",null)," Suggested length\uff1a1","~","64 characters   ",(0,n.kt)("br",null)," System reserved character\uff1aThe following reserved characters or characters with special prefixes are not allowed for topic names. ",(0,n.kt)("br",null)," reserved characters: TBW102  ",(0,n.kt)("em",{parentName:"em"}," BenchmarkTest  ")," SELF_TEST_TOPIC  ",(0,n.kt)("em",{parentName:"em"}," OFFSET_MOVED_EVENT  ")," SCHEDULE_TOPIC_XXXX  ",(0,n.kt)("em",{parentName:"em"}," RMQ_SYS_TRANS_HALF_TOPIC  ")," RMQ_SYS_TRACE_TOPIC  ",(0,n.kt)("em",{parentName:"em"}," RMQ_SYS_TRANS_OP_HALF_TOPIC   ",(0,n.kt)("br",null),"  reserved prefix characters: ")," rmq_sys"),"   %RETRY%",(0,n.kt)("em",{parentName:"td"},"   %DLQ%"),"   rocketmq-broker-"),(0,n.kt)("td",{parentName:"tr",align:null},"Topic name should use short, common characters and avoid special characters. Special characters may cause exceptions in system parsing. If the characters are too long, messages may be rejected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ConsumerGroup name"),(0,n.kt)("td",{parentName:"tr",align:null},"Characters suggest\uff1aa","~","z A","~","Z 0","~","9 \uff08",(0,n.kt)("em",{parentName:"td"},"\uff09\uff08-\uff09\uff08%\uff09  ",(0,n.kt)("br",null)," Suggested length\uff1a1","~","64 characters   ",(0,n.kt)("br",null)," System reserved character\uff1aThe following reserved characters or characters with special prefixes are not allowed for consumerGroup names. ",(0,n.kt)("br",null)," reserved characters: ",(0,n.kt)("em",{parentName:"em"}," DEFAULT_CONSUMER  ")," DEFAULT_PRODUCER  ",(0,n.kt)("em",{parentName:"em"}," TOOLS_CONSUMER  ")," FILTERSRV_CONSUMER  ",(0,n.kt)("em",{parentName:"em"}," __MONITOR_CONSUMER  ")," CLIENT_INNER_PRODUCER  ",(0,n.kt)("em",{parentName:"em"}," SELF_TEST_P_GROUP  ")," SELF_TEST_C_GROUP  ",(0,n.kt)("em",{parentName:"em"}," CID_ONS-HTTP-PROXY  ")," CID_ONSAPI_PERMISSION  ",(0,n.kt)("em",{parentName:"em"}," CID_ONSAPI_OWNER  ")," CID_ONSAPI_PULL  ",(0,n.kt)("em",{parentName:"em"}," CID_RMQ_SYS_TRANS    ")," reserved characters * CID_RMQ_SYS"),"  * CID_HOUSEKEEPING"),(0,n.kt)("td",{parentName:"tr",align:null},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ACL credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"Characters suggest\uff1aAK\uff08AccessKey ID\uff09\u3001SK\uff08AccessKey Secret\uff09and Token only support a","~","z A","~","Z 0","~","9  ",(0,n.kt)("br",null)," Suggested length\uff1aless than 1024 characters."),(0,n.kt)("td",{parentName:"tr",align:null},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a3000ms."),(0,n.kt)("td",{parentName:"tr",align:null},"The request timeout duration is the waiting time for local synchronous invocation of clients. Set a proper value based on the actual application to avoid long thread blocking time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max message size"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a4 MB.  Message compression is not involved, only the size of the message body is calculated.   ",(0,n.kt)("br",null),"Value range\uff1aSuggest less than 4 MB."),(0,n.kt)("td",{parentName:"tr",align:null},"The message transmission should be compressed and the load should be controlled to avoid the transmission of large files.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Message custom properties"),(0,n.kt)("td",{parentName:"tr",align:null},"Character limit\uff1aAll visible characters.   ",(0,n.kt)("br",null),"Suggested length\uff1aSum of all keys and values less than 16KB.   ",(0,n.kt)("br",null),"System reserved properties\uff1aThe following reserved properties are not allowed as keys for custom properties. System reserved Keys"),(0,n.kt)("td",{parentName:"tr",align:null},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MessageGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"Character limit\uff1aAll visible characters.  ",(0,n.kt)("br",null),"Suggested length\uff1a1","~","64."),(0,n.kt)("td",{parentName:"tr",align:null},"Generally, messageGroup is set to a set of message identifiers that need to ensure order, such as order, user, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max number of message sending retries"),(0,n.kt)("td",{parentName:"tr",align:null},"Default values\uff1a3 times.  ",(0,n.kt)("br",null),"Value range\uff1aNo limits."),(0,n.kt)("td",{parentName:"tr",align:null},"Sending retry policy is invisible to applications. A small value is recommended to avoid blocking service threads.  If the message is not sent successfully after the maximum number of retries is reached, it is recommended that the service side perform backtracking to ensure message reliability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max number of message consume retries"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a16 times."),(0,n.kt)("td",{parentName:"tr",align:null},"Consumption retry times set a proper value based on actual service requirements to avoid unlimited consumption retry times. If the number of retry times is too large, the system pressure increases.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Transaction exception check interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a60 seconds."),(0,n.kt)("td",{parentName:"tr",align:null},"Transaction exception check interval refers to the interval at which semi-transaction messages are not committed due to system restart or abnormal conditions. The producer client will check back the transaction status according to this interval. Do not set the interval too short. Otherwise, the system performance may be affected by frequent callback calls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Time of the first callback of a semi-transaction message"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1aRefer to ","[","Transaction exception check interval","]","  * Max check times"),(0,n.kt)("td",{parentName:"tr",align:null},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maximum timeout duration of semi-transaction messages"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a4 Hour."),(0,n.kt)("td",{parentName:"tr",align:null},"If the semi-transaction message is not committed due to system restart or abnormal conditions, the producer client will check back according to the transaction exception check interval. If no result is returned after the timeout period of the semi-transaction message, the semi-transaction message will be forcibly rolled back.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PushConsumer sdk cache"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a ",(0,n.kt)("br",null)," ",(0,n.kt)("em",{parentName:"td"}," Maximum cache num\uff1a1024  ",(0,n.kt)("br",null))," Maximum cache size\uff1a64 M."),(0,n.kt)("td",{parentName:"tr",align:null},"The number and size of cached messages should be set to the limit allowed by system memory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PushConsumer retry intervals"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a ",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"}," Concurrent deliver type\uff1aThe interval time ladder changes.  ",(0,n.kt)("br",null))," Fifo deliver type\uff1a3000 ms."),(0,n.kt)("td",{parentName:"tr",align:null},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PushConsumer consume threads"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a20"),(0,n.kt)("td",{parentName:"tr",align:null},"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get message batch size"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1a32"),(0,n.kt)("td",{parentName:"tr",align:null},"The consumer obtains the maximum number of messages from the server at a time. You are advised to set a proper parameter value based on actual services. If the number of messages obtained at one time is too large, a large number of messages may be duplicated when consumption fails.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SimpleConsumer max invisible time"),(0,n.kt)("td",{parentName:"tr",align:null},"Default value\uff1aThis parameter is mandatory and has no default value.  ",(0,n.kt)("br",null)," Suggested range\uff1a10 seconds to 12 hours."),(0,n.kt)("td",{parentName:"tr",align:null},"Consumption invisible time refers to the total time between message processing and retry after failure. You are advised to set the value to a little longer than the actual time.")))))}u.isMDXComponent=!0}}]);