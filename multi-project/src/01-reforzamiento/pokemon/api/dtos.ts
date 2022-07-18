import { PokemonIdList, Pokemon } from '../types/types';

export interface PokemonListDTO {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItemDTO[];
}

export interface PokemonListItemDTO {
    name: string;
    url: string;
}

export interface PokemonDTO {
    abilities: Ability[];
    is_hidden: boolean;
    slot: number;
    id: number;
    name: string;
    weight: number;
}

interface Ability {
    name: string;
    url: string;
}




// builders

export const buildPokemonIdList = (data: PokemonListDTO): PokemonIdList => {
    if (!data || data.results.length === 0) return { results: []};
    const transformedData = data.results.map((poke: PokemonListItemDTO) =>  +poke.url.split('/').slice(-2)[0]);
    
    return { results: transformedData};
}

export const buildPokemon = (data: PokemonDTO, image: string): Pokemon | null => {
    if(!data) return null;

    const { id, name, weight, abilities } = data;

    return {
        id,
        name,
        weight,
        image,
        abilities: abilities.map(ability => ability.name)
    }
}