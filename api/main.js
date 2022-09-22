
const pokeBtn = document.querySelector('#poke-btn')
pokeBtn.addEventListener('click', getpokeData)

const formData = document.querySelector('#poke-input')
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokeName = event['path'][0][0]['value']

})

const pokeSection = document.querySelector('#poke-section')
const getpokeData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)

    const pokeName = document.createElement('h3')
    pokeName.innerText = data['name']
    pokeSection.append(pokeName)
    const pokeImg = document.createElement('img')
    pokeImg.setAttribute('src',data[sprites][front_default])
    pokeSection.append(pokeImg)

    name == formData


}

    