import Link from "next/link"
import { submitMovie, updateMovie } from "../actions"
import { getMovie } from "../fetchers"

export default async function Movie({ params }: { params: { id: string } }) {
	const id = params.id
	let title: string | undefined
	if (id !== "create") {
		({ title } = await getMovie(id))
	}

	return (
		<main className="w-full">
			<article className="p-8">
				<h1 className="text-4xl font-medium mb-3">{title ?? "Create Movie"}</h1>
				<section className="w-3/5">
					<form action={id !== "create" ? updateMovie : submitMovie}>
						<div className="flex items-center gap-x-1 mb-3">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								name="title"
								placeholder="Movie title"
								className="border border-black rounded-sm p-1 w-full"
								autoFocus
								required
							/>
						</div>
						<div className="flex items-center gap-x-1 justify-end">
							<Link href="/movies">
								<button
									type="button"
									className="bg-blue-500 text-white border border-blue-500 px-3 py-1.5 rounded hover:bg-blue-900 hover:border-transparent"
								>
									Cancel
								</button>
							</Link>
							<button
								type="submit"
								name="movieId"
								className="bg-green-700 text-white border border-green-700 px-3 py-1.5 rounded hover:bg-green-900 hover:border-transparent"
								value={id}
							>
								Submit
							</button>
						</div>
					</form>
				</section>
			</article>
		</main>
	)
}