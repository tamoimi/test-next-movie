//request 타입
export interface TopRatedMoviesParams {
  api_key: string;
  language: string;
  page: number;
  region: string;
}

//response 타입
export interface TopRatedMovies {
  results: [
    {
      id: number;
      poster_path: string;
      title: string;
      release_date: string;
      overview: string;
    }
  ];
}
