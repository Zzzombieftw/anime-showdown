import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/anime/'

export function searchAnime(title) {
  return fetch(`${BASE_URL}searchAnime/${title}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}

export async function getRandomShowsForGameStart() {
  return fetch(`${BASE_URL}getRandomShowsForGameStart`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function addToUserCollection(anime) {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
  return fetch(`${BASE_URL}addToUserCollection`, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
    body: JSON.stringify(anime)
  }, 
  {mode: "cors"})
  .then(res => res.json())
}

export function removeFromUserCollection(mal_id) {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
  return fetch(`${BASE_URL}removeFromUserCollection`, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
  }, 
  {mode: "cors"})
  .then(res => res.json())
}
