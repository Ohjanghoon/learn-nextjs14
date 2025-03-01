import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({params: {id}} : {params: {id: string}}) {
  
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

/** 만약 화살표 함수를 사용하고 싶다면
 * const [ComponentName] = async () => {}
 */