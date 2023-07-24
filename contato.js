const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



let nome = document.getElementById('name')
let mail = document.getElementById('email')
let selecao = document.getElementById('selection')
let comentarios = document.getElementById('comments')

let listaNomes = JSON.parse(localStorage.getItem('name')) || []
let listaEmail = JSON.parse(localStorage.getItem('email')) || []
let listaSelecao = JSON.parse(localStorage.getItem('selection')) || []
let listaComentarios = JSON.parse(localStorage.getItem('comments')) || []


function salvar() {
    console.log(nome.value)
    console.log(mail.value)
    console.log(selecao.value)
    console.log(comentarios.value)

    listaNomes.push(nome.value)
    localStorage.setItem('name', JSON.stringify(listaNomes))

    listaEmail.push(mail.value)
    localStorage.setItem('email', JSON.stringify(listaEmail))

    listaSelecao.push(selecao.value)
    localStorage.setItem('selection', JSON.stringify(listaSelecao))

    listaComentarios.push(comentarios.value)
    localStorage.setItem('comments', JSON.stringify(listaComentarios))

    alert("Olá, " + nome.value + ", sua mensagem foi enviada!")

    }


    

