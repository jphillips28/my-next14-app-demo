import MovieCreateRow from "@/components/MovieCreateRow"
import MovieRows from "@/components/MovieRows"
import MovieRowsLoading from "@/components/MovieRowsLoading"
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
				<h1 className="text-4xl font-medium mb-2">Movie Collection</h1>
				<p className="mb-4">This page hierarchy demonstrates the relationship between server-components, server-actions and client-components</p>
				<table className="min-w-full">
					<thead className="border-b border-black">
						<tr>
							<th className="text-left w-[10%] p-1">Id</th>
							<th className="text-left w-[45%] p-1">Title</th>
							<th className="text-left w-[45%] p-1">Actions</th>
						</tr>
					</thead>
					<tbody>
						<Suspense fallback={<MovieRowsLoading />}>
							<MovieRows />
							<MovieCreateRow />
						</Suspense>
					</tbody >
				</table >
			</article>
		</main>
	)
}