"use client"
import { submitMovie, updateMovie } from "@/app/movies/actions"
import { MovieResponse } from "@/app/movies/fetchers"
import Link from "next/link"
import { useState, useTransition } from "react"
import { ImSpinner9 } from "react-icons/im"

type MovieFormProps = {
	movie: MovieResponse
}

export default function MovieForm({ movie }: MovieFormProps) {
	const [title, setTitle] = useState<string | undefined>(movie.id !== "create" ? movie.title : undefined)
	const [isPending, startTransition] = useTransition()

	async function handleSubmit(data: FormData) {
		startTransition(async () => {
			if (movie.id !== "create") {
				await updateMovie(data)
			} else {
				await submitMovie(data)
			}
		})
	}

	return (
		<form action={handleSubmit}>
			<div className="flex items-center gap-x-1 mb-3">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					placeholder="Movie title"
					className={`border border-black p-1 w-full rounded-sm ${isPending && "cursor-not-allowed"}`}
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
					className={`flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 rounded ${isPending && "opacity-50 cursor-not-allowed"} hover:bg-green-900 hover:border-transparent`}
					value={movie.id}
					disabled={isPending}
					aria-disabled={isPending}
				>
					{isPending && <ImSpinner9 className="rounded-full mr-2 animate-[spin_1.5s_linear_infinite]" />}
					<span>
						{isPending ? "Submitting" : "Submit"}
					</span>
				</button>
			</div>
		</form>
	)
}