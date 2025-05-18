const myButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

myButton.addEventListener('click' , function() {
    menu.hidden = !menu.hidden; //the !menu means do the opposite, the false
});

const gallery = document.querySelector(".gallery");
const modal = document.querySelector('dialog');

document.body.appendChild(modal);

gallery.addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target.tagName !== 'IMG') return;
    const enlargeImg = modal.querySelector('img');
    enlargeImg.alt = event.target.alt;
    enlargeImg.src = event.target.src;
    modal.showModal();
});

const closeX = document.querySelector('.close-viewer');
modal.addEventListener('click', (event) => {  //to close the the modal
  if (event.target === modal) {
    modal.close();
  }
})

//modal.addEventListener('click', (event) => {
  //if (event.target === closeX) {
    //  modal.close();
    //}
//})