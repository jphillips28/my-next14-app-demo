import Link from "next/link";
import { getMovies } from "../api/movies/fetch";

export default async function Movies() {
	const movies = await getMovies();

	return (
		<main className="w-full">
			<article className="p-8">
				<h1 className="text-4xl font-medium mb-2">Movie Collection</h1>
				<p className="mb-4">TODO: This "thingy" demonstrates "what concept"...</p>
				<table className="min-w-full border-b border-black mb-2">
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
									<button
										type="button"
										className="bg-transparent text-blue-500 border border-blue-500 px-3 py-1.5 m-1 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
									>
										Update
									</button>
									<button
										type="button"
										className="bg-red-700 text-white border border-red-700 px-3 py-1.5 m-1 rounded hover:bg-red-900 hover:border-transparent"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<Link href="/movies/create">
					<button
						type="button"
						className="bg-transparent text-green-700 border border-green-700 px-3 py-1.5 m-1 rounded hover:bg-green-700 hover:text-white hover:border-transparent"
					>
						Create
					</button>
				</Link>
			</article>
		</main>
	)
}