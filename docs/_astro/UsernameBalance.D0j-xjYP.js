import{j as w}from"./index.CMSeyhcG.js";import{R as q,r as De}from"./index.1Jp-s5Xv.js";import{u as ge}from"./index.CXp1hAcb.js";import{s as kt}from"./supabaseClient.UdoNoOaI.js";import{s as St,d as $e,v as Ye,c as Dt,u as Et,a as pt,b as Ke,e as Nt}from"./userstate.CtpGMeMg.js";import"./index.CoaMyoED.js";import"./preload-helper.BlTxHScW.js";import"./index.CvL_fmfE.js";var ye=e=>e.type==="checkbox",ie=e=>e instanceof Date,R=e=>e==null;const nt=e=>typeof e=="object";var D=e=>!R(e)&&!Array.isArray(e)&&nt(e)&&!ie(e),Ut=e=>D(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,Ct=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Lt=(e,s)=>e.has(Ct(s)),Ot=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Ne=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function O(e){let s;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ne&&(e instanceof Blob||a))&&(r||D(e)))if(s=r?[]:{},!r&&!Ot(e))s=e;else for(const o in e)e.hasOwnProperty(o)&&(s[o]=O(e[o]));else return e;return s}var _e=e=>Array.isArray(e)?e.filter(Boolean):[],p=e=>e===void 0,m=(e,s,r)=>{if(!s||!D(e))return r;const a=_e(s.split(/[,[\].]+?/)).reduce((o,n)=>R(o)?o:o[n],e);return p(a)||a===e?p(e[s])?r:e[s]:a},K=e=>typeof e=="boolean",Ue=e=>/^\w*$/.test(e),ot=e=>_e(e.replace(/["|']|\]/g,"").split(/\.|\[/)),F=(e,s,r)=>{let a=-1;const o=Ue(s)?[s]:ot(s),n=o.length,f=n-1;for(;++a<n;){const g=o[a];let U=r;if(a!==f){const P=e[g];U=D(P)||Array.isArray(P)?P:isNaN(+o[a+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=U,e=e[g]}};const Xe={BLUR:"blur",FOCUS_OUT:"focusout"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};q.createContext(null);var Tt=(e,s,r,a=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const f=n;return s._proxyFormState[f]!==W.all&&(s._proxyFormState[f]=!a||W.all),e[f]}});return o},X=e=>typeof e=="string",Rt=(e,s,r,a,o)=>X(e)?(a&&s.watch.add(e),m(r,e,o)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),m(r,n))):(a&&(s.watchAll=!0),r),jt=(e,s,r,a,o)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:o||!0}}:{},ce=e=>Array.isArray(e)?e:[e],Ge=()=>{let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}},pe=e=>R(e)||!nt(e);function te(e,s){if(pe(e)||pe(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const o of r){const n=e[o];if(!a.includes(o))return!1;if(o!=="ref"){const f=s[o];if(ie(n)&&ie(f)||D(n)&&D(f)||Array.isArray(n)&&Array.isArray(f)?!te(n,f):n!==f)return!1}}return!0}var T=e=>D(e)&&!Object.keys(e).length,Ce=e=>e.type==="file",z=e=>typeof e=="function",xe=e=>{if(!Ne)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ut=e=>e.type==="select-multiple",Le=e=>e.type==="radio",Mt=e=>Le(e)||ye(e),Ee=e=>xe(e)&&e.isConnected;function It(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=p(e)?a++:e[s[a++]];return e}function Pt(e){for(const s in e)if(e.hasOwnProperty(s)&&!p(e[s]))return!1;return!0}function N(e,s){const r=Array.isArray(s)?s:Ue(s)?[s]:ot(s),a=r.length===1?e:It(e,r),o=r.length-1,n=r[o];return a&&delete a[n],o!==0&&(D(a)&&T(a)||Array.isArray(a)&&Pt(a))&&N(e,r.slice(0,-1)),e}var dt=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function ve(e,s={}){const r=Array.isArray(e);if(D(e)||r)for(const a in e)Array.isArray(e[a])||D(e[a])&&!dt(e[a])?(s[a]=Array.isArray(e[a])?[]:{},ve(e[a],s[a])):R(e[a])||(s[a]=!0);return s}function ct(e,s,r){const a=Array.isArray(e);if(D(e)||a)for(const o in e)Array.isArray(e[o])||D(e[o])&&!dt(e[o])?p(s)||pe(r[o])?r[o]=Array.isArray(e[o])?ve(e[o],[]):{...ve(e[o])}:ct(e[o],R(s)?{}:s[o],r[o]):r[o]=!te(e[o],s[o]);return r}var ue=(e,s)=>ct(e,s,ve(s));const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var ft=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!p(e[0].attributes.value)?p(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je},yt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>p(e)?e:s?e===""?NaN:e&&+e:r&&X(e)?new Date(e):a?a(e):e;const Ze={isValid:!1,value:null};var mt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Ze):Ze;function et(e){const s=e.ref;return Ce(s)?s.files:Le(s)?mt(e.refs).value:ut(s)?[...s.selectedOptions].map(({value:r})=>r):ye(s)?ft(e.refs).value:yt(p(s.value)?e.ref.value:s.value,e)}var Bt=(e,s,r,a)=>{const o={};for(const n of e){const f=m(s,n);f&&F(o,n,f._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:a}},be=e=>e instanceof RegExp,de=e=>p(e)?e:be(e)?e.source:D(e)?be(e.value)?e.value.source:e.value:e,tt=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched});const rt="AsyncFunction";var qt=e=>!!e&&!!e.validate&&!!(z(e.validate)&&e.validate.constructor.name===rt||D(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===rt)),Wt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),st=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const fe=(e,s,r,a)=>{for(const o of r||Object.keys(e)){const n=m(e,o);if(n){const{_f:f,...g}=n;if(f){if(f.refs&&f.refs[0]&&s(f.refs[0],o)&&!a)return!0;if(f.ref&&s(f.ref,f.name)&&!a)return!0;if(fe(g,s))break}else if(D(g)&&fe(g,s))break}}};function it(e,s,r){const a=m(e,r);if(a||Ue(r))return{error:a,name:r};const o=r.split(".");for(;o.length;){const n=o.join("."),f=m(s,n),g=m(e,n);if(f&&!Array.isArray(f)&&r!==n)return{name:r};if(g&&g.type)return{name:n,error:g};o.pop()}return{name:r}}var zt=(e,s,r,a)=>{r(e);const{name:o,...n}=e;return T(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(f=>s[f]===(!a||W.all))},Ht=(e,s,r)=>!e||!s||e===s||ce(e).some(a=>a&&(r?a===s:a.startsWith(s)||s.startsWith(a))),$t=(e,s,r,a,o)=>o.isOnAll?!1:!r&&o.isOnTouch?!(s||e):(r?a.isOnBlur:o.isOnBlur)?!e:(r?a.isOnChange:o.isOnChange)?e:!0,Yt=(e,s)=>!_e(m(e,s)).length&&N(e,s),Kt=(e,s,r)=>{const a=ce(m(e,r));return F(a,"root",s[r]),F(e,r,a),e},he=e=>X(e);function at(e,s,r="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||K(e)&&!e)return{type:r,message:he(e)?e:"",ref:s}}var ae=e=>D(e)&&!be(e)?e:{value:e,message:""},lt=async(e,s,r,a,o,n)=>{const{ref:f,refs:g,required:U,maxLength:P,minLength:V,min:A,max:h,pattern:H,validate:B,name:k,valueAsNumber:re,mount:M}=e._f,x=m(r,k);if(!M||s.has(k))return{};const G=g?g[0]:f,J=_=>{o&&G.reportValidity&&(G.setCustomValidity(K(_)?"":_||""),G.reportValidity())},C={},le=Le(f),ne=ye(f),we=le||ne,$=(re||Ce(f))&&p(f.value)&&p(x)||xe(f)&&f.value===""||x===""||Array.isArray(x)&&!x.length,se=jt.bind(null,k,a,C),Q=(_,v,S,j=Z.maxLength,I=Z.minLength)=>{const Y=_?v:S;C[k]={type:_?j:I,message:Y,ref:f,...se(_?j:I,Y)}};if(n?!Array.isArray(x)||!x.length:U&&(!we&&($||R(x))||K(x)&&!x||ne&&!ft(g).isValid||le&&!mt(g).isValid)){const{value:_,message:v}=he(U)?{value:!!U,message:U}:ae(U);if(_&&(C[k]={type:Z.required,message:v,ref:G,...se(Z.required,v)},!a))return J(v),C}if(!$&&(!R(A)||!R(h))){let _,v;const S=ae(h),j=ae(A);if(!R(x)&&!isNaN(x)){const I=f.valueAsNumber||x&&+x;R(S.value)||(_=I>S.value),R(j.value)||(v=I<j.value)}else{const I=f.valueAsDate||new Date(x),Y=me=>new Date(new Date().toDateString()+" "+me),ee=f.type=="time",oe=f.type=="week";X(S.value)&&x&&(_=ee?Y(x)>Y(S.value):oe?x>S.value:I>new Date(S.value)),X(j.value)&&x&&(v=ee?Y(x)<Y(j.value):oe?x<j.value:I<new Date(j.value))}if((_||v)&&(Q(!!_,S.message,j.message,Z.max,Z.min),!a))return J(C[k].message),C}if((P||V)&&!$&&(X(x)||n&&Array.isArray(x))){const _=ae(P),v=ae(V),S=!R(_.value)&&x.length>+_.value,j=!R(v.value)&&x.length<+v.value;if((S||j)&&(Q(S,_.message,v.message),!a))return J(C[k].message),C}if(H&&!$&&X(x)){const{value:_,message:v}=ae(H);if(be(_)&&!x.match(_)&&(C[k]={type:Z.pattern,message:v,ref:f,...se(Z.pattern,v)},!a))return J(v),C}if(B){if(z(B)){const _=await B(x,r),v=at(_,G);if(v&&(C[k]={...v,...se(Z.validate,v.message)},!a))return J(v.message),C}else if(D(B)){let _={};for(const v in B){if(!T(_)&&!a)break;const S=at(await B[v](x,r),G,v);S&&(_={...S,...se(v,S.message)},J(S.message),a&&(C[k]=_))}if(!T(_)&&(C[k]={ref:G,..._},!a))return C}}return J(!0),C};const Xt={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function Gt(e={}){let s={...Xt,...e},r={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1};const a={};let o=D(s.defaultValues)||D(s.values)?O(s.values||s.defaultValues)||{}:{},n=s.shouldUnregister?{}:O(o),f={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},U,P=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let A={...V};const h={array:Ge(),state:Ge()},H=tt(s.mode),B=tt(s.reValidateMode),k=s.criteriaMode===W.all,re=t=>i=>{clearTimeout(P),P=setTimeout(t,i)},M=async t=>{if(!s.disabled&&(V.isValid||A.isValid||t)){const i=s.resolver?T((await $()).errors):await Q(a,!0);i!==r.isValid&&h.state.next({isValid:i})}},x=(t,i)=>{!s.disabled&&(V.isValidating||V.validatingFields||A.isValidating||A.validatingFields)&&((t||Array.from(g.mount)).forEach(l=>{l&&(i?F(r.validatingFields,l,i):N(r.validatingFields,l))}),h.state.next({validatingFields:r.validatingFields,isValidating:!T(r.validatingFields)}))},G=(t,i=[],l,c,d=!0,u=!0)=>{if(c&&l&&!s.disabled){if(f.action=!0,u&&Array.isArray(m(a,t))){const y=l(m(a,t),c.argA,c.argB);d&&F(a,t,y)}if(u&&Array.isArray(m(r.errors,t))){const y=l(m(r.errors,t),c.argA,c.argB);d&&F(r.errors,t,y),Yt(r.errors,t)}if((V.touchedFields||A.touchedFields)&&u&&Array.isArray(m(r.touchedFields,t))){const y=l(m(r.touchedFields,t),c.argA,c.argB);d&&F(r.touchedFields,t,y)}(V.dirtyFields||A.dirtyFields)&&(r.dirtyFields=ue(o,n)),h.state.next({name:t,isDirty:v(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else F(n,t,i)},J=(t,i)=>{F(r.errors,t,i),h.state.next({errors:r.errors})},C=t=>{r.errors=t,h.state.next({errors:r.errors,isValid:!1})},le=(t,i,l,c)=>{const d=m(a,t);if(d){const u=m(n,t,p(l)?m(o,t):l);p(u)||c&&c.defaultChecked||i?F(n,t,i?u:et(d._f)):I(t,u),f.mount&&M()}},ne=(t,i,l,c,d)=>{let u=!1,y=!1;const b={name:t};if(!s.disabled){if(!l||c){(V.isDirty||A.isDirty)&&(y=r.isDirty,r.isDirty=b.isDirty=v(),u=y!==b.isDirty);const E=te(m(o,t),i);y=!!m(r.dirtyFields,t),E?N(r.dirtyFields,t):F(r.dirtyFields,t,!0),b.dirtyFields=r.dirtyFields,u=u||(V.dirtyFields||A.dirtyFields)&&y!==!E}if(l){const E=m(r.touchedFields,t);E||(F(r.touchedFields,t,l),b.touchedFields=r.touchedFields,u=u||(V.touchedFields||A.touchedFields)&&E!==l)}u&&d&&h.state.next(b)}return u?b:{}},we=(t,i,l,c)=>{const d=m(r.errors,t),u=(V.isValid||A.isValid)&&K(i)&&r.isValid!==i;if(s.delayError&&l?(U=re(()=>J(t,l)),U(s.delayError)):(clearTimeout(P),U=null,l?F(r.errors,t,l):N(r.errors,t)),(l?!te(d,l):d)||!T(c)||u){const y={...c,...u&&K(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...y},h.state.next(y)}},$=async t=>{x(t,!0);const i=await s.resolver(n,s.context,Bt(t||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return x(t),i},se=async t=>{const{errors:i}=await $(t);if(t)for(const l of t){const c=m(i,l);c?F(r.errors,l,c):N(r.errors,l)}else r.errors=i;return i},Q=async(t,i,l={valid:!0})=>{for(const c in t){const d=t[c];if(d){const{_f:u,...y}=d;if(u){const b=g.array.has(u.name),E=d._f&&qt(d._f);E&&V.validatingFields&&x([c],!0);const L=await lt(d,g.disabled,n,k,s.shouldUseNativeValidation&&!i,b);if(E&&V.validatingFields&&x([c]),L[u.name]&&(l.valid=!1,i))break;!i&&(m(L,u.name)?b?Kt(r.errors,L,u.name):F(r.errors,u.name,L[u.name]):N(r.errors,u.name))}!T(y)&&await Q(y,i,l)}}return l.valid},_=()=>{for(const t of g.unMount){const i=m(a,t);i&&(i._f.refs?i._f.refs.every(l=>!Ee(l)):!Ee(i._f.ref))&&Fe(t)}g.unMount=new Set},v=(t,i)=>!s.disabled&&(t&&i&&F(n,t,i),!te(Oe(),o)),S=(t,i,l)=>Rt(t,g,{...f.mount?n:p(i)?o:X(t)?{[t]:i}:i},l,i),j=t=>_e(m(f.mount?n:o,t,s.shouldUnregister?m(o,t,[]):[])),I=(t,i,l={})=>{const c=m(a,t);let d=i;if(c){const u=c._f;u&&(!u.disabled&&F(n,t,yt(i,u)),d=xe(u.ref)&&R(i)?"":i,ut(u.ref)?[...u.ref.options].forEach(y=>y.selected=d.includes(y.value)):u.refs?ye(u.ref)?u.refs.length>1?u.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(d)?!!d.find(b=>b===y.value):d===y.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(y=>y.checked=y.value===d):Ce(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||h.state.next({name:t,values:O(n)})))}(l.shouldDirty||l.shouldTouch)&&ne(t,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ve(t)},Y=(t,i,l)=>{for(const c in i){const d=i[c],u=`${t}.${c}`,y=m(a,u);(g.array.has(t)||D(d)||y&&!y._f)&&!ie(d)?Y(u,d,l):I(u,d,l)}},ee=(t,i,l={})=>{const c=m(a,t),d=g.array.has(t),u=O(i);F(n,t,u),d?(h.array.next({name:t,values:O(n)}),(V.isDirty||V.dirtyFields||A.isDirty||A.dirtyFields)&&l.shouldDirty&&h.state.next({name:t,dirtyFields:ue(o,n),isDirty:v(t,u)})):c&&!c._f&&!R(u)?Y(t,u,l):I(t,u,l),st(t,g)&&h.state.next({...r}),h.state.next({name:f.mount?t:void 0,values:O(n)})},oe=async t=>{f.mount=!0;const i=t.target;let l=i.name,c=!0;const d=m(a,l),u=y=>{c=Number.isNaN(y)||ie(y)&&isNaN(y.getTime())||te(y,m(n,l,y))};if(d){let y,b;const E=i.type?et(d._f):Ut(t),L=t.type===Xe.BLUR||t.type===Xe.FOCUS_OUT,Vt=!Wt(d._f)&&!s.resolver&&!m(r.errors,l)&&!d._f.deps||$t(L,m(r.touchedFields,l),r.isSubmitted,B,H),ke=st(l,g,L);F(n,l,E),L?(d._f.onBlur&&d._f.onBlur(t),U&&U(0)):d._f.onChange&&d._f.onChange(t);const Se=ne(l,E,L),Ft=!T(Se)||ke;if(!L&&h.state.next({name:l,type:t.type,values:O(n)}),Vt)return(V.isValid||A.isValid)&&(s.mode==="onBlur"?L&&M():L||M()),Ft&&h.state.next({name:l,...ke?{}:Se});if(!L&&ke&&h.state.next({...r}),s.resolver){const{errors:ze}=await $([l]);if(u(E),c){const At=it(r.errors,a,l),He=it(ze,a,At.name||l);y=He.error,l=He.name,b=T(ze)}}else x([l],!0),y=(await lt(d,g.disabled,n,k,s.shouldUseNativeValidation))[l],x([l]),u(E),c&&(y?b=!1:(V.isValid||A.isValid)&&(b=await Q(a,!0)));c&&(d._f.deps&&Ve(d._f.deps),we(l,b,y,Se))}},me=(t,i)=>{if(m(r.errors,i)&&t.focus)return t.focus(),1},Ve=async(t,i={})=>{let l,c;const d=ce(t);if(s.resolver){const u=await se(p(t)?t:d);l=T(u),c=t?!d.some(y=>m(u,y)):l}else t?(c=(await Promise.all(d.map(async u=>{const y=m(a,u);return await Q(y&&y._f?{[u]:y}:y)}))).every(Boolean),!(!c&&!r.isValid)&&M()):c=l=await Q(a);return h.state.next({...!X(t)||(V.isValid||A.isValid)&&l!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:l}:{},errors:r.errors}),i.shouldFocus&&!c&&fe(a,me,t?d:g.mount),c},Oe=t=>{const i={...f.mount?n:o};return p(t)?i:X(t)?m(i,t):t.map(l=>m(i,l))},Te=(t,i)=>({invalid:!!m((i||r).errors,t),isDirty:!!m((i||r).dirtyFields,t),error:m((i||r).errors,t),isValidating:!!m(r.validatingFields,t),isTouched:!!m((i||r).touchedFields,t)}),gt=t=>{t&&ce(t).forEach(i=>N(r.errors,i)),h.state.next({errors:t?r.errors:{}})},Re=(t,i,l)=>{const c=(m(a,t,{_f:{}})._f||{}).ref,d=m(r.errors,t)||{},{ref:u,message:y,type:b,...E}=d;F(r.errors,t,{...E,...i,ref:c}),h.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&c&&c.focus&&c.focus()},ht=(t,i)=>z(t)?h.state.subscribe({next:l=>t(S(void 0,i),l)}):S(t,i,!0),je=t=>h.state.subscribe({next:i=>{Ht(t.name,i.name,t.exact)&&zt(i,t.formState||V,wt,t.reRenderRoot)&&t.callback({values:{...n},...r,...i})}}).unsubscribe,xt=t=>(f.mount=!0,A={...A,...t.formState},je({...t,formState:A})),Fe=(t,i={})=>{for(const l of t?ce(t):g.mount)g.mount.delete(l),g.array.delete(l),i.keepValue||(N(a,l),N(n,l)),!i.keepError&&N(r.errors,l),!i.keepDirty&&N(r.dirtyFields,l),!i.keepTouched&&N(r.touchedFields,l),!i.keepIsValidating&&N(r.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&N(o,l);h.state.next({values:O(n)}),h.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&M()},Me=({disabled:t,name:i})=>{(K(t)&&f.mount||t||g.disabled.has(i))&&(t?g.disabled.add(i):g.disabled.delete(i))},Ae=(t,i={})=>{let l=m(a,t);const c=K(i.disabled)||K(s.disabled);return F(a,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...i}}),g.mount.add(t),l?Me({disabled:K(i.disabled)?i.disabled:s.disabled,name:t}):le(t,!0,i.value),{...c?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:de(i.min),max:de(i.max),minLength:de(i.minLength),maxLength:de(i.maxLength),pattern:de(i.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:d=>{if(d){Ae(t,i),l=m(a,t);const u=p(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,y=Mt(u),b=l._f.refs||[];if(y?b.find(E=>E===u):u===l._f.ref)return;F(a,t,{_f:{...l._f,...y?{refs:[...b.filter(Ee),u,...Array.isArray(m(o,t))?[{}]:[]],ref:{type:u.type,name:t}}:{ref:u}}}),le(t,!1,void 0,u)}else l=m(a,t,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Lt(g.array,t)&&f.action)&&g.unMount.add(t)}}},Ie=()=>s.shouldFocusError&&fe(a,me,g.mount),vt=t=>{K(t)&&(h.state.next({disabled:t}),fe(a,(i,l)=>{const c=m(a,l);c&&(i.disabled=c._f.disabled||t,Array.isArray(c._f.refs)&&c._f.refs.forEach(d=>{d.disabled=c._f.disabled||t}))},0,!1))},Pe=(t,i)=>async l=>{let c;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=O(n);if(h.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:y}=await $();r.errors=u,d=y}else await Q(a);if(g.disabled.size)for(const u of g.disabled)F(d,u,void 0);if(N(r.errors,"root"),T(r.errors)){h.state.next({errors:{}});try{await t(d,l)}catch(u){c=u}}else i&&await i({...r.errors},l),Ie(),setTimeout(Ie);if(h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:T(r.errors)&&!c,submitCount:r.submitCount+1,errors:r.errors}),c)throw c},bt=(t,i={})=>{m(a,t)&&(p(i.defaultValue)?ee(t,O(m(o,t))):(ee(t,i.defaultValue),F(o,t,O(i.defaultValue))),i.keepTouched||N(r.touchedFields,t),i.keepDirty||(N(r.dirtyFields,t),r.isDirty=i.defaultValue?v(t,O(m(o,t))):v()),i.keepError||(N(r.errors,t),V.isValid&&M()),h.state.next({...r}))},Be=(t,i={})=>{const l=t?O(t):o,c=O(l),d=T(t),u=d?o:c;if(i.keepDefaultValues||(o=l),!i.keepValues){if(i.keepDirtyValues){const y=new Set([...g.mount,...Object.keys(ue(o,n))]);for(const b of Array.from(y))m(r.dirtyFields,b)?F(u,b,m(n,b)):ee(b,m(u,b))}else{if(Ne&&p(t))for(const y of g.mount){const b=m(a,y);if(b&&b._f){const E=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(xe(E)){const L=E.closest("form");if(L){L.reset();break}}}}for(const y of g.mount)ee(y,m(u,y))}n=O(u),h.array.next({values:{...u}}),h.state.next({values:{...u}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,f.watch=!!s.shouldUnregister,h.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:d?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!te(t,o)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?{}:i.keepDirtyValues?i.keepDefaultValues&&n?ue(o,n):r.dirtyFields:i.keepDefaultValues&&t?ue(o,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(t,i)=>Be(z(t)?t(n):t,i),_t=(t,i={})=>{const l=m(a,t),c=l&&l._f;if(c){const d=c.refs?c.refs[0]:c.ref;d.focus&&(d.focus(),i.shouldSelect&&z(d.select)&&d.select())}},wt=t=>{r={...r,...t}},We={control:{register:Ae,unregister:Fe,getFieldState:Te,handleSubmit:Pe,setError:Re,_subscribe:je,_runSchema:$,_getWatch:S,_getDirty:v,_setValid:M,_setFieldArray:G,_setDisabledField:Me,_setErrors:C,_getFieldArray:j,_reset:Be,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then(t=>{qe(t,s.resetOptions),h.state.next({isLoading:!1})}),_removeUnmounted:_,_disableForm:vt,_subjects:h,_proxyFormState:V,get _fields(){return a},get _formValues(){return n},get _state(){return f},set _state(t){f=t},get _defaultValues(){return o},get _names(){return g},set _names(t){g=t},get _formState(){return r},get _options(){return s},set _options(t){s={...s,...t}}},subscribe:xt,trigger:Ve,register:Ae,handleSubmit:Pe,watch:ht,setValue:ee,getValues:Oe,reset:qe,resetField:bt,clearErrors:gt,unregister:Fe,setError:Re,setFocus:_t,getFieldState:Te};return{...We,formControl:We}}function Jt(e={}){const s=q.useRef(void 0),r=q.useRef(void 0),[a,o]=q.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...e.formControl?e.formControl:Gt(e),formState:a},e.formControl&&e.defaultValues&&!z(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const n=s.current.control;return n._options=e,q.useLayoutEffect(()=>n._subscribe({formState:n._proxyFormState,callback:()=>o({...n._formState}),reRenderRoot:!0}),[n]),q.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),q.useEffect(()=>{if(n._proxyFormState.isDirty){const f=n._getDirty();f!==a.isDirty&&n._subjects.state.next({isDirty:f})}},[n,a.isDirty]),q.useEffect(()=>{e.values&&!te(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,o(f=>({...f}))):n._resetDefaultValues()},[e.values,n]),q.useEffect(()=>{e.errors&&!T(e.errors)&&n._setErrors(e.errors)},[e.errors,n]),q.useEffect(()=>{n._state.mount||(n._setValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),q.useEffect(()=>{e.shouldUnregister&&n._subjects.state.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=Tt(a,n),s.current}const Qt=/^[a-z0-9_-]{3,30}$/,or=()=>{const e=ge(Et),s=ge(Ke),r=ge(pt),a=ge(Dt),{register:o,handleSubmit:n,formState:{errors:f,isSubmitting:g},setError:U,setValue:P}=Jt(),[V,A]=De.useState(null);De.useEffect(()=>{St()},[]),De.useEffect(()=>{a&&$e(a)},[a]);const h=async k=>{if(A(null),!e){U("username",{type:"manual",message:"User not logged in."});return}try{const{data:re,error:M}=await kt.functions.invoke("register-user",{body:{username:k.username}});if(M){U("username",{type:"manual",message:M.message||"Registration failed."});return}Ke.set(k.username),Nt.set(k.username),typeof window<"u"&&(localStorage.setItem("memeUsername",k.username),localStorage.setItem("memeUserId",e.id),localStorage.setItem("memeUserEmail",e.email||""),localStorage.setItem("onboardingComplete","true")),await $e(e.id),A("Username registered successfully!"),console.log("[UsernameBalance] Profile created via Edge Function:",re)}catch(re){console.error("Registration error:",re),U("username",{type:"manual",message:"Network error. Please try again."})}},H=Ye(s)||Ye(e?.user_metadata?.username),B=e?.user_metadata?.avatar_url||e?.user_metadata?.picture||null;return w.jsxs("div",{className:"onboarding-card flex flex-col items-center gap-6 p-6 max-w-md mx-auto bg-white/80 dark:bg-zinc-900/80 border border-emerald-100 dark:border-zinc-800 shadow-xl rounded-2xl",children:[e&&w.jsxs("div",{className:"flex flex-col items-center gap-2",children:[B&&w.jsx("img",{src:B,alt:"User Avatar",className:"w-20 h-20 rounded-full border-4 border-emerald-400 shadow-md mb-2 bg-white object-cover"}),w.jsx("div",{className:"text-lg font-semibold text-zinc-800 dark:text-zinc-100",children:e.user_metadata?.display_name||e.email})]}),w.jsx("h2",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-300 mb-2 drop-shadow",children:H?"Update your username":"Choose your username"}),r&&r.meme_points!==null&&w.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-4 text-center",children:[w.jsxs("div",{className:"flex flex-col",children:[w.jsx("span",{className:"text-2xl font-bold text-emerald-400",children:r.meme_points}),w.jsx("span",{className:"text-xs text-neutral-500",children:"Meme Points"})]}),w.jsxs("div",{className:"flex flex-col",children:[w.jsx("span",{className:"text-2xl font-bold text-emerald-400",children:r.level}),w.jsx("span",{className:"text-xs text-neutral-500",children:"Level"})]}),w.jsxs("div",{className:"flex flex-col",children:[w.jsx("span",{className:"text-2xl font-bold text-emerald-400",children:r.total_memes||0}),w.jsx("span",{className:"text-xs text-neutral-500",children:"Memes Created"})]})]}),w.jsxs("form",{onSubmit:n(h),className:"w-full flex flex-col gap-3",children:[w.jsx("input",{type:"text",...o("username",{required:"Username is required",pattern:{value:Qt,message:"3-30 chars, lowercase letters, numbers, _ or -"},onChange:k=>(k.target.value=k.target.value.toLowerCase(),k)}),placeholder:"Enter your username...",defaultValue:s||"",className:"border-2 border-emerald-200 dark:border-emerald-700 rounded-lg px-4 py-3 text-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm transition",disabled:g||H}),f.username&&w.jsx("div",{className:"text-red-500 text-xs font-medium",children:f.username.message}),w.jsx("button",{type:"submit",className:"bg-gradient-to-br from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full font-bold shadow hover:from-emerald-400 hover:to-green-400 hover:shadow-lg transition disabled:opacity-50 text-lg",disabled:g||H,children:H?"Username Set":g?"Registering...":"Register"})]}),V&&w.jsx("div",{className:"text-green-500 text-sm font-semibold",children:V}),V&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:w.jsxs("div",{className:"bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4 border border-emerald-200 dark:border-emerald-700 max-w-xs",children:[w.jsx("div",{className:"text-2xl text-green-600 dark:text-green-400 font-bold mb-2",children:"Success!"}),w.jsx("div",{className:"text-base text-neutral-700 dark:text-neutral-200 text-center",children:"Your username has been registered. Welcome to the meme community!"}),w.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[w.jsx("a",{href:"/discover",className:"px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold shadow hover:from-emerald-400 hover:to-green-400 transition-colors text-center",children:"Discover Memes"}),w.jsx("a",{href:"/profile",className:"px-5 py-2 rounded-lg border border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-center",children:"View Profile"})]}),w.jsx("button",{onClick:()=>A(null),className:"text-xs text-emerald-600 dark:text-emerald-300 mt-2 underline",children:"Close"})]})}),H&&w.jsx("div",{className:"text-emerald-600 dark:text-emerald-400 text-xs font-medium",children:"You are already onboarded. Welcome back!"})]})};export{or as default};
