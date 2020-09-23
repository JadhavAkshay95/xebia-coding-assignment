const BaseUrl = "https://swapi.dev/api/";
const searchUrl = "people/?search=";
const searchPlanetUrl = "planets/?search=";

export const searchUserService = (username) =>
  fetch(`${BaseUrl}${searchUrl}${username}`);

export const searchPlanetService = (searchTerm) => fetch(`${BaseUrl}${searchPlanetUrl}${searchTerm}`);
