const pictureInnerContainer = document.querySelector('.picture-inner-container');
let arr = [];
for (let i = 1; i <= 15; i++) {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = 'assets/img/galery/galery' + [i] + '.jpg';
    img.alt = 'galery' + [i];
    arr.push(img);
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(arr);
for (let i = 1; i <= 15; i++) {
    pictureInnerContainer.append(arr[i]);
}
