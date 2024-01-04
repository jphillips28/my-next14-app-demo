import MovieForm from "@/components/MovieForm"

type RouteParams = {
	params: {
		id: string
	}
}

export default async function Movie({ params }: RouteParams) {
	return (
		<main className="w-full">
			<article className="p-8">
				<MovieForm id={params.id} />
			</article>
		</main>
	)
}