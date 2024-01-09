"use client"
import { MovieResponse, getMovies } from "@/app/movies/fetchers"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ImSpinner9 } from "react-icons/im";
import MovieDeleteModal from "./MovieDeleteModal";

export default function MovieTable() {
	const emptyMovie: MovieResponse = { id: "" }
	const [movies, setMovies] = useState<MovieResponse[]>([])
	const [isLoading, setLoading] = useState(true)
	const [deleteMovie, setDeleteMovie] = useState<MovieResponse>(emptyMovie)
	const [isDeleteShowing, setDeleteShowing] = useState(false)

	useEffect(() => {
		getMovies()
			.then(data => {
				setMovies(data)
				setLoading(false)
			})
	}, [])

	function handleDeleteShow(movie: MovieResponse) {
		setDeleteMovie(movie)
		setDeleteShowing(true)
	}

	return (
		<>
			<h1 className="text-4xl font-medium mb-2">Movie Collection</h1>
			<p className="mb-4">TODO: This "thingy" demonstrates "what concepts"...?</p>
			<table className="min-w-full">
				<thead className="border-b border-black">
					<tr>
						<th className="text-left w-[10%] p-1">Id</th>
						<th className="text-left w-[45%] p-1">Title</th>
						<th className="text-left w-[45%] p-1">Actions</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ?
						<tr>
							<td className="text-left p-1">
								<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
							</td>
							<td className="text-left p-1">
								<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
							</td>
							<td className="text-left p-1">
								<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
							</td>
						</tr>
						:
						movies.map(movie => (
							<tr key={movie.id} className="odd:bg-gray-200 hover:bg-gray-300">
								<td className="text-left p-1">...{movie.id.substring(movie.id.length - 6, movie.id.length)}</td>
								<td className="text-left p-1">{movie.title}</td>
								<td className="text-left p-1">
									<div className="flex items-center gap-x-1">
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
									</div>
								</td>
							</tr>
						))}
					<tr className="border-t border-black">
						<td />
						<td />
						<td className="text-left p-1">
							<Link href="/movies/create">
								<button
									type="button"
									className={`flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 m-1 rounded ${isLoading && "opacity-50 cursor-not-allowed"} hover:bg-green-900 hover:border-transparent`}
								>
									{isLoading && <ImSpinner9 className="rounded-full mr-2 animate-[spin_1.5s_linear_infinite]" />}
									<span>
										{isLoading ? "Loading..." : "Create"}
									</span>
								</button>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
			<MovieDeleteModal
				movie={deleteMovie}
				isVisible={isDeleteShowing}
				onClose={() => { setDeleteMovie(emptyMovie); setDeleteShowing(false) }}
			/>
		</>
	)
}