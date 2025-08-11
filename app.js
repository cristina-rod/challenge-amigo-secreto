//1- Crie um array para armazenar os nomes
let listaDeAmigos = [];

//2- Implementa uma função para agregar amigos
//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
function adicionarAmigo() {
  let nomeInserido = document.querySelector("input").value.trim();

  // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
  // Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
  if (nomeInserido == "") {
    alert("Por favor, insira um nome.");
  } // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
  else {
    listaDeAmigos.push(nomeInserido);
  }
  limparCampo();
  exibirLista();
}

// Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
function limparCampo() {
  nomeInserido = document.querySelector("input");
  nomeInserido.value = "";
}

// 3- Implementa uma função para atualizar a lista de amigos
// Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
function exibirLista() {
  // Encontra a lista (<ul>) onde o novo item será adicionado
  let lista = document.getElementById("listaAmigos");

  // Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
  lista.innerHTML = "";

  // Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
  // Orientação pessoal: Neste caso, o loop for percorre cada nome da lista de amigos. O contador i começa em 0 e é incrementado em 1 a cada iteração até que i seja igual ao tamanho da lista de amigos.
  for (let i = 0; i < listaDeAmigos.length; i++) {
    // Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista. Dica: para o passo a passo, pesquisar no google "criar elementos de lista li em javascript"
    // Cria um novo elemento HTML do tipo "li" e o armazena na variável li.
    let li = document.createElement("li");

    // Define o texto do novo item da lista.
    li.textContent = listaDeAmigos[i];

    // Adiciona o novo elemento <li> como um filho do elemento <ul>. O nome do amigo será adicionado ao final da lista.
    lista.appendChild(li);
  }
}

//4- Implementa uma função para sortear os amigos

// Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
function sortearAmigo() {
  // Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
  if (listaDeAmigos.length == 0) {
    alert("sua lista está vazia, insira um nome");
    return;
  }

  let gerarNome = Math.floor(Math.random() * listaDeAmigos.length);
  // Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
  let nomeSorteado = listaDeAmigos[gerarNome];

  // Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
}
