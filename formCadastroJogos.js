//Aqui vamos pegar o form e a lista para exibir os Jogos
const form = document.getElementById('formJogos');
const listaJogos = document.getElementById('listaJogos');
//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function(evento) {
    evento.preventDefault();//evita recarregar a pagina
    //Pega os valores dos campos do formulário

    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const plataforma = document.getElementById("plataforma").value;
    const genero = document.getElementById("generoJogo").value;
    //Criar um novo item na lista de Jogos
    const novoJogo = document.createElement("li");
    novoJogo.innerText = `${titulo} -- ${ano} -- ${plataforma} -- ${genero}`;
    //adiciona o novo ite na lista
    listaJogos.appendChild(novoJogo);
    //Limpar os campos do formulário
    form.reset();
});
    
