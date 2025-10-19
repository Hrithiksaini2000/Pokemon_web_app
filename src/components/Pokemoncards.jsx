export const Pokemoncards = ({ Pokemondata }) => {
    return (
        <>
            <li>
                <div>
                    <div className="pokemon_img_center">
                        <img className="pokemon_img" src={Pokemondata.sprites.other.dream_world.front_default} alt={Pokemondata.name} />
                    </div>
                    <h2 className="pokemon_name_center">{Pokemondata.name}</h2>
                    <div className="type_p">
                        <p className="type_p_style">
                            {Pokemondata.types.map((curPokemon) => curPokemon.type.name).join(', ')}
                        </p>
                    </div>
                    <div className="grid-three-cols">
                    <p>
                        <span>Height: {Pokemondata.height}</span>
                    </p>
                    <p>
                        <span>Weight: {Pokemondata.weight}</span>
                    </p>
                    <p>
                        <span>Speed: {Pokemondata.stats[5].base_stat}</span>
                    </p>
                    </div>
                           <div className="grid-three-cols">
                    <div>
                        Experience: 
                        <div>
                        {Pokemondata.base_experience}
                        </div>
                    </div>
                    <div>
                        Attack: 
                        <div>
                        {Pokemondata.stats[1].base_stat}
                        </div>
                    </div>
                    <div>
                        Abilities: 
                        <div>
                       {
                        Pokemondata.abilities.map((abilityType)=>abilityType.ability.name).slice(0,1).join(",")
                       }
                        </div>
                    </div>
                    </div>
                </div>
            </li>
        </>
    )
}