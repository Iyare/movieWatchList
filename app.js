(() => {
    const moviesContainer = document.querySelector('#movies');
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const searchInput = document.querySelector("#query");
        const query = searchInput.value;
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4412444d&t=${query}`);
        const movie = await response.json();          
        searchInput.value = ``;
        moviesContainer.innerHTML = `
         <div class="movie">
                <img class="movie-poster" src=${movie.Poster} alt="${movie.Poster} poster graphics">
                <div>
                    <div id="movie-name">
                        <h2>${movie.Title}</h2>
                        <span id="rating"><img src="/img/rating-icon.svg" alt="star ratings">${movie.imdbRating}</span>
                    </div>
                    <div id="movie-info">
                        <span>${movie.Runtime}</span>
                        <span>${movie.Genre}</span>
                        <span id="watchlist-icon"><img src="/img/add-movie-icon.svg" alt="star"> Watchlist</span>
                    </div>
                    <div id="movie-plot">
                        <p>
                            ${movie.Plot}
                        </p>
                    </div>
                </div>
            </div>
            
            <hr>
            
            `;
        });

})();