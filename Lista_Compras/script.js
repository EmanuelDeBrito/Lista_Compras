// Selecionando o input
let input = document.querySelector("input");

// Selecionando a div que irá ter os itens da compra
let compras = document.querySelector("#compras");

// Adicionando um evento de teclado chamando a função adicionar_compra
input.addEventListener("keyup", adicionar_compra);

// Função de adicionar compra
function adicionar_compra(event) {
  // Verificando se a tecla apertada foi Enter
  if (event.key == "Enter") {
    // Se existir algum valor no input
    if (input.value) {
      // Criando elemento div
      let div = document.createElement("div");

      // Fazendo o conteúdo HTML que será posto dentro dela
      let html = `<div class="flex gap-5 p-5">
        
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="size-6 stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
                        
            <div class="text-white text-sm font-semibold">${input.value}</div>
        
            <div class="flex-1 flex justify-end" onclick="apagar(this)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 stroke-rose-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>                      
            </div>
        
        </div>
        
        <hr/>`;

      // Adicionando o conteúdo HTML dentro dela
      div.innerHTML = html;

      // Adicionando na div geral de itens essa div que irá conter a compra
      compras.append(div);

      // Zerando o valor do input
      input.value = "";
    }
  }
}

// Função de apagar compra, que tem como paramêtro o elemento clicado pelo usuário
function apagar(elemento) {
  // Selecionando a div principal que abriga os elementos
  let elemento_pai = elemento.parentElement.parentElement;

  // Apagando ela
  elemento_pai.remove();
}
