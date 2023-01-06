import { TopRatedMovies, TopRatedMoviesParams } from "./type";

export default async function getMovies(request, response) {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=2`
    )
  ).json();

  response.status(200).json(data);
}
