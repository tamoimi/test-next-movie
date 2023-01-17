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
        <div>
          <div
            className="bigBox"
            style={{
              width: "1200px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
          </div>

          <div className="photos">
            <img src="reebok.jpg" />
            <img src="nike.jfif" />
            <img src="nba.jpg" />
            <img src="adidas.jpg" />
          </div>

        </div>
      </div>
      <style jsx>{`
      .photos {
        display: flex;
        width: 900px;
      }
      .photos img {
        width: 20px;
        aspect-ratio: 3/1;
        object-fit: contain;
        mix-blend-mode: color-burn;
      }
        .item {
          width: 200px;
          height: 200px;
          background: white;
          transition: 0.3s;
        }
        .bigBox:hover > :not(:hover) {
          opacity: 0.4;
        }

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
          background: #3f4e4f;
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
          background: #dcd7c9;
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
