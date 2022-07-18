import { PokemonIdList, Pokemon } from '../types/types';
import { PokemonListDTO, buildPokemonIdList, PokemonDTO, buildPokemon } from './dtos';
const dataBaseUrl = 'https://pokeapi.co/api/v2/pokemon';
const imageBaseUrl = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world';

export const getAllIds = async (): Promise<PokemonIdList> => {
    try {
        const pokemonListResp = await fetch(dataBaseUrl);
        if(!pokemonListResp.ok) throw new Error('Fetching pokemon list failed');

        const data: PokemonListDTO = await pokemonListResp.json();

        return buildPokemonIdList(data);
    } catch(ex: any) {
        console.error(ex.message || 'Error from pokemon API');
        return { results: [] };
    }
}

export const getPokemonById = async (pokemonId: number): Promise<Pokemon | null> => {
    try {
        const pokemonResp = await fetch(`${dataBaseUrl}/${pokemonId}`);
        if(!pokemonResp.ok) throw new Error('Fetching pokemon data failed');

        const pokemonData: PokemonDTO = await pokemonResp.json();

        return buildPokemon(pokemonData, `${imageBaseUrl}/${pokemonId}.svg`);
    } catch(ex: any) {
        console.error(ex.message || 'Error from pokemon API');
        return null;
    }
}