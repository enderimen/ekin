async function copyCouponCode(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }

    try {
        await navigator.clipboard.writeText("HOŞGELDİN");

        const btn = document.getElementById("kuponKopyalaBtn");
        btn.innerHTML = '<span>Kopyalandı ✔</span>'

        setTimeout(function () {
          btn.innerHTML = '<span>Kodu Kopyala</span>'
        }, 2000);

    } catch (err) {
        alert("Kupon kodu kopyalanamadı.");
    }

    return false;
}