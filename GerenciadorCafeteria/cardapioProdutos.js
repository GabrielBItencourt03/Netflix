// Dados dos produtos
const produtos = {
    "Café Expresso": { preco: "R$ 5,00", tempo: "2 minutos" },
    "Cappuccino": { preco: "R$ 8,00", tempo: "5 minutos" },
    "Latte": { preco: "R$ 7,50", tempo: "4 minutos" },
    "Mocha": { preco: "R$ 9,00", tempo: "6 minutos" },
    "Macchiato": { preco: "R$ 6,50", tempo: "3 minutos" },
    "Suco de Laranja": { preco: "R$ 6,00", tempo: "3 minutos" },
    "Chá Gelado": { preco: "R$ 5,50", tempo: "2 minutos" },
    "Refrigerante": { preco: "R$ 4,00", tempo: "1 minuto" },
    "Água com Gás": { preco: "R$ 3,50", tempo: "1 minuto" },
    "Pão de Queijo": { preco: "R$ 3,00", tempo: "5 minutos" },
    "Croissant": { preco: "R$ 7,00", tempo: "7 minutos" },
    "Sanduíche Natural": { preco: "R$ 10,00", tempo: "8 minutos" },
    "Torrada com Manteiga": { preco: "R$ 4,50", tempo: "3 minutos" },
    "Bolo de Chocolate": { preco: "R$ 6,00", tempo: "4 minutos" },
    "Torta de Limão": { preco: "R$ 7,50", tempo: "5 minutos" },
    "Pudim": { preco: "R$ 5,00", tempo: "3 minutos" },
    "Sorvete": { preco: "R$ 8,00", tempo: "2 minutos" }
};

// Referências aos elementos do DOM
const nomeProdutoSelect = document.getElementById("nomeProduto");
const precoSpan = document.getElementById("preco");
const tempoPreparoSpan = document.getElementById("tempoPreparo");

// Evento para atualizar preço e tempo de preparo
nomeProdutoSelect.addEventListener("change", () => {
    const produtoSelecionado = nomeProdutoSelect.value;

    if (produtos[produtoSelecionado]) {
        precoSpan.textContent = produtos[produtoSelecionado].preco;
        tempoPreparoSpan.textContent = produtos[produtoSelecionado].tempo;
    } else {
        precoSpan.textContent = "Será exibido automaticamente com base no produto selecionado";
        tempoPreparoSpan.textContent = "Será exibido automaticamente com base no produto selecionado";
    }
}); 