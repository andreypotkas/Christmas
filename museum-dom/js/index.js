window.onload = function () {
    document.getElementById('showButton').onclick = function () {
    if(document.getElementById('form-buy').style.display == 'none') {
    document.getElementById('form-buy').style.display = 'block'
    } else {
    document.getElementById('form-buy').style.display = 'none'
    }
};
document.getElementById('closeForm').onclick = function () {
    if(document.getElementById('form-buy').style.display == 'none') {
    document.getElementById('form-buy').style.display = 'block'
    } else {
    document.getElementById('form-buy').style.display = 'none'
    }
};
document.getElementById('menu').onclick = function () {
    if(document.getElementById('menushka').style.display == 'none') {
    document.getElementById('menushka').style.display = 'block'
    document.getElementById('welcometitle').style.display = 'none'
    } else {
    document.getElementById('menushka').style.display = 'none'
    document.getElementById('welcometitle').style.display = 'block'
    }
};
document.getElementById('menu1').onclick = function () {
    if(document.getElementById('menushka1').style.display == 'none') {
    document.getElementById('menushka1').style.display = 'block'
    document.getElementById('welcometitle').style.display = 'none'
    document.getElementById('museumbg').style.display = 'none'
    document.getElementById('slider').style.display = 'none'
    } else {
    document.getElementById('menushka1').style.display = 'none'
    document.getElementById('welcometitle').style.display = 'block'
    document.getElementById('museumbg').style.display = 'block'
    document.getElementById('slider').style.display = 'block'
    }
}
}