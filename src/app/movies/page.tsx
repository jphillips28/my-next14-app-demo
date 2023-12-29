import { prisma } from "@/db"

async function getMoviesAsync() {
	return await prisma.movie.findMany();
}

export default async function Movies() {
	const movies = await getMoviesAsync();

	return (
		<main>
			<h1 className="text-2xl">Movies</h1>
			<ul className="pl-4">
				{movies.map(movie => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</main>
	)
}