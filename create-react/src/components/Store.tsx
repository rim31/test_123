// eslint-disable-next-line
import * as React from 'react';
import { createContainer } from "unstated-next";
// import moment from 'moment';
// import _ from 'lodash';
// https://developers.themoviedb.org/3/movies/get-movie-details
import { IMovie } from '../utils';


export const useStore = () => {
  const [movies, setMovies] = React.useState<IMovie[]>([])
  const [loading, setLoading] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>("");
  const debug: boolean = true;

  // GETTER : function get all movies from the server
  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=8cfaa9c2cd892c338c650dbcf1149226");
      const json = await response.json();
      setMovies(json.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  // // GETTER : function get all answers from the server
  // const getAvailability = async (ref: string) => {
  //   try {
  //     const response = await fetch(`https://bad-api-assignment.reaktor.com/availability/${ref}`);
  //     const json = await response.json();
  //     setAvailability(json.response);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  React.useEffect(() => {
    getMovies();
  }, [])

  React.useEffect(() => {
    setLoading(false);
  }, [movies])

  // Load data at beginning
  const start = () => {
    getMovies();
  }

  return {
    debug,
    search,
    loading,
    movies,
    setSearch,
    getMovies,
    setLoading,
    start,
  };
}
export const StoreContainer = createContainer(useStore)