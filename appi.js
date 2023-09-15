const form = document.querySelector(".csForm");
form.addEventListener("submit", function (0) {
    e.preventDefault();

    let obj = {
        ID: 1,
        ad: "aliheydar",
        soyad: "babayev",
        password: "1234",
        adress: "1",
    };
    //appi post atmaq
    axios.post("https://localhost:3000/users", obj);
});

const form.Delete = document.querySelector(".csFormDelete");
formDelete.addEventListener("submit", function(0){
    e.preventDefault();
});

