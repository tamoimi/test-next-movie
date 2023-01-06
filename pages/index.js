import { useQuery } from "react-query";
import styles from "../styles/Home.module.css";
import { getPeople } from "./api/movies";
import Image from "next/image";

export default function Home() {
  // react-query
  const { isLoading, data: people } = useQuery(["/api/movies"], getPeople);
  console.log("data", people);

  return (
    <>
      {isLoading ? (
        <>
          <h1>로딩중...</h1>
        </>
      ) : (
        <>
          <div key={people.id}>
            <img
              src="http://image.tmdb.org/t/p/w500/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
              alt="actor_img"
              width={420}
              height={600}
            />
            <h1>{people.name}</h1>
            <h1>{people.known_for_department}</h1>
            <p>{people.biography}</p>
          </div>
        </>
      )}
    </>
  );
}
