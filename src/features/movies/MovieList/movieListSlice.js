import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "loading",
    movies: [],
    genres: null,
    query: "",
    page: "1",
    totalResult: 0,
    totalPages: 0,
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movies = movies.results;
      state.totalPages = movies.totalPages;
      state.totalResult = movies.totalResult;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    fetchGenres: () => {},
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchGenresError: (state) => {
      state.genres = null;
    },
    isQuery: (state, { payload: query }) => {
      state.query = query;
      state.status = "loading";
    },
    setPage: (state, { payload: page }) => {
      state.page = page;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  isQuery,
  setPage,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectStatus = (state) => selectMovieListState(state).status;
export const selectMovies = (state) => selectMovieListState(state).movies;
export const selectGenres = (state) => selectMovieListState(state).genres;
export const selectIsGenres = (state) => selectMovieListState(state).isGenres;
export const selectPage = (state) => selectMovieListState(state).page;
export const selectQuery = (state) => selectMovieListState(state).query;
export const selectTotalResults = (state) =>
  selectMovieListState(state).totalResults;
export const selectTotalPages = (state) =>
  selectMovieListState(state).totalPages;

export default movieListSlice.reducer;
