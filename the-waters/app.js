const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt=(v,c)=>c=="USD"?"$"+Math.round(v).toLocaleString():"LKR "+Math.round(v).toLocaleString();
/* red-only scenes */
const sc=(k,p)=>{const D=`<defs><linearGradient id="${p}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4f4"/><stop offset=".55" stop-color="#f4a0a6"/><stop offset="1" stop-color="#c8202c"/></linearGradient><filter id="${p}b"><feGaussianBlur stdDeviation="30"/></filter></defs><rect width="1600" height="900" fill="url(#${p}g)"/>`;
const sun=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r*1.8}" fill="#fff" opacity=".75" filter="url(#${p}b)"/><circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/>`;
const w=(y,c,o=1)=>`<path d="M0 ${y}Q200 ${y-40} 400 ${y}T800 ${y}T1200 ${y}T1600 ${y}V900H0Z" fill="${c}" opacity="${o}"/>`;
const rf=(x,y,n)=>Array.from({length:n},(_,i)=>`<rect x="${x-(170-i*20)}" y="${y+i*26}" width="${(170-i*20)*2}" height="7" rx="4" fill="#fff" opacity="${.75-i*.08}"/>`).join("");
const palm=(x,y,s)=>`<path d="M${x} 900Q${x+60*s} ${y+260} ${x} ${y}" stroke="#6e000e" stroke-width="16" fill="none"/><g fill="#6e000e"><path d="M${x} ${y}Q${x-100*s} ${y-70} ${x-190*s} ${y+20}Q${x-80*s} ${y-30} ${x} ${y}"/><path d="M${x} ${y}Q${x-70*s} ${y-110} ${x-170*s} ${y-110}Q${x-60*s} ${y-80} ${x} ${y}"/><path d="M${x} ${y}Q${x+30*s} ${y-110} ${x+140*s} ${y-120}Q${x+50*s} ${y-70} ${x} ${y}"/><path d="M${x} ${y}Q${x+100*s} ${y-60} ${x+190*s} ${y+30}Q${x+90*s} ${y-20} ${x} ${y}"/></g>`;
const bird=(x,y)=>`<path d="M${x} ${y}q20-25 40 0 20-25 40 0" stroke="#6e000e" stroke-width="5" fill="none"/>`;
const A=[
sun(1150,430,130)+w(600,"#c8444d",.85)+w(690,"#b52430")+`<path d="M560 650h140l-24 34h-92Z" fill="#6e000e"/><path d="M630 545v100h64Z" fill="#fff"/>`+w(790,"#850a17"),
sun(480,400,110)+[[700,380],[790,300],[880,430],[960,260],[1050,360],[1150,330],[1240,420],[1330,300],[1420,390]].map(b=>`<rect x="${b[0]}" y="${b[1]}" width="70" height="${700-b[1]}" fill="#a3141f"/>`).join("")+`<rect y="690" width="1600" height="210" fill="#e8737b"/><rect y="690" width="1600" height="10" fill="#fff"/>`+rf(1000,722,6)+`<path d="M0 860H1600V900H0Z" fill="#850a17"/>`,
sun(800,440,120)+`<path d="M0 620Q400 570 800 615T1600 610V700H0Z" fill="#850a17"/><rect y="640" width="1600" height="260" fill="#b52430"/>`+rf(800,660,7)+palm(260,380,1)+palm(1360,420,-1),
sun(420,380,110)+`<rect y="640" width="1600" height="260" fill="#b52430"/>`+rf(420,660,6)+Array.from({length:40},(_,i)=>{const h=100+((i*37)%90);return `<path d="M${60+i*40} 700q${i%2?8:-8} -${h/2} ${(i%3-1)*14} -${h}" stroke="#6e000e" stroke-width="3" fill="none"/>`}).join("")+bird(800,260)+bird(1000,190)+bird(1180,300),
sun(800,300,130)+`<rect y="560" width="1600" height="340" fill="#b52430"/>`+[1,2,3,4,5,6].map(i=>`<ellipse cx="800" cy="720" rx="${i*110}" ry="${i*26}" fill="none" stroke="#fff" stroke-width="3" opacity="${.95-i*.13}"/>`).join("")];
return `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">${D}${A[k]}</svg>`};
const ph=(f,k,p)=>`<div class="ph">${sc(k,p)}<img src="${(window.PHOTOS||{})[f]||"images/"+f}" alt="" decoding="async" onerror="this.remove()"></div>`;
/* data (sample details and rates: replace with real information) */
const H=[
{n:"The Waters Ramakrishna",l:"Ramakrishna",t:"Infinity Pool",d:"Skyline pool and city lights",s:1,p:[36000,118]},
{n:"The Waters Peterson",l:"Peterson",t:"Sunset Deck",d:"Sea breeze and waterfront dining",s:0,p:[34000,112]},
{n:"The Waters Suruvil",l:"Suruvil",t:"Floating Resort",d:"Timber villas on the lagoon",s:2,p:[29000,96]},
{n:"The Waters Poonaryn",l:"Poonaryn",t:"Ferry Gateway",d:"Ferry link to the Suruvil lagoon",s:3,p:[25000,82]}];
const SL=[
["The Waters by CMC","Stay where the <em>water</em> meets calm","Four waterside hotels, each with its own mood. Book direct and enjoy member rates.",4],
["The Waters Ramakrishna","Sky-high <em>serenity</em>","Infinity-pool views and city lights, made for slow evenings.",1],
["The Waters Peterson","Salt air, <em>soft</em> light","Sea breezes, sunset decks and waterfront dining.",0],
["The Waters Suruvil","Lagoon <em>mornings</em>","Wake beside a crystal-clear lagoon in a floating timber resort.",2],
["The Waters Poonaryn","Wild water, <em>wide</em> skies","Northern sunsets, flamingo wetlands and a ferry link to Suruvil.",3]];
["ramakrishna","peterson","suruvil","poonaryn"].forEach((g,i)=>H[i].g=g);
const HF=["hero-brand.jpg","ramakrishna-hero.jpg","peterson-hero.jpg","suruvil-hero.jpg","poonaryn-hero.jpg"];
const R=[["Deluxe Room",1],["Family Suite",1.4],["Spa Suite",1.7]];
/* loader */
$("#wd").innerHTML="THE WATERS".split("").map((c,i)=>`<span style="animation-delay:${1.2+i*.09}s">${c==" "?"&nbsp;":c}</span>`).join("");
let pc=0;const lv=setInterval(()=>{pc=Math.min(100,pc+Math.random()*4+1.2);$("#pf").style.width=pc+"%";$("#pp").textContent=Math.floor(pc)+"%";if(pc>=100){clearInterval(lv);setTimeout(()=>{$("#ld").classList.add("open");document.body.classList.remove("lock");go(0);setTimeout(()=>$("#ld").remove(),1500)},400)}},70);
/* slider */
const sl=$("#sl");let cur=-1,tm,touch=0;
SL.forEach((s,i)=>{sl.insertAdjacentHTML("afterbegin",`<div class="slide" data-i="${i}">${ph(HF[i],s[3],"s"+i)}<div class="cap"><div class="wrap"><div><span class="eyebrow">${s[0]}</span><h1>${s[1]}</h1><p>${s[2]}</p><a class="btn" href="#book">Book your stay</a> <a class="btn ghost" href="#hotels">Explore hotels</a></div></div></div></div>`)});
$("#dots").innerHTML=SL.map((_,i)=>`<button aria-label="Slide ${i+1}"><i></i></button>`).join("");
const sls=[...sl.querySelectorAll(".slide")].sort((a,b)=>a.dataset.i-b.dataset.i),dts=[...document.querySelectorAll(".dots button")];
function go(n){n=(n+SL.length)%SL.length;clearTimeout(tm);sls.forEach((s,i)=>s.classList.toggle("on",i==n));dts.forEach((d,i)=>{d.classList.remove("on","done");void d.offsetWidth;if(i<n)d.classList.add("done");if(i==n)d.classList.add("on")});cur=n;tm=setTimeout(()=>go(n+1),6000)}
dts.forEach((d,i)=>d.onclick=()=>go(i));$("#nx").onclick=()=>go(cur+1);$("#pv").onclick=()=>go(cur-1);
sl.addEventListener("touchstart",e=>touch=e.touches[0].clientX,{passive:true});sl.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-touch;if(Math.abs(d)>50)go(cur+(d<0?1:-1))});
$("#petals").innerHTML=Array.from({length:18},()=>{const s=8+Math.random()*26;return `<i class="bub" style="left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${8+Math.random()*10}s;animation-delay:-${Math.random()*14}s"></i>`}).join("");
/* content */
$("#fh").innerHTML=H.map((h,i)=>`<option value="${i}">${h.n}</option>`).join("");
$("#hg").innerHTML=H.map((h,i)=>`<div class="hotel rv"><div class="art">${ph(h.g+"-1.jpg",h.s,"h"+i)}<span class="tag">${h.t}</span></div><div class="hb"><h3>${h.n}</h3><small>${h.l} · ${h.d}</small><div class="price"><div><small>from</small><br><b>LKR ${h.p[0].toLocaleString()}</b></div><button class="btn sm" data-h="${i}">Book</button></div></div></div>`).join("");
$("#eg").innerHTML=[["Sunset Cruise",0],["Infinity Pool",1],["Lagoon Kayaking",2],["Spa & Hydrotherapy",4],["Bird Watching",3]].map((e,i)=>`<div class="ex rv">${ph("exp-"+(i+1)+".jpg",e[1],"e"+i)}<span>${e[0]}</span></div>`).join("");
const iso=d=>d.toISOString().slice(0,10),t0=new Date();
$("#fi").value=iso(t0);$("#fo").value=iso(new Date(Date.now()+864e5));$("#fi").min=iso(t0);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");const b=x.target.querySelector("[data-n]");if(b&&!b.done){b.done=1;const n=+b.dataset.n,s=b.dataset.s||"";let k=0;const iv=setInterval(()=>{k+=Math.ceil(n/40);if(k>=n){k=n;clearInterval(iv)}b.textContent=k+s},35)}io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
/* data layer: bookings are kept in this browser (localStorage) */
let LOCAL=[];
try{LOCAL=JSON.parse(localStorage.getItem("thewaters_bookings")||"[]")}catch(e){}
const persist=()=>{try{localStorage.setItem("thewaters_bookings",JSON.stringify(LOCAL))}catch(e){}};
/* booking flow */
let S={};
const openM=()=>$("#m").classList.add("open"),closeM=()=>$("#m").classList.remove("open");
$("#mx").onclick=closeM;$("#m").onclick=e=>{if(e.target.id=="m")closeM()};
function start(h){if(h!=null)$("#fh").value=h;S={h:+$("#fh").value,cur:$("#fn").value,i:$("#fi").value,o:$("#fo").value,g:$("#fg").value,r:0};S.nights=Math.max(1,Math.round((new Date(S.o)-new Date(S.i))/864e5));step1();openM()}
$("#bf").onsubmit=e=>{e.preventDefault();start()};
document.addEventListener("click",e=>{const b=e.target.closest("[data-h]");if(b)start(+b.dataset.h);const o=e.target.closest("[data-offer]");if(o){const k=H.findIndex(h=>h.n.includes(o.dataset.offer));start(k<0?0:k)}});
const steps=n=>document.querySelectorAll(".steps i").forEach((x,i)=>x.classList.toggle("on",i<n));
const calc=()=>{const base=H[S.h].p[S.cur=="USD"?1:0]*R[S.r][1]*S.nights;return{base,tax:base*.2,tot:base*1.2}};
const summary=()=>{const c=calc(),h=H[S.h];return `<div class="sum"><b>${h.n}</b><div><span>${h.l}</span><span>${S.g} guest(s)</span></div><div><span>${S.i} → ${S.o}</span><span>${S.nights} night(s)</span></div><div><span>${R[S.r][0]}</span><span>${fmt(c.base,S.cur)}</span></div><div><span>Taxes &amp; service (20%)</span><span>${fmt(c.tax,S.cur)}</span></div><div class="tot"><span>Total</span><span>${fmt(c.tot,S.cur)}</span></div></div>`};
function step1(){steps(1);$("#mb").innerHTML=`<h2 style="font-size:30px;margin-top:0">Choose your room</h2><div class="cols"><div>${R.map((r,i)=>`<div class="room ${i==S.r?"sel":""}" data-r="${i}"><div><b>${r[0]}</b><br><small style="color:var(--mute)">Breakfast included</small></div><b>${fmt(H[S.h].p[S.cur=="USD"?1:0]*r[1],S.cur)}<small>/night</small></b></div>`).join("")}</div><div>${summary()}<button class="btn" id="n1" style="width:100%;margin-top:14px">Continue to payment</button></div></div>`;
document.querySelectorAll(".room").forEach(r=>r.onclick=()=>{S.r=+r.dataset.r;step1()});$("#n1").onclick=step2}
const luhn=n=>{if(n.length<13)return false;let s=0,a=0;for(let i=n.length-1;i>=0;i--){let d=+n[i];if(a){d*=2;if(d>9)d-=9}s+=d;a=!a}return s%10==0};
function step2(){steps(2);$("#mb").innerHTML=`<h2 style="font-size:30px;margin-top:0">Secure payment</h2><div class="cols"><div>
<div class="cc" id="cc"><div><div class="face"><div style="display:flex;justify-content:space-between"><b>Waters Pay</b><span id="bd">CARD</span></div><div class="num" id="pn">•••• •••• •••• ••••</div><div style="display:flex;justify-content:space-between;font-size:13px"><span id="pm">FULL NAME</span><span id="pe">MM/YY</span></div></div><div class="face back"><div class="stripe"></div><div style="text-align:right;font-family:monospace">CVV <span id="pc">•••</span></div><small>Demo gateway: no real charge</small></div></div></div>
<div class="row2"><div><label>Full name</label><input id="gn" autocomplete="name"></div><div><label>Email</label><input id="ge" type="email"></div></div>
<div class="fld"><label>Card number</label><input id="cn" inputmode="numeric" maxlength="19" placeholder="4242 4242 4242 4242"></div>
<div class="row2"><div><label>Expiry</label><input id="ce" maxlength="5" placeholder="MM/YY"></div><div><label>CVV</label><input id="cv" inputmode="numeric" maxlength="4" placeholder="123"></div></div><div class="err" id="er"></div></div>
<div>${summary()}<button class="btn" id="pay" style="width:100%;margin-top:14px">Pay ${fmt(calc().tot,S.cur)}</button><div class="secure">🔒 Encrypted · simulated gateway · test card 4242 4242 4242 4242</div><button class="btn ghost sm" id="bk" style="margin-top:12px">Back</button></div></div>`;
const g=id=>$("#"+id);
g("cn").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,16);e.target.value=v.replace(/(.{4})/g,"$1 ").trim();g("pn").textContent=(v+"################").slice(0,16).replace(/#/g,"•").replace(/(.{4})/g,"$1 ").trim();g("bd").textContent=/^4/.test(v)?"VISA":/^5[1-5]/.test(v)?"MASTERCARD":"CARD"};
g("ce").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,4);if(v.length>2)v=v.slice(0,2)+"/"+v.slice(2);e.target.value=v;g("pe").textContent=v||"MM/YY"};
g("gn").oninput=e=>g("pm").textContent=e.target.value.toUpperCase()||"FULL NAME";
g("cv").oninput=e=>{e.target.value=e.target.value.replace(/\D/g,"");g("pc").textContent=e.target.value||"•••"};
g("cv").onfocus=()=>g("cc").classList.add("flip");g("cv").onblur=()=>g("cc").classList.remove("flip");
g("bk").onclick=step1;
g("pay").onclick=()=>{const n=g("cn").value.replace(/\s/g,""),[mm,yy]=g("ce").value.split("/").map(Number);let m="";
if(g("gn").value.trim().length<2)m="Enter the guest name.";else if(!/^\S+@\S+\.\S+$/.test(g("ge").value))m="Enter a valid email.";else if(!luhn(n))m="Card number is not valid.";else if(!(mm>=1&&mm<=12)||(2000+yy)*12+mm<t0.getFullYear()*12+t0.getMonth()+1)m="Card expiry is invalid or past.";else if(g("cv").value.length<3)m="Enter the CVV.";
g("er").textContent=m;if(!m){S.name=g("gn").value.trim();S.email=g("ge").value.trim();process()}}}
function process(){steps(3);const ms=["Contacting your bank…","Verifying 3-D Secure…","Confirming your room…"];let k=0;
$("#mb").innerHTML=`<div class="center"><div class="spin"></div><h3 id="pm2">${ms[0]}</h3><p class="sub" style="margin:auto">Please keep this window open.</p></div>`;
const iv=setInterval(()=>{k++;if(k<3)$("#pm2").textContent=ms[k];else{clearInterval(iv);done()}},1100)}
function done(){const ref="TWC-"+Math.random().toString(36).slice(2,8).toUpperCase(),c=calc();
const rec={ref,hotel:H[S.h].n,room:R[S.r][0],from:S.i,to:S.o,guests:+S.g,total:fmt(c.tot,S.cur),name:S.name,at:Date.now()};
LOCAL.push(rec);persist();const saved=" Saved on this device under My bookings.";
$("#mb").innerHTML=`<div class="center"><div class="ok"><svg viewBox="0 0 40 40"><path d="M8 21l8 8 16-17"/></svg></div><h2 style="font-size:32px">Booking confirmed</h2><p class="sub" style="margin:0 auto 18px">Thank you, ${esc(S.name)}. Reference <b style="color:var(--red)">${ref}</b>.${saved}</p><div style="max-width:380px;margin:auto;text-align:left">${summary()}</div><button class="btn" id="dn" style="margin-top:20px">Done</button></div>`;$("#dn").onclick=closeM}
/* my bookings */
$("#mb2").onclick=async()=>{steps(0);$("#mb").innerHTML='<h2 style="font-size:30px;margin-top:0">My bookings</h2><p class="sub">Loading…</p>';openM();let L=LOCAL;
L=[...L].sort((a,b)=>b.at-a.at);$("#mb").innerHTML='<h2 style="font-size:30px;margin-top:0">My bookings</h2>'+(L.length?L.map(b=>`<div class="bk"><div><b>${esc(b.hotel)}</b><br><small style="color:var(--mute)">${esc(b.room)} · ${esc(b.from)} → ${esc(b.to)} · ${esc(b.guests)} guest(s)</small></div><div style="text-align:right"><b style="color:var(--red)">${esc(b.ref)}</b><br>${esc(b.total)}</div></div>`).join(""):'<p class="sub">No bookings yet. Pick a hotel and your reservations will appear here.</p>')}
/* concierge */
$("#cb").onclick=()=>$("#cp").classList.toggle("open");
const reply=q=>{q=q.toLowerCase();
if(/ramakrishna|pool|city|sky/.test(q))return"The Waters Ramakrishna is our skyline hotel with an infinity pool and city views.";
if(/peterson|sea|sunset|dining|beach/.test(q))return"The Waters Peterson has a sunset deck and waterfront dining, perfect for evenings.";
if(/suruvil|lagoon|palm|boat|kayak/.test(q))return"The Waters Suruvil is all about calm lagoon mornings, palm shade and quiet boat rides.";
if(/poonaryn|bird|wetland|nature/.test(q))return"The Waters Poonaryn offers wetland sunrises and birdwatching from your balcony.";
if(/price|cost|rate|cheap|offer|discount/.test(q))return"Sample rates start from about LKR 25,000 a night. Book direct for offers of up to 40% off.";
if(/kid|child|family/.test(q))return"Yes, we have family suites. Choose Family Suite when booking.";
return"I can help with our four hotels, prices and offers. Try asking about the pool, the sunset deck or the lagoon."};
$("#cf").onsubmit=e=>{e.preventDefault();const q=$("#ci").value.trim();if(!q)return;$("#ci").value="";const add=(t,c)=>{const d=document.createElement("div");d.className=c||"";d.textContent=t;$("#cm").append(d);$("#cm").scrollTop=1e9;return d};
add(q,"me");setTimeout(()=>add(reply(q)),500)};


