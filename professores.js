let xhr = new XMLHttpRequest();
let elemento = document.getElementById("professores")

xhr.open('GET', 'https://hp-api.onrender.com/api/characters/staff')

xhr.send()

xhr.onload = function () {
    resposta = JSON.parse(xhr.responseText)
    console.log(resposta.length) 

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].image) {
            let node = document.createElement("div");
            node.setAttribute('class', 'card');
            node.setAttribute('style', 'width: 18rem;');

            let imageNode = document.createElement("img");
            imageNode.src = resposta[i].image;
            imageNode.setAttribute('class', 'card-img-top');

            let cardBodyNode = document.createElement("div");
            cardBodyNode.setAttribute('class', 'card-body');

            let cardTitleNode = document.createElement('h5');
            cardTitleNode.innerText = resposta[i].name;
            cardTitleNode.setAttribute('class', 'card-title');

            let cartTextNode = document.createElement('p');
            cartTextNode.innerText = "From house " + resposta[i].house + " and " + resposta[i].species + " specie."

            cardBodyNode.appendChild(cardTitleNode);
            cardBodyNode.appendChild(cartTextNode);

            node.appendChild(imageNode);
            node.appendChild(cardBodyNode);
            
            elemento.appendChild(node);
        }
        

        console.log(i)
        
      }
    
    //bandeira = resposta[0].flags.png
    
    //elementoparabandeira.innerHTML = "<img src='" + bandeira + "'alt='bandeira'></img>"

}