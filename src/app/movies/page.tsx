import { prisma } from "@/db"

async function getMoviesAsync() {
	// Simulating a long running transaction
	await new Promise(resolve => setTimeout(resolve, 2000))

	return await prisma.movie.findMany();
}

export default async function Movies() {
	const movies = await getMoviesAsync();

	return (
		<>
			<header>
				<h1 className="text-2xl">Movies</h1>
			</header>
			<ul className="pl-4">
				{movies.map(movie => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</>
	)
}