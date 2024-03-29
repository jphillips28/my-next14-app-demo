"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createMovie, deleteMovie, putMovie } from "./fetchers"

export async function submitMovie(data: FormData) {
	const title = data.get("title")?.valueOf()
	if (typeof title !== "string" || title.trim().length < 1) {
		// TODO: Validation messages
		throw new Error("Invalid Movie Title")
	}

	await createMovie({ title })
	redirect("/movies")
}

export async function updateMovie(data: FormData) {
	const id = data.get("movieId")?.valueOf()
	if (typeof id !== "string" || id.trim().length < 1) {
		// TODO: Validation messages
		throw new Error("Invalid Movie Uuid")
	}

	const title = data.get("title")?.valueOf()
	if (typeof title !== "string" || title.trim().length < 1) {
		// TODO: Validation messages
		throw new Error("Invalid Movie Title")
	}

	await putMovie(id, { title })
	redirect("/movies")
}

export async function removeMovie(data: FormData) {
	const id = data.get("movieId")?.valueOf()
	if (typeof id !== "string" || id.trim().length < 1) {
		// TODO: Validation messages
		throw new Error("Invalid Movie Uuid")
	}

	await deleteMovie(id)
	revalidatePath("/movies")
}