export const getPeople = async () => {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/person/287?api_key=${process.env.API_KEY}&language=en-US`
    )
  ).json();
  console.log("result", data);
  return data;
};
