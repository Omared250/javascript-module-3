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

    episodes.map(({ name, url }) => {
        const episode = document.createElement('li');
        const episodeLink = document.createElement('a');
        episode.appendChild(episodeLink);
        episodeLink.textContent = name;
        episodeLink.href = url;
        listOfEpisodes.appendChild(episode);
    });

    const buttonEl = document.createElement('input');
    buttonEl.type = 'button';
    buttonEl.value = 'Load Episodes'
    buttonEl.classList.add('button')
    sideBarContainer.appendChild(buttonEl);
}

getEpisodesName()

async function getEpisodeInfo() {
    const episodeInfoContainer = document.createElement('div');

    mainContainer.appendChild(episodeInfoContainer);
    episodeInfoContainer.classList.add('episode-info');

    const episodes = await getEpisodes();

    episodes.map(({ name, air_date, characters }) => {
        const episodeName = document.createElement('h2');
        episodeInfoContainer.appendChild(episodeName);
        const episodeDate = document.createElement('p');
        episodeInfoContainer.appendChild(episodeDate);
        const characterContainerInfo = document.createElement('div')
        episodeInfoContainer.appendChild(characterContainerInfo);

        episodeName.textContent = name;
        episodeDate.textContent = air_date;

        const charactersInfo = characters;

        charactersInfo.forEach((character) => {
            const characterImage = document.createElement('img');
            characterImage.src = character;
            characterContainerInfo.appendChild(characterImage);
            // return characterImage;
        })
    })
}

getEpisodeInfo();