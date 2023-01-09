//request 타입
export interface getSearchMoviesParams {
  query: string;
  page: number;
}

//response 타입
export interface getSearchMovies {
  id: number;
  poster_path: string;
  original_title: string;
}
