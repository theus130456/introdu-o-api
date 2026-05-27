const botao = document.querySelector("#busca-cep")
const resultado = document.querySelector(".resultado")
const inputCep = document.querySelector("#cep")

function getValueInput() {
    const cep = inputCep.value


    getCep(cep)

}

function renderizaData(data) {
    const {city, address, district, state} = data

    resultado.innerHTML = `
    <p>Cidade: ${city} - ${state}</p>
    <p>Bairro: ${district}</p>
    <p>Rua: ${address}</p>
    `
}

async function getCep(cep) {
    const resposta = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    const data = await resposta.json()

    renderizaData(data)
}

botao.addEventListener("click", getValueInput)