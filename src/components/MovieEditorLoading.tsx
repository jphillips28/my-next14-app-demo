import Link from "next/link";
import { ImSpinner9 } from "react-icons/im";

export default function MovieEditorLoading() {
	return (
		<>
			<h1 className="text-4xl font-medium mb-3">
				<ImSpinner9 className="text-2xl text-blue-500 m-4 rounded-full animate-[spin_1.5s_linear_infinite]" />
			</h1>
			<section className="w-3/5">
				<div className="flex items-center gap-x-1 mb-3">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Movie title"
						className="border border-black p-1 w-full rounded-sm cursor-not-allowed"
						autoFocus
						required
						disabled={true}
						aria-disabled={true}
					/>
				</div>
				<div className="flex items-center gap-x-2 justify-end">
					<Link href="/movies">
						<button
							type="button"
							className="bg-blue-500 text-white border border-blue-500 px-3 py-1.5 rounded hover:bg-blue-900 hover:border-transparent"
						>
							Cancel
						</button>
					</Link>
					<button
						type="submit"
						name="movieId"
						className="flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 rounded opacity-50 cursor-not-allowed hover:bg-green-900 hover:border-transparent"
						disabled={true}
						aria-disabled={true}
					>
						<ImSpinner9 className="rounded-full mr-2 animate-[spin_1.5s_linear_infinite]" />
						<span>
							Loading
						</span>
					</button>
				</div>
			</section>
		</>
	)
}