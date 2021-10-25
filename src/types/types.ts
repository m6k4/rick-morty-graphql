// DTO
export interface CharacterDTO {
    id: number;
    name: string;
    image: string;
    status: string;
    gender: string;
    species: string;
}

export interface FilterCharacter {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

export interface InfoDTO {
    count: number;
    pages: number;
    next: number;
    prev: number;
}

export interface GetCharactersResponse {
    data: {
        characters: {
            info: InfoDTO;
            results: Array<CharacterDTO>
        }
    }
}
