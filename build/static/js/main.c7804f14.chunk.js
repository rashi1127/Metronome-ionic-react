(this["webpackJsonpionic-cart-mobx-react"]=this["webpackJsonpionic-cart-mobx-react"]||[]).push([[1],{48:function(e,t,n){e.exports=n.p+"static/media/click1.019cce61.wav"},49:function(e,t,n){e.exports=n.p+"static/media/click2.e0eb710d.wav"},50:function(e,t,n){e.exports=n.p+"static/media/bleep1.ac42357c.wav"},51:function(e,t,n){e.exports=n.p+"static/media/bleep2.8fd60622.wav"},52:function(e,t,n){e.exports=n.p+"static/media/drum1.c34a2988.wav"},53:function(e,t,n){e.exports=n.p+"static/media/drum2.75ddd3de.wav"},59:function(e,t,n){e.exports=n(83)},65:function(e,t,n){var a={"./ion-action-sheet.entry.js":[85,5],"./ion-alert.entry.js":[86,6],"./ion-app_8.entry.js":[87,7],"./ion-avatar_3.entry.js":[88,18],"./ion-back-button.entry.js":[89,19],"./ion-backdrop.entry.js":[90,43],"./ion-button_2.entry.js":[91,20],"./ion-card_5.entry.js":[92,21],"./ion-checkbox.entry.js":[93,22],"./ion-chip.entry.js":[94,23],"./ion-col_3.entry.js":[95,44],"./ion-datetime_3.entry.js":[96,10],"./ion-fab_3.entry.js":[97,24],"./ion-img.entry.js":[98,45],"./ion-infinite-scroll_2.entry.js":[99,46],"./ion-input.entry.js":[100,25],"./ion-item-option_3.entry.js":[101,26],"./ion-item_8.entry.js":[102,27],"./ion-loading.entry.js":[103,28],"./ion-menu_3.entry.js":[104,29],"./ion-modal.entry.js":[105,8],"./ion-nav_2.entry.js":[106,15],"./ion-popover.entry.js":[107,9],"./ion-progress-bar.entry.js":[108,30],"./ion-radio_2.entry.js":[109,31],"./ion-range.entry.js":[110,32],"./ion-refresher_2.entry.js":[111,11],"./ion-reorder_2.entry.js":[112,17],"./ion-ripple-effect.entry.js":[113,47],"./ion-route_4.entry.js":[114,33],"./ion-searchbar.entry.js":[115,34],"./ion-segment_2.entry.js":[116,35],"./ion-select_3.entry.js":[117,36],"./ion-slide_2.entry.js":[118,48],"./ion-spinner.entry.js":[119,13],"./ion-split-pane.entry.js":[120,49],"./ion-tab-bar_2.entry.js":[121,37],"./ion-tab_2.entry.js":[122,16],"./ion-text.entry.js":[123,38],"./ion-textarea.entry.js":[124,39],"./ion-toast.entry.js":[125,40],"./ion-toggle.entry.js":[126,12],"./ion-virtual-scroll.entry.js":[127,50]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=65,e.exports=i},67:function(e,t,n){var a={"./ion-icon.entry.js":[131,57]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=67,e.exports=i},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),o=n.n(r),l=n(2),c=n(54),s=n(58),u=(n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(6)),p=n(7),h=n(3),m=n(9),y=n(10),d=n(48),f=n.n(d),b=n(49),k=n.n(b),g=n(50),j=n.n(g),v=n(51),C=n.n(v),w=n(52),E=n.n(w),x=n(53),S=n.n(x),_=(n(82),n(24)),O=n.n(_),B=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={playing:!1,count:0,bpm:120,beatsPerMeasure:4,click:"Bleep"},a.click1=new Audio(f.a),a.click2=new Audio(k.a),a.bleep1=new Audio(j.a),a.bleep2=new Audio(C.a),a.drum1=new Audio(E.a),a.drum2=new Audio(S.a),a.startStop=a.startStop.bind(Object(h.a)(a)),a.playClick=a.playClick.bind(Object(h.a)(a)),a.handleBpmChange=a.handleBpmChange.bind(Object(h.a)(a)),a.handleTimeChange=a.handleTimeChange.bind(Object(h.a)(a)),a.handleClickChange=a.handleClickChange.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"startStop",value:function(){if(this.state.playing)O.a.clearCorrectingInterval(this.timer),this.setState({playing:!1});else{var e=this;this.timer=O.a.setCorrectingInterval((function(){e.playClick()}),60/this.state.bpm*1e3),this.setState({count:0,playing:!0},this.playClick)}}},{key:"playClick",value:function(){var e=this.state;if(e.count%e.beatsPerMeasure===0)switch(this.state.click){case"Click":this.click2.play();break;case"Bleep":this.bleep2.play();break;case"808":this.drum2.play();break;default:this.drum2.play()}else switch(this.state.click){case"Click":this.click1.play();break;case"Bleep":this.bleep1.play();break;case"808":this.drum1.play();break;default:this.drum1.play()}this.setState((function(e){return{count:(e.count+1)%e.beatsPerMeasure}}))}},{key:"handleBpmChange",value:function(e){var t=e.target.value;if(this.state.playing){var n=this;O.a.clearCorrectingInterval(this.timer),this.timer=O.a.setCorrectingInterval((function(){n.playClick()}),60/this.state.bpm*1e3),this.setState({count:0,bpm:t})}else this.setState({bpm:t})}},{key:"handleTimeChange",value:function(e){e.target.value<=20&&e.target.value>=1?this.setState({beatsPerMeasure:e.target.value}):(alert("Please select a value between 1 & 20"),this.setState({beatsPerMeasure:4}))}},{key:"handleClickChange",value:function(e){console.log(e.target.value),this.setState({click:e.target.value})}},{key:"disableInput",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"componentWillUnmount",value:function(){O.a.clearCorrectingInterval(this.timer),this.setState({playing:!1,count:0,bpm:120,beatsPerMeasure:4,click:"Click"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.playing,a=t.bpm,r=t.click;return i.a.createElement(l.j,null,i.a.createElement(l.c,{className:"metronome"},i.a.createElement(l.e,{className:"metHead",style:{backgroundColor:"#2B547E",height:"60px"}},i.a.createElement(l.p,{style:{fontSize:"40px",color:"white",marginLeft:"500px"}},"Metronome Beats")),i.a.createElement(l.i,{className:"time-signature"},i.a.createElement(l.g,null,i.a.createElement(l.h,{style:{fontSize:"25px",color:"white",marginLeft:"25px"}},this.state.beatsPerMeasure,"/4 Time"),i.a.createElement(l.f,{style:{fontSize:"25px",color:"white"},type:"number",min:"1",max:"20",onKeyDown:this.disableInput,onIonChange:this.handleTimeChange}))),i.a.createElement("br",null),i.a.createElement(l.i,{className:"bpm-slider"},i.a.createElement(l.b,null,i.a.createElement(l.h,{style:{fontSize:"25px",color:"white",marginLeft:"30px"}},a," BPM"),i.a.createElement(l.m,{style:{fontSize:"25px",color:"white"},type:"range",min:"60",max:"240",value:a,onIonChange:this.handleBpmChange}),i.a.createElement(l.d,{onClick:this.startStop,style:{fontSize:"19px",color:"white",marginLeft:"30px"}},n?"Stop":"Start"))),i.a.createElement("br",null),i.a.createElement(l.i,{className:"click-type"},i.a.createElement(l.l,{value:r,onIonChange:function(t){return e.handleClickChange(t)}},i.a.createElement(l.h,{style:{color:"white",marginLeft:"30px",fontSize:"25px"}},r),i.a.createElement(l.g,{className:"click-input"},i.a.createElement(l.h,{style:{color:"white",marginLeft:"30px",fontSize:"25px"}},"Click"),i.a.createElement(l.k,{type:"radio",value:"Click",checked:"Click"===this.state.click}),i.a.createElement(l.h,{style:{color:"white",marginLeft:"30px",fontSize:"25px"}},"Bleep"),i.a.createElement(l.k,{type:"radio",value:"Bleep",checked:"Bleep"===this.state.click}),i.a.createElement(l.h,{style:{color:"white",marginLeft:"30px",fontSize:"25px"}},"808"),i.a.createElement(l.k,{type:"radio",value:"808",checked:"808"===this.state.click}))))))}}]),n}(a.Component),P=function(){return i.a.createElement(s.a,null,i.a.createElement(l.a,null,i.a.createElement(c.a,null,i.a.createElement(l.o,null,i.a.createElement(B,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,3,4]]]);
//# sourceMappingURL=main.c7804f14.chunk.js.map