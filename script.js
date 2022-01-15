gerarValorAletorio = () => {
	return Math.floor(Math.random() *671);
};

chamarApi = (numeroAleatorio) => {
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    });
}
atualizarTela = () => {
    pegarPersonagemChamarApiAlterarDadosImagem(1);
    pegarPersonagemChamarApiAlterarDadosImagem(2);
    pegarPersonagemChamarApiAlterarDadosImagem(3);
}

pegarPersonagemChamarApiAlterarDadosImagem = (idImagem) => {
    let numeroAleatorio = gerarValorAletorio();

    chamarApi(numeroAleatorio)
        .then(
            (respostadaApi) => respostadaApi.json())
        });
}

alterarDadosImagem = (data, idImagem) => {
    let imagem = document.querySelector('#img' + idImagem);
    let detalhesContainer = document.querySelector('#detalhes-container' + idImagem);
    let nomeDoPersonagem = detalhesContainer.querySelector('#nome');
    let especie = detalhesContainer.querySelector('#especie');
    let condicao = detalhesContainer.querySelector('#status');
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.species;
    condicao.innerHTML = data.status;

}
