const url= "https://pokeapi.co/v2/pokemon";

function carregarPokemon(){
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        const listaPokemons = data.results;

        listaPokemons.forEach(pokemon => {
            featch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    const pokemonTypes = pokemonData.types.map(typeInfo => {
                        typeInfo.type.name
                    })

                    document
                    .getElementById('pokemon__section')
                    .innerHTML += ``
            })
        })
    })
}

carregarPokemon();

main.innerHTML = `
<div>
                <p>#001</p>
                <p>Grass</p>
                <p>Polson</p>
                <h1>Bulbasaur</h1>
                <p>A strange seed was planted on its back at birth. the plant sprouts and grows with this pokémon.</p>
                <p>Know more</p>
                <img src="images/1 1.svg" alt="">
            </div>
`