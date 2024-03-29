"use client"
import { MovieResponse } from "@/app/movies/fetchers"
import Link from "next/link"
import MovieDeleteModal from "./MovieDeleteModal"
import { useState } from "react"

type MovieRowsProps = {
	movies: MovieResponse[]
}

export default function MovieRows({ movies }: MovieRowsProps) {
	const emptyMovie: MovieResponse = { id: "" }
	const [deleteMovie, setDeleteMovie] = useState<MovieResponse>(emptyMovie)
	const [isDeleteShowing, setIsDeleteShowing] = useState(false)

	function handleDeleteShow(movie: MovieResponse) {
		setDeleteMovie(movie)
		setIsDeleteShowing(true)
	}

	return (
		<>
			{movies.map(movie => (
				<tr key={movie.id} className="odd:bg-gray-200 hover:bg-gray-300">
					<td className="text-left p-1">...{movie.id.substring(movie.id.length - 6, movie.id.length)}</td>
					<td className="text-left p-1">{movie.title}</td>
					<td className="text-left p-1 flex items-center gap-x-1">
						<Link href={`/movies/${movie.id}`}>
							<button
								type="button"
								className="bg-transparent text-blue-500 border border-blue-500 px-3 py-1.5 m-1 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
							>
								Update
							</button>
						</Link>
						<button
							type="button"
							className="bg-red-700 text-white border border-red-700 px-3 py-1.5 m-1 rounded hover:bg-red-900 hover:border-transparent"
							onClick={() => handleDeleteShow(movie)}
						>
							Delete
						</button>
					</td>
				</tr>
			))}
			<tr>
				<td>
					<MovieDeleteModal
						movie={deleteMovie}
						isVisible={isDeleteShowing}
						onClose={() => { setIsDeleteShowing(false); setDeleteMovie(emptyMovie) }}
					/>
				</td>
			</tr>
		</>
	)
}