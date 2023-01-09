export default async function getSearchResults(request, response) {
  if (request.method === "GET") {
    const data = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`
      )
    ).json();

    response.status(200).json(data);
  }
}
