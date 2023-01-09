//request 타입
export interface getSearchMoviesParams {
  api_key: string;
  language: string;
  query: string;
  page: number;
}

//response 타입
export interface getSearchMovies {
  results: [
    {
      id: number;
      poster_path: string;
      original_title: string;
    }
  ];
}
