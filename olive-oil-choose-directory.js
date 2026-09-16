(function(){
  const BASE = "https://www.ekinkocadag.com";

  const OILS = {
    arbequina: {
        name: "Arbequina Soğuk Sıkım Erken Hasat",
        badge: "Yumuşak & meyvemsi",
        tone: "fresh",
        profile: { meyve: 5, aci: 1, yakici: 1 },
        note: "Acılığı çok düşük, meyvemsi ve nazik bir karakteri var. İlk kez naturel sızma deneyenler ve yumuşak tat sevenler için ideal.",
        sizes: {
            "500 ml": { p: "600,00", u: "/arbequina-erken-hasat-soguk-sikim-zeytinyagi-0.5-lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/arbequina-soguk-sikim-erken-hasat-zeyt--46bf-.png", basket: { id: 60, variantId: 89, unique: "04290b35666d4d51b4f56ea5e0b1ab86" }, 
          comment: {
            "name": "N**** Ş**** Ç****",
            "text": "Arbequina harika bir lezzet. Zeytinyağının kraliçesi yudum yudum sağlık! Aynı gün içinde jet teslimat da ayrıca çok etkileyici.Herkese tavsiye edebilirim.Çok teşekkürler."
          }},
              "2 lt": { p: "2.550,00", u: "/arbequina-soguk-sikim-erken-hasat-zeytinyagi-2lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/arbequina-soguk-sikim-erken-hasat-zeyt-306df6.png", basket: { id: 119, variantId: 152, unique: "e32c41659bc84f43acdc38e8ec5b27d4" },
          comment: {
            "name": "",
            "text": ""
          }},
        },
    },
    domat: {
        name: "Domat Soğuk Sıkım Erken Hasat",
        badge: "Yumuşak-orta, dengeli",
        tone: "fresh",
        profile: { meyve: 4, aci: 2, yakici: 2 },
        note: "Hafif ve dengeli; çiğ tüketimde ve günlük kullanımda rahatça yer bulur. Yumuşak severler için çok amaçlı bir seçim.",
        sizes: {
            "500 ml": { p: "680,00", u: "/domat-erken-hasat-soguk-sikim-zeytinyagi-0.5-lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/domat-soguk-sikim-erken-hasat-zeytinya-a442-0.png", basket: { id: 59, variantId: 88, unique: "308801a0cb0740b0851ce39660a8429c" },
          comment: {
            "name": "G***** İ****",
            "text": "Kıvamı, rengi ve kokusu çok iyi. Tadını beğendiğimiz için ikinci kez sipariş verdim. Emeklerinize sağlık. Teşekkürler."
          }},
            "2 lt": { p: "2.550,00", u: "/domat-soguk-sikim-erken-hasat-zeytinyagi-2lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/domat-soguk-sikim-erken-hasat-zeytinya-9d7401.png", basket: { id: 118, variantId: 151, unique: "5a2191170fcd4fc29edb45b59e62abf3" },
          comment: {
            "name": "",
            "text": ""
          }}
        }
    },
    edremit: {
        name: "Edremit Erken Hasat Soğuk Sıkım",
        badge: "Dengeli klasik · çok amaçlı",
        tone: "fresh",
        profile: { meyve: 4, aci: 3, yakici: 3 },
        note: "Kuzey Ege'nin klasik dengeli profili: meyvemsi, orta düzeyde acı-yakıcı. Kahvaltıdan salataya, pişirmeye kadar her işe uyan “herkesin yağı”.",
        sizes: {
            "250 ml": { p: "318,75", u: "/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-250ml", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-22c748.png", basket: { id: 57, variantId: 86, unique: "410ac4726140410d91799d25caf59064" },
          comment: {
            "name": "E***** İ*****",
            "text": "Çok kaliteli tadına ve kokusuna bayıldık, aynı zamanda kargo çok hızlı. Sağlık ve kaliteye önem veren herkese tavsiye ederim."
          }},
            "500 ml": { p: "595,00", u: "/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-500ml", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-9c0cc-.png", basket: { id: 58, variantId: 87, unique: "6419fc98925343c4abdbf5dc0730a69b" },
          comment: {
            "name": "M**** D*****",
            "text": "Merhaba, ürünlerinizin tadı, aroması müthiş! Tebrik ederim. Güler yüzlü çalışanlarınız ve kaliteli anlayışınız için de ayrıca teşekkür ederim."
          }},
            "1 lt": { p: "935,00", u: "/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-1lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-4e8694.png", basket: { id: 54, variantId: 83, unique: "d5d96883e68d4830ba3476eaff8703a0" },
          comment: {
            "name": "S**** E****",
            "text": "İlk etapta 1 lt denemiştim lezzeti harika. Eş dost tüm yakınlarıma tavsiye ettim."
          }},
            "2 lt": { p: "1.785,00", u: "/erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-2lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature-3-37a4.png", basket: { id: 55, variantId: 84, unique: "d4bae7e4af454e1c82340311ce0d0ff8" },
          comment: {
            "name": "A**** D*****",
            "text": "Yağlar güzel ve kaliteli çok begendim teşekkürler"
          }},
            "5 lt": { p: "3.485,00", u: "/edremit-erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-5lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature--1dd5-.png", basket: { id: 100, variantId: 129, unique: "9739a5364e8d4494822c8a2b241a76a5" },
          comment: {
            "name": "",
            "text": ""
          }},
        }
    },
    memecik: {
        name: "Memecik Erken Hasat Soğuk Sıkım",
        badge: "Yoğun · yüksek polifenol",
        tone: "fresh",
        profile: { meyve: 4, aci: 5, yakici: 5 },
        note: "En yoğun ve karakterli çeşit: otsu-yeşil notalar, belirgin acı-yakıcılık ve yüksek polifenol. Güçlü tat ve maksimum yoğunluk arayan meraklılar için.",
        sizes: {
            "500 ml": { p: "722,50", u: "/memecik-erken-hasat-soguk-sikim-naturel-sizma-zeytinyagi-500ml", img: "https://static.ticimax.cloud/cdn-cgi/image/width=300,quality=85,format=webp/60900/Uploads/UrunResimleri/buyuk/memecik-erken-hasat-soguk-sikim-nature--4468-.png", basket: { id: 98, variantId: 127, unique: "69c4fbc68cda4c3ca8465efce6e1ece6" },
          comment: {
            "name": "",
            "text": ""
          }}
        }
    },
    olgun: {
        name: "Edremit Olgun Hasat Soğuk Sıkım",
        badge: "Yumuşak · günlük pişirme",
        tone: "gold",
        profile: { meyve: 3, aci: 2, yakici: 2 },
        note: "Yumuşak, az acılı ve geniş kabul gören bir profil. Günlük pişirme ve ev yemekleri için ideal; büyük ambalajlarda ekonomik.",
        sizes: {
            "500 ml": { p: "403,75", u: "/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-500ml", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/edremit-olgun-hasat-soguk-sikim-nature-28f8-4.png", basket: { id: 69, variantId: 98, unique: "95091521e0d243819c33818338f98ee9" },
          comment: {
            "name": "",
            "text": ""
          }},
            "1 lt": { p: "722,50", u: "/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-1lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/edremit-olgun-hasat-soguk-sikim-nature-6-8d65.png", basket: { id: 68, variantId: 97, unique: "d71d17f29f5f44d1ab60d732b75227f7" },
          comment: {
            "name": "",
            "text": ""
          }},
            "2 lt": { p: "1.402,50", u: "/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-2lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/edremit-olgun-hasat-soguk-sikim-nature-c7ed83.png", basket: { id: 67, variantId: 96, unique: "f2c0a7b3a61245f7b99e64cbd0a2b9b1" },
          comment: {
            "name": "A**** D****",
            "text": "Çok beğendim tavsiye ederim"
          }},
            "5 lt": { p: "2.890,00", u: "/olgun-hasat-soguk-sikim-naturel-sizma-zeytinyagi-5lt", img: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/60900/uploads/urunresimleri/buyuk/edremit-erken-hasat-soguk-sikim-nature--1dd5-.png", basket: { id: 66, variantId: 95, unique: "7bb9950f1c684328b6f25941a36f5d04" },
          comment: {
            "name": "A**** C***",
            "text": "Tek kelimeyle nefis mukemmel bir yağ"
          }},
        }
    },
    yemeklik: {
        name: "Natürel Birinci Yemeklik Zeytinyağı",
        badge: "Kızartma · en ekonomik",
        tone: "gold-deep",
        profile: { meyve: 2, aci: 1, yakici: 1 },
        note: "Kızartma ve kavurma gibi yüksek tüketimli kullanımlar için düşünülmüş, ekonomik yemeklik yağ. Karakterden çok pratikliği önceleyenler için.",
        sizes: {
            "5 lt teneke": { p: "2.337,50", u: "/-naturel-birinci-yemeklik-zeytinyagi-5-lt.-teneke1", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/-naturel-birinci-yemeklik-zeytinyagi-5-b-4998.png", basket: { id: 56, variantId: 85, unique: "7fe27319d6254dd0847c5d897ea0befe" },
          comment: {
            "name": "A**** A****",
            "text": "Lezzeti gerçekten efsane. Alırken tereddütlerim vardı ama artık kalmadı. Kesinlikle düşünmeden alabilirsiniz."
          }}
        }
    },
    tadim: {
        name: "Üç Karakter Zeytinyağı Tadım Seti",
        badge: "Kararsızlar için başlangıç",
        tone: "fresh",
        profile: { meyve: 4, aci: 3, yakici: 3 },
        set: true,
        note: "Hangisini seveceğinizden emin değilseniz buradan başlayın. Üç farklı karakteri deneyip damak zevkinize en uygun olanı bulun, sonra büyük ambalaja geçin.",
        sizes: {
            "Tadım seti": { p: "1.950,00", u: "/uc-karakter-zeytinyagi-tadim-seti", img: "https://static.ticimax.cloud/cdn-cgi/image/width=0,quality=85,format=webp/60900/uploads/urunresimleri/buyuk/uc-karakter-zeytinyagi-tadim-seti--630f-.png", basket: { id: 122, variantId: 155, unique: "29e2f1fd363a44ce886e2b08ea6cc9b5" },
          comment: {
            "name": "",
            "text": ""
          }}
        }
    }
  };

  const SIZE_PREF={az:["250 ml","500 ml","1 lt","2 lt","5 lt","5 lt teneke"],aile:["1 lt","2 lt","500 ml","5 lt","5 lt teneke","250 ml"],kalabalik:["5 lt","5 lt teneke","2 lt","1 lt","500 ml","250 ml"]};
  function pickSize(oil,pref){const all=Object.keys(oil.sizes);if(oil.set)return all[0];const inStock=all.filter(function(s){return !oil.sizes[s].outOfStock;});const pool=inStock.length?inStock:all;const order=SIZE_PREF[pref]||pool;for(const s of order){if(pool.indexOf(s)>-1)return s;}return pool[0];}
  function decideLine(a){if(a.use==="kizartma")return "yemeklik";if(a.use==="pisirme")return "olgun";if(a.use==="her")return (a.taste==="yumusak")?"domat":"edremit";if(a.taste==="yumusak")return "arbequina";if(a.taste==="dengeli")return "edremit";if(a.taste==="yogun")return "memecik";return "tadim";}
  function altLine(line,a){const m={arbequina:"domat",domat:"arbequina",memecik:"edremit",olgun:"edremit",yemeklik:"olgun",tadim:"edremit",edremit:(a.taste==="yumusak"?"domat":a.taste==="yogun"?"memecik":"olgun")};return m[line];}

  const root=document.getElementById("ekQuiz");
  const panels=root.querySelectorAll(".ek-panel");
  const drops=root.querySelectorAll("#ekProgress .ek-drop");
  const stepLabel=document.getElementById("ekStepLabel");
  const order=["intro","q1","q2","q3","result"];
  const answers={};let idx=0;

  function show(name, preventScroll){
    panels.forEach(p=>p.classList.toggle("active",p.dataset.panel===name));
    idx=order.indexOf(name);
    if(idx>=1&&idx<=3){stepLabel.textContent="Soru "+idx+" / 3";drops.forEach((d,i)=>{d.classList.remove("on","done");if(i<idx-1)d.classList.add("done");else if(i===idx-1)d.classList.add("on");});}
    else{stepLabel.textContent="";drops.forEach(d=>d.classList.remove("on","done"));}
    if(!preventScroll) document.getElementById("secici").scrollIntoView({behavior:"smooth", block:"start"});
  }
  document.getElementById("ekStart").addEventListener("click",()=>show("q1"));
  root.querySelectorAll(".ek-opt").forEach(btn=>btn.addEventListener("click",()=>{answers[btn.dataset.q]=btn.dataset.val;const next=order[idx+1];if(next==="result"){renderResult();show("result");}else show(next);}));
  root.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",()=> {
    if(idx === 1){
      isVisibleHeadArea("remove");
    }
    show(order[Math.max(0,idx-1)])
  }));

  function card(line,pref){const oil=OILS[line];const sizeKey=pickSize(oil,pref);const s=oil.sizes[sizeKey];const url=BASE+s.u;const img=s.img||(Object.values(oil.sizes).find(x=>x.img)||{}).img||"";return{oil,sizeKey,s,url,img};}
  function bottleSVG(tone){const oil=tone==="gold"?"#D9A93A":tone==="gold-deep"?"#C98F22":"#9DB23F";const oil2=tone==="gold"?"#C08A2B":tone==="gold-deep"?"#A87016":"#7C8A32";return '<svg width="66" height="120" viewBox="0 0 66 120" fill="none" aria-hidden="true"><rect x="27" y="2" width="12" height="14" rx="2" fill="#3B4A2A"/><path d="M24 16h18v8c0 3 4 5 4 10v76a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V34c0-5 4-7 4-10v-8z" fill="#EDEADD" stroke="#CFC9B4" stroke-width="1.5"/><path d="M22 60h22v50a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V60z" fill="'+oil+'"/><rect x="22" y="60" width="22" height="4" fill="'+oil2+'"/><rect x="24" y="74" width="18" height="26" rx="2" fill="#fff" opacity=".82"/></svg>';}
  function metersHTML(p){var rows=[["Meyvemsilik",p.meyve],["Acılık",p.aci],["Yakıcılık",p.yakici]];var path="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";function stars(n){var o="";for(var i=1;i<=5;i++){o+='<svg class="ek-star'+(i<=n?" on":"")+'" viewBox="0 0 24 24" aria-hidden="true"><path d="'+path+'"/></svg>';}return o;}return '<div class="ek-meters">'+rows.map(function(r){return '<div class="ek-meter"><span>'+r[0]+'</span><span class="ek-stars" role="img" aria-label="'+r[0]+' '+r[1]+'/5">'+stars(r[1])+'</span></div>';}).join("")+'</div>';}
  function getCommentData(s){
    if(!s||!s.comment) return null;
    let name=(s.comment.name||"").trim();
    let text=(s.comment.text||"").trim();
    if(!name && !text) return null;
    if(name.length > 30 && text.length > 0 && text.length < 30){
      const tmp=name; name=text; text=tmp;
    }
    if(!text) return null;
    return {name, text};
  }

  function renderReview(s, url){
    const c = getCommentData(s);
    const starFilled = '<svg width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
    const starEmpty = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D6D0BE" stroke-width="1.8" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';

    if(c){
      const stars = '<span class="ek-review-stars" aria-label="5 yıldız">'+starFilled.repeat(5)+'</span>';
      const author = c.name ? ' <span class="ek-review-author">— '+c.name+'</span>' : '';
      return '<div class="ek-review-box">'
        +'<div class="ek-review-head">'+stars+'</div>'
        +'<div class="ek-review-body">'
        +'<span class="ek-review-text">“'+c.text+'”</span>'
        +author
        +' <a href="'+url+'" target="_top" class="ek-review-link">(Tümünü Gör)</a>'
        +'</div>'
        +'</div>';
    } else {
      const stars = '<span class="ek-review-stars" aria-label="Henüz değerlendirilmedi">'+starEmpty.repeat(5)+'</span>';
      return '<div class="ek-review-box empty">'
        +'<div class="ek-review-head">'
        +stars
        +' <a href="'+url+'" target="_top" class="ek-review-link empty-link">(İlk değerlendiren siz olun)</a>'
        +'</div>'
        +'</div>';
    }
  }

  function renderResult(){
    const line=decideLine(answers);const P=card(line,answers.size);const altL=altLine(line,answers);const A=altL?card(altL,answers.size):null;
    const imgTag=P.img?'<img src="'+P.img+'" alt="'+P.oil.name+'" onerror="this.parentNode.innerHTML=\''+bottleSVG(P.oil.tone).replace(/'/g,"\\'")+'\'">':bottleSVG(P.oil.tone);
    let btnHtml;
    if (P.s.outOfStock) {
      btnHtml = '<div class="ek-btn-group">'
        +'<a class="ek-cta" href="'+P.url+'" target="_top">Ürünü inceleyin</a>'
        +'<a class="ek-add-basket disabled">Tükendi</a>'
        +'</div>';
    } else if (P.s.basket) {
      btnHtml = '<div class="ek-btn-group">'
        +'<input type="hidden" class="txtSepetAdet'+P.s.basket.unique+'" value="1" />'
        +'<input type="hidden" class="txtSepetAdet'+P.s.basket.id+'" value="1" />'
        +'<input type="hidden" class="txtSepetAdet'+P.s.basket.variantId+'" value="1" />'
        +'<a class="ek-cta" href="'+P.url+'" target="_top">Ürünü inceleyin</a>'
        +'<a onclick="productListAddToCartV2(\''+P.s.basket.unique+'\','+P.s.basket.id+','+P.s.basket.variantId+',0,1,\''+P.s.u+'\',0,this)" class="ek-add-basket btnAddToCart __text_mode_custom_bg__" data-productid="'+P.s.basket.id+'" data-variantid="'+P.s.basket.variantId+'" data-unique="'+P.s.basket.unique+'" data-productName="'+ P.oil.name + ' (' + P.sizeKey + ')" data-productprice="'+ P.s.p +'"><span class="ek-add-button-text">Sepete Ekle</span> <span class="ek-dot">•</span> '+P.s.p.replace(/,00$/, '')+' TL</a>'
        +'</div>';
    } else {
      btnHtml = '<a class="ek-cta" href="'+P.url+'" target="_top">Ürünü inceleyin<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    }

    let html=''
      +'<div class="ek-result-head"><div class="ek-eyebrow">SİZİN İÇİN ÖNERİMİZ</div></div>'
      +'<div class="ek-card"><div class="ek-bottlewrap" data-discount="-25%">'+imgTag+'</div><div class="ek-info">'
      + '<h2 class="m-0">'+P.oil.name+ ' (' + P.sizeKey +')' + '</h2>'
      +'<span class="ek-badge">'+P.oil.badge+'</span>'+metersHTML(P.oil.profile)
      +'<p class="ek-note">'+P.oil.note+'</p>'
      +renderReview(P.s, P.url)
      +btnHtml
      +'</div></div>';
    if(A){html+='<div class="ek-alt"><span class="ek-alt-txt">Alternatif: <b>'+A.oil.name+'</b> · '+A.sizeKey+'</span><a href="'+A.url+'" class="ek-alt-btn" data-recommended="'+P.oil.name+' ('+P.sizeKey+')" data-alternative="'+A.oil.name+' ('+A.sizeKey+')" target="_top">İncele ›</a></div>';}
    if(line!=="tadim"){html+='<p class="ek-help">Yine de emin olamadınız mı? <br><a href="'+BASE+'/uc-karakter-zeytinyagi-tadim-seti" target="_top">Tadım Seti’ni deneyin</a> veya <a href="https://wa.me/905302328803" target="_top">WhatsApp’tan sorun</a>.</p>';}
    else{html+='<p class="ek-help"><a href="https://wa.me/905302328803" target="_top">WhatsApp’tan bize danışın</a>, damak zevkinize göre birebir önerelim.</p>';}
    html+='<div class="ek-center"><button type="button" class="ek-restart" id="ekRestart">↺ Baştan başlayın</button></div>';
    const box=document.getElementById("ekResult");box.innerHTML=html;
    document.getElementById("ekRestart").addEventListener("click",()=>{
      isVisibleHeadArea("remove");
      for(const k in answers)delete answers[k];show("intro");
    });
  }
  show("intro", true);
})();

