
const form = document.getElementById('formSelecao');
const listaSelecao = document.getElementById('listaSelecao');
form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nomeSelecoes = document.getElementById("selecoes").value;
    const continente = document.getElementById("continente").value;
    const numeroTitulos = document.getElementById("numeroTitulos").value;
    const jogadorDestaque = document.getElementById("jogadorDestaque").value;
    const novaSelecao = document.createElement("li");
    novaSelecao.innerText = `${nomeSelecoes} -- ${continente} -- ${numeroTitulos} -- ${jogadorDestaque}`;
    listaSelecao.appendChild(novaSelecao);
    form.reset();
});
    
