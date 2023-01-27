import { data_in_spanish } from './dataInSpanish/index.js'
import { data_in_english, anime_data_in_english } from './dataInEnglish/index.js'

export const words = {
  "es": {
    "basicMode": data_in_spanish,
    "animeMode": anime_data_in_english // TODO: spanish version 
  },
  "en": {
    "basicMode": data_in_english,
    "animeMode": anime_data_in_english
  }
}

export const oneWord = {
  "es": {
    "basicMode": "Computadora",
    "animeMode": "--"
  },
  "en": {
    "basicMode": "Computer",
    "animeMode": "--"
  }
}
