/* eslint-disable react-hooks/rules-of-hooks */
import { TopRatedMovies } from "./api/movies/type";
import useSWR from "swr";
import "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  //states
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  console.log("movieName", movieName);

  // swr
  const { mutate } = useSWR(
    movieName !== "" ? `/api/search?movieName=${movieName}` : null,
    {
      onSuccess: (data) => {
        setMovies(data);
      },
    }
  );
  const getSearchedMovies = () => {
    mutate();
  };

  return (
    <>
      <div className="searchBox">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={getSearchedMovies}>search</button>
      </div>
      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id} className="resultsBox">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
      <style>{`
        .container {
          margin: 50px 0;
          gap: 60px;
          border-radius: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        .container img {
          width: 100%;
        }
        .searchBox {
          padding: 50px;
          background: #3F4E4F;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          gap: 5px;
        }
        .resultsBox img {
          border-radius: 12px;
        }
        input {
          width: 90%;
          height: 60px;
          border: none;
          border-radius: 4px;
          font-size: 20px;
          padding: 0 20px;
        }
        button {
          background: #DCD7C9;
          border: none;
          border-radius: 4px;
          font-size: 20px;
        }
        p {
          text-align: center;
          font-size: 20px;
          color: white;
        }
      `}</style>
    </>
  );
}
