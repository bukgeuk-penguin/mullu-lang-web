(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{4874:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.init=n.throwerror=n.isErrorOccurred=n.info=void 0;var r=t(1873),i=function(e,n){this.col=e,this.row=n};n.info=i;var s=!1;n.isErrorOccurred=function(){return s},n.throwerror=function(e,n,t){(0,r.print_string)("\uc774 \ubd80\ubd84\uc744 \ubab0?\ub8e8\uaca0\uc5b4 (".concat(e.col,", ").concat(e.row,")\n")),s=!0},n.init=function(){s=!1}},5936:function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.execute=n.setEventListener=void 0;var u=s(t(1873)),a=s(t(6222)),o=s(t(8661)),c=s(t(4874));n.setEventListener=function(e){u.setEventListener(e)},n.execute=function(e){c.init();var n=a.tokenize(e);o.run(n)}},1873:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.print_string=n.output_character=n.output_number=n.setEventListener=n.input_character=n.input_number=void 0,n.input_number=function(){var e=prompt("\uc815\uc218 \uc785\ub825");if(!e)return 0;try{return parseInt(e)}catch(n){return 0}};var t,r="";n.input_character=function(){if(!r){var e=prompt("\ubb38\uc790 \uc785\ub825");if(!e)return 0;r=e}var n=r.substring(0,1);return r=r.substring(1),n.charCodeAt(0)},n.setEventListener=function(e){t=e},n.output_number=function(e){t&&t(e.toString())},n.output_character=function(e){t&&t(String.fromCharCode(e))},n.print_string=function(e){t&&t(e)}},8661:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.run=void 0;var r=t(1873),i=t(4874),s=[],u=[],a=0;function o(e){for(var n=!0,t=0,u=a;u<e.length;u++){if(n){var o=0;switch(e[u].type){case"var_value":void 0===(o=s[e[u].str.length-1])&&(o=0);break;case"positive_one":o=1;break;case"positive_ten":o=10;break;case"negative_one":o=-1;break;case"negative_ten":o=-10;break;case"input_number":o=(0,r.input_number)();break;case"input_character":o=(0,r.input_character)();break;default:(0,i.throwerror)(e[u].info,"",0)}u===a||"add"==e[u-1].type?t+=o:"sub"==e[u-1].type?t-=o:"mul"==e[u-1].type?t*=o:"div"==e[u-1].type&&(t/=o)}else switch(e[u].type){case"add":case"sub":case"mul":case"div":break;default:return a=u-1,t}n=!n}return a=e.length-1,t}n.run=function(e){for(var n=0;n<e.length&&!(0,i.isErrorOccurred)();n++)switch(e[n].type){case"assign":var t=e[n].str.length;++n,a=n;var c=o(e);n=a,s[t-3]=c;break;case"jump_equal":case"jump_less":case"jump_greater":t=e[n].type;++n,a=n;c=o(e);if(n=a,++n>=e.length&&(0,i.throwerror)(e[n-1].info,"",0),"label"==e[n].type){var l=u[e[n].str.length-4];l<0&&(0,i.throwerror)(e[n].info,"",0);var f=!1;"jump_equal"==t?f=0==c:"jump_less"==t?f=c<0:"jump_greater"==t&&(f=c>0),f&&(n=l)}else(0,i.throwerror)(e[n].info,"",0);break;case"define_label":u[e[n].str.length-4]=n;break;case"output_number":++n,a=n;c=o(e);n=a,(0,r.output_number)(c);break;case"output_character":++n,a=n;c=o(e);n=a,(0,r.output_character)(c);break;default:(0,i.throwerror)(e[n].info,"",0)}}},6222:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.tokenize=n.token=void 0;var r=t(4874),i=function(e,n,t){this.type="unknown",this.str="",this.type=e,this.str=n,this.info=t};n.token=i,n.tokenize=function(e){for(var n=[],t=1,s=1,u=0;u<e.length;u++)if(++s,u+4<e.length&&"\ubaa8"===e[u]&&"\uc624"===e[u+1]&&"\uc62c"===e[u+2]&&"?"===e[u+3]&&"\ub8e8"===e[u+4])n.push(new i("jump_greater",e.substring(u,u+5),new r.info(t,s))),u+=4;else{if(u+3<e.length)if("\ubaa8"===e[u]&&"\uc62c"===e[u+1]&&"\ub8e8"===e[u+3]){if("?"===e[u+2]){n.push(new i("jump_less",e.substring(u,u+4),new r.info(t,s))),u+=3;continue}if("!"===e[u+2]){n.push(new i("output_character",e.substring(u,u+4),new r.info(t,s))),u+=3;continue}}else if("\uc65c"===e[u]&&"\ub8e8"===e[u+3]){if("\ubab0"===e[u+1]&&"?"===e[u+2]){for(var a=0;u+a<e.length&&"\uc6b0"===e[u+a+4];)++a;n.push(new i("define_label",e.substring(u,u+a+4),new r.info(t,s))),u+=3+a;continue}if("\uc544"===e[u+1]&&"!"===e[u+2]){for(a=0;u+a<e.length&&"\uc6b0"===e[u+a+4];)++a;n.push(new i("label",e.substring(u,u+a+4),new r.info(t,s))),u+=3+a;continue}}else if("\uc544"===e[u]&&"\uc544"===e[u+1]&&"?"===e[u+2]&&"\ub8e8"===e[u+3]){n.push(new i("input_character",e.substring(u,u+4),new r.info(t,s))),u+=3;continue}if(u+2<e.length)if("\uc544"===e[u]&&"\ub8e8"===e[u+2]){if("!"===e[u+1]){for(a=0;u+a<e.length&&"\uc6b0"===e[u+a+3];)++a;n.push(new i("assign",e.substring(u,u+a+3),new r.info(t,s))),u+=2+a;continue}if("?"===e[u+1]){n.push(new i("input_number",e.substring(u,u+3),new r.info(t,s))),u+=2;continue}if("\uc544"===e[u+1]){n.push(new i("negative_ten",e.substring(u,u+3),new r.info(t,s))),u+=2;continue}}else if("\ubab0"===e[u]&&"\ub8e8"===e[u+2]){if("?"===e[u+1]){n.push(new i("jump_equal",e.substring(u,u+3),new r.info(t,s))),u+=2;continue}if("!"===e[u+1]){n.push(new i("output_number",e.substring(u,u+3),new r.info(t,s))),u+=2;continue}}else if("\ubaa8"===e[u]&&"\uc62c"===e[u+1]&&"\ub8e8"===e[u+2]){n.push(new i("positive_ten",e.substring(u,u+3),new r.info(t,s))),u+=2;continue}if(u+1<e.length){if("\uc544"===e[u]&&"\ub8e8"===e[u+1]){n.push(new i("negative_one",e.substring(u,u+2),new r.info(t,s))),++u;continue}if("\ubab0"===e[u]&&"\ub8e8"===e[u+1]){n.push(new i("positive_one",e.substring(u,u+2),new r.info(t,s))),++u;continue}if("?"===e[u]&&"?"===e[u+1]){n.push(new i("mul",e.substring(u,u+2),new r.info(t,s))),++u;continue}if("!"===e[u]&&"!"===e[u+1]){n.push(new i("div",e.substring(u,u+2),new r.info(t,s))),++u;continue}}if("?"!==e[u])if("!"!==e[u])if("\ub8e8"!==e[u])"\n"===e[u]&&(++t,s=0);else{for(a=0;u+a<e.length&&"\uc6b0"===e[u+a+1];)++a;n.push(new i("var_value",e.substring(u,u+a+1),new r.info(t,s))),u+=a}else n.push(new i("sub",e.substring(u,u+1),new r.info(t,s)));else n.push(new i("add",e.substring(u,u+1),new r.info(t,s)))}return n}},3655:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playground",function(){return t(970)}])},3292:function(e,n,t){"use strict";var r=t(5893),i=t(1664),s=t(2962),u=t(1163),a=t(4184),o=t.n(a),c=function(e){var n=e.name,t=e.path,s=(0,u.useRouter)(),a=s.pathname.startsWith(t);return"/"===t&&"/"!=s.pathname&&(a=!1),(0,r.jsx)(i.default,{href:t,passHref:!0,children:(0,r.jsx)("a",{className:o()("font-bold",{"text-blue-500":a}),children:n})})};n.Z=function(e){var n=e.children,u=e.title,a=e.className,l=void 0===a?"":a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.PB,{title:u}),(0,r.jsxs)("div",{className:"h-full w-full bg-slate-100 overflow-y-scroll scroll-smooth flex flex-col",children:[(0,r.jsxs)("nav",{className:"w-full flex justify-between shadow-sm bg-white px-6 md:px-12 py-2 fixed z-10",children:[(0,r.jsx)(i.default,{href:"/",passHref:!0,children:(0,r.jsxs)("a",{className:"flex items-center gap-x-3",children:[(0,r.jsx)("img",{src:t(6966),alt:"molu",width:32,height:32}),(0,r.jsx)("div",{className:"text-lg font-bold",children:"\ubab0?\ub7ad"})]})}),(0,r.jsxs)("div",{className:"flex gap-x-5 items-center",children:[(0,r.jsx)(c,{name:"\ubb38\uc11c",path:"/docs"}),(0,r.jsx)(c,{name:"\uc608\uc81c",path:"/example"}),(0,r.jsx)(c,{name:"\ud50c\ub808\uc774\uadf8\ub77c\uc6b4\ub4dc",path:"/playground"})]})]}),(0,r.jsx)("div",{className:o()("flex-1 mt-16 mb-4",l),children:n})]})]})}},970:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(3292),s=t(7294),u=t(4184),a=t.n(u),o=t(5936);n.default=function(){var e=(0,s.useState)(""),n=e[0],t=e[1],u=(0,s.useState)(""),c=u[0],l=u[1];(0,s.useEffect)((function(){(0,o.setEventListener)((function(e){l((function(n){return"".concat(n).concat(e)}))}))}),[]);return(0,r.jsx)(i.Z,{title:"\ud50c\ub808\uc774\uadf8\ub77c\uc6b4\ub4dc | \ubab0?\ub7ad",className:"container mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)("div",{className:"mt-4 w-full",children:"\ucf54\ub4dc"}),(0,r.jsx)("textarea",{className:"bg-white w-full shadow-lg rounded-lg resize-y px-3 py-3",value:n,onChange:function(e){return t(e.target.value)},rows:10}),(0,r.jsx)("div",{className:"bg-white shadow-lg mt-4 rounded-lg px-3 py-2 cursor-pointer",onClick:function(){l("");try{(0,o.execute)(n)}catch(e){}},children:"\uc2e4\ud589"}),(0,r.jsx)("div",{className:"mt-4 w-full",children:"\uc2e4\ud589 \uacb0\uacfc"}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-y-5 justify-between w-full h-64 gap-x-5",children:[(0,r.jsx)("textarea",{className:"bg-white w-full shadow-lg rounded-lg resize-none px-3 py-3",rows:5,value:c,readOnly:!0}),(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg px-3 py-3 overflow-y-scroll xl:w-96 h-96 md:h-auto",children:[(0,r.jsx)("div",{className:"font-bold",children:"\uce58\ud2b8\uc2dc\ud2b8"}),"\n<\ubcc0\uc218>\n\ubcc0\uc218 \ud560\ub2f9 : \uc544!\ub8e8(\uc6b0*n) (\uac12)\n\ubcc0\uc218 \uac12 : \ub8e8(\uc6b0*n)\n\n<\uc5f0\uc0b0>\n\ub367\uc148 : (\uac12) ? (\uac12) \n\uacf1\uc148 : (\uac12) ?? (\uac12)\n\ube84\uc148 : (\uac12) ! (\uac12)\n\ub098\ub217\uc148 : (\uac12) !! (\uac12)\n1 : \ubab0\ub8e8\n10 : \ubaa8\uc62c\ub8e8\n-1 : \uc544\ub8e8\n-10 : \uc544\uc544\ub8e8\n\n\n<\uc774\ub3d9>\n\uc810\ud504 : \ubab0?\ub8e8 (\uac12) (\ub77c\ubca8) [ \uac12 == 0 ]\n       \ubaa8\uc62c?\ub8e8 (\uac12) (\ub77c\ubca8) [ \uac12 < 0 ]\n       \ubaa8\uc624\uc62c?\ub8e8 (\uac12) (\ub77c\ubca8) [ \uac12 > 0 ]\n\ub77c\ubca8 \uc815\uc758 : \uc65c\ubab0?\ub8e8(\uc6b0*n)\n\ub77c\ubca8 : \uc65c\uc544!\ub8e8(\uc6b0*n)\n\n<\uc785\ucd9c\ub825>\n\uc785\ub825(\uc815\uc218) : \uc544?\ub8e8 [\uac12\uc73c\ub85c\uc11c \ucde8\uae09\ub428]\n\uc785\ub825(\ubb38\uc790) : \uc544\uc544?\ub8e8 [\uac12\uc73c\ub85c\uc11c \ucde8\uae09\ub428]\n\ucd9c\ub825(\uc815\uc218) : \ubab0!\ub8e8 (\uac12)\n\ucd9c\ub825(\ubb38\uc790) : \ubaa8\uc62c!\ub8e8 (\uac12)".split("\n").map((function(e,n){return(0,r.jsx)(s.Fragment,{children:(0,r.jsx)("div",{className:a()({"font-bold":e.startsWith("<")}),children:e})},n)}))]})]})]})})}},6966:function(e){e.exports="/_next/static/images/molu-c9370907e781512275a566a063c11877.gif"}},function(e){e.O(0,[762,774,888,179],(function(){return n=3655,e(e.s=n);var n}));var n=e.O();_N_E=n}]);