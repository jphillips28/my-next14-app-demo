import { getMovie } from "@/app/api/movies/fetch"

export default async function Movie({ params }: { params: { id: string } }) {
	const { title } = await getMovie(params.id)

	return (
		<main className="w-full">
			<div className="p-8">
				<h1 className="text-4xl font-medium mb-2">{title}</h1>
			</div>
		</main>
	)
}