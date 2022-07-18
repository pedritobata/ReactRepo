export interface Pokemon {
    id: number;
    name: string;
    image: string;
    abilities: string[];
    weight: number;
}

export interface PokemonIdList {
    results: number[];
}
