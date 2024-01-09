import MovieTable from "@/components/MovieTable";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Movies',
}

export default async function Movies() {
	return (
		<main className="w-full">
			<article className="p-8">
				<MovieTable />
			</article>
		</main>
	)
}