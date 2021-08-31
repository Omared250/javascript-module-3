import { getEpisodes } from "./api.js";

const root = document.getElementById('root');

function creatHeader() {
    const headerContainer = document.createElement('div');
    const imageTitle = document.createElement('img');
    imageTitle.src = 'images/image4.png'
    headerContainer.appendChild(imageTitle);
    return headerContainer;
}

// async function buttonEvent() {
//     const url = 'https://rickandmortyapi.com/api/episode';
//     fetch(url)
//     .then(response => response.json())
//     .then(json => {
        
//     })
// }

function sideBar(episodes) {
    const episodesContainer = document.createElement('div');

    episodes.map(({id}) => {
        const episodeId = document.createElement('p');
        episodeId.textContent = `Episode ${id}`;
        episodesContainer.appendChild(episodeId);
    });
    
    //button
    const buttonEl = document.createElement('input');
    buttonEl.type = 'button';
    buttonEl.value = 'Load Episodes'
    // buttonEl.addEventListener('click', (e) => {
        
    // })
    episodesContainer.appendChild(buttonEl);

    return episodesContainer;
}

async function getEpisodeInfo() {
    const url = 'https://rickandmortyapi.com/api/episode/1';

    fetch(url)
    .then(response => response.json())
    .then(json => {
        //creating episode info container
        const episodeInfoContainer = document.createElement('div');

        //creating episode name
        const episodeName = document.createElement('h2');
        episodeName.textContent = json.name;
        episodeInfoContainer.appendChild(episodeName);

        //creating espisode date
        const episodeDate = document.createElement('p');
        episodeDate.textContent = `${json.air_date} | ${json.episode}`
        episodeInfoContainer.appendChild(episodeDate);

        //creating character images 
        let characters = json['characters'];

        characters.forEach(characterLink => {
            fetch(characterLink)
            .then(response => response.json())
            .then(json => {
                const character = document.createElement('img');
                character.src = json.image;
                episodeInfoContainer.appendChild(character); 
            })          
        });

        root.appendChild(episodeInfoContainer);
        return episodeInfoContainer;
    })
}

root.appendChild(creatHeader());
root.appendChild(sideBar(await getEpisodes()));
getEpisodeInfo();