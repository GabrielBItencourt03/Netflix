//1. Pega formulario pelo seu id 
const formCadastro = document.getElementById('cadastro');
//2. Adiciona um evento de submit(enviar) ao formulario 
formCadastro.addEventListener ('submit', function(evento) {
    evento.preventDefault(); //evita recarregar pagina
    //3. Pega valores dos campos do formuário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
 //4. Cria um objeto com os valores
 document.getElementById('resultado').innerHTML = 
`<p>Nome: ${nome}</p><br>
<p>Email: ${email}</p><br>
<p>Senha: ${senha}</p><br>
<p>CPF: ${cpf}</p><br>
<p>Telefone: ${telefone}</p><br>
<p>Data de Nascimento: ${nascimento}</p>`
});
