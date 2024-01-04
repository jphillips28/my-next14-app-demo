import MovieTable from "@/components/MovieTable";

export default async function Movies() {
	return (
		<main className="w-full">
			<article className="p-8">
				<MovieTable />
			</article>
		</main>
	)
}