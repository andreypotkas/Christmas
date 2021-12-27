let downX:number;
let downY:number;
//Function handleDragStart(), Its purpose is to store the id of the draggable element.
export function handleDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    downX = e.pageX;
    downY = e.pageY; 
}

export function handleDragEnterLeave(e) {
    if(e.type == "dragenter") {
        e.target.className = "drag-enter" 
    } else {
        e.target.className = "";
    }
    
}

export function handleOverDrop(e) {
    e.preventDefault(); 
    if (e.type != "drop") {
        return; 
    }
    var draggedId = e.dataTransfer.getData("text");
    var draggedEl = document.getElementById(draggedId) as HTMLElement;
    
    if (draggedEl.parentNode == e.target) {
        e.target.className = "";
        moveAt(e.pageX, e.pageY);
        return; 
    }
    e.target.position='relative';
    (<HTMLElement>draggedEl.parentNode).removeChild(draggedEl);
    e.target.appendChild(draggedEl); 
    moveAt(e.pageX, e.pageY);
    function moveAt(pageX:number, pageY:number) {
        draggedEl.style.left = pageX - draggedEl.offsetWidth / 2 + 'px';
        draggedEl.style.top = pageY - draggedEl.offsetHeight / 2 + 'px';
    }
}




