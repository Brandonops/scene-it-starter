document.addEventListener("DOMContentLoaded", function () {
});


function saveToWatchList(imdbID) {
        const movie = movieData.find((currentMovie) => {
            return currentMovie.imdbID == imdbID;
        })
        let data = localStorage.getItem("watchList");
        let watchList = JSON.parse(data)

        if (watchList === null) {
            watchList = [];
        }
        watchList.push(movie);
        watchListJSON = JSON.stringify(watchList);
        localStorage.setItem("watchList", watchListJSON);
}

//     const movie = movieData.find(function(currentMovie) {
//         return currentMovie.imdbID == imdbID;
//     });

//     let watchlist = JSON.parse(watchListJSON);

//     if (watchlist === null) {
//         watchlist = [];
//     }
//     watchlist.push(movie);
// }

function renderMovies(movieArray) {
    const $movieHtmlArray = movieArray.map(function (currentMovie) {
        return `
        <div class="movies-container row d-flex justify-content-around d-flex flex-wrap" id="movies-container">
            <div class="movie">
                <div class="card" style="width: 18rem; height: auto;">
                    <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
                    <div class="card-body d-flex row justify-content-around">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <h5 class="card-title ">${currentMovie.Year}</h5>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#" onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn  ml-5 mr-5 mb-2" style="background-color: #4b0d2c; color: white; width: 5em;">Add</a>
                    </div>
                </div>
            </div>
    </div>`

    })
    return $movieHtmlArray.join("");
};

const $myForm = $("#search-form");
$myForm.on("submit", (e) => {
    
    const searchString = document.querySelector(".search-bar").value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    const $moviesContainer = $(".movies-container");
    e.preventDefault();
    console.log(searchString);
    console.log(urlEncodedSearchString);

    axios.get(`http://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`
    ).then((response) => {
        var movieHTML = renderMovies(response.data.Search);
        $moviesContainer.html(movieHTML);
        movieData = response.data.Search
    })


    const $titleHeader = $("#title-header");
    $titleHeader.html("<h2 class='display-2' style='font-size: 100px; '>Scene It</h2>")

});

