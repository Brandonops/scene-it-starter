document.addEventListener("DOMContentLoaded", function() {
});


function renderMovies(movieArray) {
    const $movieHtmlArray = movieArray.map(function(currentMovie) {
        return`<div>
        <img src="${currentMovie.Poster}"></img>
        </div>`
    })
    return $movieHtmlArray.join("");
}

const $myForm = $("#search-form");
$myForm.on("submit", (e) => {
    e.preventDefault();
    const $moviesContainer = $(".movies-container");
    $moviesContainer.html(renderMovies(movieData));
})

