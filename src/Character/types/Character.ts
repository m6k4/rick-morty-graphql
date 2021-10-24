import { CharacterDTO } from '@/types/types';

export default class Character {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly gender: string,
    private readonly species: string,
    private readonly status: string,
    private readonly imageUrl: string,
  ) {}

  static fromDTO(dto: CharacterDTO): Character {
    return new Character(
      dto.id,
      dto.name,
      dto.gender,
      dto.species,
      dto.status,
      dto.image,
    );
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getGender(): string {
    return this.gender;
  }

  getSpecies(): string {
    return this.species;
  }

  getStatus(): string {
    return this.status;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }
}
