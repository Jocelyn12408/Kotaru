// Array

const allFavourites =[
    {src: "Image/I Stole The Number One Ranker's Soul.jpg", alt: "I Stole The Number One Ranker's Soul"},
    {src: "Image/Pick Me Up.jpg", alt:"Pick Me Up"},
    {src: "Image/sololeveling.jpg", alt:"Solo Leveling"},
    {src: "Image/Reincarnation of the Suicidal Battle God.jpg", alt:"Reincarnation of the Suicidal Battle God"},
    {src: "Image/The Devlishly Trash Duke.jpg", alt:"The Devilishly Trash Duke"},
    {src: "Image/The Possesive Tyrant and His Sleepy Cat.jpg", alt:"The Possesive Tyrant and His Sleepy Cat"},
    {src: "Image/The Princess's Jewels.jpg", alt:"The Princess's Jewels"},
    {src: "Image/The Reason Why Raeliana Ended Up at the Duke's Mansion.jpg", alt:"The Reason Why Raeliana Ended Up at the Duke's Mansion"},
    {src: "Image/Turning the Mad Dog into a Genteel Lord.jpg", alt:"Turning the Mad Dog into a Genteel Lord"}
]

const Action =[
    {src: "Image/I Stole The Number One Ranker's Soul.jpg", alt: "I Stole The Number One Ranker's Soul"},
    {src: "Image/Pick Me Up.jpg", alt:"Pick Me Up"},
    {src: "Image/sololeveling.jpg", alt:"Solo Leveling"},
    {src: "Image/Reincarnation of the Suicidal Battle God.jpg", alt:"Reincarnation of the Suicidal Battle God"}
]

const Romance =[
    {src: "Image/The Devlishly Trash Duke.jpg", alt:"The Devilishly Trash Duke"},
    {src: "Image/The Possesive Tyrant and His Sleepy Cat.jpg", alt:"The Possesive Tyrant and His Sleepy Cat"},
    {src: "Image/The Princess's Jewels.jpg", alt:"The Princess's Jewels"},
    {src: "Image/The Reason Why Raeliana Ended Up at the Duke's Mansion.jpg", alt:"The Reason Why Raeliana Ended Up at the Duke's Mansion"},
    {src: "Image/Turning the Mad Dog into a Genteel Lord.jpg", alt:"Turning the Mad Dog into a Genteel Lord"}
]

const readLater =[
    {src: "Image/The Possesive Tyrant and His Sleepy Cat.jpg", alt:"The Possesive Tyrant and His Sleepy Cat"},
    {src: "Image/The Princess's Jewels.jpg", alt:"The Princess's Jewels"}
]

function displayManga(mangaList) {
    const gridContainer = document.getElementById('mangaGrid')
    gridContainer.innerHTML = ''
    mangaList.forEach(manga => {
        const mangaDiv = document.createElement('div')
        mangaDiv.className = 'manga';
        mangaDiv.innerHTML = `<img src="${manga.src}" alt="${manga.alt}" class="manga-image">`
        gridContainer.appendChild(mangaDiv);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab');
    displayManga(allFavourites)

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('on'));

            this.classList.add('on');
            
            tabName - this.dataset.tab
            switch(tabName) {
                case 'all':
                    displayManga(allFavourites)
                    break
                case 'Action':
                    displayManga(Action)
                    break
                case 'Romance':
                    displayManga(Romance)
                    break
                case 'readLater':
                    displayManga(readLater)
                    break
            }

            console.log('Clicked tab:', this.textContent.trim());
        });
    });
});