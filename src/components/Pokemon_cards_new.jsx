export const Pokemon = ({ pokemondata }) => {
    return (
        <li>
            <div className="pokemon_img_center">
                <img src={pokemondata.sprites.other.dream_world.front_default} className="pokemon_img" />
                <h2 className="pokemon_name_center">{pokemondata.name}</h2>
            </div>
            <div className="type_p">
                <div className="type_p_style">
                    {
                        pokemondata.types.map((cur_pokemon) => {
                            return cur_pokemon.type.name
                        }).join(", ")
                    }
                </div>
            </div>
            <div className="grid-three-cols">
                <p>
                    Height: {pokemondata.height}
                </p>
                <p>
                    Weight: {pokemondata.weight}
                </p>
                <p>
                    Speed: {pokemondata.stats[3].base_stat}
                </p>
            </div>
            <div className="grid-three-cols">
                <div>
                    Experience:<br />
                    {pokemondata.base_experience}
                </div>
                <div>
                    Attack:<br />
                    {pokemondata.stats[2].base_stat}
                </div>
                <div>
                    Abilities:<br />
                    {pokemondata.abilities.map((cur_pokemon) => {
                        return cur_pokemon.ability.name
                    }).slice(0, 1).join(", ")}
                </div>
            </div>
        </li>
    )
}