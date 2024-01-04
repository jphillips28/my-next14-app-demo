import MovieTable from "@/components/MovieTable";

export default async function Movies() {
	return (
		<main className="w-full">
			<article className="p-8">
				<h1 className="text-4xl font-medium mb-2">Movie Collection</h1>
				<p className="mb-4">TODO: This "thingy" demonstrates "what concepts"...?</p>
				<MovieTable />
			</article>
		</main>
	)
}