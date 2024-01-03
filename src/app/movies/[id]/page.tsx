import { createMovie, getMovie } from "@/app/api/movies/fetch"
import Link from "next/link"
import { redirect } from "next/navigation"

async function submitMovie(data: FormData) {
	"use server"

	const title = data.get("title")?.valueOf()
	if (typeof title !== "string" || title.length === 0) {
		// TODO: Validation messages
		throw new Error("Invalid Title")
	}

	await createMovie({ title })
	redirect("/movies")
}

export default async function Movie({ params }: { params: { id: string } }) {
	let title: string | undefined
	if (params.id !== "create") {
		({ title } = await getMovie(params.id))
	}

	return (
		<main className="w-3/5">
			<article className="p-8">
				<h1 className="text-4xl font-medium mb-3">{title ?? "Create Movie"}</h1>
				<form action={submitMovie}>
					<div className="flex items-center gap-x-1 mb-3">
						<label>Title</label>
						<input
							type="text"
							name="title"
							placeholder="Movie title"
							className="border border-black rounded-sm p-1 w-full"
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
							className="bg-green-700 text-white border border-green-700 px-3 py-1.5 rounded hover:bg-green-900 hover:border-transparent"
						>
							Submit
						</button>
					</div>
				</form>
			</article>
		</main>
	)
}