//Aqui vamos pegar o form e a lista para exibir os filmes
const form = document.getElementById('formFilme');
const listaFilmes = document.getElementById('listaFilmes');
//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function(evento) {
    evento.preventDefault();//evita recarregar a pagina
    //Pega os valores dos campos do formulário

    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    //Criar um novo item na lista de filmes
    const novoFilme = document.createElement("li");
    novoFilme.innerText = `${titulo} -- ${ano} -- ${genero}`;
    //adiciona o novo ite na lista
    listaFilmes.appendChild(novoFilme);
    //Limpar os campos do formulário
    form.reset();
});
    

