import axios from 'axios';
import { computed, ref } from 'vue';
import { CharacterDTO } from '@/types/types';
import Character from '../types/Character';

export default function useCharacter() {
  const allCharacters = ref<Array<Character>>([]);

  async function fetch(ids: Array<number>): Promise<void> {
    console.log(ids);
    const result = await axios({
      method: 'POST',
      url: 'https://rickandmortyapi.com/graphql',
      data: {
        query: `
            {
              charactersByIds(ids: [1, 2]) {
                id
                name
                image
                status
                gender
                species
                }
            }
        `,
      },
    }).then((response: any) => {
      console.log(response);
      allCharacters.value = response.data.data.charactersByIds.map(
        (dto: CharacterDTO) => Character.fromDTO(dto),
      );
    });
    console.log(allCharacters.value, 'RESULT');
  }

  return {
    allCharacters: computed(() => allCharacters.value),
    fetch,
  };
}
