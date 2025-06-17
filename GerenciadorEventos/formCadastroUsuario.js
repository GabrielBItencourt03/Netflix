const form = document.getElementById('formParticipante');
const listaParticipantes = document.getElementById('listaParticipantes'); // Lista já existente no HTML

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos do formulário
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const idade = document.getElementById('idade').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const evento = document.getElementById('evento').value;
    const aceitoRegulamento = document.getElementById('aceitoRegulamento').checked ? "Sim" : "Não";

    // Cria um novo item para exibir os dados do participante
    const novoParticipante = document.createElement('li');
    novoParticipante.innerText = `Nome: ${nomeCompleto}, Idade: ${idade}, Gênero: ${genero}, Evento: ${evento}, Regulamento Aceito: ${aceitoRegulamento}`;

    // Adiciona o novo participante à lista
    listaParticipantes.appendChild(novoParticipante);

    // Limpa os campos do formulário
    form.reset();
});