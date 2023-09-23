var firebaseConfig = {
    apiKey: "AIzaSyDXUrxjqRdRrb1ZFlieayfaK9dKOjiPC6A",
    authDomain: "smart-home-d4886.firebaseapp.com",
    databaseURL:
        "https://smart-home-d4886-default-rtdb.firebaseio.com",
    projectId: "smart-home-d4886",
    storageBucket: "smart-home-d4886.appspot.com",
    messagingSenderId: "231525698998",
    appId: "1:231525698998:web:5bfc6da9db3fa45b6dc517",
    measurementId: "G-12X2CZRSKP",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var nhietDo = document.getElementById("temp");
var dbRef = firebase.database().ref().child("Temp");
var doAm = document.getElementById("humid");
var dbRef2 = firebase.database().ref().child("Humid");
dbRef.on("value", (snap) => (nhietDo.innerText = snap.val()));
dbRef2.on("value", (snap) => (doAm.innerText = snap.val()));

// Thay đổi sự kiện nút button
btnOffOne.onclick = function () {
    document.getElementById('btnOne').style.left = '0'
    document.getElementById('imgOne').src = "./assets/img/camera-off.svg"
}

btnOnOne.onclick = function () {
    document.getElementById('btnOne').style.left = '43px'
    document.getElementById('imgOne').src = "./assets/img/camera-on.svg"
}

btnOffTwo.onclick = function () {
    document.getElementById('btnTwo').style.left = '0'
    document.getElementById('imgTwo').src = "./assets/img/door-closed-solid.svg"
}

btnOnTwo.onclick = function () {
    document.getElementById('btnTwo').style.left = '43px'
    document.getElementById('imgTwo').src = "./assets/img/door-open-solid.svg"
}

btnOffThree.onclick = function () {
    document.getElementById('btnThree').style.left = '0'
    document.getElementById('imgThree').src = "./assets/img/microphone-off.svg"
}

btnOnThree.onclick = function () {
    document.getElementById('btnThree').style.left = '43px'
    document.getElementById('imgThree').src = "./assets/img/microphone-on.svg"
}

btnOffFour.onclick = function () {
    document.getElementById('btnFour').style.left = '0'
    document.getElementById('imgFour').src = "./assets/img/volume-off-solid.svg"
}

btnOnFour.onclick = function () {
    document.getElementById('btnFour').style.left = '43px'
    document.getElementById('imgFour').src = "./assets/img/volume-on-solid.svg"
}

// Hiển thị thời gian
function sokhongconghia(value) {
    if (value < 10) {
        value = '0' + value
    }
    return value
}

function hienthithoigian() {
    const time = new Date()
    let date = sokhongconghia(time.getDate())
    let month = sokhongconghia(time.getMonth())
    let year = time.getFullYear()

    let hour = sokhongconghia(time.getHours())
    let minute = sokhongconghia(time.getMinutes())
    let second = sokhongconghia(time.getSeconds())

    document.getElementById('timeDate').innerHTML = `${date}/${month}/${year}`
    document.getElementById('timeCurrent').innerHTML = `${hour}:${minute}:${second}`

    setTimeout(hienthithoigian, 1000)
}

hienthithoigian()
