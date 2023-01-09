import type { NextApiRequest, NextApiResponse } from "next";
import { getSearchMovies } from "./type";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("api search 호출 됨", request.method);
  if (request.method === "GET") {
    const { movieName } = request.query;
    console.log("movieName", request.query);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${movieName}`;
    console.log("url", url);
    const { results } = await (await fetch(url)).json();
    // console.log("result >>>", results);
    response.status(200).json(results);
  }
}
