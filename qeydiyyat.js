// Database yaradın (elementləri obyekt olan array)
let database = [];

// Formun submit hadisəsi
document.getElementById("qeydiyyatForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Inputların qiymətləri
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let yas = parseInt(document.getElementById("yas").value);
    let sifre = document.getElementById("sifre").value;
    let email = document.getElementById("email").value;
    let cins = document.querySelector('input[name="cins"]:checked').value;
    let hobiler = Array.from(document.querySelectorAll('input[name="hobiler[]"]:checked')).map(hobi => hobi.value);

    // Yaşı 18-dən aşağı olanları qeydiyyatdan keçirmək
    if (yas < 18) {
        alert("Yaşiniz 18-dən böyük olmalidir!");
        return;
    }

    // Ad və Soyad 3 hərfdən az olanları qeydiyyatdan keçirmək
    if (ad.length < 3 || soyad.length < 3) {
        alert("Ad və Soyad ən az 3 hərfdən ibarət olmalidir!");
        return;
    }

    // İnputları təmizləmək
    document.getElementById("ad").value = "";
    document.getElementById("soyad").value = "";
    document.getElementById("yas").value = "";
    document.getElementById("sifre").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="cins"]:checked').checked = false;
    hobiler.forEach(hobi => {
        document.getElementById("hobi-" + hobi.toLowerCase()).checked = false;
    });

    // Qeydiyyat obyektini yaratmaq
    let qeydiyyat = {
        Ad: ad,
        Soyad: soyad,
        Yaş: yas,
        Şifrə: sifre,
        Email: email,
        Cins: cins,
        Hobbilər: hobiler
    };

    // Database-ə əlavə etmək
    database.push(qeydiyyat);

    // Qeydiyyatları konsola çıxarmaq üçün funksiya
    function qeydiyyatlariGoster() {
        console.log(database);
    }

    // Element adlarını konsola çıxarmaq üçün funksiya
    function adlariGoster() {
        for (let i = 0; i < database.length; i++) {
            console.log(database[i].Ad);
        }
    }

    // Ad və Soyadları birlikdə konsola çıxarmaq üçün funksiya
    function adSoyadlariGoster() {
        for (let i = 0; i < database.length; i++) {
            console.log(database[i].Ad + " " + database[i].Soyad);
        }
    }

    // İki ədəd arasında əməliyyatlar üçün funksiya
    function emeliyyatlar(a, b) {
        let toplama = a + b;
        let cixma = a - b;
        let vurma = a * b;
        let bolme = a / b;
        console.log("Toplama: " + toplama);
        console.log("Çixma: " + cixma);
        console.log("Vurma: " + vurma);
        console.log("Bölmə: " + bolme);
    }

    // Tək və ya cüt olduğunu təyin edən funksiya
    function tekCütTeyinEt(eded) {
        if (eded % 2 === 0) {
            console.log(eded + " cüt ededdir.");
        } else {
            console.log(eded + " tək ededdir.");
        }
    }

    // Database-ə qeydiyyat əlavə etdikdə funksiyaları çağırmaq
    qeydiyyatlariGoster();
    adlariGoster();
    adSoyadlariGoster();
    emeliyyatlar(5, 3); // Ədədləri parametrlər kimi göndərmək
