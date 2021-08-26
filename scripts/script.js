import { getEpisodes, getOneEpisode } from './api.js'

const mainContainer = document.getElementById('root');

function createHeader() {
    const headerContainer = document.createElement('div');
    const showTitle = document.createElement('img');

    showTitle.src = 'images/image4.png'

    mainContainer.appendChild(headerContainer);
    headerContainer.appendChild(showTitle);
}

createHeader()

async function getEpisodesName() {
    const sideBarContainer = document.createElement('div');
    const listOfEpisodes = document.createElement('ul');

    sideBarContainer.appendChild(listOfEpisodes);
    mainContainer.appendChild(sideBarContainer);

    const episodes = await getEpisodes();

    episodes.forEach(({ name }) => {
        const episode = document.createElement('li');
        episode.textContent = name;
        listOfEpisodes.appendChild(episode);       
    });

    const buttonEl = document.createElement('input');
    buttonEl.type = 'button';
    buttonEl.value = 'Load Episodes'
    mainContainer.appendChild(buttonEl);
}

getEpisodesName()



// async function getEpisodeInfo() {
//     const episodeInfoContainer = document.createElement('div');

//     const episodes = await getEpisodes();

//     episodes.forEach(({ name, air_date, characteres }) => {

//         const episodeTitle = document.createElement('h2');
//         const episodeDate = document.createElement('p');
//         const characterImage = document.createElement('img');

//         episodeTitle.textContent = name;
//         episodeDate.textContent = air_date;
//         characterImage.src = characteres;

//         episodeInfoContainer.appendChild(episodeTitle);
//         episodeInfoContainer.appendChild(episodeDate);
//         episodeInfoContainer.appendChild(characterImage);
//     });

//     mainContainer.appendChild(episodeInfoContainer);
// }

// getEpisodeInfo()