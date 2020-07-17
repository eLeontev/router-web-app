(this["webpackJsonprouter-web-app"]=this["webpackJsonprouter-web-app"]||[]).push([[3],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"DashboardPage",(function(){return ze}));var n,c,r,i=a(0),o=a.n(i),l=a(12),s=a(1),u=(a(224),a(9)),m=a(64),f=function(e){var t=e.type;return o.a.createElement("section",{className:"unknown-card"},o.a.createElement(m.a,{message:"card with type: ".concat(t," is not found"),type:"error",onClose:function(){},shouldHideCloseButton:!0}))},d=a(6),b=a(5),p=a(3),v=a(10),E=a(177),j=a.n(E),O=a(29),h=function(e){var t=e.startedTime,a=e.daysLabel,n=j()(j()().diff(j()(t,"MM-DD-YYYY")));return"".concat(n.format("D")," ").concat(a," ").concat(n.format("H:mm:ss"))},g=(n={},Object(s.a)(n,O.a.ramUsage,(function(e){var t=e.value,a=e.units,n=parseFloat(t.split("/")[1]),c=Math.random(),r=Math.round(c*n);return"".concat(Math.floor(100*c),"% (").concat(r,"/").concat(n," ").concat(a,")")})),Object(s.a)(n,O.a.cpuUsage,(function(){return"".concat(Math.floor(100*Math.random()),"%")})),Object(s.a)(n,O.a.uptime,h),Object(s.a)(n,O.a.currentTime,(function(){return j()().format("M/DD/YYYY H:mm:ss")})),Object(s.a)(n,O.a.inactive,(function(){return""})),n),N=o.a.memo((function(e){var t=e.label,a=e.value,n=Object(d.c)([t,a]),c=Object(p.a)(n,2),r=c[0],i=c[1];return o.a.createElement("section",{className:"param-pair"},o.a.createElement("p",{className:"param-pair__label"},r),o.a.createElement("p",{className:"param-pair__value"},i||a))})),y=function(e){return e.map((function(e){return o.a.createElement(N,Object.assign({key:e.label},e))}))},_=function(e){var t=e.systemParams,a=e.startedTime,n=Object(i.useState)(t),c=Object(p.a)(n,2),r=c[0],l=c[1],s=Object(d.c)([b.a.daysLabel,b.a.mbitLabel]),m=Object(p.a)(s,2),f=m[0],E=m[1];return Object(i.useEffect)((function(){var e=setInterval((function(){!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";t(e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{value:g[e.paramType]({value:e.value,startedTime:a,daysLabel:n,units:c})})})))}(r,l,a,f,E)}),u.l);return function(){return clearInterval(e)}}),[l,r,a,f,E]),o.a.createElement(o.a.Fragment,null,y(r))},k=a(20),L=function(e){return e?"connections-count__home":"connections-count__guest"},w=o.a.memo((function(e){var t=e.onlineDevice,a=t.countOfConnections,n=t.type,c=t.isHome,r=n===u.c.wifi?b.a.wifiConnectionTypeMessageLabel:b.a.wiredConnectionTypeMessageLabel,i=Object(d.b)(r);return o.a.createElement("section",{className:"online-device"},o.a.createElement(k.b,{to:"/controlPanel/devicesList",className:"connections-count ".concat(L(c))},a,a?o.a.createElement("span",{className:"connections-count__hint"},a):null),o.a.createElement("p",{className:"device-type"},i))})),C=a(13),x=a(170),T=a(15),M=a.n(T),S=a(24),D=a(38),I=a(30),H=a(7),P=[H.a.addLogoType,H.a.printType],V=function(e,t){var a=e.actionType,n=e.isActive;return{actionType:a,isActive:!!t&&n}},R=function(e,t,a,n){var c=Object(i.useContext)(I.a).setModal;return Object(i.useCallback)((function(){return c(function(e,t,a,n){return Object(v.a)(Object(v.a)({},e),{},{name:t,range:a,actions:{WPS:V(e.actions.WPS,n),main:e.actions.main.map((function(e){return P.includes(e.actionType)?e:V(e,n)}))}})}(e,t,a,n))}),[n,e,t,a,c])},A=function(e){var t=e.connection,a=t.channel,n=t.connectionInfo,c=t.isActive,r=t.name,l=t.range,s=function(e,t){var a=Object(i.useContext)(D.a).setLoader,n=Object(i.useState)(t),c=Object(p.a)(n,2),r=c[0],o=c[1],l=Object(i.useState)(!1),s=Object(p.a)(l,2),u=s[0],m=s[1];return{triggerCheckbox:Object(i.useCallback)(function(){var t=Object(S.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(n),m(!0),a(!0),t.prev=3,t.next=6,new Promise((function(t){return setTimeout((function(){return t(e)}),2e3)}));case 6:o(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),o(!n);case 12:return t.prev=12,m(!1),a(!1),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[3,9,12,16]])})));return function(e){return t.apply(this,arguments)}}(),[e,a,m]),connectionStatus:r,isWaiting:u}}(t.connectionId,c),u=s.triggerCheckbox,m=s.isWaiting,f=s.connectionStatus,v=R(n,r,l,f),E=Object(d.c)([b.a.channelLabel,b.a.showConnectionInfoButtonLabel]),j=Object(p.a)(E,2),O=j[0],h=j[1];return o.a.createElement("section",{className:"connection"},o.a.createElement("section",{className:"connection-main"},o.a.createElement("section",{className:"connection-main__status"},o.a.createElement(x.a,{isDisable:m,isActive:f,triggerCheckbox:function(){return u(!f)}})),o.a.createElement("section",{className:"details"},o.a.createElement("p",{className:"details__name"},r),o.a.createElement("section",{className:"details--minor"},o.a.createElement("p",{className:"details--minor__range"},l,","),o.a.createElement("p",{className:"details--minor__channel"},O," ",a)))),o.a.createElement("section",{className:"connection-info"},o.a.createElement(C.a,{className:"show-more-button",buttonName:h,buttonHandler:v})))},Y=function(){return o.a.createElement("svg",{className:"port_img__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 -10 68 60",fill:"none",width:"68",height:"60",id:"blue-socket",x:"442.6",y:"444"},o.a.createElement("path",{d:"M0 38a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-7V6h-4V0H13v6H9v6H2a2 2 0 0 0-2 2z",clipRule:"evenodd",fill:"#0098d9",fillRule:"evenodd"}),o.a.createElement("path",{d:"M1 38a1 1 0 0 0 1 1h44a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1h-8V7h-4V1H14v6h-4v6H2a1 1 0 0 0-1 1z",clipRule:"evenodd",fill:"#e2f1fa",fillRule:"evenodd"}))},U=function(e){var t=e.isActive,a=e.isNetwork,n=e.portSpeed,c=e.portType,r=e.portUnit,i=e.index;return o.a.createElement("section",{className:"port ".concat(a?"port_network":"")},a?function(e){return o.a.createElement("p",{className:"port_img"},o.a.createElement("span",{className:"port_img__index"},e),o.a.createElement(Y,null))}(i):function(e){return o.a.createElement("p",{className:"port_icon"},e)}(i),o.a.createElement("section",{className:"port-info"},o.a.createElement("p",{className:"port-info_type"},t?c:"-"),t?o.a.createElement("p",{className:"port-info_speed"},"".concat(n," ").concat(r)):null))},B=a(4),W=(a(226),a(16)),z=Object(W.a)({download:{value:0,unit:b.a.kbitsLabel},upload:{value:0,unit:b.a.kbitsLabel},received:{value:0,unit:b.a.mbitLabel},sent:{value:0,unit:b.a.mbitLabel}}),F=Object(W.b)((function(e){var t=e.get;return{upload:t(z).upload,download:t(z).download}})),J=o.a.memo((function(e){var t=e.startedTime,a=e.value;Object(B.useRecoilValue)(z);var n=Object(d.c)([b.a.connectedLabel,b.a.daysLabel]),c=Object(p.a)(n,2),r=c[0],i=c[1];return o.a.createElement("section",{className:"provider-connection-duration"},"".concat(r,": ").concat(h({startedTime:t,value:a,daysLabel:i})))})),G=function(e){var t=e.providerLabel,a=e.providerType,n=e.connectionDuration,c=Object(d.c)([b.a.providerHeaderLabel,t]),r=Object(p.a)(c,2),i=r[0],l=r[1];return o.a.createElement("section",{className:"provider"},o.a.createElement("h3",{className:"provider-label"},i),o.a.createElement("section",{className:"provider-info"},o.a.createElement("span",{className:"provider-info_label"},l)," / ",o.a.createElement("span",{className:"provider-info_type"},a)),o.a.createElement(J,{value:"",startedTime:n}))},q=(a(227),a(228),a(229)),K=a(236),Q=a(235),X=a(17),Z=function(e){return e?"upload":"download"},$=function(e){return[b.a.kbitsLabel,b.a.mbitsLabel].indexOf(e)?u.i:u.a},ee=function(e){return e()},te=function(e,t,a,n){return(n?setTimeout:ee)((function(){!function(e,t,a){var n=Q.e(".".concat(e,"__").concat(t));n.selectAll("*").remove();var c=n.node().getBoundingClientRect(),r=c.width-0-0,i=c.height-0-10,o=Q.d().domain([0,a.length-1]).range([0,r]),l=Q.d().domain([0,1]).range([0,i]),s=Q.c().x((function(e,t){return o(t)})).y((function(e){return i-l(e.y)})).curve(Q.b),u=n.append("svg").attr("width",r+0+0).attr("height",i+0+10);u.append("g").attr("transform","translate(".concat(0,", ").concat(0,")")).append("path").datum(a).attr("class","line__".concat(t)).attr("d",s);var m=Q.a(Q.d().range([i,0])).ticks(6).tickSize(r);u.append("g").attr("class","h-oriented-borders").call(m).call((function(e){return e.select(".domain").remove()})).call((function(e){return e.select(".tick").remove()}))}("traffic-graph",Z(a),function(e,t){var a=t.value*u.i,n=e.length,c=u.d-n>0?u.d-n:0,r=new Array(c).fill("").map((function(){return{y:0}})),i=e.map((function(e){var t=e.value,n=e.unit;return{y:t*$(n)/a}}));return[{y:0}].concat(Object(K.a)(r),Object(K.a)(i),[{y:0}])}(e.current,t.current))}),X.b)},ae=a(26),ne=function(e){var t=e.isUpload,a=e.current,n=e.max,c=Object(i.useRef)(n),r=Object(i.useRef)([]);Object(i.useEffect)((function(){r.current=function(e,t){var a=[].concat(Object(K.a)(e),[t]);if(a.length>u.d){var n=a;a=Object(q.a)(n).slice(1)}return a}(r.current,a),te(r,c,t,!1)}),[a,t]);var l=Object(B.useRecoilValue)(ae.c);return Object(i.useEffect)((function(){var e=te(r,c,t,!0);return function(){return clearTimeout(e)}}),[l,t]),o.a.createElement("section",{className:"traffic-graph traffic-graph__".concat(Z(t))})},ce=(a(230),o.a.memo((function(){return Object(B.useRecoilValue)(F),o.a.createElement("section",{className:"timing"},o.a.createElement("span",{className:"timing_start"},j()(j()().diff(1e3*u.d)).format(u.j)),o.a.createElement("span",{className:"timing_current"},j()().format(u.j)))}))),re=function(e){var t=e.unit,a=e.value;return"".concat(a," ").concat(t)},ie=function(e){return"traffic__".concat(e)},oe=o.a.memo((function(e){var t=e.type,a=e.max,n=Object(B.useRecoilValue)(F),c=n.upload,r=n.download,i=t===u.k.upload?c:r,l=Object(d.c)([t===u.k.upload?b.a.upload:b.a.download,i.unit]),s=Object(p.a)(l,2),m=s[0],f=s[1];return o.a.createElement("section",{className:"traffic ".concat(ie(t))},o.a.createElement("section",{className:"traffic-info"},o.a.createElement("section",{className:"traffic-info_actual"},o.a.createElement("span",{className:"traffic-info_actual-type"},m,": "),o.a.createElement("span",{className:"traffic-info_actual-value"},re({unit:f,value:i.value}))),o.a.createElement("section",{className:"traffic-info_max-speed"},re({unit:f,value:a.value}))),o.a.createElement(ne,{max:a,current:i,isUpload:t===u.k.upload}),o.a.createElement(ce,null))})),le=(a(231),u.f.configuration),se=u.f.reboot,ue=b.a.connectionEstablishedLabel,me=b.a.adGuardIsEnabledLabel,fe=b.a.rebootLabel,de=b.a.configureLabel,be={configuration:function(){return console.log(123)},reboot:function(){return console.log(321)}},pe=a(25),ve=function(e){var t=e.label,a=e.value,n=Object(d.c)([t,a]),c=Object(p.a)(n,2),r=c[0],i=c[1];return o.a.createElement("section",{className:"detail-pair"},o.a.createElement("section",{className:"detail-pair-label"},r),o.a.createElement("section",{className:"detail-pair-value"},i||a))},Ee=function(e){var t=e.detail,a=e.trafficValue,n=Object(d.b)(a.unit);return o.a.createElement(ve,Object.assign({},t,{value:"".concat(a.value," ").concat(n)}))},je=function(e){var t=Object(B.useRecoilValue)(z),a=function(e,t){var a;return(a={},Object(s.a)(a,u.f.upload,t.upload),Object(s.a)(a,u.f.download,t.download),Object(s.a)(a,u.f.sent,t.sent),Object(s.a)(a,u.f.received,t.received),a)[e]}(e.type,t);return o.a.createElement(Ee,{detail:e,trafficValue:a})},Oe=function(e){var t=function(e){var t=e===le;return{isConfigurationType:t,valueLabel:t?me:ue,buttonLabel:t?de:fe,buttonHandler:t?be.configuration:e===se?be.reboot:function(){}}}(e.type),a=t.valueLabel,n=t.buttonLabel,c=t.buttonHandler,r=t.isConfigurationType,i=Object(d.c)([e.label,a,n]),l=Object(p.a)(i,3),s=l[0],u=l[1],m=l[2];return o.a.createElement("section",{className:"detail-pair"},o.a.createElement("section",{className:"detail-pair-label"},s),o.a.createElement("section",{className:"detail-pair-value"},o.a.createElement("span",{className:"detail-pair-value-message"},u||e.value," "),r?o.a.createElement(k.b,{className:"detail-pair-value-link",to:pe.a.internetSafety},m):o.a.createElement(C.a,{buttonName:m,className:"detail-pair-value-button",buttonHandler:c})))},he=a(172),ge=u.f.download,Ne=u.f.upload,ye=u.f.received,_e=u.f.sent,ke=u.f.reboot,Le=u.f.configuration,we=(c={},Object(s.a)(c,Le,Oe),Object(s.a)(c,ke,Oe),Object(s.a)(c,_e,je),Object(s.a)(c,ye,je),Object(s.a)(c,ge,je),Object(s.a)(c,Ne,je),Object(s.a)(c,u.f.default,ve),c),Ce=function(e){return e.map((function(e,t){return function(e,t){var a=we[e.type];return o.a.createElement(a,Object.assign({key:t},e))}(e,t)}))},xe=function(e){var t=e.details,a=Object(he.a)([b.a.moreDetailsLabel,b.a.hiddenDetailsLabel]),n=a.isHidden,c=a.i18nLabels,r=a.toggleDetailsVisibility,i=Object(p.a)(c,2),l=i[0],s=i[1];return o.a.createElement("section",{className:"details"},o.a.createElement(C.a,{className:"details-button",buttonHandler:r,buttonName:n?l:s}),n?null:o.a.createElement("section",{className:"details-info"},Ce(t)))},Te=[b.a.mbitLabel,b.a.mbitLabel],Me=function(e){return{unit:(e||[b.a.mbitsLabel,b.a.mbitsLabel])[Math.round(Math.random())],value:Math.round(500*Math.random())/10}},Se=function(e,t){var a=(e.find((function(e){return e.type===t}))||{value:""}).value;return{value:Number(a),unit:b.a.mbitLabel}},De=function(e,t){Object(i.useEffect)((function(){var a=setInterval((function(){var a={sent:Me(Te),received:Me(Te)};t.current=a,e(Object(v.a)(Object(v.a)({},a),{},{upload:Me(),download:Me()}))}),u.g);return function(){return clearInterval(a)}}),[e,t])},Ie=o.a.memo((function(e){var t=e.details,a=e.trafficInfo,n=Object(B.useRecoilState)(z),c=Object(p.a)(n,2),r=c[0],o=r.received,l=r.sent,s=c[1],m=Object(i.useRef)({received:o,sent:l});return function(e,t,a){Object(i.useEffect)((function(){e(Object(v.a)(Object(v.a)({},{upload:t.upload.current,download:t.download.current}),{},{received:Se(a,u.f.received),sent:Se(a,u.f.sent)}))}),[t,a,e])}(s,a,t),De(s,m),null})),He=function(e){var t=e.main,a=e.details,n=t.trafficInfo,c=t.startedTime,r=t.provider,i=n.upload,l=n.download;return o.a.createElement("section",{className:"card-content"},o.a.createElement(G,Object.assign({},r,{connectionDuration:c})),o.a.createElement("section",{className:"traffics"},o.a.createElement(oe,l),o.a.createElement(oe,i)),o.a.createElement(xe,{details:a}))},Pe=(r={},Object(s.a)(r,u.b.applicationType,(function(e){var t=e.applications,a=Object(d.b)(b.a.hasNoApplicationsMessageLabel);return o.a.createElement("section",{className:"card-content"},t.length?"Applications":a)})),Object(s.a)(r,u.b.systemType,(function(e){var t=e,a=t.systemParams,n=t.startedTime,c=Object(i.useMemo)((function(){return function(e){return e.reduce((function(e,t){return e[t.isActive?"dynamicSystemParams":"staticSystemParams"].push(t),e}),{staticSystemParams:[],dynamicSystemParams:[]})}(a)}),[a]),r=c.staticSystemParams,l=c.dynamicSystemParams;return o.a.createElement("section",{className:"card-content"},y(r),o.a.createElement(_,{systemParams:l,startedTime:n}))})),Object(s.a)(r,u.b.wifiType,(function(e){var t=e,a=t.connections,n=t.onlineDevices,c=Object(d.b)(b.a.onlineDeviceTitleLabel);return o.a.createElement("section",{className:"card-content"},o.a.createElement("section",{className:"connections"},a.map((function(e){return o.a.createElement(A,{key:e.connectionId,connection:e})}))),n.length?o.a.createElement("section",{className:"devices"},o.a.createElement("h3",{className:"devices--title"},c),o.a.createElement("section",{className:"devices-content"},n.map((function(e){return o.a.createElement(w,{key:e.key,onlineDevice:e})})))):null)})),Object(s.a)(r,u.b.portType,(function(e){var t=e,a=t.ports,n=t.networkPortId;return o.a.createElement("section",{className:"card-content card-content_port"},a.map((function(e,t){return o.a.createElement(U,Object.assign({key:e.portId},e,{index:t,isNetwork:e.portId===n}))})))})),Object(s.a)(r,u.b.internetType,(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ie,{details:e.details,trafficInfo:e.main.trafficInfo}),o.a.createElement(He,e))})),r),Ve=o.a.memo((function(e){var t=e.card,a=Pe[t.type],n=Object(d.b)(t.title);return o.a.createElement("section",{className:"card"},o.a.createElement("section",{className:"application-card"},o.a.createElement("h3",{className:"card__title"},n),a?o.a.createElement(a,t.cardContent):o.a.createElement(f,{type:t.type})))})),Re=function(e){var t=e.leftCards,a=e.rightCards;return o.a.createElement("section",{className:"cards"},o.a.createElement("section",{className:"cards-left"},t.map((function(e){return o.a.createElement(Ve,{key:e.cardId,card:e})}))),o.a.createElement("section",{className:"cards-right"},a.map((function(e){return o.a.createElement(Ve,{key:e.cardId,card:e})}))))},Ae=a(232),Ye=a(233),Ue=a(21),Be=a(65),We=new(function(){function e(){Object(Ae.a)(this,e)}return Object(Ye.a)(e,[{key:"useLoadCards",value:function(e){var t=this,a=Object(i.useContext)(D.a),n=a.isLoading,c=a.setLoader,r=Object(i.useState)(u.e),o=Object(p.a)(r,2),l=o[0],s=l.leftCards,m=l.rightCards,f=o[1];return Object(i.useEffect)((function(){var a=e.location.state;if(a)return e.replace(Ue.b,void 0),f(a);c(!0),t.fetchCards(f).finally((function(){return c(!1)}))}),[e,c]),{isLoading:n,leftCards:s,rightCards:m}}},{key:"fetchCards",value:function(){var e=Object(S.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){t(Be.a),e()}),1e3)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),ze=function(){var e=Object(l.f)(),t=We.useLoadCards(e),a=t.leftCards,n=t.rightCards;return o.a.createElement(Re,{leftCards:a,rightCards:n})};t.default=ze},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s}));var n=a(0),c=a.n(n),r=(a(171),function(e){return e?"checkbox__active":"checkbox__inactive"}),i=function(e){return e?"checkbox--bar__active":"checkbox--bar__inactive"},o=function(e){return e?"checkbox__disabled":"checkbox__enabled"},l=c.a.memo((function(e){var t=e.isActive,a=e.triggerCheckbox,n=e.isDisable;return c.a.createElement("section",{className:"checkbox ".concat(r(t)," ").concat(o(n))},c.a.createElement("span",{onClick:function(){return!n&&a(!t)},className:"checkbox--bar ".concat(i(t))}))})),s=c.a.memo((function(e){var t=e.name,a=e.checked,n=e.onChange;return c.a.createElement("input",{type:"checkbox",className:"simple-checkbox",name:t,checked:a,onChange:n})}))},171:function(e,t,a){},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(3),c=a(0),r=a(6),i=function(e){var t=Object(c.useState)(!0),a=Object(n.a)(t,2),i=a[0],o=a[1];return{isHidden:i,i18nLabels:Object(r.c)(e),toggleDetailsVisibility:Object(c.useCallback)((function(){return o((function(e){return!e}))}),[o])}}},224:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){}}]);
//# sourceMappingURL=3.f0c4e850.chunk.js.map