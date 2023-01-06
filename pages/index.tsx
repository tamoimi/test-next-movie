import Image from "next/image";
import { TopRatedMovies } from "./api/movies/type";
import useSWR from "swr";
import "../styles/Home.module.css";

export default function Home() {
  // swr

  const { isLoading, data } = useSWR<TopRatedMovies>(`/api/movies`);
  console.log("data", data);
  return (
    <>
      <div className="container">
        {isLoading ? (
          <>
            <h1>로딩중...</h1>
          </>
        ) : (
          <>
            {data.results.map((data) => (
              <div key={data.id} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt="people"
                  className="people_img"
                />
                <h1>{data.title}</h1>
                <h4>{data.popularity}</h4>
                <p>{data.overview}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <style jsx>{`
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
