import { getMovie } from "@/app/movies/fetchers";
import MovieForm from "./MovieForm";

type MovieEditorProps = {
	id: string
}

export default async function MovieEditor({ id }: MovieEditorProps) {
	const movie = id !== "create" ? await getMovie(id) : { id, title: "Create Movie" }

	return (
		<>
			<h1 className="text-4xl font-medium mb-3">
				{movie.title}
			</h1>
			<section className="w-3/5">
				<MovieForm movie={movie} />
			</section>
		</>
	)
}