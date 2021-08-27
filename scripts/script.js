import { getEpisodes } from './api.js'

const mainContainer = document.getElementById('root');

function createHeader() {
    const headerContainer = document.createElement('div');
    const showTitle = document.createElement('img');

    showTitle.src = 'images/image4.png'
    headerContainer.classList.add('page-title')

    mainContainer.appendChild(headerContainer);
    headerContainer.appendChild(showTitle);
}

createHeader()

async function getEpisodesName() {
    const sideBarContainer = document.createElement('div');
    const listOfEpisodes = document.createElement('ul');

    sideBarContainer.appendChild(listOfEpisodes);
    mainContainer.appendChild(sideBarContainer);
    sideBarContainer.classList.add('side-bar')

    const episodes = await getEpisodes();

    episodes.forEach(({ name, characters }) => {
        const episode = document.createElement('li');
        episode.textContent = name;
        listOfEpisodes.appendChild(episode);
        
        // const characterImage = document.createElement('img');
        // characterImage.src = characters;
        // mainContainer.appendChild(characterImage);
    });

    const buttonEl = document.createElement('input');
    buttonEl.type = 'button';
    buttonEl.value = 'Load Episodes'
    sideBarContainer.appendChild(buttonEl);
}

getEpisodesName()

function getEpisodeInfo() {
    const episodeInfoContainer = document.createElement('div');

    mainContainer.appendChild(episodeInfoContainer);
    episodeInfoContainer.classList.add('episode-info');
}

getEpisodeInfo();




// async function getEpisodeInfo() {
//     const episodeInfoContainer = document.createElement('div');

//     const episodes = await getEpisodes();

//     episodes.forEach(({ name, air_date, characters }) => {

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