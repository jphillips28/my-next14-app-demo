import { getMovies } from "@/app/movies/fetchers";
import MovieRows from "./MovieRows";

export default async function MovieCollection() {
	const movies = await getMovies()

	return <MovieRows movies={movies} />
}