import MovieForm from "@/components/MovieForm"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Movie Editor',
}

export default async function Movie() {
	return (
		<main className="w-full">
			<article className="p-8">
				<MovieForm />
			</article>
		</main>
	)
}