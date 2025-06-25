var form = document.getElementById('formCadastroCliente');
var listaClientes = document.createElement('ul'); // Lista para exibir os clientes cadastrados
document.body.appendChild(listaClientes); // Adiciona a lista ao final do body

form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recarregar a página

    // Pega os valores dos campos do formulário
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var nivelFidelidade = document.querySelector('input[name="nivelFidelidade"]:checked').value;
    var promocoesEmail = document.getElementById("promocoesEmail").checked ? "Sim" : "Não";

    // Pega os tipos de café preferidos
    var tiposCafe = [];
    document.querySelectorAll('input[name="tiposCafe"]:checked').forEach(function(cafe) {
        tiposCafe.push(cafe.value);
    });

    // Criar um novo item na lista de Clientes
    var novoCliente = document.createElement("li");
    novoCliente.innerText = `Nome: ${nomeCompleto}, E-mail: ${email}, Telefone: ${telefone}, Data de Nascimento: ${dataNascimento}, Fidelidade: ${nivelFidelidade}, Promoções: ${promocoesEmail}, Cafés Preferidos: ${tiposCafe.join(", ")}`;

    // Adiciona o novo item na lista
    listaClientes.appendChild(novoCliente);

    // Limpar os campos do formulário
    form.reset();
});