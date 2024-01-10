import MovieCollection from "@/components/MovieCollection"
import MovieCollectionHeader from "@/components/MovieCollectionHeader"
import MovieCollectionLoading from "@/components/MovieCollectionLoading"
import MovieCreateRow from "@/components/MovieCreateRow"
import MovieTableHeader from "@/components/MovieTableHeader"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: 'Movies',
}

export const dynamic = "force-dynamic"

export default async function Movies() {
	return (
		<main className="w-full">
			<article className="p-8">
				<Suspense fallback={<MovieCollectionLoading />}>
					<MovieCollectionHeader />
					<table className="min-w-full">
						<MovieTableHeader />
						<tbody>
							<MovieCollection />
							<MovieCreateRow />
						</tbody>
					</table>
				</Suspense>
			</article>
		</main>
	)
}