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