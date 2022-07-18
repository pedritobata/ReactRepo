import { Pokemon } from '../types/types';

type Props = {
    data: Pokemon[];
}

const PokemonList = ({ data }: Props) => {

    return (
        <div>
            <ul>
                {data.map(pokemon => <li>{pokemon.name}</li>)}
            </ul>
        </div>
    );
}
export default PokemonList;