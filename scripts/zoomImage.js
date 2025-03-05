const imgs = document.querySelectorAll('.gallery-photo img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalText = document.getElementById('modalText');

Array.from(imgs).forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";  
        modalImg.src = img.src;       
        modalImg.alt = img.alt;        
        modalText.innerText = img.alt; 
    });
});

modal.style.display = 'none';

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});