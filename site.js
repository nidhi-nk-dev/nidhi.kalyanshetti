// Edit these two values. Birth year drives the age axis; goatcounter is your site code (see README).
const CONFIG={birthYear:2000,goatcounter:""};
(function(){
  const f=document.getElementById("foot");if(!f)return;
  f.innerHTML='Visitors: <b id="vc">–</b>';
  const c=CONFIG.goatcounter;if(!c)return;
  const s=document.createElement("script");s.async=true;
  s.dataset.goatcounter="https://"+c+".goatcounter.com/count";s.src="https://gc.zgo.at/count.js";
  document.head.appendChild(s);
  fetch("https://"+c+".goatcounter.com/counter/TOTAL.json").then(r=>r.json())
    .then(d=>{document.getElementById("vc").textContent=d.count}).catch(()=>{});
})();
