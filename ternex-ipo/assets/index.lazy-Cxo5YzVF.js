var X=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var d=(e,t,n)=>(X(e,t,"read from private field"),n?n.call(e):t.get(e)),I=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},_=(e,t,n,r)=>(X(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var M=(e,t,n)=>(X(e,t,"access private method"),n);import{c as D,S as We,q as Ye,t as he,v as Je,w as ge,x as se,r as c,y as Xe,z as Ze,A as T,C as U,Q as v,n as B,j as s,B as E,k as S,E as et,F as tt,L as G,b as ve,i as ne,P as L,g as be,h as st,d as ye,u as nt,G as rt,H as g,I as Ce,o as ot,p as at}from"./index-DqygCr30.js";import{C as F,u as je,L as Ne,P as Z}from"./paragraph-DHQjQMII.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=D("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=D("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=D("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=D("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=D("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);var C,j,f,b,O,$,K,ee,fe,pt=(fe=class extends We{constructor(t,n){super();I(this,O);I(this,K);I(this,C,void 0);I(this,j,void 0);I(this,f,void 0);I(this,b,void 0);_(this,C,t),this.setOptions(n),this.bindMethods(),M(this,O,$).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const n=this.options;this.options=d(this,C).defaultMutationOptions(t),Ye(this.options,n)||d(this,C).getMutationCache().notify({type:"observerOptionsUpdated",mutation:d(this,f),observer:this}),n!=null&&n.mutationKey&&this.options.mutationKey&&he(n.mutationKey)!==he(this.options.mutationKey)?this.reset():((r=d(this,f))==null?void 0:r.state.status)==="pending"&&d(this,f).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=d(this,f))==null||t.removeObserver(this)}onMutationUpdate(t){M(this,O,$).call(this),M(this,K,ee).call(this,t)}getCurrentResult(){return d(this,j)}reset(){var t;(t=d(this,f))==null||t.removeObserver(this),_(this,f,void 0),M(this,O,$).call(this),M(this,K,ee).call(this)}mutate(t,n){var r;return _(this,b,n),(r=d(this,f))==null||r.removeObserver(this),_(this,f,d(this,C).getMutationCache().build(d(this,C),this.options)),d(this,f).addObserver(this),d(this,f).execute(t)}},C=new WeakMap,j=new WeakMap,f=new WeakMap,b=new WeakMap,O=new WeakSet,$=function(){var n;const t=((n=d(this,f))==null?void 0:n.state)??Je();_(this,j,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},K=new WeakSet,ee=function(t){ge.batch(()=>{var n,r,o,a,i,l,x,m;if(d(this,b)&&this.hasListeners()){const u=d(this,j).variables,h=d(this,j).context;(t==null?void 0:t.type)==="success"?((r=(n=d(this,b)).onSuccess)==null||r.call(n,t.data,u,h),(a=(o=d(this,b)).onSettled)==null||a.call(o,t.data,null,u,h)):(t==null?void 0:t.type)==="error"&&((l=(i=d(this,b)).onError)==null||l.call(i,t.error,u,h),(m=(x=d(this,b)).onSettled)==null||m.call(x,void 0,t.error,u,h))}this.listeners.forEach(u=>{u(d(this,j))})})},fe);function oe(e,t){const n=se(),[r]=c.useState(()=>new pt(n,e));c.useEffect(()=>{r.setOptions(e)},[r,e]);const o=c.useSyncExternalStore(c.useCallback(i=>r.subscribe(ge.batchCalls(i)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),a=c.useCallback((i,l)=>{r.mutate(i,l).catch(Xe)},[r]);if(o.error&&Ze(r.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}const xt=async(e,t)=>T.get("/partner/api/v1/tasks",{params:{status:e,completed:t}}),mt=async()=>T.get("/partner/api/v1/tasks/mandatory"),ht=(e,t)=>{const{data:n,isPending:r,isError:o}=U({queryKey:[v.TASKS.GET_TASKS,e,t],queryFn:()=>xt(e,t),select:({data:a})=>a.body});return{tasks:n??{completed_tasks:[],uncompleted_tasks:[]},isTasksPending:r,isTasksError:o}},ft=()=>{const{data:e,isPending:t,isError:n}=U({queryKey:[v.TASKS.CHECK_MANDATORY_TASKS_COMPLETED],queryFn:()=>mt(),select:({data:r})=>r.body});return{mandatoryCompleted:e,isMandatoryTasksCompletedPending:t,isMandatoryTasksCompletedError:n}},gt=async e=>T.post(`/partner/api/v1/tasks/${e}`),vt=e=>{const t=se();return oe({mutationKey:[v.TASKS.COMPLETE,e],mutationFn:()=>gt(e),onSuccess:async()=>{await t.invalidateQueries({queryKey:[v.TASKS.GET_TASKS],refetchType:"all"}),await t.invalidateQueries({queryKey:[v.TASKS.CHECK_MANDATORY_TASKS_COMPLETED],refetchType:"all"})}})},bt=({taskId:e,className:t})=>{const{mutate:n,isPending:r}=vt(e),{toast:o}=B(),a=()=>{n(void 0,{onSuccess:()=>{o({title:"Задание отправлено на проверку!",variant:"success",duration:3e3})}})};return s.jsxs(E,{className:S("flex flex-row items-center gap-2 text-xs",t),size:"sm",onClick:a,variant:"secondary",disabled:r,children:[s.jsx("span",{children:"Отправить на проверку"}),s.jsx(re,{className:"h-4 w-4"})]})},we=({title:e,mandatory:t})=>{const n=!t&&s.jsx("sup",{className:"animate-pulse text-lg text-destructive",children:"*"});return s.jsxs("div",{className:"font-medium tracking-wide",children:[s.jsx("span",{children:e}),n]})},yt=({date_of_completion:e})=>{if(e)return s.jsx("span",{title:"Дата выполнени задачи",className:"text-right text-[0.65rem] font-extralight tracking-tight text-muted-foreground",children:et(e)})},Ct=({reward:e})=>s.jsxs("span",{title:"Награда за выполнение задания",className:"flex flex-row items-center justify-end gap-1 text-sm text-yellow-400",children:[s.jsx("span",{className:"font-base",children:e}),s.jsx(tt,{className:"h-5 w-5"})]}),jt={rejected:"Отклонено",approved:"Принято",processed:"На рассмотрении"},Nt=({status:e})=>{if(e)return s.jsx("span",{title:"Статус задачи",className:"text-right text-xs font-extralight tracking-tight text-muted-foreground",children:jt[e]})},ke=({status:e,reward:t,date_of_completion:n})=>s.jsxs("div",{className:"absolute right-4 top-4 flex flex-col gap-1",children:[s.jsx(Ct,{reward:t}),s.jsx(Nt,{status:e}),s.jsx(yt,{date_of_completion:n})]}),wt=({task:e})=>{const{text:t,reward:n,mandatory:r,title:o,id:a}=e;return s.jsxs("div",{className:"relative flex h-max flex-col gap-2 rounded-xl border border-secondary bg-background p-6 pr-32 shadow-md",children:[s.jsx(we,{mandatory:r,title:o}),s.jsx("p",{className:"text-xs text-muted-foreground",children:t}),s.jsx(ke,{reward:n}),s.jsx(bt,{className:"ml-auto",taskId:a})]})},kt=({task:e})=>{const{reward:t,mandatory:n,date_of_completion:r,status:o,title:a}=e;return s.jsxs("div",{className:"relative flex min-h-[120px] flex-col gap-2 rounded-xl border border-secondary bg-background p-6 pr-32 shadow-md",children:[s.jsx(we,{mandatory:n,title:a}),s.jsx(ke,{status:o,reward:t,date_of_completion:r})]})},At=async e=>T.post(`partner/api/v1/invite-codes/${e}`),It=()=>{const e=se();return oe({mutationKey:[v.INVITE_CODES.SUBSCRIBE],mutationFn:t=>At(t),onSuccess:async()=>{await e.invalidateQueries({queryKey:[v.USER.GET_IS_PARTNER],refetchType:"all"})}})},Ae=c.forwardRef(({className:e,type:t,...n},r)=>s.jsx("input",{type:t,className:S("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...n}));Ae.displayName="Input";const Tt=()=>{const[e,t]=c.useState(""),{toast:n}=B(),{mutate:r,isPending:o}=It(),a=c.useCallback(()=>{r(e,{onSuccess:()=>{n({title:"Токен подтвержден!",variant:"success",duration:3e3})},onError:()=>{n({title:"Токен не подтвержден!",variant:"destructive",duration:3e3})}})},[e,r,n]);return s.jsxs(F,{title:"Зарегистрировать токен",children:[s.jsx("p",{className:"mb-6 text-sm text-muted-foreground",children:"Обратитесь в поддержку чтобы Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Пояс пунктуация вопроса великий, языком которое дороге мир семь? Заголовок предупреждал ведущими дороге продолжил парадигматическая."}),s.jsxs("div",{className:"flex w-full items-center space-x-2",children:[s.jsx(Ae,{type:"text",placeholder:"Токен",value:e,onChange:i=>t(i.target.value)}),s.jsx(E,{onClick:a,variant:"secondary",type:"submit",disabled:o,children:"Подтвердить"})]})]})},Et=async()=>T.get("/partner/api/v1/files/firmware"),St=()=>{const{data:e,isPending:t,isError:n}=U({queryKey:[v.FIRMWARE.GET_AVAILABLE_FIRMWARE],queryFn:async()=>Et(),select:({data:r})=>r.body});return{firmware:e,isFirmwarePending:t,isFirmwareError:n}},Rt=({link:e})=>s.jsx(E,{asChild:!0,variant:"ghost",size:"sm",title:"Скачать прошивку",children:s.jsx("a",{href:e,download:!0,children:s.jsx(lt,{})})}),Pt=e=>{const{version:t,type:n,path:r}=e;return s.jsxs("li",{className:"flex flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex flex-row gap-1",children:[s.jsxs("span",{className:"text-xs text-gray-400",children:["Версия: ",t]}),s.jsxs("span",{className:"text-xs text-gray-400",children:["Тип: ",n]})]}),s.jsx(Rt,{link:r})]})},_t=e=>{const t=[],n=e.reduce((r,o)=>(r[o.model]||(r[o.model]=[]),r[o.model].push(o),r),{});for(const r in n)t.push([r,n[r]]);return t},Mt=()=>{const{firmware:e,isFirmwarePending:t,isFirmwareError:n}=St(),r=c.useMemo(()=>_t((e==null?void 0:e.firmwares)??[]),[e]);return console.log(r),t?s.jsx(G,{}):n?s.jsx("span",{className:"my-4 text-destructive",children:"Произошла ошибка при получении токенов!"}):s.jsx(F,{title:"Прошивки",className:"w-full place-self-start",children:s.jsx("ul",{className:"flex max-h-96 list-disc flex-col gap-4 overflow-y-auto rounded-lg pr-2 pt-1",children:r.map(([o,a])=>s.jsxs("li",{children:[s.jsx("span",{className:"mb-2 block text-sm font-medium",children:o}),s.jsx("ul",{className:"list-disc flex-col space-y-2 rounded-xl bg-muted/15 px-4 py-3",children:a.map(i=>s.jsx(Pt,{...i},i.path))})]},o))})})},Ot=()=>T.get("/partner/api/v1/invite-codes"),Dt=()=>{const{data:e=[],isPending:t,isError:n}=U({queryKey:[v.INVITE_CODES.GET_INVITE_CODES],queryFn:()=>Ot(),select:({data:r})=>r.body});return{inviteCodes:e,isInviteCodesPending:t,isInviteCodesError:n}},Kt={used:"Использован",unused:"Не использован",used_frozen:"Заморожен",unused_frozen:"Заморожен"},Lt=async(e,t)=>T.post("/partner/api/v1/subscription/link",{},{params:{code:e,expire:t}}),Ft=(e,t)=>oe({mutationKey:[v.INVITE_CODES.CREATE_LINK,e,t],mutationFn:()=>Lt(e,t)}),qt=({code:e,expire:t,disabled:n})=>{const[r,o]=c.useState(!1),{mutate:a,isPending:i}=Ft(e,t),{toast:l}=B(),x=()=>{a(void 0,{onSuccess:u=>{navigator.clipboard.writeText(`${window.location.origin}${u.data.body.link}`),o(!0),setTimeout(()=>o(!1),3e3),l({title:"Ссылка скопирована!",variant:"success",duration:3e3})}})},m=r?s.jsx(re,{className:"text-green-600"}):s.jsx(dt,{className:"h-6 w-6"});return s.jsx(E,{onClick:x,variant:"ghost",title:"Создать ссылку для приглашения",disabled:i||n,children:m})},$t=({text:e,disabled:t})=>{const[n,r]=c.useState(!1),{toast:o}=B(),a=c.useCallback(()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),3e3),o({title:"Код скопирован!",variant:"success",duration:3e3})},[o,e]),i=n?s.jsx(re,{className:"text-green-600"}):s.jsx(ct,{className:"h-6 w-6"});return s.jsx(E,{onClick:a,variant:"ghost",title:"Скопировать код",disabled:t,children:i})},Vt=({code:e})=>{const{code:t,status:n}=e,r=n==="used",o=n==="unused"?"":`(${Kt[n]})`;return s.jsxs("div",{className:"flex flex-row items-center justify-between rounded-xl bg-background px-6 py-2",children:[s.jsxs("div",{className:"flex flex-row items-center gap-1",children:[s.jsx("span",{className:S("text-sm tracking-widest",r?"text-muted-foreground":"text-foreground"),children:t}),s.jsx("span",{className:"text-xs text-muted-foreground",children:o})]}),s.jsxs("div",{className:"flex flex-row items-center",children:[s.jsx($t,{text:t,disabled:r}),s.jsx(qt,{code:t,disabled:r})]})]})},Ut=()=>{const{inviteCodes:e,isInviteCodesPending:t,isInviteCodesError:n}=Dt(),r=c.useMemo(()=>e.sort(o=>o.status==="unused"?-1:1),[e]);return t?s.jsx(G,{className:"m-auto"}):n?s.jsx("span",{className:"my-4 text-destructive",children:"Произошла ошибка при получении токенов!"}):s.jsx(F,{title:"Пригласительные токены",className:"h-max w-full place-self-start",children:s.jsx("div",{className:"flex max-h-96 flex-col gap-2 overflow-y-auto rounded-lg pr-2 pt-1",children:r.map(o=>s.jsx(Vt,{code:o},o.id))})})};var ae="Collapsible",[Bt,Ie]=ve(ae),[Gt,ie]=Bt(ae),Te=c.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:a,onOpenChange:i,...l}=e,[x=!1,m]=ne({prop:r,defaultProp:o,onChange:i});return s.jsx(Gt,{scope:n,disabled:a,contentId:je(),open:x,onOpenToggle:c.useCallback(()=>m(u=>!u),[m]),children:s.jsx(L.div,{"data-state":le(x),"data-disabled":a?"":void 0,...l,ref:t})})});Te.displayName=ae;var Ee="CollapsibleTrigger",Se=c.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,o=ie(Ee,n);return s.jsx(L.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":le(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:be(e.onClick,o.onOpenToggle)})});Se.displayName=Ee;var ce="CollapsibleContent",Re=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=ie(ce,e.__scopeCollapsible);return s.jsx(st,{present:n||o.open,children:({present:a})=>s.jsx(Ht,{...r,ref:t,present:a})})});Re.displayName=ce;var Ht=c.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:o,...a}=e,i=ie(ce,n),[l,x]=c.useState(r),m=c.useRef(null),u=ye(t,m),h=c.useRef(0),R=h.current,N=c.useRef(0),q=N.current,w=i.open||l,k=c.useRef(w),A=c.useRef();return c.useEffect(()=>{const p=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(p)},[]),nt(()=>{const p=m.current;if(p){A.current=A.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const P=p.getBoundingClientRect();h.current=P.height,N.current=P.width,k.current||(p.style.transitionDuration=A.current.transitionDuration,p.style.animationName=A.current.animationName),x(r)}},[i.open,r]),s.jsx(L.div,{"data-state":le(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!w,...a,ref:u,style:{"--radix-collapsible-content-height":R?`${R}px`:void 0,"--radix-collapsible-content-width":q?`${q}px`:void 0,...e.style},children:w&&o})});function le(e){return e?"open":"closed"}var zt=Te,Qt=Se,Wt=Re,Yt=c.createContext(void 0);function Jt(e){const t=c.useContext(Yt);return e||t||"ltr"}var y="Accordion",Xt=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[de,Zt,es]=rt(y),[H,js]=ve(y,[es,Ie]),ue=Ie(),Pe=g.forwardRef((e,t)=>{const{type:n,...r}=e,o=r,a=r;return s.jsx(de.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?s.jsx(rs,{...a,ref:t}):s.jsx(ns,{...o,ref:t})})});Pe.displayName=y;var[_e,ts]=H(y),[Me,ss]=H(y,{collapsible:!1}),ns=g.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},collapsible:a=!1,...i}=e,[l,x]=ne({prop:n,defaultProp:r,onChange:o});return s.jsx(_e,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:x,onItemClose:g.useCallback(()=>a&&x(""),[a,x]),children:s.jsx(Me,{scope:e.__scopeAccordion,collapsible:a,children:s.jsx(Oe,{...i,ref:t})})})}),rs=g.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},...a}=e,[i=[],l]=ne({prop:n,defaultProp:r,onChange:o}),x=g.useCallback(u=>l((h=[])=>[...h,u]),[l]),m=g.useCallback(u=>l((h=[])=>h.filter(R=>R!==u)),[l]);return s.jsx(_e,{scope:e.__scopeAccordion,value:i,onItemOpen:x,onItemClose:m,children:s.jsx(Me,{scope:e.__scopeAccordion,collapsible:!0,children:s.jsx(Oe,{...a,ref:t})})})}),[os,z]=H(y),Oe=g.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:r,dir:o,orientation:a="vertical",...i}=e,l=g.useRef(null),x=ye(l,t),m=Zt(n),h=Jt(o)==="ltr",R=be(e.onKeyDown,N=>{var xe;if(!Xt.includes(N.key))return;const q=N.target,w=m().filter(J=>{var me;return!((me=J.ref.current)!=null&&me.disabled)}),k=w.findIndex(J=>J.ref.current===q),A=w.length;if(k===-1)return;N.preventDefault();let p=k;const P=0,Q=A-1,W=()=>{p=k+1,p>Q&&(p=P)},Y=()=>{p=k-1,p<P&&(p=Q)};switch(N.key){case"Home":p=P;break;case"End":p=Q;break;case"ArrowRight":a==="horizontal"&&(h?W():Y());break;case"ArrowDown":a==="vertical"&&W();break;case"ArrowLeft":a==="horizontal"&&(h?Y():W());break;case"ArrowUp":a==="vertical"&&Y();break}const Qe=p%A;(xe=w[Qe].ref.current)==null||xe.focus()});return s.jsx(os,{scope:n,disabled:r,direction:o,orientation:a,children:s.jsx(de.Slot,{scope:n,children:s.jsx(L.div,{...i,"data-orientation":a,ref:x,onKeyDown:r?void 0:R})})})}),V="AccordionItem",[as,pe]=H(V),De=g.forwardRef((e,t)=>{const{__scopeAccordion:n,value:r,...o}=e,a=z(V,n),i=ts(V,n),l=ue(n),x=je(),m=r&&i.value.includes(r)||!1,u=a.disabled||e.disabled;return s.jsx(as,{scope:n,open:m,disabled:u,triggerId:x,children:s.jsx(zt,{"data-orientation":a.orientation,"data-state":Ve(m),...l,...o,ref:t,disabled:u,open:m,onOpenChange:h=>{h?i.onItemOpen(r):i.onItemClose(r)}})})});De.displayName=V;var Ke="AccordionHeader",Le=g.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,o=z(y,n),a=pe(Ke,n);return s.jsx(L.h3,{"data-orientation":o.orientation,"data-state":Ve(a.open),"data-disabled":a.disabled?"":void 0,...r,ref:t})});Le.displayName=Ke;var te="AccordionTrigger",Fe=g.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,o=z(y,n),a=pe(te,n),i=ss(te,n),l=ue(n);return s.jsx(de.ItemSlot,{scope:n,children:s.jsx(Qt,{"aria-disabled":a.open&&!i.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...l,...r,ref:t})})});Fe.displayName=te;var qe="AccordionContent",$e=g.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,o=z(y,n),a=pe(qe,n),i=ue(n);return s.jsx(Wt,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...i,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});$e.displayName=qe;function Ve(e){return e?"open":"closed"}var is=Pe,cs=De,ls=Le,Ue=Fe,Be=$e;const ds=is,Ge=c.forwardRef(({className:e,...t},n)=>s.jsx(cs,{ref:n,className:S("border-b",e),...t}));Ge.displayName="AccordionItem";const He=c.forwardRef(({className:e,children:t,...n},r)=>s.jsx(ls,{className:"flex",children:s.jsxs(Ue,{ref:r,className:S("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,s.jsx(it,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));He.displayName=Ue.displayName;const ze=c.forwardRef(({className:e,children:t,...n},r)=>s.jsx(Be,{ref:r,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:s.jsx("div",{className:S("pb-4 pt-0",e),children:t})}));ze.displayName=Be.displayName;const us=({title:e,tasks:t})=>s.jsx(ds,{type:"multiple",children:s.jsxs(Ge,{value:e,className:"rounded-xl border-none bg-secondary p-4 pl-6",children:[s.jsx(He,{children:e}),s.jsx(ze,{children:s.jsx("div",{className:"flex max-h-[500px] flex-col gap-2 overflow-y-auto pb-4 pr-2",children:t.length>0?t.map(n=>s.jsx(kt,{task:n},n.id)):s.jsx("span",{className:"text-muted-foreground",children:"Выполненные задания отсутствуют"})})})]})}),ps=({title:e,tasks:t})=>s.jsxs("section",{className:"flex flex-col gap-4",children:[s.jsx("span",{className:"font-medium",children:e}),s.jsx("div",{className:"flex max-h-[500px] flex-col gap-3 overflow-y-auto pb-6 pr-1",children:t.length>0?t.map(n=>s.jsx(wt,{task:n},n.id)):s.jsx("span",{className:"rounded-xl bg-primary p-4 text-primary-foreground",children:"Все задачи выполнены!"})})]}),xs=()=>{const{tasks:e,isTasksPending:t,isTasksError:n}=ht(),r=c.useMemo(()=>e.uncompleted_tasks.sort(a=>a.mandatory?1:-1),[e]),o=c.useMemo(()=>e.completed_tasks.sort(a=>a.mandatory?1:-1),[e]);return t?s.jsx(G,{className:"m-auto"}):n?s.jsx("span",{className:"my-4 text-destructive",children:"Произошла ошибка при получении задач!"}):s.jsxs(F,{title:"Задания",className:"w-full place-self-start",children:[s.jsxs("span",{className:"-mt-6 mb-4 block text-xs text-gray-400",children:["Задачи, помеченные ",s.jsx("sup",{className:"text-lg text-destructive",children:"*"})," - являются обязательными!"]}),s.jsxs("div",{className:"flex flex-col gap-4 overflow-y-auto rounded-lg pr-2 pt-1",children:[s.jsx(ps,{tasks:r,title:"Невыполненные"}),s.jsx(us,{title:"Выполненнные",tasks:o})]})]})},ms=()=>s.jsxs("div",{className:"grid grid-cols-1 gap-12 md:grid-cols-2",children:[s.jsxs(F,{title:"Запрос в поддержку",children:[s.jsx("p",{className:"mb-6 text-sm text-muted-foreground",children:"Обратитесь в поддержку чтобы Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Пояс пунктуация вопроса великий, языком которое дороге мир семь? Заголовок предупреждал ведущими дороге продолжил парадигматическая."}),s.jsx(Ne,{to:"/manifest",children:s.jsx(E,{variant:"secondary",className:"ml-auto block",children:"Запросить токен"})})]}),s.jsx(Tt,{})]}),hs=()=>{const{mandatoryCompleted:e,isMandatoryTasksCompletedPending:t,isMandatoryTasksCompletedError:n}=ft(),r=c.useMemo(()=>{if(t)return s.jsx(G,{});if(n)return s.jsx("span",{children:"Error"});if(e!=null&&e.tasks_completed)return s.jsx(Mt,{})},[e,t,n]);return s.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[s.jsx(xs,{}),s.jsxs("div",{className:"grid grid-rows-2 gap-6",children:[s.jsx(Ut,{}),r]})]})},fs=()=>{const{isPartner:e}=Ce();return e?s.jsx(hs,{}):s.jsx(ms,{})},gs=()=>{const{isPartner:e}=Ce();return s.jsxs("section",{className:"flex max-w-screen-lg flex-col gap-6",children:[s.jsxs("h1",{className:"flex flex-row gap-2 text-6xl font-bold tracking-tight",children:["Ternex",s.jsx(ut,{className:"mx-1 h-16 w-16 text-primary"}),"IPO"]}),!e&&s.jsxs("div",{className:"flex flex-col gap-2 pr-20 text-sm leading-relaxed dark:text-muted-foreground",children:[s.jsx(Z,{className:"m-0 text-base",children:"Мы хотим создать новый интернет, где пользователи сами строят инфраструктуру связи на «последней миле» — в своих зданиях, поселках или организациях. Современные технологии дают нам возможность изменить сферу телекоммуникаций, ликвидировать цифровое неравенство и разрушить монополию традиционных провайдеров."}),s.jsx(Z,{className:"m-0 text-base",children:"Создайте свою сеть и делитесь интернетом с другими. Вы сами управляете своим интернетом. Вложите свое время и знания в наш проект и станьте частью интернет-революции."}),s.jsx(Z,{className:"m-0 text-base",children:"Мы ценим каждый вклад и готовы вознаградить вас на этапе выхода на IPO или при выпуске нашего токена."})]}),s.jsx(Ne,{className:S("ml-auto block",e&&"ml-0"),to:"/manifest",children:s.jsx(E,{size:"lg",variant:"default",children:e?"Манифест":"Подробнее"})})]})},vs=()=>s.jsxs(ot,{className:"space-y-12",children:[s.jsx("div",{className:"blob",children:s.jsx("img",{src:"/images/partners.webp",width:"500",height:"500",alt:"Партнеры"})}),s.jsx(gs,{}),s.jsx(fs,{})]}),Ns=at("/")({component:vs});export{Ns as Route};