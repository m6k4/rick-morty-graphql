import axios from 'axios';
import { computed, ref, Ref } from 'vue';
import {
  CharacterDTO, FilterCharacter, GetCharactersResponse,
} from '@/types/types';
import Character from '../types/Character';
import Info from '../types/Info';

export default function useCharacter(): {
  characters: Ref<Array<Character>>,
  isLoading: Ref<boolean>,
  info: Ref<Info>,
  fetch: (page: number, filters: FilterCharacter) => Promise<void>,
  } {
  const characters = ref<Array<Character>>([]);
  const info = ref<Info>();
  const isLoading = ref<boolean>(false);

  async function fetch(page: number, filters: FilterCharacter): Promise<void> {
    isLoading.value = true;
    await axios.post<GetCharactersResponse>('https://rickandmortyapi.com/graphql', {
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
    isLoading.value = false;
  }

  return {
    characters: computed(() => characters.value as Character[]),
    isLoading: computed(() => isLoading.value),
    info: computed(() => info.value),
    fetch,
  };
}
