import Movie from '../movie';

export default class MovieList{
    constructor(data){
        this.data = data;
    }

    drawToDOM(selector){
        this.clearList(selector);
        selector.appendChild(this.fragment);
    }

    renderMovies(){
        this.fragment = document.createDocumentFragment();
        this.data.results.forEach(film => {
            const article = document.createElement("article");
            const movie = new Movie(film);
            article.innerHTML = movie.generateHTML();
            this.fragment.appendChild(article);
        });
    }

    clearList(selector){
        selector.innerHTML = "";
    }
}