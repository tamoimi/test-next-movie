import { TopRatedMovies } from "./api/movies/type";
import useSWR from "swr";

const DetailPage = () => {
  // swr
  const { isLoading, data } = useSWR<TopRatedMovies>(`/api/movies`);
  return (
    <>
      <div className="container">
        {isLoading ? (
          <>
            <div className="loader"></div>
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
                  <h2>{data.title}</h2>
                <h4>{data.release_date}</h4>
                <p>
                  {data.overview.length > 230
                    ? `${data.overview.slice(0, 235)}...`
                    : data.overview}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      <style jsx>{`
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
          transition: all 0.5s;
        }
        .movie img:hover {
          opacity: 0.5;
        }
        h2,
        h4,
        p {
          color: #dcd7c9;
        }
        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-block;
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
          -webkit-animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        @-webkit-keyframes spin {
          to {
            -webkit-transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};
export default DetailPage;
