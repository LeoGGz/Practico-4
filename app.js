const apiKey = 'upD3Arqf5ysS51Mqe8c9MSsc0vGrZ3hO';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const gifContainer = document.getElementById('gifContainer');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        return;
    }

    gifContainer.innerHTML = '';

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=9`)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(gif => {
                const gifItem = document.createElement('img');
                gifItem.src = gif.images.fixed_height.url;
                gifItem.alt = gif.title;
                gifItem.className = 'gif-item';
                gifContainer.appendChild(gifItem);
            });
        })
        .catch(error => {
            console.error('Error searching for GIFs:', error);
        });
});