"use client"
import { removeMovie } from "@/app/movies/actions"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { ImSpinner9 } from "react-icons/im"

type MovieDeleteConfirmationProps = {
	id: string
	title: string | undefined
	isVisible: boolean
	onClose: () => void
}

export default function MovieDeleteConfirmation({ id, title, isVisible, onClose }: MovieDeleteConfirmationProps) {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	async function handleDelete(data: FormData) {
		startTransition(async () => {
			await removeMovie(data)
		})
		onClose()
		router.refresh() // TODO: This is not reloading the page data after an HTTP DELETE
	}

	return (
		<>
			{isVisible &&
				<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
					<div className="w-1/3 bg-white border border-gray-500 rounded-md">
						<div className="p-4 border-b border-gray-300">
							<h2 className="text-2xl font-medium">Delete Movie Confirmation</h2>
						</div>
						<div className="p-4 border-b border-gray-300">
							<p>Are you sure you want to delete '{title}' from your list?</p>
						</div>
						<div className="flex items-center gap-x-2 justify-end p-3">
							<button
								type="button"
								className="bg-blue-500 text-white border border-blue-500 px-3 py-1.5 rounded hover:bg-blue-900 hover:border-transparent"
								autoFocus
								onClick={() => onClose()}
							>
								Cancel
							</button>
							<form action={handleDelete}>
								<button
									type="submit"
									name="movieId"
									className={`flex items-center bg-green-700 text-white border border-green-700 px-3 py-1.5 rounded ${isPending && "opacity-50 cursor-not-allowed"} hover:bg-green-900 hover:border-transparent`}
									value={id}
									disabled={isPending}
									aria-disabled={isPending}
								>
									{isPending && <ImSpinner9 className="rounded-full mr-2 animate-[spin_1.5s_linear_infinite]" />}
									<span>
										{isPending ? "Deleting..." : "Delete"}
									</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			}
		</>
	)
}