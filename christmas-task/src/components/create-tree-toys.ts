import { constant } from "..";
import { createEl } from "./card";

export function createTreeToy (img:string, count:string){
    let treeToy = createEl('div', 'tree-toy');
    constant.treeToysContainer.append(treeToy);
    let imgToy = new Image(60, 60);
    imgToy.src=`${img}`;
    treeToy.append(imgToy);
    imgToy.classList.add('tree-toy-img');
    let treeToyCount = createEl('p', 'tree-toy-count');
    treeToy.append(treeToyCount);
    treeToyCount.textContent=`${count}`;

    imgToy.onmousedown = function(event) { // (1) отследить нажатие

        // (2) подготовить к перемещению:
        // разместить поверх остального содержимого и в абсолютных координатах
        imgToy.style.position = 'absolute';
        imgToy.style.zIndex = String(1000);
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.append(imgToy);
        // и установим абсолютно спозиционированный мяч под курсор
      
        moveAt(event.pageX, event.pageY);
      
        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
            imgToy.style.left = pageX - imgToy.offsetWidth / 2 + 'px';
            imgToy.style.top = pageY - imgToy.offsetHeight / 2 + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);
      
        // (4) положить мяч, удалить более ненужные обработчики событий
        imgToy.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          imgToy.onmouseup = null;
        };
        
        imgToy.ondragstart = function() {
            return false;
          };
      };

}

