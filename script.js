function openRegistr(){
    document.getElementById("myRegistr").style.display = "block";
}

function closeRegistr(){
    document.getElementById("myRegistr").style.display = "none";
}

document.getElementById('file-upload').addEventListener('change', function(e) {
    var fileName = e.target.files[0] ? e.target.files[0].name : 'Добавить документ';
    document.getElementById('file-name').textContent = fileName;
});

function closeCookie(){
    document.getElementById("myCookie").style.display = "none";
}

let cookie = document.querySelector('.cookie-accepting')
if (!!cookie){
    cookie.classList.add('show');
}

function openCookie(){
    document.getElementById("myCookie").style.display = "flex";
}

function cookie_acceptingClose(){
     document.getElementById("cookie-accepting").style.display = "none";
}