import Link from "next/link";

export default function MovieCreateRow() {
	return (
		<tr className="border-t border-black">
			<td />
			<td />
			<td className="text-left p-1">
				<Link href="/movies/create">
					<button
						type="button"
						className={`flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 m-1 rounded hover:bg-green-900 hover:border-transparent`}
					>
						Create
					</button>
				</Link>
			</td>
		</tr>
	)
}