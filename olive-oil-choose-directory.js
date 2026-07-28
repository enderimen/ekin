(function(){
  const BASE = "https://www.ekinkocadag.com";

  const OILS = {
    arbequina:{name:"Arbequina Soğuk Sıkım Erken Hasat",badge:"Yumuşak & meyvemsi",tone:"fresh",profile:{meyve:5,aci:1,yakici:1},
      note:"Acılığı çok düşük, meyvemsi ve nazik bir karakteri var. İlk kez naturel sızma deneyenler ve yumuşak tat sevenler için ideal.",
      sizes:{"500 ml":{p:"680,00",u:"/arbequina-erken-hasat-soguk-sikim-zeytinyagi-0.5-lt",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/arbequina-soguk-sikim-erken-hasat-zeyt--46bf-.png"},"2 lt":{p:"2.550,00",u:"/arbequina-soguk-sikim-erken-hasat-zeytinyagi-2lt"}}},
    domat:{name:"Domat Soğuk Sıkım Erken Hasat",badge:"Yumuşak-orta, dengeli",tone:"fresh",profile:{meyve:4,aci:2,yakici:2},
      note:"Hafif ve dengeli; çiğ tüketimde ve günlük kullanımda rahatça yer bulur. Yumuşak severler için çok amaçlı bir seçim.",
      sizes:{"500 ml":{p:"680,00",u:"/domat-erken-hasat-soguk-sikim-zeytinyagi-0.5-lt",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/domat-soguk-sikim-erken-hasat-zeytinya-a442-0.png"},"2 lt":{p:"2.550,00",u:"/domat-soguk-sikim-erken-hasat-zeytinyagi-2lt"}}},
    edremit:{name:"Edremit Erken Hasat Soğuk Sıkım",badge:"Dengeli klasik · çok amaçlı",tone:"fresh",profile:{meyve:4,aci:3,yakici:3},
      note:"Kuzey Ege'nin klasik dengeli profili: meyvemsi, orta düzeyde acı-yakıcı. Kahvaltıdan salataya, pişirmeye kadar her işe uyan “herkesin yağı”.",
      sizes:{"250 ml":{p:"318,75",u:"/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-250ml",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-22c748.png"},"500 ml":{p:"595,00",u:"/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-500ml",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-9c0cc-.png"},"1 lt":{p:"935,00",u:"/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-1lt",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-4e8694.png"},"2 lt":{p:"1.785,00",u:"/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-2lt"},"5 lt":{p:"3.485,00",u:"/edremit-erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-5lt",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature--1dd5-.png"}}},
    memecik:{name:"Memecik Erken Hasat Soğuk Sıkım",badge:"Yoğun · yüksek polifenol",tone:"fresh",profile:{meyve:4,aci:5,yakici:5},
      note:"En yoğun ve karakterli çeşit: otsu-yeşil notalar, belirgin acı-yakıcılık ve yüksek polifenol. Güçlü tat ve maksimum yoğunluk arayan meraklılar için.",
      sizes:{"500 ml":{p:"722,50",u:"/memecik-erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-500ml",img:"https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/memecik-erken-hasat-soguk-sikim-nature--4468-.png"}}},
    olgun:{name:"Edremit Olgun Hasat Soğuk Sıkım",badge:"Yumuşak · günlük pişirme",tone:"gold",profile:{meyve:3,aci:2,yakici:2},
      note:"Yumuşak, az acılı ve geniş kabul gören bir profil. Günlük pişirme ve ev yemekleri için ideal; büyük ambalajlarda ekonomik.",
      sizes:{"500 ml":{p:"403,75",u:"/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-500ml"},"1 lt":{p:"722,50",u:"/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-1lt"},"2 lt":{p:"1.402,50",u:"/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-2lt"},"5 lt":{p:"2.890,00",u:"/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-5lt"}}},
    yemeklik:{name:"Natürel Birinci Yemeklik Zeytinyağı",badge:"Kızartma · en ekonomik",tone:"gold-deep",profile:{meyve:2,aci:1,yakici:1},
      note:"Kızartma ve kavurma gibi yüksek tüketimli kullanımlar için düşünülmüş, ekonomik yemeklik yağ. Karakterden çok pratikliği önceleyenler için.",
      sizes:{"5 lt teneke":{p:"2.337,50",u:"/-naturel-birinci-yemeklik-zeytinyagi-5-lt.-teneke1"}}},
    tadim:{name:"Üç Karakter Zeytinyağı Tadım Seti",badge:"Kararsızlar için başlangıç",tone:"fresh",profile:{meyve:4,aci:3,yakici:3},set:true,
      note:"Hangisini seveceğinizden emin değilseniz buradan başlayın. Üç farklı karakteri deneyip damak zevkinize en uygun olanı bulun, sonra büyük ambalaja geçin.",
      sizes:{"Tadım seti":{p:"1.950,00",u:"/uc-karakter-zeytinyagi-tadim-seti"}}}
  };

  const SIZE_PREF={az:["250 ml","500 ml","1 lt","2 lt","5 lt","5 lt teneke"],aile:["1 lt","2 lt","500 ml","5 lt","5 lt teneke","250 ml"],kalabalik:["5 lt","5 lt teneke","2 lt","1 lt","500 ml","250 ml"]};
  function pickSize(oil,pref){const avail=Object.keys(oil.sizes);if(oil.set)return avail[0];const order=SIZE_PREF[pref]||avail;for(const s of order){if(oil.sizes[s])return s;}return avail[0];}
  function decideLine(a){if(a.use==="kizartma")return "yemeklik";if(a.use==="pisirme")return "olgun";if(a.use==="her")return (a.taste==="yumusak")?"domat":"edremit";if(a.taste==="yumusak")return "arbequina";if(a.taste==="dengeli")return "edremit";if(a.taste==="yogun")return "memecik";return "tadim";}
  function altLine(line,a){const m={arbequina:"domat",domat:"arbequina",memecik:"edremit",olgun:"edremit",yemeklik:"olgun",tadim:"edremit",edremit:(a.taste==="yumusak"?"domat":a.taste==="yogun"?"memecik":"olgun")};return m[line];}

  const root=document.getElementById("ekQuiz");
  const panels=root.querySelectorAll(".ek-panel");
  const drops=root.querySelectorAll("#ekProgress .ek-drop");
  const stepLabel=document.getElementById("ekStepLabel");
  const order=["intro","q1","q2","q3","result"];
  const answers={};let idx=0;

  function show(name){
    panels.forEach(p=>p.classList.toggle("active",p.dataset.panel===name));
    idx=order.indexOf(name);
    if(idx>=1&&idx<=3){stepLabel.textContent="Soru "+idx+" / 3";drops.forEach((d,i)=>{d.classList.remove("on","done");if(i<idx-1)d.classList.add("done");else if(i===idx-1)d.classList.add("on");});}
    else{stepLabel.textContent="";drops.forEach(d=>d.classList.remove("on","done"));}
    document.getElementById("secici").scrollIntoView({behavior:"smooth",block:"start"});
  }
  document.getElementById("ekStart").addEventListener("click",()=>show("q1"));
  root.querySelectorAll(".ek-opt").forEach(btn=>btn.addEventListener("click",()=>{answers[btn.dataset.q]=btn.dataset.val;const next=order[idx+1];if(next==="result"){renderResult();show("result");}else show(next);}));
  root.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",()=>show(order[Math.max(0,idx-1)])));

  function card(line,pref){const oil=OILS[line];const sizeKey=pickSize(oil,pref);const s=oil.sizes[sizeKey];const url=BASE+s.u;const img=s.img||(Object.values(oil.sizes).find(x=>x.img)||{}).img||"";return{oil,sizeKey,s,url,img};}
  function bottleSVG(tone){const oil=tone==="gold"?"#D9A93A":tone==="gold-deep"?"#C98F22":"#9DB23F";const oil2=tone==="gold"?"#C08A2B":tone==="gold-deep"?"#A87016":"#7C8A32";return '<svg width="66" height="120" viewBox="0 0 66 120" fill="none" aria-hidden="true"><rect x="27" y="2" width="12" height="14" rx="2" fill="#3B4A2A"/><path d="M24 16h18v8c0 3 4 5 4 10v76a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V34c0-5 4-7 4-10v-8z" fill="#EDEADD" stroke="#CFC9B4" stroke-width="1.5"/><path d="M22 60h22v50a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V60z" fill="'+oil+'"/><rect x="22" y="60" width="22" height="4" fill="'+oil2+'"/><rect x="24" y="74" width="18" height="26" rx="2" fill="#fff" opacity=".82"/></svg>';}
  function metersHTML(p){const rows=[["Meyvemsilik",p.meyve],["Acılık",p.aci],["Yakıcılık",p.yakici]];return '<div class="ek-meters">'+rows.map(r=>'<div class="ek-meter"><span>'+r[0]+'</span><div class="ek-track"><i class="ek-fill" data-w="'+(r[1]*20)+'"></i></div></div>').join("")+'</div>';}

  function renderResult(){
    const line=decideLine(answers);const P=card(line,answers.size);const altL=altLine(line,answers);const A=altL?card(altL,answers.size):null;
    const imgTag=P.img?'<img src="'+P.img+'" alt="'+P.oil.name+'" onerror="this.parentNode.innerHTML=\''+bottleSVG(P.oil.tone).replace(/'/g,"\\'")+'\'">':bottleSVG(P.oil.tone);
    let html=''
      +'<div class="ek-result-head"><div class="ek-eyebrow">Sizin için önerimiz</div><h2>'+P.oil.name+'</h2></div>'
      +'<div class="ek-card"><div class="ek-bottlewrap">'+imgTag+'</div><div class="ek-info">'
      +'<span class="ek-badge">'+P.oil.badge+'</span>'+metersHTML(P.oil.profile)
      +'<p class="ek-note">'+P.oil.note+'</p>'
      +'<div class="ek-priceRow"><span class="ek-size">Önerilen ambalaj: <b>'+P.sizeKey+'</b></span></div>'
      +'<a class="ek-cta" href="'+P.url+'" target="_top">Ürünü inceleyin<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>'
      +'</div></div>';
    if(A){html+='<div class="ek-alt"><span class="ek-alt-txt">Alternatif: <b>'+A.oil.name+'</b> · '+A.sizeKey+'</span><a href="'+A.url+'" target="_top">İncele ›</a></div>';}
    if(line!=="tadim"){html+='<p class="ek-help">Yine de emin olamadınız mı? <a href="'+BASE+'/uc-karakter-zeytinyagi-tadim-seti" target="_top">Tadım Seti’ni deneyin</a> veya <a href="https://wa.me/905302328803" target="_top">WhatsApp’tan sorun</a>.</p>';}
    else{html+='<p class="ek-help"><a href="https://wa.me/905302328803" target="_top">WhatsApp’tan bize danışın</a>, damak zevkinize göre birebir önerelim.</p>';}
    html+='<div class="ek-center"><button class="ek-restart" id="ekRestart">↺ Baştan başlayın</button></div>';
    const box=document.getElementById("ekResult");box.innerHTML=html;
    document.getElementById("ekRestart").addEventListener("click",()=>{for(const k in answers)delete answers[k];show("intro");});
    requestAnimationFrame(()=>{box.querySelectorAll(".ek-fill").forEach(f=>{f.style.width=f.dataset.w+"%";});});
  }
  show("intro");
})();
