/* eslint-disable react-hooks/rules-of-hooks */
import { TopRatedMovies } from "./api/movies/type";
import useSWR from "swr";
import "../styles/Home.module.css";
import { useState } from "react";
import { getSearchMovies } from "./api/search/type";

export default function Home() {
  //states
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  console.log("movieName", movieName);

  // swr
  const { isLoading, data } = useSWR<TopRatedMovies>(`/api/movies`);
  const { data: results } = useSWR<getSearchMovies>(`api/search`);

  const getSearchedMovies = () => {
    setMovies([results]);
    console.log("결과", setMovies);
  };

  return (
    <>
      <div className="container">
        {isLoading ? (
          <>
            <h1>로딩중...</h1>
          </>
        ) : (
          <>
            <div>
              <input
                type="search"
                placeholder="Search"
                onChange={(e) => setMovieName(e.target.value)}
              />
              <button onClick={getSearchedMovies}>search</button>
            </div>
            {/* {data.results.map((data) => (
              <div key={data.id} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt="people"
                  width={500}
                  height={600}
                />
                <h1>{data.title}</h1>
                <h4>{data.popularity}</h4>
                <p>{data.overview}</p>
              </div>
            ))} */}
            {movies.map((movie) => (
              <ul key={movie.id}>
                <li>{movie.title}</li>
              </ul>
            ))}
          </>
        )}
      </div>
      <style>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 100px;
          gap: 60px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
      `}</style>
    </>
  );
}
