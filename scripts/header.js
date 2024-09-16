/**
conteiner tem header 
header tem img & ul>li>button.entrar $button.cadastrar

*/

/**Busca dinamicamente o que se quer encontar. GetElement por class ou id e trás uma lista de elementos com class ou id definidos*/
function getElement(finder,value){
    switch(finder){
        case "class":
            return document.getElementsByClassName(value);
        case "id":
            return document.getElementById(value);
        default:
            return document.getElementById(value);
    }
}

/*Cria o elemento a partir da Tag*/ 
function createElement(elementTag){
    return document.createElement(elementTag);
}

/*Adiciona uma classe existe/nova a um elemento criado*/ 
function appendClass(element,className){
    element.classList.add(className);
}

/*Criação do conteúdo, definindo os elementos que serao criados, seu conteudo e classe, filhos e pais*/ 
function createHeader(){
    const divHeader = createElement("div");
    const link = createElement("a");
    const img = createElement("img");
    const ul = createElement("ul");
    const liEntrar = createElement("li");
    const liCadastrar = createElement("li");
    const buttonEntrar = createElement("button");
    const buttonCadastrar = createElement("button");

    buttonEntrar.textContent = "Entrar";
    buttonCadastrar.textContent = "Cadastrar";
    img.src="assets/images/logo.png";

    appendClass(buttonEntrar,"entrar");
    appendClass(buttonCadastrar,"cadastrar");
    appendClass(divHeader,"header");

    liEntrar.appendChild(buttonEntrar);
    liCadastrar.appendChild(buttonCadastrar);
    ul.appendChild(liEntrar);
    ul.appendChild(liCadastrar);

    link.appendChild(img);

    divHeader.appendChild(link);
    divHeader.appendChild(ul);

    const conteiner = getElement("class","conteiner")[0];

    conteiner.appendChild(divHeader);
}

document.addEventListener("DOMContentLoaded", function () {
    createHeader();
});