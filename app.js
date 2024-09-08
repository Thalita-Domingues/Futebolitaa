function pesquisar() { 
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    //Se o campoPesquisa for vazia "sem nada" 
    // dois sinais == é sobre um teste de valor
    if (!campoPesquisa) {
       section.innerHTML = "<p> Nada foi encontrado. Digite uma informação válida! </p>"
      return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //Se no dado título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
             // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>    
                <a href=${dado.link} target="_blank">Mostrar mais</a>
            </div>
            `;
        }  
       
        
    }

 if (!resultados) {
  resultados = "Desculpe, resultado não encontrado!"
 }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}


