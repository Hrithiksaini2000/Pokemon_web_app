import { useEffect, useState } from "react"
import "../index.css"
import { Pokemoncards } from "./Pokemoncards"
export const Pokemon = () => {
    const [pokemon, Setpokemon] = useState([])
    const [loading, Setloading] = useState(true)
    const [error,Seterror] = useState(null)
    const [search, Setsearch] = useState("")

    const API = "https://pokeapi.co/api/v2/pokemon?limit=40"

    const Fetchpokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()
            // console.log(data)
            const current_pokemon = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                return data
            })
            // console.log(current_pokemon)
            // Promise all use for all fetching the apis of multiple promises 

            const detailedresponses = await Promise.all(current_pokemon)
            console.log(detailedresponses)
            Setpokemon(detailedresponses)
            Setloading(false)
        } catch (error) {
            console.log(error)
            Setloading(false)
            Seterror(error)
        }
    }
    useEffect(() => {
        Fetchpokemon()
    }, [])

    // Search Functionality for pokemon search
    const searchdata = pokemon.filter((curPokemon)=> curPokemon.name.toLowerCase().includes(search.toLowerCase()))

    if(loading){
        return(
            <div className="container">
                <h1 className="pokemon_heading">Loading...</h1>
            </div>
        )
    }

    if(error){
        return(
            <div className="container">
                <h1 className="pokemon_heading">{error.message}</h1>
            </div>
        )
    }
    return (
        <>
            <section className="container">
                <header>
                    <h1 className="pokemon_heading">Let Catch Pokemon</h1>
                </header>
                <div className="pokemon_search">
                <input type="text" placeholder="search pokemon" value={search} onChange={(e)=> Setsearch(e.target.value)}/>
                </div>
                <ul className="pokemon_grid">
                    {
                        /* pokemon.map((curPokemon)=>{ */
                        searchdata.map((curPokemon)=>{
                            return(
                                <>
                                <Pokemoncards key={curPokemon.id} Pokemondata={curPokemon} />
                                </>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}