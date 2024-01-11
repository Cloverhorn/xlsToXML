(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const gr={createDocument:function(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}};var C=Uint8Array,k=Uint16Array,Ze=Uint32Array,er=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rr=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wr=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tr=function(e,r){for(var t=new k(31),n=0;n<31;++n)t[n]=r+=1<<e[n-1];for(var a=new Ze(t[30]),n=1;n<30;++n)for(var i=t[n];i<t[n+1];++i)a[i]=i-t[n]<<5|n;return[t,a]},nr=tr(er,2),ar=nr[0],br=nr[1];ar[28]=258,br[258]=28;var Sr=tr(rr,0),Tr=Sr[0],we=new k(32768);for(var d=0;d<32768;++d){var M=(d&43690)>>>1|(d&21845)<<1;M=(M&52428)>>>2|(M&13107)<<2,M=(M&61680)>>>4|(M&3855)<<4,we[d]=((M&65280)>>>8|(M&255)<<8)>>>1}var K=function(e,r,t){for(var n=e.length,a=0,i=new k(r);a<n;++a)e[a]&&++i[e[a]-1];var o=new k(r);for(a=0;a<r;++a)o[a]=o[a-1]+i[a-1]<<1;var u;if(t){u=new k(1<<r);var l=15-r;for(a=0;a<n;++a)if(e[a])for(var s=a<<4|e[a],c=r-e[a],f=o[e[a]-1]++<<c,p=f|(1<<c)-1;f<=p;++f)u[we[f]>>>l]=s}else for(u=new k(n),a=0;a<n;++a)e[a]&&(u[a]=we[o[e[a]-1]++]>>>15-e[a]);return u},re=new C(288);for(var d=0;d<144;++d)re[d]=8;for(var d=144;d<256;++d)re[d]=9;for(var d=256;d<280;++d)re[d]=7;for(var d=280;d<288;++d)re[d]=8;var ir=new C(32);for(var d=0;d<32;++d)ir[d]=5;var Cr=K(re,9,1),Fr=K(ir,5,1),pe=function(e){for(var r=e[0],t=1;t<e.length;++t)e[t]>r&&(r=e[t]);return r},O=function(e,r,t){var n=r/8|0;return(e[n]|e[n+1]<<8)>>(r&7)&t},de=function(e,r){var t=r/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(r&7)},Er=function(e){return(e+7)/8|0},Ee=function(e,r,t){(r==null||r<0)&&(r=0),(t==null||t>e.length)&&(t=e.length);var n=new(e.BYTES_PER_ELEMENT==2?k:e.BYTES_PER_ELEMENT==4?Ze:C)(t-r);return n.set(e.subarray(r,t)),n},Pr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],x=function(e,r,t){var n=new Error(r||Pr[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,x),!t)throw n;return n},Ar=function(e,r,t){var n=e.length;if(!n||t&&t.f&&!t.l)return r||new C(0);var a=!r||t,i=!t||t.i;t||(t={}),r||(r=new C(n*3));var o=function(xe){var _e=r.length;if(xe>_e){var De=new C(Math.max(_e*2,xe));De.set(r),r=De}},u=t.f||0,l=t.p||0,s=t.b||0,c=t.l,f=t.d,p=t.m,y=t.n,g=n*8;do{if(!c){u=O(e,l,1);var P=O(e,l+1,3);if(l+=3,P)if(P==1)c=Cr,f=Fr,p=9,y=5;else if(P==2){var v=O(e,l,31)+257,N=O(e,l+10,15)+4,A=v+O(e,l+5,31)+1;l+=14;for(var h=new C(A),w=new C(19),b=0;b<N;++b)w[wr[b]]=O(e,l+b*3,7);l+=N*3;for(var $=pe(w),ue=(1<<$)-1,W=K(w,$,1),b=0;b<A;){var V=W[O(e,l,ue)];l+=V&15;var m=V>>>4;if(m<16)h[b++]=m;else{var E=0,ne=0;for(m==16?(ne=3+O(e,l,3),l+=2,E=h[b-1]):m==17?(ne=3+O(e,l,7),l+=3):m==18&&(ne=11+O(e,l,127),l+=7);ne--;)h[b++]=E}}var Pe=h.subarray(0,v),I=h.subarray(v);p=pe(Pe),y=pe(I),c=K(Pe,p,1),f=K(I,y,1)}else x(1);else{var m=Er(l)+4,S=e[m-4]|e[m-3]<<8,T=m+S;if(T>n){i&&x(0);break}a&&o(s+S),r.set(e.subarray(m,T),s),t.b=s+=S,t.p=l=T*8,t.f=u;continue}if(l>g){i&&x(0);break}}a&&o(s+131072);for(var mr=(1<<p)-1,vr=(1<<y)-1,se=l;;se=l){var E=c[de(e,l)&mr],X=E>>>4;if(l+=E&15,l>g){i&&x(0);break}if(E||x(2),X<256)r[s++]=X;else if(X==256){se=l,c=null;break}else{var Ae=X-254;if(X>264){var b=X-257,U=er[b];Ae=O(e,l,(1<<U)-1)+ar[b],l+=U}var ce=f[de(e,l)&vr],fe=ce>>>4;ce||x(3),l+=ce&15;var I=Tr[fe];if(fe>3){var U=rr[fe];I+=de(e,l)&(1<<U)-1,l+=U}if(l>g){i&&x(0);break}a&&o(s+131072);for(var Oe=s+Ae;s<Oe;s+=4)r[s]=r[s-I],r[s+1]=r[s+1-I],r[s+2]=r[s+2-I],r[s+3]=r[s+3-I];s=Oe}}t.l=c,t.p=se,t.b=s,t.f=u,c&&(u=1,t.m=p,t.d=f,t.n=y)}while(!u);return s==r.length?r:Ee(r,0,s)},Or=new C(0),D=function(e,r){return e[r]|e[r+1]<<8},_=function(e,r){return(e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)>>>0},ye=function(e,r){return _(e,r)+_(e,r+4)*4294967296};function xr(e,r){return Ar(e,r)}var be=typeof TextDecoder<"u"&&new TextDecoder,_r=0;try{be.decode(Or,{stream:!0}),_r=1}catch{}var Dr=function(e){for(var r="",t=0;;){var n=e[t++],a=(n>127)+(n>223)+(n>239);if(t+a>e.length)return[r,Ee(e,t-1)];a?a==3?(n=((n&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,r+=String.fromCharCode(55296|n>>10,56320|n&1023)):a&1?r+=String.fromCharCode((n&31)<<6|e[t++]&63):r+=String.fromCharCode((n&15)<<12|(e[t++]&63)<<6|e[t++]&63):r+=String.fromCharCode(n)}};function or(e,r){if(r){for(var t="",n=0;n<e.length;n+=16384)t+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return t}else{if(be)return be.decode(e);var a=Dr(e),i=a[0],o=a[1];return o.length&&x(8),i}}var Lr=function(e,r){return r+30+D(e,r+26)+D(e,r+28)},Rr=function(e,r,t){var n=D(e,r+28),a=or(e.subarray(r+46,r+46+n),!(D(e,r+8)&2048)),i=r+46+n,o=_(e,r+20),u=t&&o==4294967295?Ir(e,i):[o,_(e,r+24),_(e,r+42)],l=u[0],s=u[1],c=u[2];return[D(e,r+10),l,s,a,i+D(e,r+30)+D(e,r+32),c]},Ir=function(e,r){for(;D(e,r)!=1;r+=4+D(e,r+2));return[ye(e,r+12),ye(e,r+4),ye(e,r+20)]};function Mr(e,r){for(var t={},n=e.length-22;_(e,n)!=101010256;--n)(!n||e.length-n>65558)&&x(13);var a=D(e,n+8);if(!a)return{};var i=_(e,n+16),o=i==4294967295||a==65535;if(o){var u=_(e,n-12);o=_(e,u)==101075792,o&&(a=_(e,u+32),i=_(e,u+48))}for(var l=r&&r.filter,s=0;s<a;++s){var c=Rr(e,i,o),f=c[0],p=c[1],y=c[2],g=c[3],P=c[4],m=c[5],S=Lr(e,m);i=P,(!l||l({name:g,size:p,originalSize:y,compression:f}))&&(f?f==8?t[g]=xr(e.subarray(S,S+p),new C(y)):x(14,"unknown compression type "+f):t[g]=Ee(e,S,S+p))}return t}function kr(e){return e instanceof File||e instanceof Blob?e.arrayBuffer().then(he):he(e)}function he(e){var r=new Uint8Array(e),t=Mr(r);return Promise.resolve(Br(t))}function Br(e){for(var r=[],t=0,n=Object.keys(e);t<n.length;t++){var a=n[t];r[a]=or(e[a])}return r}function L(e,r){for(var t=0;t<e.childNodes.length;){var n=e.childNodes[t];if(n.nodeType===1&&B(n)===r)return n;t++}}function te(e,r){for(var t=[],n=0;n<e.childNodes.length;){var a=e.childNodes[n];a.nodeType===1&&B(a)===r&&t.push(a),n++}return t}function le(e,r,t){for(var n=0;n<e.childNodes.length;){var a=e.childNodes[n];r?a.nodeType===1&&B(a)===r&&t(a,n):t(a,n),n++}}function Nr(e,r,t){var n=[];return le(e,r,function(a,i){n.push(t(a,i))}),n}var Xr=/.+\:/;function B(e){return e.tagName.replace(Xr,"")}function lr(e){if(e.nodeType!==1)return e.textContent;for(var r="<"+B(e),t=0;t<e.attributes.length;)r+=" "+e.attributes[t].name+'="'+e.attributes[t].value+'"',t++;r+=">";for(var n=0;n<e.childNodes.length;)r+=lr(e.childNodes[n]),n++;return r+="</"+B(e)+">",r}function Hr(e){var r=e.documentElement,t=L(r,"sheetData"),n=[];return le(t,"row",function(a){le(a,"c",function(i){n.push(i)})}),n}function jr(e,r){return L(r,"v")}function $r(e,r){if(r.firstChild&&B(r.firstChild)==="is"&&r.firstChild.firstChild&&B(r.firstChild.firstChild)==="t")return r.firstChild.firstChild.textContent}function Wr(e){var r=e.documentElement,t=L(r,"dimension");if(t)return t.getAttribute("ref")}function Vr(e){var r=e.documentElement,t=L(r,"cellStyleXfs");return t?te(t,"xf"):[]}function Ur(e){var r=e.documentElement,t=L(r,"cellXfs");return t?te(t,"xf"):[]}function zr(e){var r=e.documentElement,t=L(r,"numFmts");return t?te(t,"numFmt"):[]}function Gr(e){var r=e.documentElement;return Nr(r,"si",function(t){var n=L(t,"t");if(n)return n.textContent;var a="";return le(t,"r",function(i){a+=L(i,"t").textContent}),a})}function qr(e){var r=e.documentElement;return L(r,"workbookPr")}function Kr(e){var r=e.documentElement;return te(r,"Relationship")}function Yr(e){var r=e.documentElement,t=L(r,"sheets");return te(t,"sheet")}function Jr(e,r){var t=r.createDocument(e),n={},a=qr(t);a&&a.getAttribute("date1904")==="1"&&(n.epoch1904=!0),n.sheets=[];var i=function(u){u.getAttribute("name")&&n.sheets.push({id:u.getAttribute("sheetId"),name:u.getAttribute("name"),relationId:u.getAttribute("r:id")})};return Yr(t).forEach(i),n}function Qr(e,r){var t=r.createDocument(e),n={sheets:{},sharedStrings:void 0,styles:void 0},a=function(o){var u=o.getAttribute("Target"),l=o.getAttribute("Type");switch(l){case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":n.styles=me(u);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":n.sharedStrings=me(u);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":n.sheets[o.getAttribute("Id")]=me(u);break}};return Kr(t).forEach(a),n}function me(e){return e[0]==="/"?e.slice(1):"xl/"+e}function Le(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function Re(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Le(Object(t),!0).forEach(function(n){Zr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Le(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Zr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function et(e,r){if(!e)return{};var t=r.createDocument(e),n=Vr(t).map(ve),a=zr(t).map(rt).reduce(function(o,u){return o[u.id]=u,o},[]),i=function(u){return u.hasAttribute("xfId")?Re(Re({},n[u.xfId]),ve(u,a)):ve(u,a)};return Ur(t).map(i)}function rt(e){return{id:e.getAttribute("numFmtId"),template:e.getAttribute("formatCode")}}function ve(e,r){var t={};if(e.hasAttribute("numFmtId")){var n=e.getAttribute("numFmtId");r[n]?t.numberFormat=r[n]:t.numberFormat={id:n}}return t}function tt(e,r){return e?Gr(r.createDocument(e)):[]}function ur(e,r){r&&r.epoch1904&&(e+=1462);var t=70*365+19,n=60*60*1e3;return new Date(Math.round((e-t)*24*n))}function nt(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=at(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(e,r){if(e){if(typeof e=="string")return Ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ie(e,r)}}function Ie(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function it(e,r,t){if(e){var n=r[e];if(!n)throw new Error("Cell style not found: ".concat(e));if(!n.numberFormat)return!1;if(ot.indexOf(Number(n.numberFormat.id))>=0||t.dateFormat&&n.numberFormat.template===t.dateFormat||t.smartDateParser!==!1&&n.numberFormat.template&&st(n.numberFormat.template))return!0}}var ot=[14,15,16,17,18,19,20,21,22,27,30,36,45,46,47,50,57],lt=/^\[\$-414\]/,ut=/;@$/;function st(e){e=e.toLowerCase(),e=e.replace(lt,""),e=e.replace(ut,"");for(var r=e.split(/\W+/),t=nt(r),n;!(n=t()).done;){var a=n.value;if(ct.indexOf(a)<0)return!1}return!0}var ct=["ss","mm","h","hh","am","pm","d","dd","m","mm","mmm","mmmm","yy","yyyy","e"];function ft(e,r,t){var n=t.getInlineStringValue,a=t.getInlineStringXml,i=t.getStyleId,o=t.styles,u=t.values,l=t.properties,s=t.options;switch(r||(r="n"),r){case"str":e=ge(e,s);break;case"inlineStr":if(e=n(),e===void 0)throw new Error('Unsupported "inline string" cell value structure: '.concat(a()));e=ge(e,s);break;case"s":var c=Number(e);if(isNaN(c))throw new Error('Invalid "shared" string index: '.concat(e));if(c>=u.length)throw new Error('An out-of-bounds "shared" string index: '.concat(e));e=u[c],e=ge(e,s);break;case"b":if(e==="1")e=!0;else if(e==="0")e=!1;else throw new Error('Unsupported "boolean" cell value: '.concat(e));break;case"z":e=void 0;break;case"e":e=pt(e);break;case"d":if(e===void 0)break;var f=new Date(e);if(isNaN(f.valueOf()))throw new Error('Unsupported "date" cell value: '.concat(e));e=f;break;case"n":if(e===void 0)break;var p=it(i(),o,s);p?(e=Me(e),e=ur(e,l)):e=(s.parseNumber||Me)(e);break;default:throw new TypeError("Cell type not supported: ".concat(r))}return e===void 0&&(e=null),e}function pt(e){switch(e){case 0:return"#NULL!";case 7:return"#DIV/0!";case 15:return"#VALUE!";case 23:return"#REF!";case 29:return"#NAME?";case 36:return"#NUM!";case 42:return"#N/A";case 43:return"#GETTING_DATA";default:return"#ERROR_".concat(e)}}function ge(e,r){return r.trim!==!1&&(e=e.trim()),e===""&&(e=void 0),e}function Me(e){var r=Number(e);if(isNaN(r))throw new Error('Invalid "numeric" cell value: '.concat(e));return r}var dt=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function yt(e){var r=function(s,c){return s-c},t=e.map(function(l){return l.row}).sort(r),n=e.map(function(l){return l.column}).sort(r),a=t[0],i=t[t.length-1],o=n[0],u=n[n.length-1];return[{row:a,column:o},{row:i,column:u}]}function ht(e){for(var r=0,t=0;t<e.length;)r*=26,r+=dt.indexOf(e[t]),t++;return r}function sr(e){return e=e.split(/(\d+)/),[parseInt(e[1]),ht(e[0].trim())]}function mt(e,r,t,n,a,i,o){var u=sr(e.getAttribute("r")),l=jr(r,e),s=l&&l.textContent,c;return e.hasAttribute("t")&&(c=e.getAttribute("t")),{row:u[0],column:u[1],value:ft(s,c,{getInlineStringValue:function(){return $r(r,e)},getInlineStringXml:function(){return lr(e)},getStyleId:function(){return e.getAttribute("s")},styles:a,values:n,properties:i,options:o})}}function vt(e,r,t,n,a,i){var o=Hr(e);return o.length===0?[]:o.map(function(u){return mt(u,e,r,t,n,a,i)})}function gt(e,r){return Tt(e)||St(e,r)||bt(e,r)||wt()}function wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(e,r){if(e){if(typeof e=="string")return ke(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ke(e,r)}}function ke(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function St(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,i=!1,o,u;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(n.push(o.value),!(r&&n.length===r));a=!0);}catch(l){i=!0,u=l}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw u}}return n}}function Tt(e){if(Array.isArray(e))return e}function Ct(e){var r=Wr(e);if(r)return r=r.split(":").map(sr).map(function(t){var n=gt(t,2),a=n[0],i=n[1];return{row:a,column:i}}),r.length===1&&(r=[r[0],r[0]]),r}function Ft(e,r,t,n,a,i){var o=r.createDocument(e),u=vt(o,r,t,n,a,i),l=Ct(o)||yt(u);return{cells:u,dimensions:l}}function Et(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=Pt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(e,r){if(e){if(typeof e=="string")return Be(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Be(e,r)}}function Be(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function At(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.rowMap,n=r.accessor,a=n===void 0?function(f){return f}:n,i=r.onlyTrimAtTheEnd,o=e.length-1;o>=0;){for(var u=!0,l=Et(e[o]),s;!(s=l()).done;){var c=s.value;if(a(c)!==null){u=!1;break}}if(u)e.splice(o,1),t&&t.splice(o,1);else if(i)break;o--}return e}function Ot(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=xt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(e,r){if(e){if(typeof e=="string")return Ne(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ne(e,r)}}function Ne(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _t(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.accessor,n=t===void 0?function(f){return f}:t,a=r.onlyTrimAtTheEnd,i=e[0].length-1;i>=0;){for(var o=!0,u=Ot(e),l;!(l=u()).done;){var s=l.value;if(n(s[i])!==null){o=!1;break}}if(o)for(var c=0;c<e.length;)e[c].splice(i,1),c++;else if(a)break;i--}return e}function Dt(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=cr(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(e,r){return Mt(e)||It(e,r)||cr(e,r)||Rt()}function Rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,r){if(e){if(typeof e=="string")return Xe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xe(e,r)}}function Xe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function It(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,i=!1,o,u;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(n.push(o.value),!(r&&n.length===r));a=!0);}catch(l){i=!0,u=l}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw u}}return n}}function Mt(e){if(Array.isArray(e))return e}function kt(e,r){var t=e.dimensions,n=e.cells;if(n.length===0)return[];var a=Lt(t,2);a[0];for(var i=a[1],o=i.column,u=i.row,l=new Array(u),s=0;s<u;){l[s]=new Array(o);for(var c=0;c<o;)l[s][c]=null,c++;s++}for(var f=Dt(n),p;!(p=f()).done;){var y=p.value,g=y.row-1,P=y.column-1;P<o&&g<u&&(l[g][P]=y.value)}var m=r.rowMap;if(m)for(var S=0;S<l.length;)m[S]=S,S++;return l=At(_t(l,{onlyTrimAtTheEnd:!0}),{onlyTrimAtTheEnd:!0,rowMap:m}),r.transformData&&(l=r.transformData(l)),l}function Bt(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=Nt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(e,r){if(e){if(typeof e=="string")return He(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return He(e,r)}}function He(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function je(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function Xt(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?je(Object(t),!0).forEach(function(n){Ht(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):je(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ht(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function jt(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};t.sheet||(t=Xt({sheet:1},t));var n=function(p){if(!e[p])throw new Error('"'.concat(p,'" file not found inside the *.xlsx file zip archive'));return e[p]},a=Qr(n("xl/_rels/workbook.xml.rels"),r),i=a.sharedStrings?tt(n(a.sharedStrings),r):[],o=a.styles?et(n(a.styles),r):{},u=Jr(n("xl/workbook.xml"),r);if(t.getSheets)return u.sheets.map(function(f){var p=f.name;return{name:p}});var l=$t(t.sheet,u.sheets);if(!l||!a.sheets[l])throw Wt(t.sheet,u.sheets);var s=Ft(n(a.sheets[l]),r,i,o,u,t),c=kt(s,t);return t.properties?{data:c,properties:u}:c}function $t(e,r){if(typeof e=="number"){var t=r[e-1];return t&&t.relationId}for(var n=Bt(r),a;!(a=n()).done;){var i=a.value;if(i.name===e)return i.relationId}}function Wt(e,r){var t=r&&r.map(function(n,a){return'"'.concat(n.name,'" (#').concat(a+1,")")}).join(", ");return new Error("Sheet ".concat(typeof e=="number"?"#"+e:'"'+e+'"'," not found in the *.xlsx file.").concat(r?" Available sheets: "+t+".":""))}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Se(e)}function $e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Vt(e,r,t){return r&&$e(e.prototype,r),t&&$e(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ut(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function zt(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&Z(e,r)}function Gt(e){var r=fr();return function(){var n=ee(e),a;if(r){var i=ee(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return qt(this,a)}}function qt(e,r){if(r&&(Se(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Kt(e)}function Kt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(e){var r=typeof Map=="function"?new Map:void 0;return Te=function(n){if(n===null||!Yt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return oe(n,arguments,ee(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Z(a,n)},Te(e)}function oe(e,r,t){return fr()?oe=Reflect.construct:oe=function(a,i,o){var u=[null];u.push.apply(u,i);var l=Function.bind.apply(a,u),s=new l;return o&&Z(s,o.prototype),s},oe.apply(null,arguments)}function fr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yt(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Z(e,r){return Z=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},Z(e,r)}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ee(e)}var F=function(e){zt(t,e);var r=Gt(t);function t(n){var a;return Ut(this,t),a=r.call(this,"invalid"),a.reason=n,a}return Vt(t)}(Te(Error));function Jt(e){if(typeof e=="string"){var r=e;if(e=Number(e),String(e)!==r)throw new F("not_a_number")}if(typeof e!="number")throw new F("not_a_number");if(isNaN(e))throw new F("invalid_number");if(!isFinite(e))throw new F("out_of_bounds");return e}function Qt(e){if(typeof e=="string")return e;if(typeof e=="number"){if(isNaN(e))throw new F("invalid_number");if(!isFinite(e))throw new F("out_of_bounds");return String(e)}throw new F("not_a_string")}function Zt(e){if(typeof e=="boolean")return e;throw new F("not_a_boolean")}function en(e,r){var t=r.properties;if(e instanceof Date){if(isNaN(e.valueOf()))throw new F("out_of_bounds");return e}if(typeof e=="number"){if(isNaN(e))throw new F("invalid_number");if(!isFinite(e))throw new F("out_of_bounds");var n=ur(e,t);if(isNaN(n.valueOf()))throw new F("out_of_bounds");return n}throw new F("not_a_date")}function rn(e,r){return an(e)||nn(e,r)||pr(e,r)||tn()}function tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,i=!1,o,u;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(n.push(o.value),!(r&&n.length===r));a=!0);}catch(l){i=!0,u=l}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw u}}return n}}function an(e){if(Array.isArray(e))return e}function Ce(e){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ce(e)}function on(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=pr(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pr(e,r){if(e){if(typeof e=="string")return We(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return We(e,r)}}function We(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ve(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function Ue(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ve(Object(t),!0).forEach(function(n){ln(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ln(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ze={isColumnOriented:!1};function un(e,r,t){t?t=Ue(Ue({},ze),t):t=ze;var n=t,a=n.isColumnOriented,i=n.rowMap,o=n.ignoreEmptyRows;pn(r),a&&(e=fn(e));for(var u=e[0],l=[],s=[],c=1;c<e.length;c++){var f=dr(r,e[c],c,u,s,t);(f!==null||o===!1)&&l.push(f)}if(i)for(var p=on(s),y;!(y=p()).done;){var g=y.value;g.row=i[g.row-1]+1}return{rows:l,errors:s}}function dr(e,r,t,n,a,i){for(var o={},u=!0,l=function(T){var v=T.column,N=T.value,A=T.error,h=T.reason,w={error:A,row:t+1,column:v,value:N};return h&&(w.reason=h),e[v].type&&(w.type=e[v].type),w},s=[],c=function(){var T=p[f],v=e[T],N=Ce(v.type)==="object"&&!Array.isArray(v.type),A=r[n.indexOf(T)];A===void 0&&(A=null);var h=void 0,w=void 0,b=void 0;if(N)h=dr(v.type,r,t,n,a,i);else if(A===null)h=null;else if(Array.isArray(v.type)){var $=!1,ue=cn(A).map(function(V){var E=Ge(V,v,i);return E.error&&(h=V,w=E.error,b=E.reason),E.value!==null&&($=!0),E.value});w||(h=$?ue:null)}else{var W=Ge(A,v,i);w=W.error,b=W.reason,h=w?A:W.value}!w&&h===null&&(typeof v.required=="function"?s.push({column:T}):v.required===!0&&(w="required")),w?a.push(l({column:T,value:h,error:w,reason:b})):(u&&h!==null&&(u=!1),(h!==null||i.includeNullValues)&&(o[v.prop]=h))},f=0,p=Object.keys(e);f<p.length;f++)c();if(u)return null;for(var y=0,g=s;y<g.length;y++){var P=g[y].column,m=e[P].required(o);m&&a.push(l({column:P,value:null,error:"required"}))}return o}function Ge(e,r,t){if(e===null)return{value:null};var n;if(r.parse?n=H(e,r.parse):r.type?n=sn(e,Array.isArray(r.type)?r.type[0]:r.type,t):n={value:e},n.error)return n;if(n.value!==null){if(r.oneOf&&r.oneOf.indexOf(n.value)<0)return{error:"invalid",reason:"unknown"};if(r.validate)try{r.validate(n.value)}catch(a){return{error:a.message}}}return n}function H(e,r){try{return e=r(e),e===void 0?{value:null}:{value:e}}catch(n){var t={error:n.message};return n.reason&&(t.reason=n.reason),t}}function sn(e,r,t){switch(r){case String:return H(e,Qt);case Number:return H(e,Jt);case Date:return H(e,function(n){return en(n,{properties:t.properties})});case Boolean:return H(e,Zt);default:if(typeof r=="function")return H(e,r);throw new Error("Unsupported schema type: ".concat(r&&r.name||r))}}function yr(e,r,t){for(var n=0,a="";t+n<e.length;){var i=e[t+n];if(i===r)return[a,n];if(i==='"'){var o=yr(e,'"',t+n+1);a+=o[0],n+=1+o[1]+1}else a+=i,n++}return[a,n]}function cn(e){for(var r=[],t=0;t<e.length;){var n=yr(e,",",t),a=rn(n,2),i=a[0],o=a[1];t+=o+1,r.push(i.trim())}return r}var fn=function(r){return r[0].map(function(t,n){return r.map(function(a){return a[n]})})};function pn(e){for(var r=0,t=Object.keys(e);r<t.length;r++){var n=t[r],a=e[n];if(!a.prop)throw new Error('"prop" not defined for schema entry "'.concat(n,'".'))}}function Fe(e){"@babel/helpers - typeof";return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Fe(e)}function hr(e){for(var r={},t=0,n=Object.keys(e);t<n.length;t++){var a=n[t],i=e[a],o=void 0;Fe(i)==="object"&&(i=Object.keys(e[a])[0],o=hr(e[a][i])),r[a]={prop:i},o&&(r[a].type=o)}return r}var dn=["schema","map"];function qe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function ae(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qe(Object(t),!0).forEach(function(n){yn(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function yn(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function hn(e,r){if(e==null)return{};var t=mn(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function mn(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function vn(e,r,t){var n=t.schema,a=t.map,i=hn(t,dn);!n&&a&&(n=hr(a));var o=jt(e,r,ae(ae({},i),{},{properties:n||i.properties}));return n?un(o.data,n,ae(ae({},i),{},{properties:o.properties})):o}function gn(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return kr(e).then(function(t){return vn(t,gr,r)})}const Ke=document.querySelector("input"),R=document.querySelector("#app");document.querySelector("#selectBlock");document.querySelector("#textAreaBlock");let j=[];const Y=document.createElement("select"),J=document.createElement("select"),Q=document.createElement("select"),z=document.createElement("textArea"),G=document.createElement("textArea"),q=document.createElement("textArea"),Ye=document.createElement("h2"),Je=document.createElement("h2"),Qe=document.createElement("h2");function wn(){Ye.innerHTML="Авиабилеты, класс",R.appendChild(Ye),R.appendChild(Y),R.appendChild(z),Je.innerHTML="Ж/д билеты, класс",R.appendChild(Je),R.appendChild(J),R.appendChild(G),Qe.innerHTML="Гостиница",R.appendChild(Qe),R.appendChild(Q),R.appendChild(q),bn()}function bn(){Y.addEventListener("change",e=>{z.value=null;let r=e.target.options[e.target.selectedIndex].text;j.filter(n=>n.type===r).forEach(n=>{z.value+=n.category+`
`}),z.value+=`
`,z.value+=Fn(r)}),J.addEventListener("change",e=>{G.value=null;let r=e.target.options[e.target.selectedIndex].text;j.filter(n=>n.trainType===r).forEach(n=>{G.value+=n.category+`
`}),G.value+=`
`,G.value+=En(r)}),Q.addEventListener("change",e=>{q.value=null;let r=e.target.options[e.target.selectedIndex].text;const t=j.filter(a=>a.hotelCombined===r);t.forEach(a=>{q.value+=a.category+" "+a.hotelCombined+`
`});let n=t.find(a=>a.hotelCombined===r);q.value+=`
`,q.value+=Pn({hotelMoscow:n.hotelMoscow,hotelSPB:n.hotelSPB,hotelRF:n.hotelRF,hotelAbroad:n.hotelAbroad})})}Ke.addEventListener("change",()=>{gn(Ke.files[0]).then((e,r)=>{Sn(e),wn(),Cn()})});function Sn(e){let r=0,t=null,n=null,a=null,i=null,o=null,u=null,l=null;e.forEach((s,c)=>{s.forEach((f,p)=>{(p===2||p===3)&&(typeof f=="number"&&(r+=String(f)),typeof f=="string"&&f.length<=2&&(r+=f)),p===5&&f!=null&&(t=f.toLowerCase().replace(`
`," ")),p===6&&c>3&&f!=null&&(l=Tn(f.toLowerCase().replace(`
`," ")),n=l||n),p===8&&f!=null&&c>3&&(l=ie(f),a=l||a),p===9&&f!=null&&c>3&&(l=ie(f),i=l||i),p===10&&f!=null&&c>3&&(l=ie(f),o=l||o),p===11&&f!=null&&c>3&&(l=ie(f),u=l||u)}),r!=0&&j.push({category:typeof r=="string"?r.slice(1):r,type:t,trainType:n,hotelMoscow:a,hotelSPB:i,hotelRF:o,hotelAbroad:u,hotelCombined:a+"-"+i+"-"+o+"-"+u}),r=0}),console.log(j)}function ie(e){let r=e.match(/(\d+\s*\d*)/);return r?Number(r[0].replace(/\s/g,"")):null}function Tn(e){let r=["св","купе"],t=new RegExp(r.join("|"),"g"),n=e.match(t);if(n){if(n=[...new Set(n)],n.length===1&&n[0]==="купе")return"купе";if(n.includes("св"))return"св, купе"}return null}function Cn(){let e=document.createElement("option");e.text="Выберите пункт",Y.add(e,Y[0]);let r=document.createElement("option");r.text="Выберите пункт",J.add(r,J[0]);let t=document.createElement("option");t.text="Выберите пункт",Q.add(t,Q[0]);let n=new Set,a=new Set,i=new Set;j.forEach(o=>{n.add(o.type),a.add(o.trainType),i.add(o.hotelCombined)}),n.forEach(o=>{let u=document.createElement("option");u.text=o,Y.add(u)}),a.forEach(o=>{let u=document.createElement("option");u.text=o,J.add(u)}),i.forEach(o=>{let u=document.createElement("option");u.text=o,Q.add(u)})}function Fn(e){let r=0,t=null,n=null;switch(e){case"эконом":n=!1,t=!0,r=0;break;case"эконом, при перелетах более 5 часов бизнес":n=!0,t=!0,r=5;break;case"эконом (предпочтительно) или бизнес - по усмотрению сотрудника":n=!0,t=!0,r=0;break;case"бизнес":n=!0,t=!1,r=0;break;default:return"No XML"}return`<?xml version="1.0" encoding="utf-8"?>
  <AviaEngineV2Policy>
      <DepartureTime>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <AllowedHoursMin>0</AllowedHoursMin>
          <AllowedHoursMax>0</AllowedHoursMax>
      </DepartureTime>
      <Connections>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <MaximumConnectionsValue>0</MaximumConnectionsValue>
      </Connections>
      <FlightNumbers>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <ForbiddenFlights />
          <OnlySelectedFlightsAreAllowed>false</OnlySelectedFlightsAreAllowed>
      </FlightNumbers>
      <AirplaneTypes>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <ForbiddenAirplaneTypes />
          <OnlySelectedAirplanesAreAllowed>false</OnlySelectedAirplanesAreAllowed>
      </AirplaneTypes>
      <Geography>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <IsAcceptRule>false</IsAcceptRule>
      </Geography>
      <DaysToDeparture>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <Days>0</Days>
          <Rules>
              <DaysDRule>
                  <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <Days>14</Days>
              </DaysDRule>
          </Rules>
      </DaysToDeparture>
      <WeekDays>
          <Enabled>false</Enabled>
          <id_BudgetCode>1069805</id_BudgetCode>
          <CheckOnlyFlightDates>false</CheckOnlyFlightDates>
          <WeekDays>
              <int>1</int>
          </WeekDays>
          <ExactDays />
      </WeekDays>
      <AdvancedFareClass>
          <Enabled>true</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <Routes>
              <AirRouteClassAllowance>
                  <Origins>ALL</Origins>
                  <Destinations>ALL</Destinations>
                  <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <IncludeServiceFee>false</IncludeServiceFee>
                  <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <AllowBusiness>${n}</AllowBusiness>
                  <AllowEconomy>${t}</AllowEconomy>
                  <EconomyClassStartHour p5:nil="true"
                      xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <EconomyClassEndHour p5:nil="true"
                      xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <BusinessClassStartHour p5:nil="true"
                      xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <BusinessClassEndHour p5:nil="true"
                      xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <MinHoursForEconomyClassFlight>0</MinHoursForEconomyClassFlight>
                  <MinHoursTypeForEconomyClassFlight>WithDocking</MinHoursTypeForEconomyClassFlight>
                  <MinHoursForBusinessClassFlight>${r}</MinHoursForBusinessClassFlight>
                  <MinHoursTypeForBusinessClassFlight>WithDocking</MinHoursTypeForBusinessClassFlight>
              </AirRouteClassAllowance>
          </Routes>
      </AdvancedFareClass>
      <AdvancedPriceDeviations>
          <Enabled>true</Enabled>
          <id_BudgetCode>1069805</id_BudgetCode>
          <Routes>
              <AirRoutePriceDeviation>
                  <Origins>!CEE</Origins>
                  <Destinations>!CEE</Destinations>
                  <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <IncludeServiceFee>false</IncludeServiceFee>
                  <FixedRubDeviation p5:nil="true"
                      xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <PercentDeviation>15</PercentDeviation>
                  <CheckBaggage>true</CheckBaggage>
                  <CheckBothDeviation>false</CheckBothDeviation>
              </AirRoutePriceDeviation>
              <AirRoutePriceDeviation>
                  <Origins>UCT,LED</Origins>
                  <Destinations>LED,UCT</Destinations>
                  <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <IncludeServiceFee>false</IncludeServiceFee>
                  <FixedRubDeviation p5:nil="true"
                      xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <PercentDeviation p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <CheckBaggage>true</CheckBaggage>
                  <CheckBothDeviation>false</CheckBothDeviation>
              </AirRoutePriceDeviation>
          </Routes>
      </AdvancedPriceDeviations>
      <AdvancedPriceLimits>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <Routes />
      </AdvancedPriceLimits>
      <ItineraryTypes>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <OWProhibited>false</OWProhibited>
          <RTProhibited>false</RTProhibited>
      </ItineraryTypes>
      <BaggageRestriction>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <BaggagePermitExt>Permitted</BaggagePermitExt>
      </BaggageRestriction>
      <ExchangeRestriction>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <ExchangePermit>false</ExchangePermit>
      </ExchangeRestriction>
      <RefundRestriction>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <RefundPermit>false</RefundPermit>
      </RefundRestriction>
      <BookingClassRestriction>
          <Enabled>false</Enabled>
          <id_BudgetCode>1069805</id_BudgetCode>
          <ClassRestrictions />
      </BookingClassRestriction>
      <PriorityAirlines>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <OnlyPriorityAirlinesAreAllowed>false</OnlyPriorityAirlinesAreAllowed>
      </PriorityAirlines>
  </AviaEngineV2Policy>`}function En(e){let r=null;switch(e){case"купе":r=`            <TrainFareTypeForTravelPolicy>Coupet</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Platzcart</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Common</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Seats</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>SapsanEconomy</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>VoronezhSeats</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Lastochka</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>GrandExpress</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Strizh</TrainFareTypeForTravelPolicy>`;break;case"св, купе":r=`            <TrainFareTypeForTravelPolicy>Soft</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Coupet</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Platzcart</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Common</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Seats</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>SapsanEconomy</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>SapsanBusiness</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>VoronezhSeats</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Lastochka</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>GrandExpress</TrainFareTypeForTravelPolicy>
                            <TrainFareTypeForTravelPolicy>Strizh</TrainFareTypeForTravelPolicy>`;break;default:return"No XML"}return`<?xml version="1.0" encoding="utf-8"?>
  <RailV3Policy>
      <TrainType>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <AllowedCathegories />
      </TrainType>
      <VagonType>
          <Enabled>true</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <AllowedTypes>
              ${r}
          </AllowedTypes>
          <DenyedTypesExclusion />
          <AllowGivenServiceClassesOnly>false</AllowGivenServiceClassesOnly>
      </VagonType>
      <Duration>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <DurationHours>0</DurationHours>
          <DurationHoursTo>0</DurationHoursTo>
      </Duration>
      <DaysOfWeek>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <WeekDays />
          <ExactDays />
      </DaysOfWeek>
      <DaysToDepart>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <Rules>
              <DaysDRule>
                  <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <Days>14</Days>
              </DaysDRule>
          </Rules>
          <Days>0</Days>
      </DaysToDepart>
      <Price>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <PriceLimitations>
              <FareGroupPriceLimitations>
                  <MinimumPriceDeltaFix>0</MinimumPriceDeltaFix>
                  <MinimumPriceDeltaPercent>0</MinimumPriceDeltaPercent>
                  <Fares />
                  <AppliedWithinSelectedTrain>false</AppliedWithinSelectedTrain>
                  <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
              </FareGroupPriceLimitations>
          </PriceLimitations>
      </Price>
      <Route>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <Routes>
              <RailRoute>
                  <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                  <Fares />
                  <Cathegories />
                  <IsForbidRule>false</IsForbidRule>
              </RailRoute>
          </Routes>
      </Route>
      <RoutePrice>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <Routes />
      </RoutePrice>
      <Meal>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <MealIsForbidden>false</MealIsForbidden>
      </Meal>
      <PlaceCountForPax>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <MaxPlaceCount>4</MaxPlaceCount>
      </PlaceCountForPax>
      <DurationByServiceClass>
          <Enabled>false</Enabled>
          <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
          <DurationLimits />
      </DurationByServiceClass>
  </RailV3Policy>`}function Pn({hotelMoscow:e,hotelSPB:r,hotelRF:t,hotelAbroad:n}){return`<?xml version="1.0" encoding="utf-8"?>
<HotelV4Policy>
    <PriceLimits>
        <Enabled>true</Enabled>
        <id_BudgetCode>0</id_BudgetCode>
        <Rules>
            <PriceLimit>
                <CountryRegex>Россия </CountryRegex>
                <CityRegex>Москва</CityRegex>
                <PricePerNightLimit>${e}</PricePerNightLimit>
                <CurrencyCode>RUB</CurrencyCode>
                <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                <IncludeServiceFee>false</IncludeServiceFee>
                <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
                <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
                <ExcludeVAT>false</ExcludeVAT>
                <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
            </PriceLimit>
            <PriceLimit>
                <CountryRegex>Россия</CountryRegex>
                <CityRegex>Санкт-Петербург</CityRegex>
                <PricePerNightLimit>${r}</PricePerNightLimit>
                <CurrencyCode>RUB</CurrencyCode>
                <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                <IncludeServiceFee>false</IncludeServiceFee>
                <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
                <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
                <ExcludeVAT>false</ExcludeVAT>
                <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
            </PriceLimit>
            <PriceLimit>
                <CountryRegex>Россия </CountryRegex>
                <CityRegex />
                <PricePerNightLimit>${t}</PricePerNightLimit>
                <CurrencyCode>RUB</CurrencyCode>
                <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                <IncludeServiceFee>false</IncludeServiceFee>
                <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
                <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
                <ExcludeVAT>false</ExcludeVAT>
                <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
            </PriceLimit>
            <PriceLimit>
                <CountryRegex />
                <CityRegex />
                <PricePerNightLimit>${n}</PricePerNightLimit>
                <CurrencyCode>USD</CurrencyCode>
                <id_Code p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                <IncludeServiceFee>false</IncludeServiceFee>
                <IncludeEarlyCheckInFee>false</IncludeEarlyCheckInFee>
                <IncludeLateCheckOutFee>false</IncludeLateCheckOutFee>
                <ExcludeVAT>false</ExcludeVAT>
                <ConsiderPaxPerOrder>false</ConsiderPaxPerOrder>
            </PriceLimit>
        </Rules>
    </PriceLimits>
    <DaysUntilCheckIn>
        <Enabled>false</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <Rules>
            <DaysCRule>
                <id_BudgetCode p5:nil="true" xmlns:p5="http://www.w3.org/2001/XMLSchema-instance" />
                <Days>14</Days>
            </DaysCRule>
        </Rules>
        <MinimalNumberOfDaysUntilCheckIn>0</MinimalNumberOfDaysUntilCheckIn>
        <OnlyWorkDays>false</OnlyWorkDays>
    </DaysUntilCheckIn>
    <Stars>
        <Enabled>false</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <Rules />
        <AllowHotelsWithNoStars>false</AllowHotelsWithNoStars>
        <AllowHotelsWithOneStar>false</AllowHotelsWithOneStar>
        <AllowHotelsWithTwoStars>false</AllowHotelsWithTwoStars>
        <AllowHotelsWithThreeStars>false</AllowHotelsWithThreeStars>
        <AllowHotelsWithFourStars>false</AllowHotelsWithFourStars>
        <AllowHotelsWithFiveStars>false</AllowHotelsWithFiveStars>
    </Stars>
    <WeekDays>
        <Enabled>false</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <ForbidMondays>false</ForbidMondays>
        <ForbidTuesdays>false</ForbidTuesdays>
        <ForbidWednesdays>false</ForbidWednesdays>
        <ForbidThursdays>false</ForbidThursdays>
        <ForbidFridays>false</ForbidFridays>
        <ForbidSaturdays>false</ForbidSaturdays>
        <ForbidSundays>false</ForbidSundays>
        <ExactDates />
        <OnlyCheckInCheckOutDates>false</OnlyCheckInCheckOutDates>
    </WeekDays>
    <ForbiddenHotels>
        <Enabled>true</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <Rules>
            <HotelName>
                <CountryRegex>Россия</CountryRegex>
                <CityRegex>Череповец</CityRegex>
                <HotelNameRegex>Единство</HotelNameRegex>
            </HotelName>
            <HotelName>
                <CountryRegex>Россия</CountryRegex>
                <CityRegex>Санкт-Петербург</CityRegex>
                <HotelNameRegex>Невский 105</HotelNameRegex>
            </HotelName>
            <HotelName>
                <CountryRegex>Россия</CountryRegex>
                <CityRegex>Москва</CityRegex>
                <HotelNameRegex>Мандарин</HotelNameRegex>
            </HotelName>
        </Rules>
    </ForbiddenHotels>
    <Meal>
        <Enabled>true</Enabled>
        <id_BudgetCode>0</id_BudgetCode>
        <MealIsForbidden>false</MealIsForbidden>
    </Meal>
    <EarlyCheckinLateCheckout>
        <Enabled>true</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <EarlyCheckinIsForbidden>true</EarlyCheckinIsForbidden>
        <LateCheckoutIsForbidden>true</LateCheckoutIsForbidden>
    </EarlyCheckinLateCheckout>
    <LengthOfStayLimit>
        <Enabled>false</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <MinNumberOfStay p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <MaxNumberOfStay p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
    </LengthOfStayLimit>
    <CorporateHotels>
        <Enabled>false</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
        <ViolateWhenNot3d>false</ViolateWhenNot3d>
    </CorporateHotels>
    <PenaltyRateProhibition>
        <Enabled>false</Enabled>
        <id_BudgetCode p3:nil="true" xmlns:p3="http://www.w3.org/2001/XMLSchema-instance" />
    </PenaltyRateProhibition>
</HotelV4Policy>`}
