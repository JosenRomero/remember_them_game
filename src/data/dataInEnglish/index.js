import { animalsInEnglish } from './basic/animalsInEnglish.js'
import { bodyPartsInEnglish } from './basic/bodyPartsInEnglish.js'
import { foodsInEnglish } from './basic/foodsInEnglish.js'
import { animeInEnglish } from './anime/animeInEnglish.js'
import { firstGenPokemonInEnglish } from './pokemon/firstGenPokemonInEnglish.js'

export const basic_data_in_english = [
  ...animalsInEnglish,
  ...bodyPartsInEnglish,
  ...foodsInEnglish
]

export const anime_data_in_english = [...animeInEnglish]

export const pokemon_data_in_english = [...firstGenPokemonInEnglish]
