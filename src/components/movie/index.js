import config from "../../js/config"

export default class Movie {
    constructor(data) {
        this.data = data;
    }

    generateHTML() {
        const readyData = this.mapData();
        return `
            <div class="movie">
            <img class="poster" alt='${readyData.title}' src='${readyData.poster}'>
            <div class="container">
                <h2 class="col-md-12 movie-title">${readyData.title}</h2>
                <div class="container description">
                    <div class="row r1">
                        <div class="col-4 date">Released in ${readyData.date}</div>
                        <div class="col-4 country">Country: ${readyData.country}</div>
                        <div class="col-4 vote">Rating: ${readyData.vote}</div>
                    </div>
                    <div class="row r2">
                        <div class="col overview">Overview:<br/><br/>${readyData.description}</div>
                    </div>
                </div>
            </div>
            `;
    }

    mapData() {
        return {
            title: this.data.title || this.data.name || this.data.original_title || this.data.original_name,
            poster: this.getImg(),
            date: this.getYear(),
            country: this.getCountry(),
            vote: this.data.vote_average,
            description: this.data.overview,
            id: this.data.id,
            type: this.data.contentType
        };
    }

    getImg(){
        let url = this.data.poster_path || this.data.backdrop_path;
        if(url){
            return `${config.imgSRC + url}`;
        }
        else{
            return "img/poster.png";
        }
    }

    getYear() {
        const date = this.data.release_date || this.data.first_air_date;
        if (!date) {
            return 'perfect year'
        } else {
            return date.slice(0, 4);
        }
    }

    getCountry() {
        const countryCode = this.data.origin_country || this.data.original_language;
        let country;
        switch (countryCode) {
            case 'US':
                country = 'USA';
                break;
            case 'en':
                country = 'USA';
                break;
            case 'pt':
                country = 'Portugal';
                break;
            case 'it':
                country = 'Italy';
                break;
            case 'ru':
                country = 'Russia';
                break;
            case 'sk':
                country = 'Slovakia';
                break;
            case 'he':
                country = 'Israel';
                break;
            case 'pl':
                country = 'Poland';
                break;
            case 'hi':
                country = 'India';
                break;
            case 'fr':
                country = 'France';
                break;
            case 'ko':
                country = 'Korea';
                break;
            case 'ja':
                country = 'Japan';
                break;
            case 'es':
                country = 'Spain';
                break;
            case 'tr':
                country = 'Turkey';
                break;
            case 'id':
                country = 'Indonesia';
                break;
            case 'cn':
            case 'zh':
                country = 'China';
                break;
            default:
                country = 'US';
        }
        return country;
    }
}