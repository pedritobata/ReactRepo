import { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import styles from './home.module.css';
import { Pokemon } from '../types/types';
import { getAllIds, getPokemonById } from '../api/api';

const Home = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const getPokemonList = async () => {
        const pokemonIds = await getAllIds();
        const pokemons = await Promise.allSettled(pokemonIds.results.map(id => getPokemonById(id)));
        const pokemonsSuccess = pokemons.filter(({status}) => status === 'fulfilled');
        
        setPokemonList(pokemonsSuccess.map((poke) => (poke as PromiseFulfilledResult<Pokemon>).value));
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <div className={styles.home}>
            <h2 className={styles.title}>Pokemon API</h2>
            <PokemonList data={pokemonList} />
        </div>
    )
}

export default Home;