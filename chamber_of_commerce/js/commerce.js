function menuToggle() {
    document.querySelector('#nav').classlist.toggle("hide");
}

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#modify').textContent = document.lastModified;