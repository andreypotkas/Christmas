

const messageContainer = document.getElementById('message-container') as HTMLLIElement;
const message = document.getElementById('message') as HTMLLIElement;
const btnCloseMessage = document.getElementById('close-message');

export function showMessage (messageText:string){
    messageContainer.style.display='block';
    messageContainer.style.position='fixed';
    message.innerHTML=`${messageText}`;
    btnCloseMessage?.addEventListener('click', ()=>{
        closeMessage();
    })
}

export function closeMessage (){
    messageContainer.style.display='none';
}