"use client"
import { submitMovie, updateMovie } from "@/app/movies/actions";
import { MovieResponse, getMovie } from "@/app/movies/fetchers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

type MovieFromProps = {
	id: string
}

export default function MovieForm({ id }: MovieFromProps) {
	const [movie, setMovie] = useState<MovieResponse>({ id, title: "Create Movie" })
	const [title, setTitle] = useState<string>()
	const [isLoading, setLoading] = useState(true)

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

	return (
		<>
			<h1 className="text-4xl font-medium mb-3">
				{isLoading ?
					<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
					: movie.title}
			</h1>
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
							value={title}
							onChange={e => setTitle(e.target.value)}
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
		</>
	)
}