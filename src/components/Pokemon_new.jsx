import { use, useEffect, useState } from "react"
import { Pokemon } from "./Pokemon_cards_new"

export const Newpokemon = () => {
    const [pokemon, Setpokemon] = useState([])
    const [loading, Setloading] = useState(true)
    const [error, Seterror] = useState(null)
    const [search, Setsearch] = useState("")
    const API = "https://pokeapi.co/api/v2/pokemon?limit=52"

    const Fetchpokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()
            const current_url = data.results.map(async (cur_url) => {
                const res_2 = await fetch(cur_url.url)
                const data_2 = await res_2.json()
                return data_2
            })
            const newdata = await Promise.all(current_url)
            console.log(newdata)
            Setpokemon(newdata)
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

    const searchdata = pokemon.filter((cur_pokemon)=> cur_pokemon.name.toLowerCase().includes(search.toLowerCase()))

    if(loading){
        return(
            <>
                <h2 className="pokemon_heading">Loading</h2>
            </>
        )
    }

    if(error){
        return(
            <>
                <h2 className="pokemon_heading">{error.message}</h2>
            </>
        )
    }
    return (
        <>
            <section className="container">
                <h2 className="pokemon_heading">Let Catch Pokemon</h2>
                <div className="pokemon_search">
                    <input type="text" placeholder="Search Pokemon" value={search} className="pokemon_search input" onChange={(e)=> Setsearch(e.target.value)} />
                </div>
                <ul className="pokemon_grid">
                    {
                        searchdata.map((cur_pokemon) => {
                            return (
                                <>
                                    <Pokemon key={pokemon.id} pokemondata={cur_pokemon} />
                                </>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}