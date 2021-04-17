export interface IMovie {
  "adult": Boolean,
  "backdrop_path": string,
  "genre_ids": [
    Number,
    Number
  ],
  "id": Number,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": any,
  "poster_path": string,
  "release_date": string,
  "title": string,
  "video": Boolean,
  "vote_average": any,
  "vote_count": Number
}

interface IGenre {
  "id": number,
  "name": string
}
interface ICompany {
  "id": number,
  "logo_path": any,
  "name": string,
  "origin_country": string
}
interface ICountry {
  "iso_3166_1": string,
  "name": string
}
interface ILanguages {
  "english_name": string,
  "iso_639_1": string,
  "name": string
}

export interface IFilm {
  "adult": Boolean,
  "backdrop_path": string,
  "belongs_to_collection": any,
  "budget": number,
  "genres": IGenre[],
  "homepage": string,
  "id": number,
  "imdb_id": string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": any,
  "poster_path": string,
  "production_companies": ICompany[],
  "production_countries": ICountry[],
  "release_date": "2019-09-17",
  "revenue": number,
  "runtime": number,
  "spoken_languages": ILanguages[],
  "status": string,
  "tagline": string,
  "title": string,
  "video": boolean,
  "vote_average": any,
  "vote_count": number
}