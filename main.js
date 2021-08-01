const pokemonDiv = document.querySelector(".pokemonDiv")
const pokemonCard = document.querySelector(".pokemon")
const templateCard= document.querySelector(".templateCard")
const fragment = document.createDocumentFragment()
const pokemonNumber = 170

const btn = document.getElementById("btn")




window.addEventListener("DOMContentLoaded",()=>{
    setFetch()
})


const setFetch = async () =>{
     for(let i=1;i<pokemonNumber;i++){
        await fetchAPI(i)
    }

}


const fetchAPI = async(i)=>{
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${i}`
    const res = await fetch(API_URL)
    const data = await res.json()

setPokemons(data)

}

const setPokemons = (data)=>{

  templateCard.querySelector("h3").textContent = data.name
  templateCard.querySelector("p").textContent = data.id
  templateCard.querySelector("img").setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)

  const clone = templateCard.cloneNode(true)
  fragment.appendChild(clone)
  pokemonDiv.appendChild(fragment)
    
    

}

btn.addEventListener("click",e=>{
    
    const input  = document.getElementById("input").value
    filterPokemon(input)
})

const filterPokemon = async(input) =>{
    
    if(input !== ""){
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${input}`
        const res = await fetch(API_URL)
        const data = await res.json()
        pokemonDiv.innerHTML =""
        setPokemons(data)
        
        }
    else{
        pokemonDiv.innerHTML =""
        setFetch()
       
    }

}


