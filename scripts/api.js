async function getEpisodes() {
    const url = 'https://rickandmortyapi.com/api/episode';
    
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
}

// async function getOneEpisode() {
//     const url = `https://rickandmortyapi.com/api/episode/1`; 
    
//     const response = await fetch(url);
//     const result = await response.json();
//     return result;
// }

export { getEpisodes };