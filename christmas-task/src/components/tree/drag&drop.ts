
//Function handleDragStart(), Its purpose is to store the id of the draggable element.
export function handleDragStart(e) {
    e.dataTransfer.setData("text", e.target.id); //note: using "this" is the same as using: e.target.
    console.log('1');
}//end function

export function handleDragEnterLeave(e) {
    if(e.type == "dragenter") {
        e.target.className = "drag-enter" 
    } else {
        e.target.className = "" //Note: "this" referces to the target element where the "dragenter" event is firing from.
    }
    console.log('2');
}//end function

export function handleOverDrop(e) {
    e.preventDefault(); 
    if (e.type != "drop") {
        return; 
        console.log('1');
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




