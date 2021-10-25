import axios from 'axios';
import { computed, ref } from 'vue';
import {
  CharacterDTO, FilterCharacter, GetCharactersResponse,
} from '@/types/types';
import Character from '../types/Character';
import Info from '../types/Info';

export default function useCharacter() {
  const characters = ref<Array<Character>>([]);
  const info = ref<Info>();

  async function fetch(page: number, filters: FilterCharacter): Promise<void> {
    await axios.post<GetCharactersResponse>(process.env.VUE_APP_API_URL, {
      query: `query getCharacters($page: Int!, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            image
            status
            gender
            species
          }
        }
      }`,
      variables: {
        page,
        filter: filters,
      },
    }).then((response) => {
      characters.value = response.data.data.characters.results.map(
        (dto: CharacterDTO) => Character.fromDTO(dto),
      );
      info.value = Info.fromDTO(response.data.data.characters.info);
    });
  }

  return {
    characters: computed(() => characters.value),
    info: computed(() => info.value),
    fetch,
  };
}
