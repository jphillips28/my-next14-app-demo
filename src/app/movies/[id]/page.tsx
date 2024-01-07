import MovieForm from "@/components/MovieForm"

export default async function Movie() {
	return (
		<main className="w-full">
			<article className="p-8">
				<MovieForm />
			</article>
		</main>
	)
}