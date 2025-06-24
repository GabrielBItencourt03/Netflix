const form = document.getElementById('formParticipante');
const listaParticipantes = document.getElementById('listaParticipantes'); // Lista já existente no HTML

form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos do formulário
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const idade = document.getElementById("idade").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const evento1 = document.getElementById("evento").value;
    const aceitoRegulamento = document.getElementById("aceitoRegulamento").checked ? "Sim" : "Não";

    // Cria um novo item para exibir os dados do participante
    const novoParticipante = document.createElement("li");
    novoParticipante.innerText = `${nomeCompleto} - ${idade} - ${genero} - ${evento1} - ${aceitoRegulamento}`;

    // Adiciona o novo participante à lista
    listaParticipantes.appendChild(novoParticipante);

    // Limpa os campos do formulário
    form.reset();
});