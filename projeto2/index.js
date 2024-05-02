var modal = document.querySelector('.modal-container')

function createElementImg(props){
    const img = document.createElement('img');
    img.setAttribute('src',props)
    return img;
}

function createModalElement(item){

    var intoModal = document.querySelector('.modal')
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = "flex";
        console.log(item)
        var imgContent = createElementImg(item);
        intoModal.appendChild(imgContent)
    }
}

function handleOpenImageInModal(e){
    console.log(e.src);
    const imgSelected = e.src;
    createModalElement(imgSelected)
}



modal.addEventListener('click', () => {
    // Escondendo o modal ao clicar nele
    var intoModal = document.querySelector('.modal')
    intoModal.innerHTML = '';
    modal.style.display = 'none';
});