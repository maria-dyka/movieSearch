import MovieList from "../components/movieList";

import movieServies from "./movies-servies";

const input = document.querySelector(".search-input");
const movieList = document.querySelector(".movies");

input.addEventListener("input", e =>{
    const searchText = e.target.value;

    if(!searchText){
        movieList.innerHTML = "";
        return;
    }

    movieServies.getVideoByText(searchText)
        .then(result => {
            console.log(result);
            let list = new MovieList(result);
            list.renderMovies();
            list.drawToDOM(movieList);
        });
});