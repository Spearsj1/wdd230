function menuToggle() {
    document.querySelector('#mainNav').classList.toggle("hide");
}

document.querySelector('#year').textContent = new Date().getFullYear();

const modifyDate = new Date();

const options = {weekday: "long", day: "numeric" , month: "long", year: "numeric"};

document.querySelector('.modify').textContent = modifyDate.toLocaleDateString('en-UK', options);