if (localStorage.getItem("jsonCarregado") != 'true') {
    carregarConteudo();
}

function carregarConteudo() {
    fetch("./dados/jogos.json")
        .then((res) => {
            return res.json();
        })
        .then((conteudo_json) => {
            // Aqui você armazena o objeto JSON como uma string no localStorage
            localStorage.removeItem("jogos");
            localStorage.setItem("jogos", JSON.stringify(conteudo_json));
            localStorage.setItem("jsonCarregado", 'true');
            popularHTML();
        })
        .catch((erro) => {
            console.error("Erro ao carregar as informações:", erro);
        });
}


