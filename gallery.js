const imageViewer = document.querySelector('#image-viewer');
const close = document.querySelector('#x');
const imageClicked = document.querySelector('.imageClicked');
const imageplacement = document.querySelectorAll('.imageplacement');
const fullImage = document.querySelector('#full-image');
const images = document.querySelectorAll('.image');

let imagePOP = () => {
    imageplacement.forEach(img => {
        img.addEventListener('click', (event) => {
            imageViewer.style.display = "flex";
            fullImage.src = event.target.src;
          }); 
    });
  };

let closePOP = () => {
    close.addEventListener('click', () => {
        imageViewer.style.display = "none";
    })
}

imagePOP();
closePOP();