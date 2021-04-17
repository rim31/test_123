export interface IMovie {
  "adult": Boolean,
  "backdrop_path": String,
  "genre_ids": [
    Number,
    Number
  ],
  "id": Number,
  "original_language": String,
  "original_title": String,
  "overview": String,
  "popularity": any,
  "poster_path": String,
  "release_date": String,
  "title": String,
  "video": Boolean,
  "vote_average": any,
  "vote_count": Number
}
// https://api.themoviedb.org/3/movie/popular?api_key=8cfaa9c2cd892c338c650dbcf1149226
// result: [
//     {
//       "adult": false,
//       "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
//       "genre_ids": [
//           28,
//           878
//       ],
//       "id": 399566,
//       "original_language": "en",
//       "original_title": "Godzilla vs. Kong",
//       "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
//       "popularity": 5405.33,
//       "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
//       "release_date": "2021-03-24",
//       "title": "Godzilla vs. Kong",
//       "video": false,
//       "vote_average": 8.3,
//       "vote_count": 4497
//   },
// ]