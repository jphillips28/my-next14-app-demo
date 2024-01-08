"use client"
import { submitMovie, updateMovie } from "@/app/movies/actions";
import { MovieResponse, getMovie } from "@/app/movies/fetchers";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { ImSpinner9 } from "react-icons/im";

export default function MovieForm() {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<MovieResponse>({ id, title: "Create Movie" })
	const [title, setTitle] = useState<string | undefined>("")
	const [isLoading, setLoading] = useState(true)
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		if (id !== "create") {
			getMovie(id)
				.then(data => {
					setMovie(data)
					setTitle(data.title)
					setLoading(false)
				})
		} else {
			setLoading(false)
		}
	}, [])

	async function handleSubmit(data: FormData) {
		startTransition(async () => {
			if (id !== "create") {
				await updateMovie(data)
			} else {
				await submitMovie(data)
			}
		})
	}

	return (
		<>
			<h1 className="text-4xl font-medium mb-3">
				{isLoading ?
					<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
					: movie.title}
			</h1>
			<section className="w-3/5">
				<form action={handleSubmit}>
					<div className="flex items-center gap-x-1 mb-3">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							name="title"
							placeholder="Movie title"
							className={`border border-black p-1 w-full rounded-sm ${(isLoading || isPending) && "cursor-not-allowed"}`}
							autoFocus
							required
							value={title}
							onChange={e => setTitle(e.target.value)}
							disabled={isPending}
							aria-disabled={isPending}
						/>
					</div>
					<div className="flex items-center gap-x-2 justify-end">
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
							className={`flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 rounded ${(isLoading || isPending) && "opacity-50 cursor-not-allowed"} hover:bg-green-900 hover:border-transparent`}
							value={id}
							disabled={(isLoading || isPending)}
							aria-disabled={(isLoading || isPending)}
						>
							{(isLoading || isPending) && <ImSpinner9 className="rounded-full mr-2 animate-[spin_1.5s_linear_infinite]" />}
							<span>
								{isLoading ? "Loading..." : isPending ? "Submitting..." : "Submit"}
							</span>
						</button>
					</div>
				</form>
			</section>
		</>
	)
}