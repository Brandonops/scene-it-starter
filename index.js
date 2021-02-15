document.addEventListener("DOMContentLoaded", function () {
});


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
                        <a href="#" class="btn  ml-5 mr-5 mb-2" style="background-color: #e60073; color: white; width: 5em">Add</a>
                    </div>
                </div>
            </div>
        </div>`

    })
    return $movieHtmlArray.join("");
}

const $myForm = $("#search-form");
$myForm.on("submit", (e) => {
    e.preventDefault();
    
    
    const $moviesContainer = $(".movies-container");
    $moviesContainer.html(renderMovies(movieData));
    
    const $titleHeader = $("#title-header");
    $titleHeader.html("<h2 class='display-2' style='font-size: 100px; '>Scene It</h2>")

})

