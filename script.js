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