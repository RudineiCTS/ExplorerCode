const formulario = document.querySelector('.form-container')

formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    const usuario ={
        assunto:'',
        email:'',
        mensagem:'',
        nome:'',
    }
    const formData = new FormData(formulario)

    for (let [key, value] of formData.entries()){
        usuario[key] = value
    }

    if(usuario.assunto === '' && usuario.nome === '' && usuario.mensagem === ''){
          return alert('Preencha todos os campos!')

    }else{
        if(!usuario.email.includes('@') && !usuario.email.includes('.com')){
            return alert('insira um email valido!')
        }
    }
    console.log(usuario)
    return alert('dados "salvos"!')

  
})

