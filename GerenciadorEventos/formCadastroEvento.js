const form = document.getElementById('formEvento');
const listaEventos = document.getElementById('listaEventos');

form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recarregar a página

    // Pega os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const modalidade = document.getElementById("modalidade").value;
    const local = document.getElementById("local").value;
    const eventoAberto = document.getElementById("eventoAberto").checked ? "Sim" : "Não";

    // Criar um novo item na lista de Eventos
    const novoEvento = document.createElement("li");
    novoEvento.innerText = `${nome} - ${data} - ${modalidade} - ${local} - Aberto ao público: ${eventoAberto}`;

    // Adiciona o novo item na lista
    listaEventos.appendChild(novoEvento);

    // Limpar os campos do formulário
    form.reset();
});
