const botaoBuscar = document.querySelector("#btn-buscar")
const inputPokemon = document.querySelector("#pokemonInput")
const resultado = document.querySelector("#resultado")

function getPokemonInput () {
    getPokemon(inputPokemon.value)
}

async function getPokemon(pokemon) {
    try {
        resultado.innerHTML = "carregado..."
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await resposta.json()
        
        renderizaPokemon(data)
    } catch (error) {

    }

}

function renderizaPokemon(data) {
    const { name,weight, height, types, sprites: { front_default } } = data
    const tipo = types[0].type.name

    resultado.innerHTML = `
    <img src = "${front_default}" alt ="imagem do ${name}">
    <h2>${name}</h2>
    <p>Peso: ${weight}</p>
    <p>Altura: ${height}</p>
    <p>Tipo: ${tipo}</p>
    `
}

botaoBuscar.addEventListener("click", getPokemonInput)