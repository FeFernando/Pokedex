let container = document.getElementById('card-container');
let cardPoke = document.getElementById('cardPoke')

for (let i = 1; i <= 50; i++) {
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${i}/`

    fetch(urlApi)
        .then((res) => res.json())
        .then((data) => {
            let card = document.createElement('div')
            let pokemonName = document.createElement('h2')
            let pokemonSprite = document.createElement('img')




            pokemonName.innerHTML = `${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`
            pokemonSprite.src = data.sprites.front_default;
            card.id = `card`
            card.appendChild(pokemonSprite)
            card.appendChild(pokemonName)


            container.appendChild(card);
        })
}


const pokeType = ['Fogo', 'Agua', 'Grama', 'Voador', 'Lutador', 'Veneno', 'Electro', 'Terra', 'Pedra', 'Psiquico', 'Gelo', 'Gelo', 'Inseto', 'Fatasmo', 'Ferro', 'Dragão', 'Sombrio', 'Fada'

]



function exibirTipos() {
    const tipo = document.getElementById('tipos')

    for (let i = 0; i < pokeType.length; i++) {

        const p = document.createElement('button')
        p.innerText = pokeType[i]

        tipo.appendChild(p)
    }



}

exibirTipos()

function buscarPokemon() {
    const namePokemon = document.getElementById('pokemonName').value
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
    container.innerHTML=''

    if (namePokemon === '' ){
        containerCard.style.display = 'block'
        
    }else {



    fetch(apiUrl)
        .then((res) => res.json())
        .then ((data) => {
            let card = document.createElement('div')
            let pokemonName = document.createElement('h2')
            let pokemonSprite = document.createElement('img')
            let containerCard = document.getElementById('card-container')

            cardPoke.innerHTML =''
            containerCard.style.display = 'none'
            pokemonName.innerHTML = `${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`
            pokemonSprite.src = data.sprites.front_default;
            card.id = `card`
            card.appendChild(pokemonSprite)
            card.appendChild(pokemonName)

            cardPoke.appendChild(card)

          

        })
        .catch((error) => {
            console.error('Erro ao buscar Pokémon:', error.message);
        });
    }

}

buscarPokemon()