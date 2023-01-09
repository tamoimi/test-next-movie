import { TopRatedMovies } from "./api/movies/type";
import useSWR from "swr";

const TopRated = () => {
  // swr
  const { isLoading, data } = useSWR<TopRatedMovies>(`/api/movies`);
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
                  width={500}
                  height={600}
                />
                <h1>{data.title}</h1>
                <h4>{data.popularity}</h4>
                <p>{data.overview}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <style>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 60px 0;
          gap: 60px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        h1, h4, p {
          color: #DCD7C9;
        }
      `}</style>
    </>
  );
};
export default TopRated;