/* scroll progress, card tilt, ripples, parallax */
const sp=$("#sp");addEventListener("scroll",()=>{const h=document.documentElement;sp.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
document.querySelectorAll(".hotel").forEach(c=>{c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-8px)`});c.addEventListener("mouseleave",()=>c.style.transform="")});
sl.addEventListener("click",e=>{if(e.target.closest("a,button"))return;const r=sl.getBoundingClientRect(),s=document.createElement("span");s.className="rip";s.style.left=e.clientX-r.left+"px";s.style.top=e.clientY-r.top+"px";sl.append(s);setTimeout(()=>s.remove(),1400)});
sl.addEventListener("mousemove",e=>{const x=(e.clientX/innerWidth-.5)*-14,y=(e.clientY/innerHeight-.5)*-8;sl.querySelectorAll(".slide.on .ph").forEach(s=>s.style.translate=x+"px "+y+"px")});

/* gallery with lightbox (photos from images/, scenes as fallback) */
let LG=[],LI=0;
function gallery(g){const h=H.find(x=>x.g==g);document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("on",t.dataset.g==g));
$("#gg").innerHTML=[1,2,3,4,5].map(n=>`<div class="gt ${n==1?"big":""}" style="animation-delay:${n*.08}s" data-cap="${h.n} · ${n}/5">${ph(g+"-"+n+".jpg",(h.s+n)%5,"g"+g+n)}</div>`).join("")}
$("#gt").innerHTML=H.map(h=>`<button class="tab" data-g="${h.g}">${h.n.replace("The Waters ","")}</button>`).join("");
$("#gt").onclick=e=>{const t=e.target.closest(".tab");if(t)gallery(t.dataset.g)};
gallery(H[0].g);
const showLb=i=>{LI=(i+LG.length)%LG.length;$("#li").innerHTML=LG[LI].querySelector(".ph").outerHTML+'<div id="lc">'+LG[LI].dataset.cap+'</div>';$("#lb").classList.add("open")};
$("#gg").onclick=e=>{const t=e.target.closest(".gt");if(!t)return;LG=[...document.querySelectorAll(".gt")];showLb(LG.indexOf(t))};
$("#lb").onclick=e=>{if(e.target.closest("#lp"))showLb(LI-1);else if(e.target.closest("#ln"))showLb(LI+1);else $("#lb").classList.remove("open")};
addEventListener("keydown",e=>{if(!$("#lb").classList.contains("open"))return;if(e.key=="Escape")$("#lb").classList.remove("open");if(e.key=="ArrowRight")showLb(LI+1);if(e.key=="ArrowLeft")showLb(LI-1)});

/* Discover Sri Lanka */
$("#dc").innerHTML=[["Sigiriya","Lion Rock fortress","sl-sigiriya.jpg",2],["Ella","Nine Arches Bridge by train","sl-ella.jpg",1],["Anuradhapura","Sacred ancient capital","sl-anuradhapura.jpg",3],["Polonnaruwa","Ruins, lakes and elephants","sl-polonnaruwa.jpg",2],["Kandy","Temple of the Sacred Tooth","sl-kandy.jpg",3],["Nuwara Eliya","Tea hills and cool air","sl-nuwara-eliya.jpg",1],["Jaffna","Kovils, forts and lagoons","sl-jaffna.jpg",0],["Delft Island","Wild horses and coral shores","sl-delft.jpg",4]].map((p,i)=>`<div class="dp">${ph(p[2],p[3],"d"+i)}<div class="gl"><b>${p[0]}</b><span>${p[1]}</span></div></div>`).join("");

/* Suruvil tour packages (from the CMC Suruvil tour package deck) */
$("#pk").innerHTML=[["Colombo · Habarana · Suruvil","4 days","Dambulla, Sigiriya, a lakeside dinner and a lake boat ride."],["Colombo · Anuradhapura · Suruvil","4 days","The sacred ancient capital, then on to the lagoon."],["Colombo · Polonnaruwa · Suruvil","4 days","UNESCO ruins and wild elephants before the water."],["Colombo · Kandy · Suruvil","5 days","The Temple of the Sacred Tooth and the hill country."],["Colombo · Nuwara Eliya · Suruvil","5 days","Cool air, tea hills and a barbecue night."],["Colombo · Suruvil","3 days","Straight to the lagoon, ferry rides and island days."]].map((p,i)=>`<div class="pc rv">${ph("pk-"+(i+1)+".jpg",[2,3,2,3,1,0][i],"k"+i)}<span class="tag">${p[1]}</span><div class="gl"><b>${p[0]}</b><span>${p[2]}</span><button class="btn sm" data-h="2">Book Suruvil</button></div></div>`).join("");
document.querySelectorAll(".pc").forEach(e=>io.observe(e));
