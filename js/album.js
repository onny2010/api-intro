function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => desplayAlbums(data));
}
loadAlbums();

function desplayAlbums(albums) {
    console.log(albums);
    const albumContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumContainer.appendChild(p);
    }
}