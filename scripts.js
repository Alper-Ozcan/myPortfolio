let language = localStorage.getItem('language') || 'tr'; // Varsayılan dil
let jsonData = [];

function setLanguage(lang) {
    language = lang;
    localStorage.setItem('language', lang); // Seçilen dili yerel depolamada sakla
    loadAll();
}

function loadAll() {
    displayContent();
}

function displayContent() {
    //const currentPage = window.location.pathname;

    // Sayfaya göre içerik gösterimi

    document.querySelector('.navtr').style.display = language === 'tr' ? 'flex' : 'none';
    document.querySelector('.naven').style.display = language === 'en' ? 'flex' : 'none';
    //document.querySelector('.navlangswich').style.display = language === 'en' ? 'flex' : 'none';

    document.querySelector('.welcometr').style.display = language === 'tr' ? 'flex' : 'none';
    document.querySelector('.welcomeen').style.display = language === 'en' ? 'flex' : 'none';

    document.getElementById('hobies-tr').style.display = language === 'tr' ? 'flex' : 'none';
    document.getElementById('hobies-en').style.display = language === 'en' ? 'flex' : 'none';
    document.getElementById('goals-tr').style.display = language === 'tr' ? 'flex' : 'none';
    document.getElementById('goals-en').style.display = language === 'en' ? 'flex' : 'none';
    document.getElementById('about-tr').style.display = language === 'tr' ? 'flex' : 'none';
    document.getElementById('about-en').style.display = language === 'en' ? 'flex' : 'none';
    document.getElementById('contact-tr').style.display = language === 'tr' ? 'flex' : 'none';
    document.getElementById('contact-en').style.display = language === 'en' ? 'flex' : 'none';
    }

function onclicktr() {
    console.log("click tr");
    var myFormtr = document.getElementById('myFormtr');
    var myFormen = document.getElementById('myFormen');
    myFormtr.style.display = 'flex';
    myFormen.style.display = 'none';
}

function onclicken() {
    console.log("click en");
    var myFormtr = document.getElementById('myFormtr');
    var myFormen = document.getElementById('myFormen');
    myFormtr.style.display = 'none';
    myFormen.style.display = 'flex';
}

window.onload = function () {
    loadAll();
};

document.getElementById("myFormtr").addEventListener("submit", function(e) {
    e.preventDefault(); // Varsayılan form gönderimini engeller

    // Form gönderildi mesajını ekrana yazdırma
    const message = document.createElement("p");
    message.textContent = "Form başarıyla gönderildi!";
    message.style.color = "green";
    document.body.appendChild(message); // Mesajı sayfaya ekler

    // Formu temizleme
    e.target.reset(); // Form alanlarını temizler
    document.getElementById('myFormtr').style.display = 'none';

    // Mesajı belli bir süre sonra kaldırma (isteğe bağlı)
    setTimeout(() => {
        message.remove();
    }, 3000); // 3 saniye sonra kaldırır
});

document.getElementById("myFormen").addEventListener("submit", function(e) {
    e.preventDefault(); // Varsayılan form gönderimini engeller

    // Form gönderildi mesajını ekrana yazdırma
    const message = document.createElement("p");
    message.textContent = "Form Sended!";
    message.style.color = "green";
    document.body.appendChild(message); // Mesajı sayfaya ekler

    // Formu temizleme
    e.target.reset(); // Form alanlarını temizler
    document.getElementById('myFormen').style.display = 'none';

    // Mesajı belli bir süre sonra kaldırma (isteğe bağlı)
    setTimeout(() => {
        message.remove();
    }, 3000); // 3 saniye sonra kaldırır
});
