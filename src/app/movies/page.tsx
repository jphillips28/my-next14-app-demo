import { prisma } from "@/db"

export default async function Movies() {
	const movies = await prisma.movie.findMany()

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