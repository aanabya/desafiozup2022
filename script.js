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
            (respostaDaApi) => respostaDaApi.json())
            .then((data) => {
                alterarDadosImagem(data,idImagem);
        });
}

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}
alterarDadosImagem = (data, idImagem) => {
    const imagem = document.querySelector('#img' + idImagem);
    const detalhesContainer = document.querySelector('#detalhes-container' + idImagem);
    const nomeDoPersonagem = detalhesContainer.querySelector('#nome');
    const especie = detalhesContainer.querySelector('#especie');
    const condicao = detalhesContainer.querySelector('#status');   
    imagem.src = data.image;
    imagem.alt = data.name; 
    imagem.title = data.name;   
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.species;
    condicao.innerHTML = traduzirCondicao(data);

}

botao.onclick = atualizarTela;