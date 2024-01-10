import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
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
						<tr>
							<td className="text-left p-1">
								<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
							</td>
							<td className="text-left p-1">
								<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
							</td>
							<td className="text-left p-1">
								<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
							</td>
						</tr>
						<tr className="border-t border-black">
							<td />
							<td />
							<td className="text-left p-1">
								<button
									type="button"
									className="flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 m-1 rounded opacity-50 cursor-not-allowed hover:bg-green-900 hover:border-transparent"
								>
									<ImSpinner9 className="rounded-full mr-2 animate-[spin_1.5s_linear_infinite]" />
									<span>
										Loading
									</span>
								</button>
							</td>
						</tr>
					</tbody >
				</table >
			</article>
		</main>
	)
}