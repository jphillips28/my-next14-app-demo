"use client"
import Link from "next/link";
import { removeMovie } from "./actions";
import { getMovies } from "./fetchers";

export default async function Movies() {
	const movies = await getMovies();

	return (
		<main className="w-full">
			<article className="p-8">
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
						{movies.map(movie => (
							<tr key={movie.id} className="odd:bg-gray-50 hover:bg-gray-100">
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
										<form action={removeMovie}>
											<button
												type="submit"
												name="movieId"
												className="bg-red-700 text-white border border-red-700 px-3 py-1.5 m-1 rounded hover:bg-red-900 hover:border-transparent"
												value={movie.id}
											>
												Delete
											</button>
										</form>
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
										className="bg-transparent text-green-700 border border-green-700 px-3 py-1.5 m-1 rounded hover:bg-green-700 hover:text-white hover:border-transparent"
									>
										Create
									</button>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</article>
		</main>
	)
}