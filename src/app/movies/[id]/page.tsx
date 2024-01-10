import MovieEditor from "@/components/MovieEditor"
import MovieEditorLoading from "@/components/MovieEditorLoading"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: 'Movie Editor',
}

export const dynamic = "force-dynamic"

export default async function Movie({ params }: { params: { id: string } }) {
	return (
		<main className="w-full">
			<article className="p-8">
				<Suspense fallback={<MovieEditorLoading />}>
					<MovieEditor id={params.id} />
				</Suspense>
			</article>
		</main>
	)
}