function isVisibleHeadArea(type) {
  const quizHead = document.querySelector(".ek-quiz-head");
  const quizEyebrow = document.querySelector(".ek-eyebrow");
  const quizDesc = document.querySelector(".ek-quiz-desc");
  quizHead.classList[type]("hidden");
  quizDesc.classList[type]("hidden");
  quizEyebrow.classList[type]("hidden");
}

document.getElementById('ekStart').addEventListener('click', function() {
  isVisibleHeadArea("add");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'quiz_start',
    'quiz_name': 'Zeytinyağı Seçici',
    'event_category': 'Quiz',
    'event_action': 'Start'
  });
});

document.addEventListener('click', function(e) {
  var btn = e.target.closest('.ek-add-basket');
  if (btn) {
    var productId = btn.getAttribute('data-productid');
    var variantId = btn.getAttribute('data-variantid');
    var uniqueId  = btn.getAttribute('data-unique');
    var productName  = btn.getAttribute('data-productName');
    var priceRaw = btn.getAttribute('data-productprice');
    var productPrice = priceRaw ? parseFloat(priceRaw.replace(/\./g, '').replace(',', '.')) : 0;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'quiz_add_to_cart',
      'ecommerce': {
        'currency': 'TRY',
        'value': productPrice,
        'items': [{
          'item_id': productId,
          'item_variant': variantId,
          'item_name': productName,
          'price': productPrice,
          'quantity': 1
        }]
      },
      'quiz_product_id': productId,
      'quiz_variant_id': variantId
    });
  }

  var altBtn = e.target.closest('.ek-alt-btn');
  if (altBtn) {
    var recommended = altBtn.getAttribute('data-recommended');
    var alternative = altBtn.getAttribute('data-alternative');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'quiz_view_alternative',
      'quiz_recommended_product': recommended,
      'quiz_alternative_product': alternative
    });
  }
});
